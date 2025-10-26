# Brennen Farrell - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ✨ Modern, clean design with gradient effects
- 📱 Fully responsive for all devices
- 🚀 Fast performance with Vite
- 🎨 Styled with Tailwind CSS
- 📄 Showcases education, experience, projects, and publications

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `personal-website`
2. **Important**: Make it public (required for GitHub Pages)
3. Don't initialize with README (we already have files)

### Step 2: Initialize Git and Push

```bash
# Navigate to the portfolio directory
cd portfolio

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

```bash
# Deploy the website
npm run deploy
```

This will:
1. Build your project
2. Create a `main` branch
3. Deploy the built files to GitHub Pages

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select the `main` branch
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/personal-website/`

## Updating the Website

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
npm run deploy
```

## Customization

- Update content in `src/components/` files
- Modify colors in `tailwind.config.js`
- Change the base URL in `vite.config.js` if using a different repo name

## Technologies Used

- React 19
- Vite 7
- Tailwind CSS 4
- Font Awesome 6
- GitHub Pages

## License

MIT License - feel free to use this as a template for your own portfolio!
