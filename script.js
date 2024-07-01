const bannerImg = document.getElementById("banner-img");

bannerImg.addEventListener("mouseover", () =>{
    getBanner()
})

bannerImg.addEventListener("mouseout", () => {
    defaultBanner()
})

function getBanner(){
    bannerImg.src= "img/banner2.jpg";
}

function defaultBanner(){
    bannerImg.src = "img/banner1.png";
}

