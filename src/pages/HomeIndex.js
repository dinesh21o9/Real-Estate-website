function addEventOnElement(element, type, listener) {
    if (element) {
      if (Array.isArray(element)) {
        element.forEach((el) => {
          if (el && typeof el.addEventListener === 'function') {
            el.addEventListener(type, listener);
          }
        });
      } else if (typeof element.addEventListener === 'function') {
        element.addEventListener(type, listener);
      }
    }
  }
  
  const navbar = document.querySelector("[data-navbar]");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const navToggler = document.querySelector("[data-nav-toggler]");
  
  const toggleNav = function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
  };
  
  addEventOnElement(navToggler, "click", toggleNav);
  
  const closeNav = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
  };
  addEventOnElement(navLinks, "click", closeNav);
  
  const tabBtns = document.querySelectorAll("[data-tab-btn]");
  
  let lastClickedTabBtn = tabBtns[0];
  
  const changeTab = function () {
    lastClickedTabBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedTabBtn = this;
  };
  
  addEventOnElement(tabBtns, "click", changeTab);
  