// Check if user is logged in
function checkAuth() {
    // const user = localStorage.getItem('user');
    if (!user) {
        // if (window.location.pathname.includes('dashboard.html')) {
            // window.location.href = 'index.html';
        }
    } else {
        // if (!window.location.pathname.includes('dashboard.html')) {
            // window.location.href = 'dashboard.html';
        } else {
            // document.getElementById('userEmail').textContent = JSON.parse(user).email;
        }
    }
}

// Handle Login
// function handleLogin(event) {
//     event.preventDefault();
    
    // const email = document.getElementById('loginEmail').value;
    // const password = document.getElementById('loginPassword').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid email or password',
            confirmButtonColor: '#1a73e8'
        });
    }
}

// Handle Register
function handleRegister(event) {
    event.preventDefault();
    
    // const name = document.getElementById('registerName').value;
    // const email = document.getElementById('registerEmail').value;
    // const password = document.getElementById('registerPassword').value;
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user already exists
    if (users.some(user => user.email === email)) {
        Swal.fire({
            icon: 'warning',
            title: 'Registration Failed',
            text: 'Email already registered',
            confirmButtonColor: '#1a73e8'
        });
        return;
    }
    
    // Add new user
    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    
    // Save to localStorage
    // localStorage.setItem('users', JSON.stringify(users));
    // localStorage.setItem('user', JSON.stringify(newUser));
    
    window.location.href = 'dashboard.html';
}

// Toggle between login and register forms
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    // loginForm.classList.toggle('hidden');
    // registerForm.classList.toggle('hidden');
}

// Logout function
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

// Check authentication status on page load
document.addEventListener('DOMContentLoaded', checkAuth);

// Toggle password visibility
// function togglePasswordVisibility(inputId, icon) {
//     const passwordInput = document.getElementById(inputId);
//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         icon.classList.remove('fa-eye-slash');
//         icon.classList.add('fa-eye');
//     } else {
//         passwordInput.type = 'password';
//         icon.classList.remove('fa-eye');
//         icon.classList.add('fa-eye-slash');
//     }
// }
