const fs = require('fs');
const path = require('path');
const https = require('https');

const RETRY_INTEGRATIONS = [
    { name: 'TCS BaNCS', domain: 'tcs.com', filename: 'tcs-bancs.png' },
    { name: 'Fiserv', domain: 'fiserv.com', filename: 'fiserv.png' },
    { name: 'Ivanti', domain: 'ivanti.com', filename: 'ivanti.png' },
    { name: 'Cerner', domain: 'oracle.com', filename: 'cerner.png' }, // Redirected to Oracle
    { name: 'CureMD', domain: 'curemd.com', filename: 'curemd.png' },
    { name: 'BlueJeans', domain: 'bluejeans.com', filename: 'bluejeans.png' },
    { name: 'OpenCart', domain: 'opencart.com', filename: 'opencart.png' }
];

const DOWNLOAD_DIR = path.join(__dirname, '..', 'public', 'integrations');

function downloadLogo(url, filepath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(); // close() is async, call resolve after close completes.
                file.on('close', resolve);
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            reject(err);
        });
    });
}

async function main() {
    console.log(`Retrying download for ${RETRY_INTEGRATIONS.length} logos...`);

    for (const integration of RETRY_INTEGRATIONS) {
        const filepath = path.join(DOWNLOAD_DIR, integration.filename);

        // Strategy 1: Google Favicon
        const googleUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${integration.domain}&size=128`;

        try {
            console.log(`Trying Google for: ${integration.name}...`);
            await downloadLogo(googleUrl, filepath);

            // Check if file is essentially empty (Google sometimes returns empty 0-byte or 1x1 pixel)
            const stats = fs.statSync(filepath);
            if (stats.size < 100) {
                throw new Error("File too small");
            }
            console.log(`[OK] ${integration.name} (Google)`);
            continue;
        } catch (err) {
            console.log(`[FAIL] Google failed for ${integration.name}: ${err.message}. Trying Fallback...`);
        }

        // Strategy 2: Icon Horse
        const horseUrl = `https://icon.horse/icon/${integration.domain}`;
        try {
            await downloadLogo(horseUrl, filepath);
            const stats = fs.statSync(filepath);
            if (stats.size < 100) {
                throw new Error("File too small");
            }
            console.log(`[OK] ${integration.name} (Icon Horse)`);
        } catch (err) {
            console.error(`[FAIL] All methods failed for ${integration.name}: ${err.message}`);
        }
    }
}

main();
