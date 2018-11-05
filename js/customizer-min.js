/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */
!function(i){
// Site title and description.
wp.customize("blogname",function(t){t.bind(function(t){i(".site-title a").text(t)})}),wp.customize("blogdescription",function(t){t.bind(function(t){i(".site-description").text(t)})}),
// Header text color.
wp.customize("header_textcolor",function(t){t.bind(function(t){"blank"===t?i(".site-title a, .site-description").css({clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}):(i(".site-title a, .site-description").css({clip:"auto",position:"relative"}),i(".site-title a, .site-description").css({color:t}))})})}(jQuery);