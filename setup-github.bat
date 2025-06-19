@echo off
echo ========================================
echo    GitHub Pages Portfolio Setup
echo ========================================
echo.

echo Step 1: Checking Git status...
git status

echo.
echo Step 2: Adding all files to Git...
git add .

echo.
echo Step 3: Committing changes...
git commit -m "Portfolio website ready for GitHub Pages"

echo.
echo ========================================
echo    NEXT STEPS:
echo ========================================
echo.
echo 1. Create a new repository on GitHub:
echo    - Go to https://github.com/new
echo    - Name: portfolio (or my-portfolio)
echo    - Make it PUBLIC
echo    - DO NOT initialize with README
echo.
echo 2. After creating the repository, run:
echo    git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Enable GitHub Pages:
echo    - Go to repository Settings
echo    - Scroll to Pages section
echo    - Source: Deploy from a branch
echo    - Branch: main
echo    - Folder: / (root)
echo.
echo 4. Your site will be available at:
echo    https://YOUR_USERNAME.github.io/portfolio/
echo.
echo ========================================
pause 