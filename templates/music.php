<?php 
/*
Template Name: Music
*/
get_header();
$music_fields = get_field('music');?>
<?php if( have_rows('music') ):
while( have_rows('music') ): the_row(); 
$media_one = get_sub_field('media_box_one');
$media_two = get_sub_field('media_box_two');
$media_three = get_sub_field('media_box_three');
$media_four = get_sub_field('media_box_four');

$media_five = get_sub_field('media_box_five');
$media_six = get_sub_field('media_box_six');
$media_seven = get_sub_field('media_box_seven');
$media_eight = get_sub_field('media_box_eight');
$stream = get_sub_field('stream_links');
?>
<div id="hero-music-wrapper">
    <!-- Hero image -->
    <div id="hero-music-wrap">
        <div id="hero-music-image" style="background-image: url('<?= $music_fields['hero_image'] ?>')"></div>
        <div id="hero-music-image-m" style="background-image: url('<?= $music_fields['hero_image_mobile'] ?>')"></div>
        <div id="hero-music-text-box">
            <h1>MUSIC</h1>
        </div>
    </div>
    <!-- Arrow down -->
    <div id="arrow-wrapper">
        <div id="arrow">
            <p>Scroll</p>
        </div>
    </div>
</div>

<!-- Media headline -->

<div id="media-headline-wrapper">
    <p>Media</p>
</div>

<!-- Music videos -->

<div id="media-wrapper-d">
    <div id="media-wrap">
        <a href="#modal-image-one" rel="modal:open" id="modal-link-one">
            <div class="media" style="background-image: url('<?= $media_one['image_one']; ?>')">
            <?= $media_one['video_one']; ?>
            </div>
        </a>
        <a href="#modal-image-two" rel="modal:open" id="modal-link-two">
            <div class="media" style="background-image: url('<?= $media_two['image_two']; ?>')">
            <?= $media_two['video_two']; ?>
            </div>
        </a>
        <a href="#modal-image-three" rel="modal:open" id="modal-link-three">
            <div class="media" style="background-image: url('<?= $media_three['image_three']; ?>')">
            <?= $media_three['video_three']; ?>
            </div>
        </a>
        <a href="#modal-image-four" rel="modal:open" id="modal-link-four">
            <div class="media" style="background-image: url('<?= $media_four['image_four']; ?>')">
            <?= $media_four['video_four']; ?>
            </div>
        </a>
    </div>
</div>

<div id="media-wrapper-d">
    <div id="media-wrap">
        <a href="#modal-image-five" rel="modal:open" id="modal-link-five">
            <div class="media" style="background-image: url('<?= $media_five['image_five']; ?>')">
            <?= $media_one['video_five']; ?>
            </div>
        </a>
        <a href="#modal-image-six" rel="modal:open" id="modal-link-six">
            <div class="media" style="background-image: url('<?= $media_six['image_six']; ?>')">
            <?= $media_two['video_sex']; ?>
            </div>
        </a>
        <a href="#modal-image-seven" rel="modal:open" id="modal-link-seven">
            <div class="media" style="background-image: url('<?= $media_seven['image_seven']; ?>')">
            <?= $media_three['video_seven']; ?>
            </div>
        </a>
        <a href="#modal-image-eight" rel="modal:open" id="modal-link-eight">
            <div class="media" style="background-image: url('<?= $media_eight['image_eight']; ?>')">
            <?= $media_four['video_eight']; ?>
            </div>
        </a>
    </div>
</div>

<!-- Modals -->

<div id="modal-wrapper">
    <div id="modal-image-one" class="modal" style="background-image: url('<?= $media_one['image_one']; ?>')"></div>
    <div id="modal-image-two" class="modal" style="background-image: url('<?= $media_two['image_two']; ?>')"></div>
    <div id="modal-image-three" style="background-image: url('<?= $media_three['image_three']; ?>')"></div>
    <div id="modal-image-four" style="background-image: url('<?= $media_four['image_four']; ?>')"></div>
    <div id="modal-image-five" class="modal" style="background-image: url('<?= $media_five['image_five']; ?>')"></div>
    <div id="modal-image-six" class="modal" style="background-image: url('<?= $media_six['image_six']; ?>')"></div>
    <div id="modal-image-seven" style="background-image: url('<?= $media_seven['image_seven']; ?>')"></div>
    <div id="modal-image-eight" style="background-image: url('<?= $media_eight['image_eight']; ?>')"></div>
</div>

<!-- Stream -->

<div id="media-headline-wrapper">
    <p>Stream</p>
</div>

<div id="stream-wrapper">
    <div id="stream-wrap">
        <?php foreach($stream as $stream_content){ ?>
        <a href="<?= $stream_content['stream_link'] ?>">
            <div id="stream-logo" style="background-image: url('<?= $stream_content['stream_logo'] ?>')"></div>
        </a>
        <?php }?>
    </div>
</div>


<?php endwhile; ?>
<?php endif; ?>



<?php get_footer('standard'); ?>