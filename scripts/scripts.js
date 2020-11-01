$(function () {
	//change avatar on hover
	$("#avatar").on("mouseover", function () {
		$("#avatar").attr("src", "img/Brandon.jpg");
	});
	$("#avatar").on("mouseout", function () {
		$("#avatar").attr("src", "img/Brandon_bw_bg.jpg");
	});

	//set buttons active
	// var projectBtnContainer = document.getElementById("projectBtnContainer");
	// var btns = projectBtnContainer.getElementsByClassName("btn");
	// for (var i = 0; i < btns.length; i++) {
	// 	btns[i].addEventListener("click", function () {
	// 		var current = document.getElementsByClassName("active");
	// 		current[0].className = current[0].className.replace(" active", "");
	// 		this.className += " active";
	// 	});
	// }

	var gallery = document.querySelector("#gallery");

	var mixer = mixitup(gallery, {
		controls: {
			toggleLogic: "and",
		},
		selectors: {
			control: "[data-mixitup-control]",
		},
		animation: {
			enable: true,
			// effects: 'fade translateZ(-100px)',
			// effectsIn: 'fade translateY(-100%)',
			// effectsOut: 'fade translateY(-100%)',
			// easing: 'ease-in-out',
			// easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
			// duration: 800,
			// effects: "rotateY(-25deg)",
			// perspectiveDistance: "2000px",
		},
	});

	// Add smooth scrolling to all links
	$(document).on("click", 'a[href^="#"]', function (event) {
		event.preventDefault();
		if (this.hash !== "" && this.hash !== "#testimonialCarousel") {
			$("html, body").animate(
				{
					scrollTop: $($.attr(this, "href")).offset().top + -75,
				},
				800
			);
		}
	});

	//Close dropdown navbar after click
	$(".navbar-nav>li>a").on("click", function () {
		$(".navbar-collapse").collapse("hide");
	});

	checkAnimation();

	//grow graph bars
	function startAnimation(direction) {
		var speed = 2000;
		var delay = 100;
		var skillObjArray = [
			{ skill: "#_html-css", percent: "80%" },
			{ skill: "#_javascript", percent: "90%" },
			{ skill: "#_bootstrap", percent: "90%" },
			{ skill: "#_react", percent: "75%" },
			{ skill: "#_photoshop", percent: "85%" },
		];
		$(".skills").each(function () {
			for (
				var i = 0;
				i < skillObjArray.length;
				++i
			) // skillObjArray.forEach((obj) =>{
			{
				$(this)
					.find(skillObjArray[i].skill)
					.delay(delay)
					.animate({ width: direction + skillObjArray[i].percent }, speed);
			}
		});
	}

	function resetAnimation() {
		// $(".skills").each(function () {
		// 	$(this).find("#_html-css").width(0);
		// 	$(this).find("#_javascript").width(0);
		// 	$(this).find("#_bootstrap").width(0);
		// 	$(this).find("#_react").width(0);
		// 	$(this).find("#_photoshop").width(0);
		// });
		startAnimation("-");
	}

	function isElementInViewport(elem) {
		var $elem = $(elem);
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		// Get the position of the element on the page.
		var elemTop = Math.round($elem.offset().top);
		var elemBottom = elemTop + $elem.height();

		return elemTop < viewportBottom && elemBottom > viewportTop;
	}

	// Check if it's time to start the animation.
	function checkAnimation() {
		var $elem = $(".bar");
		// // If the animation has already been started
		// if ($elem.hasClass("start")) {
		// 	return;
		// }

		// if (!isElementInViewport($elem)) {
		// 	$elem.removeClass("start");
		// 	resetAnimation();
		// }

		if ($elem.hasClass("start")) {
			return;
		}

		if (isElementInViewport($elem)) {
			$elem.addClass("start");
			startAnimation("");
			$elem.css({ border: "rgba(0, 0, 0, .5) solid 2px" });
		}
	}

	// Capture scroll events
	$(window).scroll(function () {
		checkAnimation();
	});
});
