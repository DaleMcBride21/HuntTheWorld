// Function to calculate the Mule Deer score
function calculateScore() {
  // Capture the input values from the form
  const pointsRight = parseFloat(document.getElementById('pointsRight').value) || 0;
  const pointsLeft = parseFloat(document.getElementById('pointsLeft').value) || 0;
  const tipToTip = parseFloat(document.getElementById('tipToTipWhole').value) || 0;
  const greatestSpread = parseFloat(document.getElementById('greatestSpreadWhole').value) || 0;
  const insideSpread = parseFloat(document.getElementById('insideSpreadWhole').value) || 0;
  
  const abnormalRight1 = parseFloat(document.getElementById('abnormalRight').value) || 0;
  const abnormalLeft1 = parseFloat(document.getElementById('abnormalLeft').value) || 0;
  const abnormalRight2 = parseFloat(document.getElementById('abnormalRight2').value) || 0;
  const abnormalLeft2 = parseFloat(document.getElementById('abnormalLeft2').value) || 0;
  const abnormalRight3 = parseFloat(document.getElementById('abnormalRight3').value) || 0;
  const abnormalLeft3 = parseFloat(document.getElementById('abnormalLeft3').value) || 0;
  const abnormalRight4 = parseFloat(document.getElementById('abnormalRight4').value) || 0;
  const abnormalLeft4 = parseFloat(document.getElementById('abnormalLeft4').value) || 0;
  const abnormalRight5 = parseFloat(document.getElementById('abnormalRight5').value) || 0;
  const abnormalLeft5 = parseFloat(document.getElementById('abnormalLeft5').value) || 0;
  const abnormalRight6 = parseFloat(document.getElementById('abnormalRight6').value) || 0;
  const abnormalLeft6 = parseFloat(document.getElementById('abnormalLeft6').value) || 0;
  
  const mainBeamRight = parseFloat(document.getElementById('mainBeamRight').value) || 0;
  const mainBeamLeft = parseFloat(document.getElementById('mainBeamLeft').value) || 0;
  const firstPointRight = parseFloat(document.getElementById('firstPointRight').value) || 0;
  const firstPointLeft = parseFloat(document.getElementById('firstPointLeft').value) || 0;
  const secondPointRight = parseFloat(document.getElementById('secondPointRight').value) || 0;
  const secondPointLeft = parseFloat(document.getElementById('secondPointLeft').value) || 0;
  const thirdPointRight = parseFloat(document.getElementById('thirdPointRight').value) || 0;
  const thirdPointLeft = parseFloat(document.getElementById('thirdPointLeft').value) || 0;
  const fourthPointRight = parseFloat(document.getElementById('fourthPointRight').value) || 0;
  const fourthPointLeft = parseFloat(document.getElementById('fourthPointLeft').value) || 0;
  
  const circumferenceMainBeamBottomRight = parseFloat(document.getElementById('circumferenceMainBeamBottomRight').value) || 0;
  const circumferenceMainBeamBottomLeft = parseFloat(document.getElementById('circumferenceMainBeamBottomLeft').value) || 0;
  const circumferenceBetweenFirstSecondPointRight = parseFloat(document.getElementById('circumferenceBetweenFirstSecondPointRight').value) || 0;
  const circumferenceBetweenFirstSecondPointLeft = parseFloat(document.getElementById('circumferenceBetweenFirstSecondPointLeft').value) || 0;
  const circumferenceBetweenSecondThirdPointRight = parseFloat(document.getElementById('circumferenceBetweenSecondThirdPointRight').value) || 0;
  const circumferenceBetweenSecondThirdPointLeft = parseFloat(document.getElementById('circumferenceBetweenSecondThirdPointLeft').value) || 0;
  const circumferenceBetweenThirdFourthRight = parseFloat(document.getElementById('circumferenceBetweenThirdFourthRight').value) || 0;
  const circumferenceBetweenThirdFourthLeft = parseFloat(document.getElementById('circumferenceBetweenThirdFourthLeft').value) || 0;

  // Boone and Crockett score calculation (simplified version)
  const totalPoints = pointsRight + pointsLeft;
  const spreadScore = Math.max(tipToTip, greatestSpread, insideSpread);
  const beamLengthScore = (mainBeamRight + mainBeamLeft);
  
  // Abnormal Points calculation
  const abnormalPoints = (abnormalRight1 + abnormalLeft1) + 
                         (abnormalRight2 + abnormalLeft2) + 
                         (abnormalRight3 + abnormalLeft3) + 
                         (abnormalRight4 + abnormalLeft4) + 
                         (abnormalRight5 + abnormalLeft5) + 
                         (abnormalRight6 + abnormalLeft6);
  
  const circumferenceScore = (circumferenceMainBeamBottomRight + circumferenceMainBeamBottomLeft) +
                             (circumferenceBetweenFirstSecondPointRight + circumferenceBetweenFirstSecondPointLeft) + 
                             (circumferenceBetweenSecondThirdPointRight + circumferenceBetweenSecondThirdPointLeft) + 
                             (circumferenceBetweenThirdFourthRight + circumferenceBetweenThirdFourthLeft);
                             
  const pointLengthScore = (firstPointRight + firstPointLeft) + 
                           (secondPointRight + secondPointLeft) + 
                           (thirdPointRight + thirdPointLeft) + 
                           (fourthPointRight + fourthPointLeft);

  // Calculate the gross score (sum of all relevant measurements)
  const grossScore = totalPoints + spreadScore + beamLengthScore + abnormalPoints + circumferenceScore + pointLengthScore;

  // Display the result
  document.getElementById('result').innerText = `Gross Score: ${grossScore.toFixed(2)}`;

  // Save the result to localStorage
  localStorage.setItem('deerGrossScore', grossScore.toFixed(2));
}

// Save each input value to localStorage when changed
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', () => {
    localStorage.setItem(input.id, input.value);
  });

  // Load the stored value on page load
  const storedValue = localStorage.getItem(input.id);
  if (storedValue) {
    input.value = storedValue;
  }
});

// Load the gross score from localStorage if available
window.onload = function() {
  const storedGrossScore = localStorage.getItem('deerGrossScore');
  if (storedGrossScore) {
    document.getElementById('result').innerText = `Gross Score: ${storedGrossScore}`;
  }
};
