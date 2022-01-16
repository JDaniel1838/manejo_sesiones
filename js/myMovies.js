const $nextBtn = document.querySelector(".avanzar"),
        $prevBtn = document.querySelector(".rotroceder"),
        $slides = document.querySelectorAll(".movie1");
    
    let i = 0;
    
$nextBtn.addEventListener("click", (e) => {
    $slides[i].classList.remove("active");
        i++
        if (i >= $slides.length) {
            i = 0;  
        }
        $slides[i].classList.add("active");
});

$prevBtn.addEventListener("click", (e) => {
    $slides[i].classList.remove("active");
    i--;
        if (i < 0) {
            i = ($slides.length-1);
        }
    $slides[i].classList.add("active");
});

    setInterval(() => {
        $slides[i].classList.remove("active");
        i++
        if (i >= $slides.length) {
            i = 0;  
        }
        $slides[i].classList.add("active");
    }, 4000);
