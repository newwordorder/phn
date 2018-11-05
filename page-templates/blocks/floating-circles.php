<?php // FLOATING CIRCLES

if( get_row_layout() == 'floating_circles' ):

  $left_or_right = get_sub_field('floating_circles_left_or_right');
  $type = get_sub_field('floating_circles_type');

?>
<div class="floating__circles floating__circles--<?php echo $left_or_right?> floating__circles--<?php echo $type ?>" data-scene="scene">
  <div class="circle" data-depth="0.2"></div>
  <div class="circle" data-depth="0.4"></div>
  <div class="circle" data-depth="0.6"></div>

</div>

<?php
    endif;
?>