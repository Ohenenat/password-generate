
// PASSWORD GENERATOR APP


// Character Sets
const CHAR_SETS = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
    similar: 'O0l1S5', // Characters to avoid
};

// DOM Elements
const passwordDisplay = document.getElementById('passwordDisplay');
const copyBtn = document.getElementById('copyBtn');
const eyeIcon = document.getElementById('eyeIcon');
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const generateBtn = document.getElementById('generateBtn');
const themeToggle = document.getElementById('themeToggle');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

// Checkboxes
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const avoidSimilarCheckbox = document.getElementById('avoidSimilar');
const autoGenerateCheckbox = document.getElementById('autoGenerate');

const charOptionCheckboxes = document.querySelectorAll('.char-option');

// State
let passwordHistory = [];
let currentPassword = '';

// THEME MANAGEMENT

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon();
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
}

// PASSWORD GENERATION

function getCharacterSet() {
    let charset = '';
    
    if (uppercaseCheckbox.checked) charset += CHAR_SETS.uppercase;
    if (lowercaseCheckbox.checked) charset += CHAR_SETS.lowercase;
    if (numbersCheckbox.checked) charset += CHAR_SETS.numbers;
    if (symbolsCheckbox.checked) charset += CHAR_SETS.symbols;
    
    // Remove similar characters if option is checked
    if (avoidSimilarCheckbox.checked) {
        for (let char of CHAR_SETS.similar) {
            charset = charset.replace(new RegExp(char, 'g'), '');
        }
    }
    
    return charset;
}

function generatePassword() {
    const charset = getCharacterSet();
    const length = parseInt(lengthSlider.value);
    
    // Validate at least one option is selected
    if (charset.length === 0) {
        showError('Please select at least one character type');
        return;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    currentPassword = password;
    passwordDisplay.value = password;
    passwordDisplay.type = 'text'; // Show password when generated
    updateEyeIcon();
    updateStrengthIndicator();
    addToHistory(password);
}

function updateStrengthIndicator() {
    const length = currentPassword.length;
    const hasUppercase = /[A-Z]/.test(currentPassword);
    const hasLowercase = /[a-z]/.test(currentPassword);
    const hasNumbers = /[0-9]/.test(currentPassword);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(currentPassword);
    
    let strength = 0;
    
    // Length scoring (0-30 points)
    if (length >= 8) strength += 10;
    if (length >= 12) strength += 10;
    if (length >= 16) strength += 10;
    
    // Character variety scoring (0-70 points)
    if (hasUppercase) strength += 17.5;
    if (hasLowercase) strength += 17.5;
    if (hasNumbers) strength += 17.5;
    if (hasSymbols) strength += 17.5;
    
    // Determine strength level
    let strengthLevel = 'none';
    let strengthPercent = 0;
    
    if (strength === 0) {
        strengthLevel = 'none';
        strengthPercent = 0;
    } else if (strength < 30) {
        strengthLevel = 'weak';
        strengthPercent = 25;
    } else if (strength < 60) {
        strengthLevel = 'medium';
        strengthPercent = 60;
    } else {
        strengthLevel = 'strong';
        strengthPercent = 100;
    }
    
    // Update UI
    strengthText.textContent = strengthLevel.charAt(0).toUpperCase() + strengthLevel.slice(1);
    strengthText.className = `strength-text ${strengthLevel}`;
    strengthBar.style.width = strengthPercent + '%';
}

// HISTORY MANAGEMENT

function loadHistory() {
    const saved = localStorage.getItem('passwordHistory');
    passwordHistory = saved ? JSON.parse(saved) : [];
    renderHistory();
}

function addToHistory(password) {
    // Avoid duplicates at the top of the list
    if (passwordHistory[0] !== password) {
        passwordHistory.unshift(password);
        // Keep only last 10 passwords
        if (passwordHistory.length > 10) {
            passwordHistory.pop();
        }
        saveHistory();
        renderHistory();
    }
}

function saveHistory() {
    localStorage.setItem('passwordHistory', JSON.stringify(passwordHistory));
}

function clearHistory() {
    if (confirm('Are you sure you want to clear all password history?')) {
        passwordHistory = [];
        localStorage.removeItem('passwordHistory');
        renderHistory();
    }
}

function removeFromHistory(index) {
    passwordHistory.splice(index, 1);
    saveHistory();
    renderHistory();
}

function renderHistory() {
    historyList.innerHTML = '';
    
    if (passwordHistory.length === 0) {
        historyList.innerHTML = '<p class="empty-history">No passwords generated yet</p>';
        return;
    }
    
    passwordHistory.forEach((password, index) => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.innerHTML = `
            <span class="history-password">${escapeHtml(password)}</span>
            <button class="history-copy-btn" data-index="${index}" title="Copy password">
                📋
            </button>
            <button class="history-delete-btn" data-index="${index}" title="Delete">
                ✕
            </button>
        `;
        historyList.appendChild(historyItem);
    });
    
    // Attach event listeners
    document.querySelectorAll('.history-copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            copyToClipboard(passwordHistory[index], e.target);
        });
    });
    
    document.querySelectorAll('.history-delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            removeFromHistory(index);
        });
    });
}



