<?php 
/*
Template Name: Tour
*/
get_header();
$tour_fields = get_field('tour');
if( have_rows('tour') ):
while( have_rows('tour') ): the_row(); 
?>

<!-- Tour dates h1 -->

<div id="hero-music-wrapper">
    <!-- Hero image -->
    <div id="hero-music-wrap">
        <div id="hero-music-image" style="background-image: url('<?= $tour_fields['hero'] ?>')"></div>
        <div id="hero-music-image-m" style="background-image: url('<?= $tour_fields['hero_mobile'] ?>')"></div>
        <div id="hero-music-text-box">
            <h1>TOUR</h1>
        </div>
    </div>
    <!-- Arrow down -->
    <div id="arrow-wrapper">
        <div id="arrow">
            <p>Scroll</p>
        </div>
    </div>
</div>



<!-- Bands in town -->

<div id="tour-wrapper"><?php the_bandsintown_events(['data-background-color=#eeeeee']) ?></div>

<?php endwhile; ?>
<?php endif; ?>




<?php get_footer('standard') ?>