<?php // 50 50 SPLIT BLOCK

if( get_row_layout() == '50_50' ):

$text = get_sub_field('text_block');
$image = get_sub_field('image');
$flipLayout = get_sub_field('flip_layout');
$imageorvideo = get_sub_field('image_or_video');
$video = get_sub_field('video');


?>

<div class="imageblock switchable <?php if( !($flipLayout) == 'yes' ): echo 'switchable--switch'; endif; ?>">

  <div class="imageblock__content col-md-6 pos-right">
        <?php

        if( !empty($image)  && !$imageorvideo): ?>
      <div class="background-image-holder">
        <?php

          // vars
          $url = $image['url'];
          $alt = $image['alt'];

         ?>
        <img src="<?php echo $url; ?>" alt="<?php echo $alt; ?>"/>
        </div>

        <?php else: ?>
            <div class="video-cover h-100">
                <div class="background-image-holder">
                    <img alt="image" src="<?php echo $image['url']; ?>" />
                </div>
                <div class="video-play-icon"></div>
                <iframe class="h-100" data-src="https://www.youtube.com/embed/6p45ooZOOPo?autoplay=1" allowfullscreen="allowfullscreen"></iframe>
            </div>
        <?php endif; ?>

  </div>
  <div class="container">
      <div class="row <?php if( $flipLayout == 'yes' ): echo 'justify-content-end'; endif; ?>">
          <div class="col-md-5">
              <?php echo $text ?>
              <?php get_template_part( 'page-templates/blocks/block-partials/buttons' ); ?>
          </div>
      </div>
  </div>
</div>


<?php endif;

?>
