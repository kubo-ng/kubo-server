const rentTab = document.querySelectorAll('.tab-btn');
const rentContents = document.querySelectorAll('.rent-cnt');

// Proflide Tab
function selectRent(e) {
    removeRentBg();
    removeRent();
    // Add Backgroud to current tab
    this.classList.add('tab-border');
    // Grab content from DOM
    const rentContentItem = document.querySelector(`.${this.id}-cnt`);
    // Add tab class
    rentContentItem.classList.add('show');
}

function removeRentBg() {
    rentTab.forEach((rent) => rent.classList.remove('tab-border'));
}

function removeRent() {
    rentContents.forEach((rent) => rent.classList.remove('show'));
}

// Listen for tab click
rentTab.forEach((rent) => rent.addEventListener('click', selectRent));