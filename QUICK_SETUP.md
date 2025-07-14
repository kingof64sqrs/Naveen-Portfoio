# 🚀 Quick Setup Guide

## ⚡ Get Your Portfolio Live in 5 Minutes

### Step 1: Clone and Install
```bash
git clone <your-repo-url>
cd personal-portfolio-template
npm install
npm run dev
```

### Step 2: Customize Your Information

#### 🔧 Essential Changes (Required)

1. **Update Your Name** - `src/pages/Home.jsx`
   ```jsx
   // Change "Your Name" to your actual name
   <span className="text-white">Your</span>
   <br />
   <span className="text-gradient">Name</span>
   ```

2. **Update Job Title** - `src/pages/Home.jsx`
   ```jsx
   // Change to your actual title
   <h2>Full-Stack Developer</h2>
   ```

3. **Update Contact Info** - `src/pages/Contact.jsx`
   ```jsx
   const contactInfo = [
     {
       icon: Mail,
       title: 'Email',
       value: 'your.email@example.com', // ← Change this
       link: 'mailto:your.email@example.com', // ← Change this
     },
     {
       icon: Phone,
       title: 'Phone',
       value: '+1 (555) 123-4567', // ← Change this
       link: 'tel:+15551234567', // ← Change this
     },
   ];
   ```

4. **Update Social Links** - `src/pages/Contact.jsx`
   ```jsx
   const socialLinks = [
     {
       icon: Github,
       name: 'GitHub',
       url: 'https://github.com/yourusername', // ← Change this
       color: 'hover:text-neon-purple',
     },
     // Add your other social links...
   ];
   ```

### Step 3: Add Your Projects

**File**: `src/pages/Projects.jsx`
```jsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Description of your project',
    tags: ['#React', '#Node.js', '#MongoDB'],
    github: 'https://github.com/yourusername/project-name',
    demo: 'https://your-project-demo.vercel.app',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  // Add more projects...
];
```

### Step 4: Update Skills

**File**: `src/pages/About.jsx`
```jsx
const skills = [
  { name: 'React', icon: ReactLogo, color: 'text-neon-purple' },
  { name: 'Node.js', icon: Braces, color: 'text-neon-blue' },
  { name: 'TypeScript', icon: Braces, color: 'text-neon-pink' },
  // Add your skills...
];
```

### Step 5: Customize Services

**File**: `src/pages/Services.jsx`
```jsx
const services = [
  {
    title: 'Your Service',
    description: 'Description of your service',
    icon: Code, // Import from lucide-react
    color: 'text-neon-purple',
  },
  // Add more services...
];
```

### Step 6: Update Meta Information

**File**: `remote-workers/index.html`
```html
<title>Your Name - Full-Stack Developer Portfolio</title>
<meta name="description" content="Your portfolio description" />
<meta name="author" content="Your Name" />
```

### Step 7: Deploy

#### Option A: Vercel (Recommended)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

#### Option B: Netlify
1. Run `npm run build`
2. Drag `dist` folder to Netlify

## 🎨 Optional Customizations

### Change Colors
**File**: `src/index.css`
```css
:root {
  --neon-purple: #646cff; /* Change to your preferred color */
  --neon-blue: #3b82f6;
  --neon-pink: #ec4899;
}
```

### Add Your Photo
**File**: `src/pages/About.jsx`
```jsx
// Replace the SVG with your image
<img 
  src="/path/to/your/image.jpg" 
  alt="Your Name" 
  className="w-full h-full object-cover"
/>
```

### Customize Animations
All animations use Framer Motion. You can modify:
- Animation duration
- Animation easing
- Stagger delays
- Hover effects

## 📋 Checklist

- [ ] Updated your name
- [ ] Updated job title
- [ ] Added your projects
- [ ] Updated contact information
- [ ] Added social media links
- [ ] Customized skills
- [ ] Updated services
- [ ] Changed meta information
- [ ] Tested on mobile
- [ ] Deployed to hosting

## 🚀 Quick Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview build

# Customization
# Edit files in src/pages/ for content
# Edit src/index.css for colors
# Edit remote-workers/index.html for meta
```

## 💡 Pro Tips

1. **Use High-Quality Images**: Optimize images for web
2. **Test Responsiveness**: Check on different screen sizes
3. **Optimize Performance**: Compress images and assets
4. **SEO**: Add proper meta tags and descriptions
5. **Analytics**: Add Google Analytics or similar

## 🆘 Need Help?

1. Check the full [DOCUMENTATION.md](./DOCUMENTATION.md)
2. Look at the code examples in each file
3. Use browser dev tools to inspect elements
4. Check the console for any errors

---

**Your portfolio is ready! 🎉**

Start customizing and make it your own! 