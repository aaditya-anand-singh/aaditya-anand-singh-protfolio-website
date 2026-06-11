// ============================
// DARK / LIGHT THEME
// ============================

const themeBtn =
document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-theme"
    );

    const icon =
    themeBtn.querySelector("i");

    if(
        document.body.classList.contains(
            "light-theme"
        )
    ){

        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );

    }else{

        icon.classList.remove(
            "fa-sun"
        );

        icon.classList.add(
            "fa-moon"
        );
    }
});


// ============================
// NAVBAR SCROLL EFFECT
// ============================

window.addEventListener(
"scroll",
() => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(15,23,42,.85)";

        navbar.style.backdropFilter =
        "blur(20px)";

    }else{

        navbar.style.background =
        "rgba(0,0,0,.15)";
    }
});


// ============================
// PROFILE 3D TILT
// ============================

const profile =
document.querySelector(
".profile-container"
);

profile.addEventListener(
"mousemove",
(e)=>{

    const rect =
    profile.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    const rotateY =
    ((x / rect.width)-0.5)*20;

    const rotateX =
    ((y / rect.height)-0.5)*-20;

    profile.style.transform =

    `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    `;
});

profile.addEventListener(
"mouseleave",
()=>{

    profile.style.transform =
    `
    perspective(1000px)
    rotateX(0deg)
    rotateY(0deg)
    `;
});


// ============================
// SCROLL REVEAL
// ============================

const revealElements =
document.querySelectorAll(

".stat-card, .hero-left, .hero-right"

);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:0.15
}

);

revealElements.forEach(

(el)=>observer.observe(el)

);


// ============================
// COUNTER ANIMATION
// ============================

const counters =
document.querySelectorAll(
".stat-card h3"
);

const speed = 100;

counters.forEach(counter=>{

const updateCount = ()=>{

const target =
counter.innerText
.replace("+","");

const count =
+counter.getAttribute(
"data-count"
);

const increment =
target/speed;

if(count < target){

counter.setAttribute(
"data-count",
Math.ceil(
count + increment
)
);

counter.innerText =
Math.ceil(
count + increment
);

setTimeout(
updateCount,
20
);

}else{

counter.innerText =
target;
}
};

counter.setAttribute(
"data-count",
0
);

updateCount();

});


// ============================
// SMOOTH BUTTON HOVER
// ============================

const buttons =
document.querySelectorAll(

".primary-btn,.secondary-btn"

);

buttons.forEach(btn=>{

btn.addEventListener(
"mouseenter",
()=>{

btn.style.transform =
"translateY(-5px)";
});

btn.addEventListener(
"mouseleave",
()=>{

btn.style.transform =
"translateY(0px)";
});

});


// ============================
// PAGE LOAD ANIMATION
// ============================

window.addEventListener(
"load",
()=>{

document.body.classList.add(
"loaded"
);

});