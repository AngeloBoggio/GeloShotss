function myFunction() {

    var x = document.getElementById("myTopnav");

    if(x.className == "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    
}

const images = document.querySelectorAll(".gallery-item .image img");
let imgSrc;
// get images src onclick
console.log(images);

images.forEach((img) => {
    img.addEventListener("click", (e) =>{
        imgSrc = e.target.src;
        console.log(imgSrc);
        const image = document.querySelector(".lifeGuard");
        image.src = imgSrc;
        const container = document.querySelector(".modal");
        container.classList.remove("hide");
        window.scrollTo(0,0);
    });
});



document.querySelector(".modal").addEventListener("click", () => {
    const container = document.querySelector(".modal");
    container.classList.add("hide");
})
