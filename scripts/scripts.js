$(function () {
	//change avatar on hover
	$("#avatar").on("mouseover", function () {
		$("#avatar").attr("src", "img/Brandon.jpg");
	});
	$("#avatar").on("mouseout", function () {
		$("#avatar").attr("src", "img/Brandon_bw_bg.jpg");
	});

	//set buttons active
	var projectBtnContainer = document.getElementById("projectBtnContainer");
	var btns = projectBtnContainer.getElementsByClassName("btn");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
		});
	}

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
	$("a").on("click", function (event) {
		if (this.hash !== "" && this.hash !== "#testimonialCarousel") {
			event.preventDefault();
			// var hash = this.hash;
			var $target = $(this.hash);
			var targetOffset = $target.offset().top - 75;
			$("html, body").animate(
				{
					scrollTop: targetOffset,
				},
				800,
				function () {
					window.location.hash = $target;
				}
			);
		}
	});
});
