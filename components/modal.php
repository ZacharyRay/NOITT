<?php $about_content = get_field('about'); ?>
<div id="modal-wrap">
    <div id="modal-wrapper">
        <div id="modal-bg"></div>
        <div id="modal-box">
            <div id="modal-text-one"><?= $about_content['about_person_one'] ?></div>
            <div id="modal-text-two"><?= $about_content['about_person_two'] ?></div>
            <div id="modal-text-three"><?= $about_content['about_person_three'] ?></div>
        </div>
        <div id="exit"><p id="exit-icon">X</p></div>
    </div>
</div>
<div id="follower">
        <div id="circle1"><p>CLICK</p></div>
    </div>