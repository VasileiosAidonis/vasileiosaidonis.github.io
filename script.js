$(document).ready(function () {
    $('.sidenav a:first').addClass('active');
    $('.tab-content:not(:first)').hide();
    $('.sidenav a').click(function (event) {
        event.preventDefault();
        var content = $(this).attr('href');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(content).show();
        $(content).siblings('.tab-content').hide();
    });
});


var progressMeter = document.querySelectorAll(".progressbar span");
var progressNumber = document.querySelectorAll('.progressbar span.bar_html .progressbar span.bar_css .progressbar span.bar_javascript .progressbar span.bar_php');
var progressNumberWidths = [101,101,101,100,100,100,100,101,100,101];
var moveTimers = [];
var width = 0;

/**
* AddEventListener at specific point
*/

document.getElementById("clickedskills").onclick = initProgressBar;

function initProgressBar() {
  for(var i = 0; i < progressMeter.length; i++){
    x(i);
  }
}

function x(i) {
    moveTimers[i] = setInterval(numberAddCheker, 50, i);
}

function numberAddCheker(i) {
    if(width >= progressNumberWidths[i]) {
        clearInterval(moveTimers[i])
    } else {
        width++;
        progressMeter[i].style.width = width + "%";
        if (width <= progressNumberWidths[0]) {
           document.getElementById('html-value-python').innerHTML = width + "%";
        }
        if (width <= progressNumberWidths[1]) {
           document.getElementById('html-value-python2').innerHTM = width + "%";
        }
        if (width <= progressNumberWidths[2]) {
           document.getElementById('html-value-php').innerHTML = width + "%";
        }
        if (width <= progressNumberWidths[3]) {
           document.getElementById('html-value-php2').innerHTML = width + "%";
        }
        if (width <= progressNumberWidths[4]) {
           document.getElementById('html-value-html').innerHTML = width + "%";
        }
        if (width <= progressNumberWidths[5]) {
           document.getElementById('html-value-html2').innerHTML = width + "%";
        }
        if (width <= progressNumberWidths[6]) {
           document.getElementById('html-value-css').innerHTML = width + "%";
        }
        if (width <= progressNumberWidths[7]) {
           document.getElementById('html-value-css2').innerHTML = width + "%";
        }
        if (width <= progressNumberWidths[8]) {
           document.getElementById('html-value-javascript').innerHTML = width + "%";
        }
        if (width <= progressNumberWidths[9]) {
           document.getElementById('html-value-javascript2').innerHTML = width + "%";
        }
    }
}
