// Function to update the local time in the designated span
function currentTime() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
}

// Function to update the UTC clock
function updateClock() {
    const d = new Date(); 
    const utchr = d.getUTCHours(); 
    const timeDiff = -8; // Change this value for different time zones
    let adjTimeDiff = utchr + timeDiff;
    let timeZone; 

    // Adjust time difference
    if (adjTimeDiff >= 24) {
        adjTimeDiff -= 24;
    } else if (adjTimeDiff < 0) {
        adjTimeDiff += 24;
    }

    // Set the time zone label
    if (timeDiff === -8) {
        timeZone = "PST (Pacific Standard Time)";
    } else if (timeDiff === -5) {
        timeZone = "EST (Eastern Standard Time)";
    } else {
        timeZone = "UTC";
    }

    // Update the UTC clock dynamically (if needed)
    const utcClock = document.getElementById('utcClock');
    if (utcClock) {
        utcClock.textContent = `${adjTimeDiff}:00 ${timeZone}`;
    }
}

// Initial function calls and periodic updates
currentTime();
setInterval(currentTime, 1000);
updateClock();

// Dynamically create the partner logos section
const section = document.createElement('section');
const ul = document.createElement('ul');
ul.id = 'partners';

// List of partners
const partners = [
    { src: 'partners/partner-bustour.png', alt: 'Partner Bus Tour' },
    { src: 'partners/partner-cabinrental.png', alt: 'Partner Cabin Rental' },
    { src: 'partners/partner-campingadv.png', alt: 'Partner Camping Adventure' },
    { src: 'partners/partner-collegetours.png', alt: 'Partner College Tours' },
    { src: 'partners/partner-rentalbike.png', alt: 'Partner Rental Bike' },
    { src: 'partners/partner-tourgroup.png', alt: 'Partner Tour Group' }
];

// Dynamically generate the list of partner logos
partners.forEach(partner => {
    const li = document.createElement('li');
    li.className = 'partner';

    const img = document.createElement('img');
    img.src = partner.src;
    img.alt = partner.alt;

    li.appendChild(img);
    ul.appendChild(li);
});

section.appendChild(ul);
document.body.appendChild(section);




