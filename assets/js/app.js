jQuery(document).ready(function($) {
    

 // so me footer-standard

 $(document).ready(function() {
  $('#some-footer-standard').hide();
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#some-footer-standard').fadeIn();
  } else {
    $('#some-footer-standard').fadeOut();
  }
});

    // about arrow fade in and out on scroll

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#arrow-wrapper, #arrow').fadeOut();
      } else {
        $('#arrow-wrapper, #arrow').fadeIn();
      }
    });

    // about hover events
    $(document).ready(function() {
      // people selector

            // person one
    document.getElementById("hover-overlay-one").onmouseover = function(){mouseOverOne()};
    document.getElementById("hover-overlay-one").onmouseout = function(){mouseOutOne()};
            //person two
    document.getElementById("hover-overlay-two").onmouseover = function(){mouseOverTwo()};
    document.getElementById("hover-overlay-two").onmouseout = function(){mouseOutTwo()};
            //person three
    document.getElementById("hover-overlay-three").onmouseover = function(){mouseOverThree()};
    document.getElementById("hover-overlay-three").onmouseout = function(){mouseOutThree()};
    
        // people actions

            // person one
    function mouseOverOne(){
        document.getElementById("person-two").style.opacity = "0";
        //document.getElementById("person-two").style.transition = "all 1.5s";
        document.getElementById("person-three").style.opacity = "0";
        //document.getElementById("person-three").style.transition = "all 1.5s";
    }
    function mouseOutOne(){
        document.getElementById("person-two").style.opacity = "1";
        //document.getElementById("person-two").style.transition = "all 1.5s";
        document.getElementById("person-three").style.opacity = "1";
        //document.getElementById("person-three").style.transition = "all 1.5s";
    }
            // person two
    function mouseOverTwo(){
    document.getElementById("person-one").style.opacity = "0";
    //document.getElementById("person-one").style.transition = "all 1.5s";
    document.getElementById("person-three").style.opacity = "0";
    //document.getElementById("person-three").style.transition = "all 1.5s";
        
    }
    function mouseOutTwo(){
        document.getElementById("person-one").style.opacity = "1";
        //document.getElementById("person-one").style.transition = "all 1.5s";
        document.getElementById("person-three").style.opacity = "1";
        ////document.getElementById("person-three").style.transition = "all 1.5s";
    }
// person three
function mouseOverThree(){
    document.getElementById("person-one").style.opacity = "0";
    //document.getElementById("person-one").style.transition = "all 1.5s";
    document.getElementById("person-two").style.opacity = "0";
    //document.getElementById("person-two").style.transition = "all 1.5s";
        
    }
    function mouseOutThree(){
        document.getElementById("person-one").style.opacity = "1";
        //document.getElementById("person-one").style.transition = "all 1.5s";
        document.getElementById("person-two").style.opacity = "1";
        //document.getElementById("person-two").style.transition = "all 1.5s";
    }
    });
        
    // modal frontpage

    $(document).ready(function() {
      // desktop
      document.getElementById("hover-overlay-one").onclick = function(){
        showModal();
        showPersonOne();
      };
      document.getElementById("hover-overlay-two").onclick = function(){
        showModal();
        showPersonTwo();
      };
      document.getElementById("hover-overlay-three").onclick = function(){
        showModal();
        showPersonThree();
      };
      document.getElementById("modal-bg").onclick = function(){
        removeModal()
      };
      document.getElementById("exit-icon").onclick = function(){
        removeModal()
      };
      var modal = document.getElementById('modal-wrap');
      
      // mobile
      document.getElementById("hover-overlay-one-m").onclick = function(){
        showModal();
        showPersonOne();
      };
      document.getElementById("hover-overlay-two-m").onclick = function(){
        showModal();
        showPersonTwo();
      };
      document.getElementById("hover-overlay-three-m").onclick = function(){
        showModal();
        showPersonThree();
      };

      // menu mobile fix for when menu is clicked while modal is active

      document.getElementById("burger").onclick = function(){
        removeModal();
      }

      // show modal function
      function showModal(){
        modal.style.display = "block";
        document.getElementById('body').style.overflow = "hidden";
        };
      // remove modal function
      function removeModal(){
        modal.style.display = "none";
        document.getElementById('body').style.overflow = "visible";
      }
      function showPersonOne(){
        $('#modal-text-one').css("display", "block");
        $('#modal-text-two').css("display", "none");
        $('#modal-text-three').css("display", "none");
      };
      function showPersonTwo(){
        $('#modal-text-one').css("display", "none");
        $('#modal-text-two').css("display", "block");
        $('#modal-text-three').css("display", "none");
      };
      function showPersonThree(){
        $('#modal-text-one').css("display", "none");
        $('#modal-text-two').css("display", "none");
        $('#modal-text-three').css("display", "block");
      }


    });

    // curser

    $(document).ready(function() {
      (function () {
        var follower, init, mouseX, mouseY, positionElement, printout, timer;
      
        follower = document.getElementById('follower');
      
        printout = document.getElementById('printout');
      
        mouseX = event => {
          return event.clientX;
        };
      
        mouseY = event => {
          return event.clientY;
        };
      
        positionElement = event => {
          var mouse;
          mouse = {
            x: mouseX(event),
            y: mouseY(event) };
      
          follower.style.top = mouse.y + 'px';
          return follower.style.left = mouse.x + 'px';
        };
      
        timer = false;
      
        window.onmousemove = init = event => {
          var _event;
          _event = event;
          return timer = setTimeout(() => {
            return positionElement(_event);
          }, 1);
        };
      
      }).call(this);
      
      // cursor on scroll

      $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
          $('#hover-overlay-wrapper').css("cursor", "default");
          $('#follower').css("display", "none");
        } else {
          $('#hover-overlay-wrapper').css("cursor", "none");
          $('#follower').css("display", "block");
        }
      });
    });

    // cursor on mouseover menu

    $( "#menu-d" ).mouseover(function() {
      $('#follower').css("display", "none");
    });
    $( "#menu-d" ).mouseout(function(){
      $('#follower').css("display", "block");
    });

});
