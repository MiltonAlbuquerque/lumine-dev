/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(sectionsClass) {
			if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
				sectionsClass.classList.add('active-link')
			}else{
				sectionsClass.classList.remove('active-link')
			}
		}
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
if (themeButton) {
  themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
  })
}

/*=============== SHOPPING CART BADGE ===============*/
function updateCartBadge() {
  const cartShopEl = document.getElementById('cart-shop');
  if (!cartShopEl) return;

  let badge = cartShopEl.querySelector('.nav__shop-badge') || document.getElementById('cart-badge');
  if (!badge) {
    badge = document.createElement('span');
    badge.id = 'cart-badge';
    badge.className = 'nav__shop-badge';
    cartShopEl.appendChild(badge);
  }

  try {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cartItems.reduce((acc, item) => acc + (Number(item.quantity) || 1), 0);

    if (totalCount > 0) {
      badge.textContent = totalCount > 99 ? '99+' : totalCount;
      badge.classList.add('show-badge');
      badge.setAttribute('aria-label', `${totalCount} ${totalCount === 1 ? 'item na sacola' : 'itens na sacola'}`);
    } else {
      badge.textContent = '';
      badge.classList.remove('show-badge');
      badge.removeAttribute('aria-label');
    }
  } catch (e) {
    badge.classList.remove('show-badge');
  }
}

window.updateCartBadge = updateCartBadge;
document.addEventListener('DOMContentLoaded', updateCartBadge);
window.addEventListener('storage', updateCartBadge);

/*=============== ADD TO BAG FEEDBACK ===============*/
function showAddToCartFeedback(buttonEl) {
  // 1. Subtle pulse animation on the cart icon in navbar
  const cartShopEl = document.getElementById('cart-shop');
  if (cartShopEl) {
    cartShopEl.classList.remove('cart-shop-pulse');
    void cartShopEl.offsetWidth; // Trigger reflow
    cartShopEl.classList.add('cart-shop-pulse');
    setTimeout(() => {
      cartShopEl.classList.remove('cart-shop-pulse');
    }, 450);
  }

  // 2. Subtle confirmation message "✓ Adicionado à sacola" near the button
  if (!buttonEl) return;

  const existingToast = document.querySelector('.cart-confirmation-toast');
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = 'cart-confirmation-toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.innerHTML = `<span class="toast-check">✓</span> Adicionado à sacola`;
  document.body.appendChild(toast);

  const rect = buttonEl.getBoundingClientRect();
  const toastHeight = 36;

  // Position above button if enough room in viewport, otherwise below
  let top = rect.top - toastHeight - 8;
  if (top < 15) {
    top = rect.bottom + 10;
  }

  // Center horizontally relative to button, clamped to screen bounds
  let left = rect.left + rect.width / 2;
  const minLeft = 85;
  const maxLeft = window.innerWidth - 85;
  left = Math.max(minLeft, Math.min(left, maxLeft));

  toast.style.top = `${top}px`;
  toast.style.left = `${left}px`;

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Keep visible for ~2 seconds, then smoothly fade out
  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hide');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 320);
  }, 2000);
}

window.showAddToCartFeedback = showAddToCartFeedback;


/*=============== PRODUCT IMAGE LIGHTBOX ===============*/
function initProductLightbox() {
  let lightbox = document.getElementById('image-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'image-lightbox';
    lightbox.className = 'image-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Visualização ampliada do produto');
    lightbox.innerHTML = `
      <div class="image-lightbox__backdrop" id="lightbox-backdrop"></div>
      <div class="image-lightbox__container" id="lightbox-container">
        <button class="image-lightbox__close" id="lightbox-close" aria-label="Fechar visualização" type="button">
          <i class='bx bx-x'></i>
        </button>
        <div class="image-lightbox__img-wrapper">
          <img src="" alt="" class="image-lightbox__img" id="lightbox-img" />
        </div>
        <div class="image-lightbox__caption" id="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const lightboxImg = lightbox.querySelector('#lightbox-img');
  const lightboxCaption = lightbox.querySelector('#lightbox-caption');
  const lightboxClose = lightbox.querySelector('#lightbox-close');
  const lightboxBackdrop = lightbox.querySelector('#lightbox-backdrop');

  function openLightbox(src, alt, captionText) {
    if (!src) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Imagem ampliada do produto';
    if (captionText && captionText.trim()) {
      lightboxCaption.textContent = captionText.trim();
      lightboxCaption.style.display = 'block';
    } else {
      lightboxCaption.textContent = '';
      lightboxCaption.style.display = 'none';
    }
    lightbox.classList.add('active');
    document.body.classList.add('lightbox-open');
    document.documentElement.classList.add('lightbox-open');
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.classList.remove('lightbox-open');
    document.documentElement.classList.remove('lightbox-open');
    setTimeout(() => {
      if (!lightbox.classList.contains('active')) {
        lightboxImg.src = '';
      }
    }, 250);
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener('click', closeLightbox);
  }

  // Press ESC to close
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Escape' || e.key === 'Esc') && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Delegated click for product images only
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target &&
      target.tagName === 'IMG' &&
      (target.classList.contains('products__img') ||
       target.classList.contains('featured__img') ||
       target.classList.contains('new__img') ||
       target.classList.contains('home__img'))
    ) {
      // Do not open if clicking inside cart or buttons
      if (target.closest('.cart') || target.closest('button')) {
        return;
      }
      
      const card = target.closest('.products__card, .featured__card, .new__card, .home__container');
      let title = '';
      if (card) {
        const titleEl = card.querySelector('.products__title, .featured__title, .new__title, .home__title');
        if (titleEl) {
          title = titleEl.textContent.replace(/\s+/g, ' ').trim();
        }
      }
      openLightbox(target.src, target.alt, title);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProductLightbox);
} else {
  initProductLightbox();
}
