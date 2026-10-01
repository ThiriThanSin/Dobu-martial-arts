// Navbar scroll effect
window.addEventListener('scroll', function() {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId !== '#') {
      e.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// ===== TIMETABLE FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const timetableCells = document.querySelectorAll('.timetable-table td');

filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    const filter = this.getAttribute('data-filter');
    
    timetableCells.forEach(cell => {
      const cellClass = cell.getAttribute('data-class');
      
      if (filter === 'all' || cellClass === filter) {
        cell.style.opacity = '1';
      } else {
        cell.style.opacity = '0.2';
      }
    });
  });
});
// ===== GALLERY FILTER =====
const galleryFilters = document.querySelectorAll('.gallery-filter');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryFilters.forEach(btn => {
  btn.addEventListener('click', function() {
    galleryFilters.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    const filter = this.getAttribute('data-filter');
    
    galleryItems.forEach(item => {
      const category = item.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        item.classList.remove('hide');
        item.style.opacity = '1';
      } else {
        item.classList.add('hide');
      }
    });
  });
});
// ===== CONTACT FORM VALIDATION =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    if (contactForm.checkValidity()) {
      // Show success message
      const successMsg = document.getElementById('formSuccess');
      successMsg.classList.remove('d-none');
      
      // Reset form
      contactForm.reset();
      contactForm.classList.remove('was-validated');
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        successMsg.classList.add('d-none');
      }, 5000);
    } else {
      contactForm.classList.add('was-validated');
    }
  });
}
// ===== PASSWORD TOGGLE =====
function setupPasswordToggle(buttonId, inputId) {
  const btn = document.getElementById(buttonId);
  const input = document.getElementById(inputId);
  
  if (btn && input) {
    btn.addEventListener('click', function() {
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      
      const icon = this.querySelector('i');
      icon.classList.toggle('fa-eye');
      icon.classList.toggle('fa-eye-slash');
    });
  }
}

setupPasswordToggle('togglePassword', 'loginPassword');
setupPasswordToggle('toggleRegPassword', 'regPassword');

// ===== LOGIN FORM =====
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (loginForm.checkValidity()) {
      const successMsg = document.getElementById('loginSuccess');
      successMsg.classList.remove('d-none');
      
      // Simulate redirect after 2 seconds
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    } else {
      loginForm.classList.add('was-validated');
    }
  });
}

// ===== REGISTER FORM =====
const registerForm = document.getElementById('registerForm');

if (registerForm) {
  // Real-time password confirmation check
  const regPassword = document.getElementById('regPassword');
  const confirmPassword = document.getElementById('confirmPassword');
  
  function checkPasswords() {
    if (confirmPassword.value && regPassword.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Passwords do not match');
      document.getElementById('confirmError').textContent = 'Passwords do not match.';
    } else {
      confirmPassword.setCustomValidity('');
    }
  }
  
  regPassword.addEventListener('input', checkPasswords);
  confirmPassword.addEventListener('input', checkPasswords);
  
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    checkPasswords();
    
    if (registerForm.checkValidity()) {
      const successMsg = document.getElementById('registerSuccess');
      successMsg.classList.remove('d-none');
      
      // Simulate redirect after 2 seconds
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 2000);
    } else {
      registerForm.classList.add('was-validated');
    }
  });
}
// ===== PASSWORD TOGGLE =====
function setupPasswordToggle(buttonId, inputId) {
  const btn = document.getElementById(buttonId);
  const input = document.getElementById(inputId);

  if (btn && input) {
    btn.addEventListener('click', function() {
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);

      const icon = this.querySelector('i');
      icon.classList.toggle('fa-eye');
      icon.classList.toggle('fa-eye-slash');
    });
  }
}

setupPasswordToggle('togglePassword', 'loginPassword');

// ===== LOGIN FORM =====
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    e.stopPropagation();

    if (loginForm.checkValidity()) {
      const successMsg = document.getElementById('loginSuccess');
      successMsg.classList.remove('d-none');

      // Simulate redirect after 2 seconds
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    } else {
      loginForm.classList.add('was-validated');
    }
  })