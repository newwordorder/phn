<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package understrap
 */

?>
<div class="preloader-wrap">
	<div class="preloader__inner"></div>
</div>

<footer id="footer">
		<div class="container text-center">
			<div class="row">
					<div class="col-sm-12">
						<a href="<?php echo get_home_url(); ?>" id="" class="footer__logo">
							<img class="footer__logo" src="<?php bloginfo('template_directory'); ?>/img/logo.svg" alt="Logo">
						</a>
					</div>
			</div>
			<div class="row">
				<div class="col-sm-12 text-center">
					<a target="_blank" href="www.brisbanenorthphn.org.au">Website</a> | <a target="_blank" href="https://www.facebook.com/BrisbaneNorthPHN/">Facebook</a> | <a target="_blank" href="https://twitter.com/BrisNorthPHN">Twitter</a> | <a target="_blank" href="https://www.youtube.com/user/MetroNorthBrisbaneML">Youtube</a>
				</div>
			</div>
		</div>
</footer>


<button onclick="topFunction()" id="topBtn" title="Go to top"><i class="fas fa-arrow-up"></i></button>		



<?php wp_footer(); ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

<script src="<?php echo get_template_directory_uri(); ?>/js/header-min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/flickity.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/fontawesome-all-min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/parallax-min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/typed.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/smooth-scroll.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/ytplayer.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/aos.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/theme.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/countUp.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/scripts-min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/easings-min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/parallax_perspective-min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/menuoverlay-min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/onload-min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/TweenMax.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/TimelineMax.min.js"></script>

<script>
	AOS.init();
</script>



</body>

</html>
