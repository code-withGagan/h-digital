/* Hexaware Clone Script - Navbar, Swiper Sliders, Tabs, Form */

// Swiper CDN will be linked in HTML
// Navbar scroll/hide
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    document.querySelector('header').classList.remove('nav-up');
    document.querySelector('header').classList.add('nav-down');
  } else {
    document.querySelector('header').classList.remove('nav-down');
    document.querySelector('header').classList.add('nav-up');
  }
  lastScrollTop = st;
});

// Mega dropdown toggle
document.querySelectorAll('.megaDropdown button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = btn.parentElement.querySelector('.dropdownMenu');
    dropdown.classList.toggle('showMenu');
  });
});

// Mobile menu toggle
document.querySelector('.navbar-toggler').addEventListener('click', () => {
  document.querySelector('.navbar-collapse').classList.toggle('show');
});

// Digital Journey Tabs
document.querySelectorAll('.list_item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.list_item').forEach(i => i.classList.remove('list_item_active'));
    item.classList.add('list_item_active');
    const tabId = item.dataset.tabId;
    // Update center image
    document.querySelectorAll('.image-wrapper').forEach(img => img.style.display = 'none');
    document.querySelector(`[data-tab-id="${tabId}"]`).style.display = 'block';
    // Update right content
    document.querySelectorAll('.improving_cards').forEach(card => card.classList.remove('improving_cards_active'));
    document.querySelector(`[data-tabindex="${tabId}"]`).parentElement.classList.add('improving_cards_active');
  });
});

// Swiper inits (match original configs)
document.addEventListener('DOMContentLoaded', () => {
  // Services slider
  new Swiper('.single_line_slider1 .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    scrollbar: { el: '.swiper-scrollbar', draggable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
  });

  // Case studies slider
  new Swiper('.single_line_slider2 .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    scrollbar: { el: '.swiper-scrollbar', draggable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
  });

  // News slider
  new Swiper('.newsSlider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    scrollbar: { el: '.swiper-scrollbar.dragableSwiper', draggable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
  });

  // Form validation (static)
  document.querySelector('#Acton_Form_home').addEventListener('submit', (e) => {
    e.preventDefault();
    // Basic validation
    let valid = true;
    document.querySelectorAll('input[required]').forEach(input => {
      if (!input.value) valid = false;
    });
    if (valid) {
      document.querySelector('.thank_you_text').classList.remove('d-none');
    }
  });
});

// Hovers/Arrows animations
document.querySelectorAll('.arrow_btn_black img, .arrow_btn_white img').forEach(img => {
  img.parentElement.addEventListener('mouseenter', () => img.style.transform = 'translateX(5px)');
  img.parentElement.addEventListener('mouseleave', () => img.style.transform = 'translateX(0)');
});

// Cookie banner close (placeholder)
document.querySelector('.notification_close').addEventListener('click', () => {
  document.querySelector('.cookie-consent-banner').style.display = 'none';
});

