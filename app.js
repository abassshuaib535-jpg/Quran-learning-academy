// ---------------- CONFIG ----------------
const defaultConfig = {
  academy_name: 'Ibn Abbas Academy',
  hero_title: 'Ibn Abbas Academy for Quran, Sunnah & Islamic Studies',
  hero_subtitle: 'Illuminating the paths of Islamic knowledge',
  background_color: '#1e3a5f',
  surface_color: '#f5f0e8',
  text_color: '#2d3748',
  primary_action_color: '#d4af37'
};

let config = { ...defaultConfig };
let currentUser = null;
let allUsers = [];
let currentPage = 'home';

// ---------------- NAVIGATION ----------------
function navigateTo(page) {
  currentPage = page;
  renderCurrentPage();
}
window.navigateTo = navigateTo;

// ---------------- TOAST ----------------
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.backgroundColor =
    type === 'success' ? '#10b981' : '#ef4444';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ---------------- PAGE RENDER ----------------
function renderCurrentPage() {
  if (currentPage === 'home') renderHomePage();
  if (currentPage === 'login') renderLoginPage();
  if (currentPage === 'register') renderRegisterPage();
}

// ---------------- HOME ----------------
function renderHomePage() {
  document.getElementById('app').innerHTML = `
    <section class="min-h-screen flex items-center justify-center bg-slate-900">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-cinzel text-yellow-400 mb-6">
          ${config.hero_title}
        </h1>
        <p class="text-lg text-white mb-8">
          ${config.hero_subtitle}
        </p>
        <div class="flex gap-4 justify-center">
          <button onclick="navigateTo('login')" class="px-6 py-3 bg-yellow-400 rounded font-bold">
            Login
          </button>
          <button onclick="navigateTo('register')" class="px-6 py-3 border border-yellow-400 text-yellow-400 rounded font-bold">
            Register
          </button>
        </div>
      </div>
    </section>
  `;
}

// ---------------- LOGIN ----------------
function renderLoginPage() {
  document.getElementById('app').innerHTML = `
    <div class="min-h-screen flex items-center justify-center">
      <div class="p-8 bg-white rounded shadow w-full max-w-md">
        <h2 class="text-2xl font-bold mb-4">Login</h2>
        <input id="login-email" class="w-full border p-2 mb-3" placeholder="Email">
        <input id="login-password" type="password" class="w-full border p-2 mb-4" placeholder="Password">
        <button onclick="handleLogin()" class="w-full bg-yellow-400 py-2 rounded font-bold">
          Login
        </button>
        <button onclick="navigateTo('home')" class="mt-4 text-sm underline">
          Back to Home
        </button>
      </div>
    </div>
  `;
}

function handleLogin() {
  showToast('Login demo only', 'success');
}
window.handleLogin = handleLogin;

// ---------------- REGISTER ----------------
function renderRegisterPage() {
  document.getElementById('app').innerHTML = `
    <div class="min-h-screen flex items-center justify-center">
      <div class="p-8 bg-white rounded shadow w-full max-w-md">
        <h2 class="text-2xl font-bold mb-4">Register</h2>
        <input class="w-full border p-2 mb-3" placeholder="Full Name">
        <input class="w-full border p-2 mb-3" placeholder="Email">
        <input class="w-full border p-2 mb-4" placeholder="Password">
        <button onclick="showToast('Registered successfully')" class="w-full bg-yellow-400 py-2 rounded font-bold">
          Register
        </button>
        <button onclick="navigateTo('home')" class="mt-4 text-sm underline">
          Back to Home
        </button>
      </div>
    </div>
  `;
}

// ---------------- INIT ----------------
function waitForSDKs() {
  if (window.dataSdk && window.elementSdk) {
    initializeApp();
  } else {
    setTimeout(waitForSDKs, 100);
  }
}

function initializeApp() {
  console.log('App initialized');
  renderHomePage();
}

document.addEventListener('DOMContentLoaded', waitForSDKs);