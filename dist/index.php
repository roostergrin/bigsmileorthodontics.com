<!DOCTYPE html>
<html <?php language_attributes(); ?> lang="en" role='main'>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body>
  <div id='app' role='application'></div>
  <?php wp_footer(); ?>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCOqNHJ0YR4fsuLjbMFe1OciIJ9B4wEgPg" async defer></script>
  <script type="text/javascript">
    var $buoop = {notify:{e:-6,f:-4,o:-4,s:-2,c:-4},insecure:true,api:5};

    function $buo_f(){
      var e = document.createElement("script");
      e.src = "//browser-update.org/update.min.js";
      document.body.appendChild(e);
    };

    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}
  </script>
  <script src="https://onlineschedulingv2.threadcommunication.com" type="text/javascript"></script>
<script type="text/javascript">
  OpenChair.init({
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnaW4iOiJiaWdzbWlsZW9ydGhvZG9udGljcy5jb20iLCJwcmFjdGljZV9pZCI6IjQzOSJ9.4S4Vx0Pc9voobZkRsMHbg6gfIeU-1XNANCvqJ8A1UVc",
    hideMainButton: true,
  })
</script>
<?php if (is_page('Home') ):?>
<script src="https://whyilike.com/review/widget/js/2253/bottom-left/1/popup-widget.js"></script>
<?php endif; ?>
<script>
  let prevScrollpos = window.pageYOffset;
  let navEl = document.querySelector(".navigation-mobile__content");

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navEl.style.height = "auto";
      navEl.style.opacity = "1";
    } else {
      navEl.style.height = "0";
      navEl.style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
  }
</script>
</body>
</html>
