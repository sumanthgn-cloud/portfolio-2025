# 🚀 GitHub Pages Portfolio Hosting Guide

## Complete Step-by-Step Setup

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Repository settings:**
   - **Repository name:** `portfolio` (or `my-portfolio`)
   - **Description:** "Sumanth GN - UI/UX Designer Portfolio"
   - **Visibility:** Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have files)
5. **Click "Create repository"**

### Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab (top navigation)
3. **Scroll down** to "Pages" section (left sidebar)
4. **Under "Source":**
   - Select **"Deploy from a branch"**
   - Choose **"main"** branch
   - Select **"/ (root)"** folder
5. **Click "Save"**

### Step 4: Configure Custom Domain (Optional)

If you want to use your custom domain `hiresumanth.xyz`:

1. **In the Pages settings**, scroll to "Custom domain"
2. **Enter:** `hiresumanth.xyz`
3. **Check "Enforce HTTPS"**
4. **Click "Save"**

### Step 5: DNS Configuration for Custom Domain

Configure your GoDaddy DNS settings:

#### A Records (Point to GitHub's IP):
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 600

Type: A  
Name: @
Value: 185.199.109.153
TTL: 600

Type: A
Name: @
Value: 185.199.110.153
TTL: 600

Type: A
Name: @
Value: 185.199.111.153
TTL: 600
```

#### CNAME Record:
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 600
```

### Step 6: Wait for Deployment

- **Initial deployment:** 5-10 minutes
- **Custom domain activation:** 24-48 hours
- **HTTPS certificate:** Automatic after domain is active

### Step 7: Verify Your Site

Your portfolio will be available at:
- **GitHub Pages URL:** `https://YOUR_USERNAME.github.io/portfolio/`
- **Custom Domain:** `https://hiresumanth.xyz` (after DNS setup)

## 🔧 Troubleshooting

### Common Issues:

1. **404 Error:**
   - Ensure `index.html` is in the root directory
   - Wait 10-20 minutes for initial deployment
   - Check repository settings

2. **Custom Domain Not Working:**
   - Verify DNS records are correct
   - Wait 24-48 hours for propagation
   - Check CNAME file in repository

3. **HTTPS Issues:**
   - GitHub automatically provides SSL certificates
   - May take up to 24 hours after domain setup

### Quick Commands for Updates:

```bash
# After making changes to your portfolio
git add .
git commit -m "Update portfolio content"
git push origin main
```

## 📱 Testing Your Portfolio

1. **Open your GitHub Pages URL** in different browsers
2. **Test on mobile devices** for responsiveness
3. **Check all links** and contact forms
4. **Verify images** load correctly
5. **Test navigation** and smooth scrolling

## 🎯 Next Steps

1. **Share your portfolio** on LinkedIn and other platforms
2. **Add analytics** (Google Analytics) to track visitors
3. **Regular updates** with new projects and experiences
4. **SEO optimization** with meta tags and descriptions

## 📞 Support

If you encounter issues:
- Check [GitHub Pages documentation](https://pages.github.com/)
- Review [GitHub Community discussions](https://github.com/orgs/community/discussions/41620)
- Ensure all files are properly committed and pushed

---

**Your portfolio will be live at:** `https://YOUR_USERNAME.github.io/portfolio/`

**Custom domain (after setup):** `https://hiresumanth.xyz` 