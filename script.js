// ==========================================
// DARK / LIGHT MODE
// ==========================================

const themeToggle =
document.getElementById(
"theme-toggle"
);

themeToggle.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"light-theme"
);

const icon =
themeToggle.querySelector("i");

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

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const navbar =
document.querySelector(
".navbar"
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 80){

navbar.style.background =
"rgba(15,23,42,.92)";

navbar.style.backdropFilter =
"blur(25px)";

}else{

navbar.style.background =
"rgba(0,0,0,.25)";
}
});

// ==========================================
// PROFILE TILT EFFECT
// ==========================================

const profile =
document.querySelector(
".profile-wrapper"
);

if(profile){

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
((x / rect.width)-0.5)*18;

const rotateX =
((y / rect.height)-0.5)*-18;

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
}

// ==========================================
// SCROLL REVEAL
// ==========================================

const revealElements =
document.querySelectorAll(

".about-card,\
.project-showcase,\
.skill-category,\
.timeline-item,\
.certificate-card,\
.contact-card"

);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(
entry.isIntersecting
){

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

(el)=>{

revealObserver.observe(el);

}
);

// ==========================================
// ACTIVE NAV LINK
// ==========================================

const sections =
document.querySelectorAll(
"section"
);

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.clientHeight;

if(
window.scrollY >= sectionTop
){

current =
section.getAttribute("id");
}
});

navLinks.forEach(link=>{

link.classList.remove(
"active-link"
);

if(
link.getAttribute("href")
===
`#${current}`
){

link.classList.add(
"active-link"
);
}
});
});

// ==========================================
// PROJECT HOVER EFFECT
// ==========================================

const showcases =
document.querySelectorAll(
".project-showcase"
);

showcases.forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width)-0.5)*6;

const rotateX =
((y / rect.height)-0.5)*-6;

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
`;
});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
`
perspective(1000px)
rotateX(0deg)
rotateY(0deg)
`;
});
});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute(
"href"
)
);

target.scrollIntoView({

behavior:"smooth"

});
});
});

// ==========================================
// PAGE LOADER EFFECT
// ==========================================

window.addEventListener(
"load",
()=>{

document.body.classList.add(
"loaded"
);

});