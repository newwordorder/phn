<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package understrap
 */

$container = get_theme_mod( 'understrap_container_type' );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?>">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link href="https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre:400,700|Libre+Franklin:400,700" rel="stylesheet">
	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>



	<!-- ******************* The Navbar Area ******************* -->
<div id="header" class="header" >

		<a class="skip-link screen-reader-text sr-only" href="#content"><?php esc_html_e( 'Skip to content', 'understrap' ); ?></a>

			<div class=" container-fluid" >
				<div class="header__inner">
				<div class="header__circle header__circle--primary"></div>
				<div class="header__circle header__circle--accent"></div>
				<div class="header__circle header__circle--dark"></div>

				<a href="<?php echo get_home_url(); ?>" id="site-logo" class="header__logo">

					<img class="logo logo--white" src="<?php bloginfo('template_directory'); ?>/img/logo.svg" alt="New Life">

				</a>

				<a id="toggleMenu" class="toggle-menu hamburger">
						<span class="line"></span>
						<span class="line"></span>
						<span class="line"></span>
				</a>


				<!-- The WordPress Menu goes here -->
				<?php wp_nav_menu(
					array(
						'theme_location'  => 'primary',
						'container_class' => 'header__navigation',
						'container_id'    => 'headerNavDropdown',
						'menu_class'      => 'header-nav navigation',
						'fallback_cb'     => '',
						'menu_id'         => 'main-menu',
						'walker'          => new understrap_WP_Bootstrap_Navwalker(),
					)
				); ?>
				</div>
			</div><!-- .container -->
			<svg class="shape-overlays" viewBox="0 0 100 100" preserveAspectRatio="none">
				<path class="shape-overlays__path"></path>
				<path class="shape-overlays__path"></path>
				<path class="shape-overlays__path"></path>
				<path class="shape-overlays__path"></path>
			</svg>
	</div><!-- #header -->

		<div class="menu d-flex justify-content-between align-items-center">
			<div class="container h-75">
						<div class="col-12 text-align-center d-flex justify-content-center align-items-center"><h1>Year in review</h1></div>
					<div class="row h-100">
					<?php
						$page_ids=get_all_page_ids();
						$homepageID = get_option('page_on_front');
						foreach($page_ids as $page):
								if($page != $homepageID &&  get_page($page)->post_status === 'publish'):
							$title = get_the_title($page);
							$backgroundImage = get_field('background_image', $page);
							$image = $backgroundImage['background_image'];
							?>
								<div class="col-sm-6 col-lg-4 d-flex justify-content-center align-items-center p-0">
									<a class="menu__card" href="<?php echo get_page_link($page); ?>">
									<h5 class="menu__text"><?php echo $title; ?></h5>
									<div class="overlay"></div>
									<div class="background-image-holder menu__image">
										<img src="<?php echo $image['url'] ;?>" />
									</div>
									<div class="menu__card--after">
										<span></span>
										<span></span>
										<span></span>
									</div>
									</a>
								</div>

							<?php
							endif;
						endforeach;

						?>
					</div>
				</div>
			</div>

	<div class="page">
