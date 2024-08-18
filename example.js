//console.log('Script Loaded');


// Data structure for menu links
var menuLinks = [
    { text: 'Jason', href: '#', subLinks: [{ text: 'He/Him', href: '#' }] },
    { text: 'Location', href: '#', subLinks: [{ text: 'Greensboro, NC', href: '#' }] }
];

// Dynamically generate top menu
const topMenuEl = document.getElementById('top-menu');
menuLinks.forEach(link => {
    const a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.textContent = link.text;
    a.style.marginRight = '40px';
    topMenuEl.appendChild(a);
});

// Add interactivity for submenus
const subMenuEl = document.getElementById('sub-menu');
topMenuEl.addEventListener('click', function(e) {
    e.preventDefault();
    const clickedLink = menuLinks.find(link => link.text === e.target.textContent);

    if (clickedLink && clickedLink.subLinks) {
        subMenuEl.innerHTML = ''; // Clear existing submenu items
        clickedLink.subLinks.forEach(subLink => {
            const a = document.createElement('a');
            a.setAttribute('href', subLink.href);
            a.textContent = subLink.text;
            subMenuEl.appendChild(a);
        });
        subMenuEl.style.display = 'block';
    } else {
        subMenuEl.style.display = 'none';
    }
});
// Dropdown functionality for "Facts about me" and "Questions"
document.getElementById('facts-dropdown').addEventListener('click', function() {
    const content = document.getElementById('facts-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('questions-dropdown').addEventListener('click', function() {
    const content = document.getElementById('questions-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

// Function to place the circle at the click position
function placeCircle(circleElement) {
    circleElement.style.top = `${mouseY}px`;
    circleElement.style.left = `${mouseX}px`;
}

// Function to change colors
function newColors(circleElement) {
    circleElement.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Initialize variables
let paintInterval;
let mouseCircle = document.createElement('div');
mouseCircle.style.width = '50px';
mouseCircle.style.height = '50px';
mouseCircle.style.borderRadius = '50%';
mouseCircle.style.position = 'absolute';
mouseCircle.style.backgroundColor = '#000';
mouseCircle.style.pointerEvents = 'none'; // Prevents the circle from interfering with other clicks
document.body.appendChild(mouseCircle);

// Event listeners to handle mouse actions
document.addEventListener('pointerdown', function(e) {
    paintInterval = setInterval(() => placeCircle(mouseCircle), 10);
    mouseCircle.style.display = 'block';
    mouseX = e.clientX - 25; // Adjusting the circle to be centered on the click
    mouseY = e.clientY - 25;
});

document.addEventListener('pointerup', function() {
    clearInterval(paintInterval);
    setTimeout(() => newColors(mouseCircle), 0);
});

document.addEventListener('pointermove', function(e) {
    mouseX = e.clientX - 25;
    mouseY = e.clientY - 25;
});









