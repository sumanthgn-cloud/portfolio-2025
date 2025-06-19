# 🚀 GitHub Pages Setup Guide for Sumanth GN Portfolio

Complete step-by-step guide to host your portfolio website on GitHub Pages with custom domain `hiresumanth.xyz`

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Domain `hiresumanth.xyz` registered with GoDaddy
- Portfolio website files ready

## 🎯 Step 1: Create GitHub Repository

### 1.1 Create New Repository
1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** in the top-right corner
3. **Select "New repository"**
4. **Repository name:** `sumanthgn.github.io` (exactly this format)
5. **Description:** "Sumanth GN - UI/UX Designer Portfolio"
6. **Make it Public** (required for GitHub Pages)
7. **Check "Add a README file"**
8. **Click "Create repository"**

### 1.2 Clone Repository Locally
```bash
git clone https://github.com/sumanthgn-cloud/sumanthgn.github.io.git
cd sumanthgn.github.io
```

## 📁 Step 2: Upload Portfolio Files

### 2.1 Copy Your Files
Copy all your portfolio files into the repository folder:
- `index.html`
- `styles.css`
- `script.js`
- `README.md`

### 2.2 Commit and Push
```bash
git add .
git commit -m "Initial portfolio website upload"
git push origin main
```

## 🌐 Step 3: Enable GitHub Pages

### 3.1 Configure GitHub Pages
1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** in the left sidebar
4. **Under "Source"**, select **"Deploy from a branch"**
5. **Branch:** Select `main`
6. **Folder:** Select `/ (root)`
7. **Click "Save"**

### 3.2 Verify Deployment
- Wait 2-5 minutes for deployment
- Your site will be available at: `https://sumanthgn-cloud.github.io`

## 🔗 Step 4: Configure Custom Domain

### 4.1 Add Custom Domain in GitHub
1. **In repository Settings > Pages**
2. **Under "Custom domain"**, enter: `hiresumanth.xyz`
3. **Check "Enforce HTTPS"**
4. **Click "Save"**
5. **Wait for DNS verification** (may take up to 24 hours)

### 4.2 Create CNAME File
Create a file named `CNAME` (no extension) in your repository root:
```
hiresumanth.xyz
```

Commit and push:
```bash
echo "hiresumanth.xyz" > CNAME
git add CNAME
git commit -m "Add custom domain CNAME"
git push origin main
```

## ⚙️ Step 5: Configure GoDaddy DNS

### 5.1 Access GoDaddy DNS Settings
1. **Log in to GoDaddy**
2. **Go to "My Products"**
3. **Find `hiresumanth.xyz`** and click "Manage"
4. **Click "DNS"** tab
5. **Click "Manage Zones"**

### 5.2 Add DNS Records

#### A Records (for root domain):
Add these **A records** pointing to GitHub Pages IP addresses:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

#### CNAME Record (for www subdomain):
| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | sumanthgn-cloud.github.io | 600 |

### 5.3 Remove Conflicting Records
- **Delete any existing A records** for `@` that point to GoDaddy parking pages
- **Delete any existing CNAME records** for `@` (root domain can't have CNAME)

## 🔒 Step 6: Enable HTTPS

### 6.1 Automatic HTTPS
1. **In GitHub repository Settings > Pages**
2. **Check "Enforce HTTPS"** (should be available after DNS propagation)
3. **Click "Save"**

### 6.2 Verify HTTPS
- Your site should now be accessible at: `https://hiresumanth.xyz`
- Both `http://` and `https://` should redirect to `https://`

## ✅ Step 7: Verification Checklist

### 7.1 Test Your Website
- [ ] `https://hiresumanth.xyz` loads correctly
- [ ] `https://www.hiresumanth.xyz` redirects to root domain
- [ ] All pages and links work
- [ ] Contact form functions properly
- [ ] Mobile responsiveness works

### 7.2 Check DNS Propagation
Use these tools to verify DNS is working:
- [DNS Checker](https://dnschecker.org)
- [What's My DNS](https://www.whatsmydns.net)

## 🔄 Step 8: Maintenance and Updates

### 8.1 Update Your Website
```bash
# Make changes to your files
git add .
git commit -m "Update portfolio content"
git push origin main
```

### 8.2 Automatic Deployment
- GitHub Pages automatically rebuilds your site when you push changes
- Updates are live within 2-5 minutes

## 🎨 Step 9: Portfolio Enhancement Tips

### 9.1 Add Real Project Images
Replace placeholder images with actual project screenshots:
```html
<!-- Replace placeholder URLs with your actual images -->
<img src="images/project1-screenshot.jpg" alt="Project Title">
```

### 9.2 Optimize Images
- **Compress images** to reduce load time
- **Use WebP format** for better compression
- **Add proper alt text** for accessibility

### 9.3 Add Analytics
Add Google Analytics to track visitors:
```html
<!-- Add to <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚨 Troubleshooting

### Common Issues:

#### 1. DNS Not Propagating
- **Wait 24-48 hours** for full DNS propagation
- **Check DNS propagation** using online tools
- **Verify DNS records** are correct

#### 2. HTTPS Not Working
- **Wait for DNS verification** to complete
- **Ensure CNAME file** is in repository root
- **Check "Enforce HTTPS"** is enabled

#### 3. Custom Domain Not Working
- **Verify CNAME file** contains correct domain
- **Check DNS records** are properly configured
- **Wait for GitHub Pages** to recognize the domain

#### 4. Images Not Loading
- **Check image paths** are correct
- **Ensure images are committed** to repository
- **Verify image URLs** are accessible

## 📞 Support Resources

- **GitHub Pages Documentation:** https://docs.github.com/en/pages
- **GoDaddy DNS Help:** https://www.godaddy.com/help
- **DNS Propagation Checker:** https://dnschecker.org

## 🎯 Final Result

After completing all steps, your portfolio will be:
- ✅ Live at: `https://hiresumanth.xyz`
- ✅ HTTPS enabled
- ✅ Mobile responsive
- ✅ Professional and modern
- ✅ Easy to update and maintain

---

**Your portfolio is now ready to impress recruiters and clients! 🎨✨**

Remember to:
- Keep your portfolio updated with new projects
- Monitor analytics to understand visitor behavior
- Regularly backup your repository
- Test your website on different devices and browsers 