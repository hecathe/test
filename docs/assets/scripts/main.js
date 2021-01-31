svg4everybody();

//slider
if(document.querySelector('.presentation__slider')) {
    $('.slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        // responsive: [
        //     {
        //         breakpoint: 2048,
        //         settings: "unslick"
        //     },
        //     {
        //        breakpoint: 1023,
        //        settings: {
        //           slidesToShow: 1,
        //           slidesToScroll: 1
        //         }
        //     },
        // ]
    });
}

//accordion brief
if(document.querySelectorAll('.accordion__list')) {
	var acc = document.querySelectorAll('.accordion__btn');
	var i;

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // Close all other accordions
            for (var j = 0; j < acc.length; j++) {
            var button = acc[j];
            
            if (button === this) continue;
            
            button.classList.remove("active");
            var panel = button.nextElementSibling;
            panel.style.maxHeight = null;
            }

            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}