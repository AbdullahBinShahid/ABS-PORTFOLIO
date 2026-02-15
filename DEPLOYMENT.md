# Vercel Deployment Guide

This portfolio is ready to be deployed on Vercel. Follow these steps:

## Prerequisites
- A GitHub account
- A Vercel account (free tier is sufficient)

## Step 1: Push to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it: `portfolio` or `abdullah-portfolio`
   - Make it public or private (your choice)
   - Don't initialize with README

2. Open terminal/command prompt in your project folder and run:
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/AbdullahBinShahid/portfolio.git
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Website (Recommended)

1. Go to https://vercel.com
2. Click "Sign Up" or "Login" (use GitHub to sign in)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it as a static site
6. Click "Deploy"
7. Wait for deployment to complete (usually 1-2 minutes)
8. Your site will be live at: `https://your-project-name.vercel.app`

### Option B: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and your site will be deployed!

## Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Adding Your Own Images

Replace the placeholder images with your own:

1. **Profile Image**: Replace `profile.jpg` with your professional photo
2. **Project Screenshots**: Replace `ai-companion.jpg` with your project screenshot
3. **Blog Images**: Replace `blog-1.jpg`, `blog-2.jpg`, `blog-3.jpg` with relevant images

Recommended image sizes:
- Profile: 800x800px (square)
- Projects: 1200x800px (landscape)
- Blog: 1200x800px (landscape)

## Updating Content

### Personal Information
Edit `index.html` to update:
- Email address (line with `abdullahbinshahid154@gmail.com`)
- Phone number (line with `+92 3121170542`)
- Social media links
- Project descriptions
- Blog posts

### Contact Form
The contact form currently shows a success message without actually sending emails. To make it functional:

1. Use a service like:
   - **Formspree** (https://formspree.io) - Easy, free tier available
   - **EmailJS** (https://www.emailjs.com) - Free tier available
   - **Netlify Forms** (if you switch to Netlify)

2. Update the form handling code in `script.js` (lines 75-115)

### Example with Formspree:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
});
```

## Environment Variables (If Needed)

If you add API integrations:
1. In Vercel dashboard, go to Settings → Environment Variables
2. Add your API keys
3. Redeploy

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch automatically deploys
- Pull requests create preview deployments
- Rollback to previous versions anytime

## Performance Tips

Your portfolio is already optimized with:
- ✅ Minimal dependencies (no frameworks)
- ✅ Optimized CSS and JavaScript
- ✅ Lazy loading for images
- ✅ Smooth animations

For even better performance:
1. Compress images before uploading (use TinyPNG.com)
2. Use WebP format for images
3. Enable Vercel Analytics (free)

## Troubleshooting

**Issue**: Site not loading
- Check Vercel deployment logs
- Ensure all files are committed to GitHub

**Issue**: Images not showing
- Verify image file names match HTML references
- Check file paths are correct

**Issue**: Contact form not working
- Implement a form service (see "Contact Form" section above)

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Add your own images
3. ✅ Update contact information
4. ✅ Connect contact form to email service
5. ✅ Add Google Analytics (optional)
6. ✅ Share your portfolio link!

## Support

If you need help:
- Vercel Documentation: https://vercel.com/docs
- Vercel Community: https://github.com/vercel/vercel/discussions

---

**Your portfolio URL will be**: `https://your-project-name.vercel.app`

You can customize the subdomain in Vercel settings or add a custom domain!
