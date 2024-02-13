
function checkTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);

    if (temperature > 30) {
        alert("It's a hot day!");
    } else {
        alert("The weather is moderate.");
    }
}





function generateMarksheet() {
    var name = document.getElementById("name").value;
    var mathsMarks = parseFloat(document.getElementById("maths").value);
    var scienceMarks = parseFloat(document.getElementById("science").value);
    var englishMarks = parseFloat(document.getElementById("english").value);

    var totalMarks = mathsMarks + scienceMarks + englishMarks;
    var averageMarks = totalMarks / 3;

    if (averageMarks >= 80) {
        alert(name + ", you scored an A grade with an average of " + averageMarks.toFixed(2) + ".");
    } else if (averageMarks >= 60 && averageMarks < 80) {
        alert(name + ", you scored a B grade with an average of " + averageMarks.toFixed(2) + ".");
    } else if (averageMarks >= 40 && averageMarks < 60) {
        alert(name + ", you scored a C grade with an average of " + averageMarks.toFixed(2) + ".");
    } else {
        alert(name + ", you scored a D grade with an average of " + averageMarks.toFixed(2) + ".");
    }
}

