
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents page reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
    } else {
      alert("Please fill out all fields before submitting.");
    }

  window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-links a");

    sections.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop - 150;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        document.querySelector(".nav-links a[href='#" + id + "']").classList.add("active");
      }
    });
  });
  
  const gridItems = document.querySelectorAll(".grid-item");

  window.addEventListener("scroll", () => {
    gridItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        item.classList.add("show");
      }
    });
  });


  const fadeElements = document.querySelectorAll(".fade-in");

  window.addEventListener("scroll", () => {
    fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        element.classList.add("show");
      }
    });
  }
  }); 
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.2, // 20% visible
    rootMargin: '0px 0px -50px 0px'
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

