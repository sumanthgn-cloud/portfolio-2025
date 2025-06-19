Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    GitHub Pages Portfolio Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 1: Checking Git status..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "Step 2: Adding all files to Git..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "Step 3: Committing changes..." -ForegroundColor Yellow
git commit -m "Portfolio website ready for GitHub Pages"

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "    NEXT STEPS:" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "1. Create a new repository on GitHub:" -ForegroundColor White
Write-Host "   - Go to https://github.com/new" -ForegroundColor Gray
Write-Host "   - Name: portfolio (or my-portfolio)" -ForegroundColor Gray
Write-Host "   - Make it PUBLIC" -ForegroundColor Gray
Write-Host "   - DO NOT initialize with README" -ForegroundColor Gray
Write-Host ""
Write-Host "2. After creating the repository, run:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Enable GitHub Pages:" -ForegroundColor White
Write-Host "   - Go to repository Settings" -ForegroundColor Gray
Write-Host "   - Scroll to Pages section" -ForegroundColor Gray
Write-Host "   - Source: Deploy from a branch" -ForegroundColor Gray
Write-Host "   - Branch: main" -ForegroundColor Gray
Write-Host "   - Folder: / (root)" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Your site will be available at:" -ForegroundColor White
Write-Host "   https://YOUR_USERNAME.github.io/portfolio/" -ForegroundColor Cyan
Write-Host ""
Write-Host "5. For custom domain (hiresumanth.xyz):" -ForegroundColor White
Write-Host "   - Add custom domain in Pages settings" -ForegroundColor Gray
Write-Host "   - Configure DNS records in GoDaddy" -ForegroundColor Gray
Write-Host "   - Wait 24-48 hours for propagation" -ForegroundColor Gray
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Read-Host "Press Enter to continue..." 