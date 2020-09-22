
<div id="footer-standard-wrapper">
<?php
$home_content = get_field('home');
$option_fields = get_field('options', 'option');
$social_fields = $option_fields['socials'];
?>
    <div id="some-footer-standard">
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

    <div id="copyright-footer-standard">
        <p>© NOITT 2020</p>
    </div>
</div>



</div>
</div>
<?php wp_footer('standard'); ?>
</body>
</html>