import $ from 'jquery'
import 'slick-carousel'

const toTop = document.querySelector(".cd-top");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 1000) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
})

$('.single-item').slick({
	arrows: true,
	prevArrow: '.prev',
	nextArrow: '.next',
});

$(document).ready(function(){
	$('.home-img2-button .btn-service').addClass('btn-white');
	$('.mission').hide();
	
	$('.home-img2-button button').click(function(){
		$('.home-img2-button button').removeClass('btn-white');
		$(this).addClass('btn-white');
		$('.tab-switch section').hide();

		var tabActive = $(this).attr('data-target');
		$(tabActive).show();
		return false;
	})
});

function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("value", 100, 25, 5000);