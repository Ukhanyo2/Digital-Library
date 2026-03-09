# Image Assets Setup Guide

This file contains instructions for setting up the image assets referenced throughout the application.

## Required Images

### 1. Dream City Projects Logo
**File Path:** `public/images/dream-city-logo.png`
**Dimensions:** Recommended 200-300px width (will be displayed at 48px height in navigation)
**Description:** Save the Dream City Projects colorful logo image here
**Used In:** Navigation bar (TopNav component)

### 2. Lifestyle Hero Image
**File Path:** `public/images/hero-lifestyle.jpg`
**Dimensions:** Recommended 1920x1080px or higher for best quality
**Description:** Save the lifestyle image (man on couch with book) here
**Used In:** Home page hero section
**Note:** The image will be used with `background-size: cover` and `background-position: center` with a dark overlay (50% black) for text readability

## Steps to Add Images

1. Locate the two image files provided in the design assets
2. Copy the Dream City Projects logo and save it as `dream-city-logo.png` in the `public/images/` folder
3. Copy the lifestyle/hero image and save it as `hero-lifestyle.jpg` in the `public/images/` folder
4. Make sure the images are in PNG/JPG format for web optimization
5. The application will automatically reference these images from the configured paths

## Image Specifications

### Logo Optimization Tips
- Keep the logo in PNG format to preserve transparency
- Optimize for web (reduce file size while maintaining quality)
- Height: 48px when displayed in navigation
- Maintain aspect ratio

### Hero Image Optimization Tips
- Use JPG format for better compression
- Optimize for web (aim for ~100-200KB file size)
- The image will cover the hero section with 50% dark overlay applied
- Text will be centered and readable on top of the image

## Troubleshooting

If images don't appear:
- Verify file names match exactly: `dream-city-logo.png` and `hero-lifestyle.jpg`
- Check that files are in the correct directory: `public/images/`
- Clear browser cache and do a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for any 404 errors

## Image References in Code

- **TopNav.jsx:** Line ~15 - References logo for navigation
- **HomePage.jsx:** Line ~30 - References hero image for hero section
