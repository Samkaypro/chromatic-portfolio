document.addEventListener("DOMContentLoaded", function() {
    const headerHamburger = document.getElementById("headerHamburgerr");
    const mobileNavigation = document.getElementById("mobileNavigationr");
  
    headerHamburger.addEventListener("click", function() {
      const displayStyle = window.getComputedStyle(mobileNavigation).getPropertyValue("display");
      if (displayStyle === "none") {
        mobileNavigation.style.display = "block"; 
      } else {
        mobileNavigation.style.display = "none"; 
      }
    });
  });