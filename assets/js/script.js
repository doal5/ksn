window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const scrollThreshold = 50; // Adjust the threshold as needed

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const overviewSection = document.getElementById("overview");
  const listItems = overviewSection.querySelectorAll(".group li");

  function checkIfInView() {
    const sectionPos = overviewSection.getBoundingClientRect();
    const viewHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (sectionPos.top <= viewHeight && sectionPos.bottom >= 0) {
      listItems.forEach((item) => {
        item.classList.add("show");
      });
    } else {
      listItems.forEach((item) => {
        item.classList.remove("show");
      });
    }
  }

  window.addEventListener("scroll", checkIfInView);
  checkIfInView(); // Memeriksa saat halaman pertama kali dimuat
});

document.addEventListener("DOMContentLoaded", function () {
  const sectionTitle = document.querySelector(".sectiontitle");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll("p").forEach((p) => {
          p.style.animationPlayState = "running";
        });
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(sectionTitle);
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const icon = document.getElementById("icon");
  const checkbox = document.getElementById("flexSwitchCheckDefault");

  if (checkbox.checked) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}

document.querySelectorAll(".one_third").forEach((item) => {
  item.addEventListener("click", function () {
    // Anda bisa menambahkan aksi lain di sini, misalnya menampilkan modal
    console.log("Element clicked:", this);

    // Contoh efek tambahan: menambahkan kelas yang memberikan animasi tambahan
    this.classList.add("clicked");
    setTimeout(() => {
      this.classList.remove("clicked");
    }, 300);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var closeButton = document.getElementById("closeModalBtn");
  var video = document.getElementById("modalVideo");
  function checkViewportSize() {
    // Detect mobile viewport (e.g., width <= 768px)
    if (window.innerWidth <= 768) {
      video.pause(); // Play video on mobile
    } else {
      video.pause();
    }
  }

  // Initial check
  checkViewportSize();
  // Pause video when close button is clicked
  closeButton.addEventListener("click", function () {
    if (video) {
      video.pause(); // Pause the video
    }
  });

  // Optional: Pause video when modal is hidden
  var modal = document.getElementById("cardModal3");
  modal.addEventListener("hidden.bs.modal", function () {
    if (video) {
      video.pause(); // Pause the video when modal is hidden
    }
  });

  // Play video when clicked
  video.addEventListener("click", function () {
    if (video.paused) {
      video.play(); // Play the video
    } else {
      video.pause(); // Pause the video
    }
  });
});
