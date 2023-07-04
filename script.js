'use strict';
const containers = document.querySelectorAll('.cont');
const targetSections = document.querySelectorAll('.target-sec');

window.addEventListener('scroll', checkScroll);
function checkScroll() {
  targetSections.forEach((targetSection, index) => {
    const sectioPosition = targetSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectioPosition < windowHeight / 2) {
      containers[index].classList.add('animate');
    } else {
      containers[index].classList.remove('animate');
    }
  });
}

// for counting figures
window.addEventListener('scroll', checkSectionViewpoint);
const windowHeight = window.innerHeight;
let isInViewPort = false;

let count = 0;

function handleScroll() {
  const figures = document.getElementsByClassName('count-figure');

  for (const figure of figures) {
    console.log(figure);
    const figurePosition = figure.getBoundingClientRect().top;
    const targetNumber = parseInt(figure.dataset.target);
    if (figurePosition < windowHeight && figure.textContent < targetNumber) {
      count++;
      figure.textContent = count;
    }
  }
}

function checkSectionViewpoint() {
  const section = document.getElementsByClassName('counters')[0];
  const sectioPosition = section.getBoundingClientRect().top;

  if (sectioPosition < windowHeight) {
    isInViewPort = true;
    window.addEventListener('scroll', handleScroll);
  }
}
checkSectionViewpoint();
