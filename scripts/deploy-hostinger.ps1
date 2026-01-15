# Deploy to Hostinger Script
# This script builds the Next.js app and pushes the static output to a 'hostinger-deploy' branch

Write-Host "🚀 Starting deployment process..." -ForegroundColor Cyan

# 1. Build the project
Write-Host "📦 Building static project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed! Please fix errors and try again."
    exit $LASTEXITCODE
}

# 2. Check if 'out' directory exists
if (-not (Test-Path "out")) {
    Write-Error "'out' directory not found! Ensure 'output: export' is in next.config.js"
    exit 1
}

# 3. Create .nojekyll to prevent GitHub Pages from ignoring files starting with underscore
New-Item -ItemType File -Path "out\.nojekyll" -Force | Out-Null

# 4. Navigate to build output
Push-Location "out"

# 5. Initialize temporary git repo
Write-Host "Git initialization..." -ForegroundColor Yellow
git init
git add -A
git commit -m "Deploy to Hostinger: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# 6. Push to 'hostinger-deploy' branch
Write-Host "📤 Pushing to hostinger-deploy branch..." -ForegroundColor Yellow
# Get the remote URL from the parent directory
$remoteUrl = git -C .. remote get-url origin

# Force push to the specific branch
git push --force $remoteUrl main:hostinger-deploy

# 7. Cleanup
Pop-Location
Write-Host "✅ Deployment pushed successfully!" -ForegroundColor Green
Write-Host "👉 Now go to Hostinger and ensure the Git deployment is using the 'hostinger-deploy' branch." -ForegroundColor Cyan
