<?php 
/*
Template Name: About
*/
$about_content = get_field('about');
get_header();
?>


<!-- Hero Hover -->
<div id="hero-about">
    <div id="hero-hover-wrapper">
        <div id="images-container">
            <div id="person-one" class="hero-hover-img" style="background-image: url('<?= $about_content['person_one']; ?>')"></div>
            <div id="person-two" class="hero-hover-img" style="background-image: url('<?= $about_content['person_two']; ?>')"></div>
            <div id="person-three" class="hero-hover-img" style="background-image: url('<?= $about_content['person_three']; ?>')"></div>
            <div id="person-one-m" class="hero-hover-img-m" style="background-image: url('<?= $about_content['person_one_mobile']; ?>')"></div>
            <div id="person-two-m" class="hero-hover-img-m" style="background-image: url('<?= $about_content['person_two_mobile']; ?>')"></div>
            <div id="person-three-m" class="hero-hover-img-m" style="background-image: url('<?= $about_content['person_three_mobile']; ?>')"></div>
        </div>
        <!-- Arrow down -->
        <div id="arrow-wrapper">
            <div id="arrow">
                <p>Scroll</p>
            </div>
        </div>
        <!-- About h1 -->
        <div id="about-header-wrapper">
            <div id="about-header">
                <h1>ABOUT</h1>
                <h2>Tap on us</h2>
            </div>
        </div>
    </div>
    <!-- Hero overlay -->
    <div id="hover-overlay-wrapper">
        <div id="hover-overlay-one" class="hov-over"></div>
        <div id="hover-overlay-two" class="hov-over"></div>
        <div id="hover-overlay-three" class="hov-over"></div>
    </div>
    <div id="hover-overlay-wrapper-m">
        <div id="hover-overlay-one-m" class="hov-over-m"></div>
        <div id="hover-overlay-two-m" class="hov-over-m"></div>
        <div id="hover-overlay-three-m" class="hov-over-m"></div>
    </div>
</div>

<!-- modal -->
<?php get_template_part('components/modal') ?>

<!-- About section -->
<div id="about-wrap">
    <div id="about-section-wrapper">
        <div id="about-textbox">
            <div id="text"><?= $about_content['about_text']; ?></div>
        </div>
    </div>
    <div id="about-image-wrapper">
        <div id="about-image-wrap">
            <div id="about-image" style="background-image: url('<?= $about_content['about_image']; ?>')"></div>
        </div>
    </div>
</div>
<?php get_footer('standard'); ?>