// Parallax Effect for Video Background
window.addEventListener('scroll', () => {
    const video = document.querySelector('video');
    video.style.transform = `translateY(${window.scrollY * 0.5}px)`;
});

// Dynamic Hover Effect
document.querySelectorAll('.con div').forEach((product) => {
    product.addEventListener('mouseover', () => {
        product.style.transform = 'scale(1.10)';
    });

    product.addEventListener('mouseout', () => {
        product.style.transform = 'scale(1)';
    });
});

// Countdown Timer
const countdown = document.createElement('div');
countdown.style.position = 'absolute';
countdown.style.top = '10px';
countdown.style.left = '50%';
countdown.style.transform = 'translateX(-50%)';
countdown.style.color = 'white';
countdown.style.fontSize = '24px';
document.body.appendChild(countdown);

const launchDate = new Date('2025-09-12T00:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = launchDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.textContent = `Next Model Launch In: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Comparison Table Popup
const comparisonButton = document.createElement('button');
comparisonButton.textContent = 'Compare Features';
comparisonButton.style.position = 'fixed';
comparisonButton.style.bottom = '10px';
comparisonButton.style.left = '50%';
comparisonButton.style.transform = 'translateX(-50%)';
comparisonButton.style.padding = '10px 20px';
comparisonButton.style.cursor = 'pointer';
document.body.appendChild(comparisonButton);

comparisonButton.addEventListener('click', () => {
    const comparisonTable = document.createElement('div');
    comparisonTable.style.position = 'fixed';
    comparisonTable.style.top = '50%';
    comparisonTable.style.left = '50%';
    comparisonTable.style.transform = 'translate(-50%, -50%)';
    comparisonTable.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    comparisonTable.style.color = 'white';
    comparisonTable.style.padding = '20px';
    comparisonTable.style.borderRadius = '10px';
    comparisonTable.style.zIndex = '10';

    comparisonTable.innerHTML = `
        <h2>iPhone Comparison</h2>
        <table style="width:100%;color:white;">
            <tr><th>Feature</th><th>iPhone 16  <br></br>   </th><th>iPhone 16 Pro</th></tr>
            <tr><td>Display</td><td>6.1 inch      <br></br>  </td><td>6.3 inch</td></tr>
            <tr><td>Camera</td><td>48Mp, 12Mp    <br> </br>  </td><td>48Mp, 12Mp, 48Mp</td></tr>
            <tr><td>Storage</td><td>8GB / 128GB    <br></br> </td><td>8GB / 256GB</td></tr>
            <tr><td>Chip</td><td>A18 Bionic        <br></br>  </td><td>A18 Pro</td></tr>
        </table>
        <button id="closeBtn" style="margin-top:20px; padding:10px 20px; cursor:pointer;">Close</button>
    `;

    document.body.appendChild(comparisonTable);

    document.getElementById('closeBtn').addEventListener('click', () => {
        comparisonTable.remove();
    });
});



