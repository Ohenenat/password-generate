# 🔐 Random Password Generator

A modern, feature-rich web application for generating secure random passwords with customizable options.

## ✨ Features

### Core Features
✅ **Password Length Selection** - Choose between 8-32 characters using an interactive slider  
✅ **Character Options** - Include/exclude uppercase, lowercase, numbers, and symbols  
✅ **Generate Button** - Create new passwords with validation  
✅ **Copy to Clipboard** - Easy one-click copying with visual feedback  
✅ **Password Strength Indicator** - Visual strength meter (Weak/Medium/Strong)  
✅ **Clean, Modern UI** - Centered card layout with smooth animations  

### Advanced Features
✅ **Password History** - Saves up to 10 recently generated passwords (localStorage)  
✅ **Avoid Similar Characters** - Option to exclude O, 0, l, 1, S, 5  
✅ **Auto-Regeneration** - Automatically generate new passwords on option changes  
✅ **Dark/Light Theme** - Toggle between themes with localStorage persistence  
✅ **Password Eye Icon** - Show/hide password visibility toggle  
✅ **Strength Meter Bar** - Visual bar that fills based on password complexity  

## 📁 Project Structure

```
password_generator/
├── index.html        # HTML markup with all UI elements
├── styles.css        # Complete styling with dark mode support
├── script.js         # JavaScript logic and event handling
└── README.md         # This file
```

## 🚀 Getting Started

1. **Open the app** - Simply open `index.html` in your web browser
2. **Adjust settings** - Configure password length and character types
3. **Generate** - Click the "Generate Password" button
4. **Copy** - Use the Copy button to add to clipboard
5. **Check History** - View previously generated passwords

## 🎮 How to Use

### Basic Usage
1. Adjust the password length slider (8-32 characters)
2. Select which character types to include:
   - Uppercase Letters (A–Z)
   - Lowercase Letters (a–z)
   - Numbers (0–9)
   - Symbols (! @ # $ % & etc.)
3. Click **"Generate Password"** to create a new password
4. Click **"Copy"** to copy the password to your clipboard
5. Check the **Password History** section to see previously generated passwords

### Advanced Options
Click on **"⚙️ Advanced Options"** to access:

- **Avoid Similar Characters** - Removes confusing characters (O/0, l/1, S/5)
- **Auto-generate on change** - Automatically creates a new password when you modify options

### Theme Toggle
Click the moon/sun icon (🌙/☀️) in the top-right corner to switch between:
- **Light Mode** - Default white theme
- **Dark Mode** - Eye-friendly dark theme
- Your preference is saved automatically

### Password Visibility
Click the **eye icon** (👁️) on the password display to:
- Show the generated password (👁️‍🗨️)
- Hide the generated password (👁️)

## 💾 Data Storage

The app uses **localStorage** to save:
- **Theme preference** - Light or dark mode
- **Password history** - Last 10 generated passwords

*Note: Password history is only stored locally in your browser and is never sent to any server.*

## 🔐 Password Strength Calculation

The strength indicator uses the following criteria:

### Length Scoring (0-30 points)
- 8+ characters: +10 points
- 12+ characters: +10 points
- 16+ characters: +10 points

### Character Variety Scoring (0-70 points)
- Contains uppercase: +17.5 points
- Contains lowercase: +17.5 points
- Contains numbers: +17.5 points
- Contains symbols: +17.5 points

### Strength Levels
- **None** (0 points) - Gray - No password generated
- **Weak** (< 30 points) - Red - Low security
- **Medium** (30-60 points) - Orange - Moderate security
- **Strong** (≥ 60 points) - Green - High security

## 🎨 UI Components

### Color Scheme (Light Mode)
- Primary: Indigo (#6366f1)
- Background: White (#ffffff)
- Text: Slate (#1e293b)
- Success: Green (#10b981)
- Warning: Amber (#f59e0b)
- Danger: Red (#ef4444)

### Color Scheme (Dark Mode)
- Primary: Indigo (#6366f1)
- Background: Dark Slate (#0f172a)
- Text: Light Slate (#e2e8f0)
- Success: Green (#10b981)
- Warning: Amber (#f59e0b)
- Danger: Red (#ef4444)

## ⌨️ Keyboard Shortcuts

- **Enter** - Generate password (when focused on Generate button)

## 🔧 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid/Flexbox, animations, and dark mode support
- **Vanilla JavaScript (ES6)** - No dependencies, lightweight and fast

## 📱 Responsive Design

The app is fully responsive and works on:
- 📱 Mobile phones (< 600px)
- 📱 Tablets (600px - 1024px)
- 💻 Desktop (> 1024px)

## 🛡️ Security Notes

1. Passwords are generated **entirely in your browser**
2. No data is sent to any server
3. Password history is stored only in **localStorage** (browser-only storage)
4. You can clear history at any time using the ✕ button
5. Always review generated passwords before using them for important accounts

## 📝 Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

*Requires JavaScript to be enabled*

## 🎯 Tips for Strong Passwords

1. **Use maximum length** - 32 characters is ideal for important accounts
2. **Mix character types** - Include uppercase, lowercase, numbers, AND symbols
3. **Avoid similar characters** - Enable this option to reduce confusion
4. **Use unique passwords** - Generate a different password for each account
5. **Store securely** - Use a password manager to save and organize passwords

## 📄 License

This project is open source and available for personal and commercial use.

## 🙋 FAQ

**Q: Are my passwords secure?**  
A: Yes! Passwords are generated using cryptographically random selection from your browser. They never leave your device.

**Q: Can I export my password history?**  
A: Currently, you can copy individual passwords from history. Consider using a password manager for long-term storage.

**Q: Why are some passwords appearing in history?**  
A: The app stores up to 10 most recent passwords. Clear history using the ✕ button if needed.

**Q: Does this work offline?**  
A: Yes! After first load, it works completely offline.

**Q: Can I use this on mobile?**  
A: Yes! The app is fully responsive and mobile-friendly.

---

**Made with ❤️ for secure password generation**
