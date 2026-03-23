// ===== CONTENT1 STICKY HEADER =====
const header = document.getElementById("stickyHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});
  

const img = document.getElementById("mainImage");
const lens = document.querySelector(".lens");
const result = document.getElementById("result");

const cx = 3;
const cy = 3;

// show zoom on hover
img.addEventListener("mouseenter", () => {
  lens.style.display = "block";
  result.style.display = "block";

  result.style.backgroundImage = `url(${img.src})`;
  result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;
});

img.addEventListener("mouseleave", () => {
  lens.style.display = "none";
  result.style.display = "none";
});

img.addEventListener("mousemove", moveLens);
lens.addEventListener("mousemove", moveLens);

function moveLens(e) {
  const rect = img.getBoundingClientRect();

  let x = e.clientX - rect.left - lens.offsetWidth / 2;
  let y = e.clientY - rect.top - lens.offsetHeight / 2;

  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
  if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;

  lens.style.left = x + "px";
  lens.style.top = y + "px";

  result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
}

// thumbnail click change image
document.querySelectorAll(".prod-img img").forEach(el => {
  el.addEventListener("click", () => {
    img.src = el.src;
    result.style.backgroundImage = `url(${el.src})`;
  });
});


// ===== CONTENT2 DOWNLOAD FULL TECHNICAL DATATSHEET =====
function openModal() {
  const bg = document.getElementById('modalbg');
  bg.style.display = 'flex'; 
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const bg = document.getElementById('modalbg');
  bg.style.display = 'none';
  document.body.style.overflow = '';
}


// ===== CONTENT3 REQUEST QUOTE =====
function openQuoteModal() {
  document.getElementById('quotebg').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeQuoteModal() {
  document.getElementById('quotebg').style.display = 'none';
  document.body.style.overflow = '';
}


// ===== CONTENT5 CAROUSEL =====
const carousel = document.getElementById('carousel');
const originalCards = Array.from(carousel.querySelectorAll('.card'));
const total = originalCards.length;
let current = 0;
let autoPlay;

originalCards.slice().reverse().forEach(card => {
  const clone = card.cloneNode(true);
  clone.classList.add('cloned');
  carousel.insertBefore(clone, carousel.firstChild);
});

originalCards.forEach(card => {
  const clone = card.cloneNode(true);
  clone.classList.add('cloned');
  carousel.appendChild(clone);
});

const allCards = Array.from(carousel.querySelectorAll('.card'));
const offset = total; 

function goTo(index) {
  current = index;

  const cardWidth = allCards[0].offsetWidth + 20;
  const wrapperWidth = carousel.parentElement.offsetWidth;
  const activeIndex = current + offset;
  const leftOffset = 300;
  const translateX = -(activeIndex * cardWidth) + leftOffset;
  carousel.style.transform = `translateX(${translateX}px)`;

  if (current >= total) {
    setTimeout(() => {
      carousel.style.transition = 'none';
      current = 0;
      const resetIndex = current + offset;
      const resetX = (wrapperWidth / 2) - (cardWidth / 2) - (resetIndex * cardWidth);
      carousel.style.transform = `translateX(${resetX}px)`;
      setTimeout(() => { carousel.style.transition = 'transform 0.6s ease'; }, 50);
    }, 600);
  }

  if (current < 0) {
    setTimeout(() => {
      carousel.style.transition = 'none';
      current = total - 1;
      const resetIndex = current + offset;
      const resetX = (wrapperWidth / 2) - (cardWidth / 2) - (resetIndex * cardWidth);
      carousel.style.transform = `translateX(${resetX}px)`;
      setTimeout(() => { carousel.style.transition = 'transform 0.6s ease'; }, 50);
    }, 600);
  }
}

function startAutoPlay() {
  autoPlay = setInterval(() => goTo(current + 1), 3000);
}

function stopAutoPlay() {
  clearInterval(autoPlay);
}

carousel.addEventListener('mouseenter', stopAutoPlay);
carousel.addEventListener('mouseleave', startAutoPlay);

goTo(0);
startAutoPlay();


// ===== TESTIMONIAL CAROUSEL =====
const testimonialCarousel = document.querySelector('.testimonial-cards');
const testimonialOriginalCards = Array.from(testimonialCarousel.querySelectorAll('.testimonial-card'));
const testimonialTotal = testimonialOriginalCards.length;
let testimonialCurrent = 0;
let testimonialAutoPlay;

const testimonialLeftOffset = 200;

testimonialOriginalCards.slice().reverse().forEach(card => {
  const clone = card.cloneNode(true);
  clone.classList.add('cloned');
  testimonialCarousel.insertBefore(clone, testimonialCarousel.firstChild);
});

testimonialOriginalCards.forEach(card => {
  const clone = card.cloneNode(true);
  clone.classList.add('cloned');
  testimonialCarousel.appendChild(clone);
});

const testimonialAllCards = Array.from(testimonialCarousel.querySelectorAll('.testimonial-card'));
const testimonialOffset = testimonialTotal;

function testimonialGoTo(index) {
  testimonialCurrent = index;

  const cardWidth = testimonialAllCards[0].offsetWidth + 20;
  const activeIndex = testimonialCurrent + testimonialOffset;
  const translateX = -(activeIndex * cardWidth) + testimonialLeftOffset;
  testimonialCarousel.style.transform = `translateX(${translateX}px)`;

  if (testimonialCurrent >= testimonialTotal) {
    setTimeout(() => {
      testimonialCarousel.style.transition = 'none';
      testimonialCurrent = 0;

      const resetIndex = testimonialCurrent + testimonialOffset;
      const resetX = -(resetIndex * cardWidth) + testimonialLeftOffset;

      testimonialCarousel.style.transform = `translateX(${resetX}px)`;

      setTimeout(() => {
        testimonialCarousel.style.transition = 'transform 0.6s ease';
      }, 50);
    }, 600);
  }

  if (testimonialCurrent < 0) {
    setTimeout(() => {
      testimonialCarousel.style.transition = 'none';
      testimonialCurrent = testimonialTotal - 1;

      const resetIndex = testimonialCurrent + testimonialOffset;
      const resetX = -(resetIndex * cardWidth) + testimonialLeftOffset;

      testimonialCarousel.style.transform = `translateX(${resetX}px)`;

      setTimeout(() => {
        testimonialCarousel.style.transition = 'transform 0.6s ease';
      }, 50);
    }, 600);
  }
}

function testimonialStartAutoPlay() {
  testimonialAutoPlay = setInterval(() => testimonialGoTo(testimonialCurrent + 1), 3000);
}

function testimonialStopAutoPlay() {
  clearInterval(testimonialAutoPlay);
}

testimonialCarousel.addEventListener('mouseenter', testimonialStopAutoPlay);
testimonialCarousel.addEventListener('mouseleave', testimonialStartAutoPlay);

testimonialGoTo(0);
testimonialStartAutoPlay();