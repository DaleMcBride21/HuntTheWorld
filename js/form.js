const numberOfPointsRight = document.querySelector('#pointsRight');
const numberOfPointsLeft = document.querySelector('#pointsLeft');
const tipToTipSpread = document.querySelector('#tipToTipWhole');
const greatestSpreadWhole = document.querySelector('#greatestSpreadWhole');
const insideSpreadWhole = document.querySelector('#insideSpeadWhole');



function totalPoints() {
    const totalPointOutput = document.querySelector('#pointsTotal'); // Corrected selector
    const totalPoints = Number(numberOfPointsLeft.value) + Number(numberOfPointsRight.value);
    
    totalPointOutput.value = totalPoints; // Update the totalPoints field

    localStorage.setItem('pointsRight', numberOfPointsRight.value);
    localStorage.setItem('pointsLeft', numberOfPointsLeft.value);
    localStorage.setItem('pointsTotal', totalPoints);
}

numberOfPointsLeft.addEventListener('input', totalPoints);
numberOfPointsRight.addEventListener('input', totalPoints);

window.addEventListener('load', () => {
    const savedPointsRight = localStorage.getItem('pointsRight');
    const savedPointsLeft = localStorage.getItem('pointsLeft');
    const savedPointsTotal = localStorage.getItem('pointsTotal');

    if (savedPointsRight !== null) numberOfPointsRight.value = savedPointsRight;
    if (savedPointsLeft !== null) numberOfPointsLeft.value = savedPointsLeft;
    if (savedPointsTotal !== null) totalPointOutput.value = savedPointsTotal;
});

