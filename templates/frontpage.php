<?php
/*
Template Name: Frontpage
*/
get_header();
$home_content = get_field('home');
$option_fields = get_field('options', 'option');
$social_fields = $option_fields['socials'];

?>

<!--- Image and video background -->

<?php
if(!empty($home_content)){
if( $home_content ): ?>
    <div id="home-bg-wrapper">
        <div id="bg-image-wrap">
            <div id="bg-image" style="background-image: url('<?= $home_content['bg_image_home']; ?>')"></div>
            <div id="bg-image-m" style="background-image: url('<?= $home_content['bg_image_mobile']; ?>')"></div>
        </div>
        <div id="hero-logo">
            <div id="logo" style="background-image: url('<?= $home_content['logo']; ?>')"></div>
        </div>
    <div id="socials-wrapper">
        <div id="socials-box">
            <?php foreach($social_fields as $socials){ ?>
            <div id="so-me">
                <a href="<?= $socials['link'] ?>">
                    <div id="so-me-icon" style="background-image: url('<?= $socials['icon'] ?>')"></div>
                </a>
            </div>
           <?php } ?>
        </div>
    </div>
    </div>
<?php endif; }?>

<?php get_footer(); ?>

