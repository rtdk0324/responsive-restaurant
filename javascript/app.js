$(document).ready(function() {
  // toggler navbar btn
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });

  const navbarTop = document.querySelector("#navbar-id").offsetTop;

  // sticky navbar less paddin
  $(window).scroll(function() {
    console.log(navbarTop);
    let position = $(this).scrollTop();
    if (position >= navbarTop) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });

  // smooth scroll
  $(".nav-item a, .header-link, #back-to-top").click(function(link) {
    link.preventDefault();

    let target = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 20
        },
        3000
      );
  });

  // back to top
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= navbarTop) {
      $("#back-to-top").addClass("scrollTop");
    } else {
      $("#back-to-top").removeClass("scrollTop");
    }
  });

  // ripples
  $("#header, .info").ripples({
    dropRadius: 25,
    perturbance: 0.6
  });

  // magnific popup
  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true
    }
    // other options
  });
});
