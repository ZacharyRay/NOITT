<?php 
/* 
Template Name: Contact
*/
get_header();
$contact_fields = get_field('contact');
if( have_rows('contact') ):
while( have_rows('contact') ): the_row(); 
?>

<!-- Contact h1 -->

<div id="hero-music-wrapper">
    <!-- Hero image -->
    <div id="hero-music-wrap">
        <div id="hero-music-image" style="background-image: url('<?= $contact_fields['image'] ?>')"></div>
        <div id="hero-music-image-m" style="background-image: url('<?= $contact_fields['image_mobile'] ?>')"></div>
        <div id="hero-music-text-box">
            <h1>CONTACT</h1>
        </div>
    </div>
    <!-- Arrow down -->
    <div id="arrow-wrapper">
        <div id="arrow">
            <p>Scroll</p>
        </div>
    </div>
</div>

<!-- Contact teaser -->
<div id="teaser-wrapper">
    <p>Drop us a message!</p>
</div>

<!-- forminator -->
<div id="contact-form-wrapper">
    <div id="forminator">
        <?php echo do_shortcode('[forminator_form id="103"]') ?>
    </div>
</div>

<?php get_footer('standard') ?>
<?php endwhile; ?>
<?php endif; ?>