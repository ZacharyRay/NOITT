<!doctype html>
<html lang="en" id="html">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= bloginfo('name'); ?></title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
	<?php wp_head(); ?>
</head>
<body id="body">
<div class="main-wrapper">

<!-- Menu desktop -->
<nav id="menu-d">
    <div id="menu-wrapper-d">
    <?php wp_nav_menu(array('theme_location' => 'main')); ?>
    </div>
</nav>

<!-- Menu mobile -->
<nav id="menu-m">
<div class="menu_wrapper-m">
    <input id="burger" type="checkbox" />
    <label for="burger">
        <span></span>
        <span></span>
        <span></span>
    </label>
    <?php wp_nav_menu(array('theme_location' => 'main')); ?>
</div>
</nav>




<div class="content-grid">