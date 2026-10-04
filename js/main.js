document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var scrollThreshold = 40;

  function initHeader() {
    var header = document.getElementById("siteHeader");
    var backToTop = document.getElementById("backToTop");

    function onScroll() {
      var scrolled = window.scrollY > scrollThreshold;
      if (header) {
        header.classList.toggle("scrolled", scrolled);
      }
      if (backToTop) {
        backToTop.classList.toggle("show", window.scrollY > 420);
      }
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (backToTop) {
      backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  function initCurrentYear() {
    var year = document.getElementById("currentYear");
    if (year) {
      year.textContent = new Date().getFullYear();
    }
  }

  function initReveal() {
    var items = document.querySelectorAll(".fade-up");
    if (!items.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  function initGalleryFilter() {
    var buttons = document.querySelectorAll(".filter-btn");
    var items = document.querySelectorAll("#galleryGrid .gallery-item");
    if (!buttons.length || !items.length) {
      return;
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.getAttribute("data-filter");

        buttons.forEach(function (other) {
          other.classList.toggle("active", other === button);
        });

        items.forEach(function (item) {
          var matches = filter === "all" || item.getAttribute("data-category") === filter;
          item.classList.toggle("is-hidden", !matches);
        });
      });
    });
  }

  function initNewsletter() {
    var form = document.getElementById("newsletterForm");
    var note = document.getElementById("newsletterNote");
    if (!form || !note) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var input = document.getElementById("newsletterEmail");
      var value = input ? input.value.trim() : "";
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

      note.classList.remove("is-error", "is-ok");

      if (!valid) {
        note.textContent = "Please enter a valid email address, for example name@mail.com.";
        note.classList.add("is-error");
        if (input) {
          input.focus();
        }
        return;
      }

      note.textContent = "Thank you! Please check your inbox to confirm the subscription.";
      note.classList.add("is-ok");
      form.reset();
    });
  }

  function initBookingForm() {
    var form = document.getElementById("bookingForm");
    if (!form) {
      return;
    }

    var success = document.getElementById("formSuccess");
    var dateInput = document.getElementById("tourDate");

    if (dateInput) {
      var today = new Date();
      var month = String(today.getMonth() + 1).padStart(2, "0");
      var day = String(today.getDate()).padStart(2, "0");
      dateInput.min = today.getFullYear() + "-" + month + "-" + day;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        var firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) {
          firstInvalid.focus();
        }
        return;
      }

      form.classList.remove("was-validated");
      form.reset();

      if (success) {
        success.classList.add("show");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
        window.setTimeout(function () {
          success.classList.remove("show");
        }, 9000);
      }
    });

    form.addEventListener("reset", function () {
      form.classList.remove("was-validated");
      if (success) {
        success.classList.remove("show");
      }
    });
  }

  initHeader();
  initCurrentYear();
  initReveal();
  initGalleryFilter();
  initNewsletter();
  initBookingForm();
});
