// js for projects sliders
let currentIndex = 0;

const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
const visible = 3;  
const movePercent = 100 / visible;

const dots = document.querySelectorAll(".dot");

function updateCarousel() {
  const offset = -(currentIndex * movePercent);
  document.querySelector(".carousel-track").style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  // Adjust dot logic for mobile (show only the dot for the current item if viewing 1 at a time)
  let activeDotIndex = currentIndex; 
  if (dots[activeDotIndex]) dots[activeDotIndex].classList.add("active");
}

document.querySelector(".next-arrow").onclick = () => {
  // Logic updated to handle different visible counts in media queries if you adjust CSS later
  const currentVisible = window.innerWidth <= 768 ? 1 : visible;
  if (currentIndex < totalItems - currentVisible) {
    currentIndex++;
    updateCarousel();
  }
};

document.querySelector(".prev-arrow").onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
};

dots.forEach((dot, i) => {
  dot.onclick = () => {
    // Prevent dots from allowing a view that cuts off the last slide
    const currentVisible = window.innerWidth <= 768 ? 1 : visible;
    if (i <= totalItems - currentVisible) {
      currentIndex = i;
      updateCarousel();
    }
  };
});

updateCarousel();
//end
// about us js codes

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  item.querySelector(".faq-head").addEventListener("click", () => {
    
    // close other items
    document.querySelectorAll(".faq-item").forEach(i => {
      if (i !== item) {
        i.classList.remove("open");
        i.querySelector(".faq-body").style.display = "none";
      }
    });

    // toggle clicked item
    const body = item.querySelector(".faq-body");
    item.classList.toggle("open");

    body.style.display = item.classList.contains("open") 
      ? "block" 
      : "none";
  });
});
//end

// contact codes

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Replaced alert() with console log and a simple UI message, as alert() is disallowed
  console.log("Message sent!");
  // Simple message box logic (assuming you want a simple confirmation)
  const messageBox = document.querySelector('.message-box');
  messageBox.textContent = "Thank you! Your message has been sent successfully and I will get back to you soon.";
  
  // Optionally reset the form after a delay
  setTimeout(() => {
    e.target.reset();
    messageBox.innerHTML = 'Thank you for visiting <strong class="text-white">SAM.DEV</strong>.<br> If you need support, want to collaborate, or<br> have any inquiries, please fill out the contact<br> form below.<br> I respond to all messages within <strong class="text-white">24–48 hours.</strong>';
  }, 3000);
});
// end

// codes for back to top button icon
const btn = document.getElementById("back-to-top");

  // Show/hide button after scrolling 300px
  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  // Scroll directly to top on click
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

/* ------------------------------------------------------------- */
/* DARK/LIGHT MODE TOGGLE                   */
/* ------------------------------------------------------------- */

document.getElementById('darkModeToggle').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('light-mode');

    // Update the icon based on the mode
    const icon = document.querySelector('#darkModeToggle i');
    if (body.classList.contains('light-mode')) {
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
    } else {
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
    }
});

/* ------------------------------------------------------------- */
/* MOBILE NAV TOGGLE                       */
/* ------------------------------------------------------------- */

const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// Close nav when a link is clicked (for better mobile UX)
navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('open');
    });
});