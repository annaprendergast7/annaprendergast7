const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['IMG_0133.jpeg', 'IMG_0197.jpeg', 'IMG_4119.jpeg', 'IMG_4776.jpeg', 'IMG_4953.jpeg'];
const alt = ['boots', 'camp', 'dog', 'squirrel', 'deadshow'];
/*Declaring the alternative text for each image file */

/* Looping through images */
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]); 
    newImage.setAttribute('alt', alt [i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
 btn.setAttribute("class",xxx);
 btn.textContent = "Lighten";
 overlay.style.backgroundColor = "rbga(0,0,0,0.5)";
