document.getElementById('convert').addEventListener('click', function() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    var result;

    if (unit === 'celsius') {
        result = (temperature - 32) * (5/9);
        document.getElementById('result').textContent = temperature.toFixed(2) + "°F is equal to " + result.toFixed(2) + "°C";
    } else {
        result = (temperature * 9/5) + 32;
        document.getElementById('result').textContent = temperature.toFixed(2) + "°C is equal to " + result.toFixed(2) + "°F";
    }
});
