let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    // Remove the 'show' class from all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("show"); 
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  
    
    // Show the current slide with the folding effect
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add("show");  
    
    // Change image every 3 seconds
    setTimeout(showSlides, 3000);
}


