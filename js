(function ($) {
  document.querySelector(function () {
    document.querySelector("nav ul li > a:not(:only-child)").click(function (e) {
      document.querySelector(this).siblings(".nav-dropdown").slideToggle();
      document.querySelector(".nav-dropdown").not(document.querySelector(this).siblings()).hide();
      e.stopPropagation();
    });
    document.documentElement.click(function () {
      document.querySelector(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    document.querySelector("#nav-toggle").click(function () {
      document.querySelector("nav ul").slideToggle();
    });
    document.querySelector("#nav-toggle").addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
})(jQuery);
