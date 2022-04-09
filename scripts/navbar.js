(function($) {
    $(function() {
      $('nav ul li > a:not(:only-child)').click(function(e) {
        $(this)
          .siblings('.nav-dropdown')
          .slideToggle()
        $('.nav-dropdown')
          .not($(this).siblings())
          .hide()
        e.stopPropagation()
      })
      $('html').click(function() {
        $('.nav-dropdown').hide()
      })
      // Toggle open and close nav styles on click
      $('#burger-menu').click(function() {
        $('nav ul').slideToggle();
      });
      $('#burger-menu').on('click', function() {
        this.classList.toggle('active')
      })
    })
})(jQuery)
