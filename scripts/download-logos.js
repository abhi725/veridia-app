const fs = require('fs');
const path = require('path');
const https = require('https');

const INTEGRATIONS = [
    // CRM & Sales
    { name: 'Salesforce', domain: 'salesforce.com', filename: 'salesforce.png' },
    { name: 'HubSpot', domain: 'hubspot.com', filename: 'hubspot.png' },
    { name: 'Zoho CRM', domain: 'zoho.com', filename: 'zoho.png' },
    { name: 'Microsoft Dynamics 365', domain: 'dynamics.microsoft.com', filename: 'dynamics-365.png' },
    { name: 'Pipedrive', domain: 'pipedrive.com', filename: 'pipedrive.png' },
    { name: 'Freshsales', domain: 'freshworks.com', filename: 'freshsales.png' },
    { name: 'SugarCRM', domain: 'sugarcrm.com', filename: 'sugarcrm.png' },
    { name: 'Insightly', domain: 'insightly.com', filename: 'insightly.png' },
    { name: 'Nimble', domain: 'nimble.com', filename: 'nimble.png' },
    { name: 'Copper', domain: 'copper.com', filename: 'copper.png' },

    // Core Banking
    { name: 'Infosys Finacle', domain: 'edgeverve.com', filename: 'infosys-finacle.png' },
    { name: 'Temenos', domain: 'temenos.com', filename: 'temenos.png' },
    { name: 'Oracle FLEXCUBE', domain: 'oracle.com', filename: 'oracle-flexcube.png' },
    { name: 'TCS BaNCS', domain: 'tcs.com', filename: 'tcs-bancs.png' },
    { name: 'FIS', domain: 'fisglobal.com', filename: 'fis.png' },
    { name: 'Fiserv', domain: 'fiserv.com', filename: 'fiserv.png' },
    { name: 'Jack Henry', domain: 'jackhenry.com', filename: 'jack-henry.png' },
    { name: 'Mambu', domain: 'mambu.com', filename: 'mambu.png' },
    { name: 'Thought Machine', domain: 'thoughtmachine.net', filename: 'thought-machine.png' },

    // ITSM & Helpdesk
    { name: 'ServiceNow', domain: 'servicenow.com', filename: 'servicenow.png' },
    { name: 'Jira Service Desk', domain: 'atlassian.com', filename: 'jira-service-desk.png' },
    { name: 'Zendesk', domain: 'zendesk.com', filename: 'zendesk.png' },
    { name: 'Freshdesk', domain: 'freshworks.com', filename: 'freshdesk.png' },
    { name: 'Zoho Desk', domain: 'zoho.com', filename: 'zoho-desk.png' },
    { name: 'ManageEngine', domain: 'manageengine.com', filename: 'manageengine.png' },
    { name: 'BMC Helix', domain: 'bmc.com', filename: 'bmc-helix.png' },
    { name: 'Ivanti', domain: 'ivanti.com', filename: 'ivanti.png' },
    { name: 'ConnectWise', domain: 'connectwise.com', filename: 'connectwise.png' },
    { name: 'SysAid', domain: 'sysaid.com', filename: 'sysaid.png' },

    // HR & Payroll
    { name: 'Workday', domain: 'workday.com', filename: 'workday.png' },
    { name: 'SAP SuccessFactors', domain: 'sap.com', filename: 'sap-successfactors.png' },
    { name: 'BambooHR', domain: 'bamboohr.com', filename: 'bamboohr.png' },
    { name: 'ADP', domain: 'adp.com', filename: 'adp.png' },
    { name: 'Namely', domain: 'namely.com', filename: 'namely.png' },
    { name: 'Gusto', domain: 'gusto.com', filename: 'gusto.png' },
    { name: 'Zenefits', domain: 'zenefits.com', filename: 'zenefits.png' },
    { name: 'Oracle HCM', domain: 'oracle.com', filename: 'oracle-hcm.png' },
    { name: 'UltiPro', domain: 'ukg.com', filename: 'ultipro.png' },
    { name: 'Paylocity', domain: 'paylocity.com', filename: 'paylocity.png' },

    // E-Commerce
    { name: 'Shopify', domain: 'shopify.com', filename: 'shopify.png' },
    { name: 'WooCommerce', domain: 'woocommerce.com', filename: 'woocommerce.png' },
    { name: 'Magento', domain: 'magento.com', filename: 'magento.png' },
    { name: 'BigCommerce', domain: 'bigcommerce.com', filename: 'bigcommerce.png' },
    { name: 'Wix', domain: 'wix.com', filename: 'wix.png' },
    { name: 'PrestaShop', domain: 'prestashop.com', filename: 'prestashop.png' },
    { name: 'OpenCart', domain: 'opencart.com', filename: 'opencart.png' },
    { name: 'Volusion', domain: 'volusion.com', filename: 'volusion.png' },
    { name: 'Squarespace', domain: 'squarespace.com', filename: 'squarespace.png' },
    { name: '3dcart', domain: 'shift4shop.com', filename: '3dcart.png' },

    // Communication
    { name: 'WhatsApp', domain: 'whatsapp.com', filename: 'whatsapp.png' },
    { name: 'Slack', domain: 'slack.com', filename: 'slack.png' },
    { name: 'Microsoft Teams', domain: 'teams.microsoft.com', filename: 'microsoft-teams.png' },
    { name: 'Discord', domain: 'discord.com', filename: 'discord.png' },
    { name: 'Telegram', domain: 'telegram.org', filename: 'telegram.png' },
    { name: 'Messenger', domain: 'messenger.com', filename: 'messenger.png' },
    { name: 'Instagram', domain: 'instagram.com', filename: 'instagram.png' },
    { name: 'Twitter', domain: 'twitter.com', filename: 'twitter.png' },
    { name: 'LINE', domain: 'line.me', filename: 'line.png' },
    { name: 'WeChat', domain: 'wechat.com', filename: 'wechat.png' },

    // Payment Gateways
    { name: 'Stripe', domain: 'stripe.com', filename: 'stripe.png' },
    { name: 'Razorpay', domain: 'razorpay.com', filename: 'razorpay.png' },
    { name: 'PayPal', domain: 'paypal.com', filename: 'paypal.png' },
    { name: 'Square', domain: 'squareup.com', filename: 'square.png' },
    { name: 'Paytm', domain: 'paytm.com', filename: 'paytm.png' },
    { name: 'PhonePe', domain: 'phonepe.com', filename: 'phonepe.png' },
    { name: 'Google Pay', domain: 'pay.google.com', filename: 'google-pay.png' },
    { name: 'CCAvenue', domain: 'ccavenue.com', filename: 'ccavenue.png' },
    { name: 'Instamojo', domain: 'instamojo.com', filename: 'instamojo.png' },
    { name: 'PayU', domain: 'payu.in', filename: 'payu.png' },

    // Marketing Automation
    { name: 'Mailchimp', domain: 'mailchimp.com', filename: 'mailchimp.png' },
    { name: 'Marketo', domain: 'marketo.com', filename: 'marketo.png' },
    { name: 'Pardot', domain: 'pardot.com', filename: 'pardot.png' },
    { name: 'ActiveCampaign', domain: 'activecampaign.com', filename: 'activecampaign.png' },
    { name: 'Constant Contact', domain: 'constantcontact.com', filename: 'constant-contact.png' },
    { name: 'SendGrid', domain: 'sendgrid.com', filename: 'sendgrid.png' },
    { name: 'Campaign Monitor', domain: 'campaignmonitor.com', filename: 'campaign-monitor.png' },
    { name: 'GetResponse', domain: 'getresponse.com', filename: 'getresponse.png' },
    { name: 'Drip', domain: 'drip.com', filename: 'drip.png' },
    { name: 'ConvertKit', domain: 'convertkit.com', filename: 'convertkit.png' },

    // Analytics
    { name: 'Google Analytics', domain: 'analytics.google.com', filename: 'google-analytics.png' },
    { name: 'Mixpanel', domain: 'mixpanel.com', filename: 'mixpanel.png' },
    { name: 'Amplitude', domain: 'amplitude.com', filename: 'amplitude.png' },
    { name: 'Segment', domain: 'segment.com', filename: 'segment.png' },
    { name: 'Heap', domain: 'heap.io', filename: 'heap.png' },
    { name: 'Pendo', domain: 'pendo.io', filename: 'pendo.png' },
    { name: 'Hotjar', domain: 'hotjar.com', filename: 'hotjar.png' },
    { name: 'FullStory', domain: 'fullstory.com', filename: 'fullstory.png' },
    { name: 'Kissmetrics', domain: 'kissmetrics.io', filename: 'kissmetrics.png' },
    { name: 'Matomo', domain: 'matomo.org', filename: 'matomo.png' },

    // ERP Systems
    { name: 'SAP ERP', domain: 'sap.com', filename: 'sap-erp.png' },
    { name: 'Oracle ERP', domain: 'oracle.com', filename: 'oracle-erp.png' },
    { name: 'Microsoft Dynamics', domain: 'dynamics.microsoft.com', filename: 'microsoft-dynamics.png' },
    { name: 'NetSuite', domain: 'netsuite.com', filename: 'netsuite.png' },
    { name: 'Odoo', domain: 'odoo.com', filename: 'odoo.png' },
    { name: 'Sage Intacct', domain: 'sage.com', filename: 'sage-intacct.png' },
    { name: 'Epicor', domain: 'epicor.com', filename: 'epicor.png' },
    { name: 'Infor', domain: 'infor.com', filename: 'infor.png' },
    { name: 'IFS', domain: 'ifs.com', filename: 'ifs.png' },
    { name: 'Acumatica', domain: 'acumatica.com', filename: 'acumatica.png' },

    // Healthcare
    { name: 'Epic EHR', domain: 'epic.com', filename: 'epic-ehr.png' },
    { name: 'Cerner', domain: 'cerner.com', filename: 'cerner.png' },
    { name: 'Allscripts', domain: 'allscripts.com', filename: 'allscripts.png' },
    { name: 'Meditech', domain: 'meditech.com', filename: 'meditech.png' },
    { name: 'Athenahealth', domain: 'athenahealth.com', filename: 'athenahealth.png' },
    { name: 'eClinicalWorks', domain: 'eclinicalworks.com', filename: 'eclinicalworks.png' },
    { name: 'NextGen', domain: 'nextgen.com', filename: 'nextgen.png' },
    { name: 'Practice Fusion', domain: 'practicefusion.com', filename: 'practice-fusion.png' },
    { name: 'Kareo', domain: 'kareo.com', filename: 'kareo.png' },
    { name: 'CureMD', domain: 'curemd.com', filename: 'curemd.png' },

    // Video Conferencing
    { name: 'Zoom', domain: 'zoom.us', filename: 'zoom.png' },
    { name: 'MS Teams', domain: 'teams.microsoft.com', filename: 'ms-teams.png' },
    { name: 'Google Meet', domain: 'meet.google.com', filename: 'google-meet.png' },
    { name: 'Webex', domain: 'webex.com', filename: 'webex.png' },
    { name: 'GoToMeeting', domain: 'goto.com', filename: 'gotomeeting.png' },
    { name: 'BlueJeans', domain: 'bluejeans.com', filename: 'bluejeans.png' },
    { name: 'Whereby', domain: 'whereby.com', filename: 'whereby.png' },
    { name: 'Jitsi', domain: 'jitsi.org', filename: 'jitsi.png' },
    { name: 'Skype', domain: 'skype.com', filename: 'skype.png' },
    { name: '8x8', domain: '8x8.com', filename: '8x8.png' },

    // Project Management
    { name: 'Asana', domain: 'asana.com', filename: 'asana.png' },
    { name: 'Trello', domain: 'trello.com', filename: 'trello.png' },
    { name: 'Monday.com', domain: 'monday.com', filename: 'monday.png' },
    { name: 'ClickUp', domain: 'clickup.com', filename: 'clickup.png' },
    { name: 'Basecamp', domain: 'basecamp.com', filename: 'basecamp.png' },
    { name: 'Wrike', domain: 'wrike.com', filename: 'wrike.png' },
    { name: 'Smartsheet', domain: 'smartsheet.com', filename: 'smartsheet.png' },
    { name: 'Notion', domain: 'notion.so', filename: 'notion.png' },
    { name: 'Airtable', domain: 'airtable.com', filename: 'airtable.png' },
    { name: 'Jira', domain: 'atlassian.com', filename: 'jira.png' }
];

const DOWNLOAD_DIR = path.join(__dirname, '..', 'public', 'integrations');

if (!fs.existsSync(DOWNLOAD_DIR)) {
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

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
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { }); // Delete the file async. (But we don't check result)
            reject(err);
        });
    });
}

async function main() {
    console.log(`Starting download of ${INTEGRATIONS.length} logos to ${DOWNLOAD_DIR}...`);
    let downloaded = 0;
    let skipped = 0;
    let failed = 0;

    for (const integration of INTEGRATIONS) {
        const filepath = path.join(DOWNLOAD_DIR, integration.filename);

        // Skip existing files if they are larger than 0 bytes
        if (fs.existsSync(filepath) && fs.statSync(filepath).size > 0) {
            console.log(`[SKIP] ${integration.name} (already exists)`);
            skipped++;
            continue;
        }

        const url = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${integration.domain}&size=128`;

        try {
            await downloadLogo(url, filepath);
            console.log(`[OK]   ${integration.name}`);
            downloaded++;
        } catch (err) {
            console.error(`[FAIL] ${integration.name}: ${err.message}`);
            failed++;
        }

        // Be nice to the API
        await new Promise(r => setTimeout(r, 100));
    }

    console.log('\n--- Summary ---');
    console.log(`Total: ${INTEGRATIONS.length}`);
    console.log(`Downloaded: ${downloaded}`);
    console.log(`Skipped: ${skipped}`);
    console.log(`Failed: ${failed}`);
}

main();
