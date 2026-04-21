let example = 20;

let x;

let my_cat;

x = 30;

console.log(example);
console.log(x);
console.log(my_cat);

my_cat = 50;

console.log(my_cat);

const coding = 80;

console.log(coding);

let greetings = "Hello";
let isim = "Alice";
let space = " ";

let mario = "87";
let superValue = "54";

let supermario = superValue + mario;

console.log(supermario);

console.log(example + my_cat);

let total = example + my_cat;

console.log(total);

let h = greetings + space + isim;

console.log(h);


let age = 25;
if (age>=18)
    if(age<21){

    }




//console.log(total)

hf = greetings + space + isim


//console.log(mario)


console.log(coding)


function e() {
    let y = "hello"
    console.log(y)
}

e();


function exampleConst(){
    const z =30;
    z= 40;
    console.log(z);
}

function greet(name){
    console.log(`Hello,${name}!`);
}
greet(`Fatma`) 

//Outputs: Hello, Fatma!
 

const add = function (a,b) {
    return a + b;
};
console.log(add(5,3));

//outputs: 8

let basePrice = 50;
let discount = 0.2

let finalPrice = basePrice - (basePrice*discount);

const multiply = (x,y) => x * y;

console.log(multiply(4,6));


//Outputs:24

// Selecting elements
let elementByld = document.getElementByld('myElement');
let elementByClass = document.getElementsByClassName('myClass');
let elementsByTag = document.getElementsByTagName('div');
let elementbyQuery = document.querySelector('.myClass');










// NAVIGATION
document.querySelectorAll("[data-target]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// CURSOR EFFECT
const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (dot) {
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  }
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.16;
  ringY += (mouseY - ringY) * 0.16;

  if (ring) {
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
  }
  requestAnimationFrame(animateRing);
}
animateRing();

// MAGNETIC EFFECT
document.querySelectorAll(".magnetic").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "translate(0,0)";
  });
});

// PROJECT DATA
const projects = {
  1: {
    index: "01",
    title: "Project 01",
    description:
      "Projet territorial et architectural présenté à travers une lecture séquencée : axonométrie, carte, schémas, plans, coupes et photos de site.",
    items: [
      {
        src: "images/img9.jpg",
        caption: "Axonométrie",
        col: "span 8",
      },
      {
        src: "images/Carte Territoriale A1_page-0001.jpg",
        caption: "Carte territoriale",
        col: "span 12",
      },
      {
        src: "images/Schema A1_page-0001.jpg",
        caption: "Schémas",
        col: "span 6",
      },
      {
        src: "images/PLAN RDC 200_page-0001.jpg",
        caption: "Plan RDC",
        col: "span 6",
      },
      {
        src: "images/PLAN R+1 200_page-0001.jpg",
        caption: "Plan étage",
        col: "span 6",
      },
      {
        src: "images/COUPE-ELEVATION_page-0001.jpg",
        caption: "Coupes / élévations",
        col: "span 12",
      },
      {
        src: "images/Photos de site A1_page-0001.jpg",
        caption: "Photos de site",
        col: "span 8",
      }
    ]
  },

  2: {
    index: "02",
    title: "Project 02",
    description:
      "Projet plus urbain et culturel. Présentation minimaliste en lecture libre : axonométrie, collage, plans, coupes, vue extérieure.",
    items: [
      {
        src: "images/axxono-projet2.jpg",
        caption: "Axonométrie",
        col: "span 8",
      },
      {
        src: "images/collage.jpg",
        caption: "Collage",
        col: "span 6",
      },
      {
        src: "images/RDC_page-0001.jpg",
        caption: "Plan RDC",
        col: "span 6",
      },
      {
        src: "images/PLANS ETAGES_page-0001.jpg",
        caption: "Plans étages",
        col: "span 6",
      },
      {
        src: "images/COUPES_page-0001.jpg",
        caption: "Coupes",
        col: "span 12",
      },
      {
        src: "images/vue ext.jpg",
        caption: "Vue extérieure",
        col: "span 8",
      }
    ]
  }
};

// MODAL
const modal = document.getElementById("projectModal");
const modalBackdrop = document.getElementById("projectModalBackdrop");
const modalClose = document.getElementById("projectModalClose");
const modalTitle = document.getElementById("projectModalTitle");
const modalIndex = document.getElementById("projectModalIndex");
const modalDescription = document.getElementById("projectModalDescription");
const gallery = document.getElementById("projectGallery");

document.querySelectorAll(".open-project").forEach((btn) => {
  btn.addEventListener("click", () => {
    const projectId = btn.dataset.project;
    openProject(projectId);
  });
});

function openProject(id) {
  const project = projects[id];
  if (!project) return;

  modalIndex.textContent = project.index;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  gallery.innerHTML = "";

  project.items.forEach((item, i) => {
    const wrapper = document.createElement("figure");
    wrapper.className = "gallery-item";
    wrapper.style.gridColumn = window.innerWidth > 760 ? item.col : "span 1";
    wrapper.style.transform = `translateY(${(i % 3) * 16}px)`;

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.caption;
    img.dataset.full = item.src;

    const cap = document.createElement("figcaption");
    cap.className = "gallery-caption";
    cap.textContent = item.caption;

    wrapper.appendChild(img);
    wrapper.appendChild(cap);
    gallery.appendChild(wrapper);

    wrapper.addEventListener("click", () => {
      openLightbox(item.src);
    });
  });

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeProject);
modalBackdrop.addEventListener("click", closeProject);

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src) {
  lightboxImage.src = src;
  lightbox.classList.add("active");
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lightboxImage.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// ESC KEY
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
    closeProject();
  }
});

// SIMPLE FORM FRONT-END
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Ton formulaire est prêt visuellement. Pour recevoir de vrais messages, il faudra connecter Formspree, Netlify Forms ou EmailJS.");
  });
}




const projects = [
  {
    number: '01',
    title: 'Centre Culturel Mihraplı',
    preview: 'mihrabli-axono.jpg',
    label: '01 / Axonométrie',
    archive: [
      { src: 'mihrabli-axono.jpg', size: 'large' },
      { src: 'mihrabli-carte.jpg', size: 'medium' },
      { src: 'mihrabli-extra.jpg', size: 'small' },
      { src: 'mihrabli-rdc.jpg', size: 'medium' },
      { src: 'mihrabli-etages.jpg', size: 'medium' },
      { src: 'mihrabli-coupes.jpg', size: 'large' },
      { src: 'mihrabli-toiture-coupe.jpg', size: 'medium' },
      { src: 'mihrabli-vue-ext.jpg', size: 'medium' }
    ]
  },
  {
    number: '02',
    title: 'Trames Fertiles en Transition',
    preview: 'projet2-axono.jpg',
    label: '02 / Axonométrie',
    archive: [
      { src: 'projet2-axono.jpg', size: 'large' },
      { src: 'projet2-carte.jpg', size: 'medium' },
      { src: 'projet2-schema.jpg', size: 'small' },
      { src: 'projet2-plan-rdc.jpg', size: 'medium' },
      { src: 'projet2-plan-r1.jpg', size: 'medium' },
      { src: 'projet2-coupes.jpg', size: 'large' },
      { src: 'projet2-perspectives.jpg', size: 'medium' },
      { src: 'projet2-photos.jpg', size: 'medium' }
    ]
  }
];