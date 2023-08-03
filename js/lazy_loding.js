
const images = document.querySelectorAll('img');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.onload = () => {
        img.removeAttribute('data-src');
      };
      imageObserver.unobserve(img);
    }
  });
}, observerOptions);

images.forEach(image => {
  imageObserver.observe(image);
});
