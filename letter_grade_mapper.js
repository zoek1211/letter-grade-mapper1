// Receive a number and map it to a letter grade based on York standard

function mapGrade() {
    var input = document.getElementById("gradeInput").value;
    var grade = parseInt(input);

    if (grade >= 90 && grade <= 100) {
        document.getElementById("letterGrade").innerHTML = "A+";
    } else if (grade >= 80 && grade < 90 ) {
        document.getElementById("letterGrade").innerHTML = "A";
    } else if (grade >= 75 && grade < 80) {
        document.getElementById("letterGrade").innerHTML = "B+";
    } else if (grade >= 70 && grade < 75) {
        document.getElementById("letterGrade").innerHTML = "B";
    } else if (grade >= 65 && grade < 70) {
        document.getElementById("letterGrade").innerHTML = "C+";
    } else if (grade >= 60 && grade < 65) {
        document.getElementById("letterGrade").innerHTML = "C";
    } else if (grade >= 55 && grade < 60) {
        document.getElementById("letterGrade").innerHTML = "D+";
    } else if (grade >= 50 && grade < 55) {
        document.getElementById("letterGrade").innerHTML = "D";
    } else if (grade >= 40 && grade < 50) {
        document.getElementById("letterGrade").innerHTML = "E";
    } else if (grade < 40) {
        document.getElementById("letterGrade").innerHTML = "F";
    } else {
        alert("Please enter a valid number");
        return false;
    }
}

// function to map grade when the button is clicked
function myButtonHandler() {
    mapGrade(); 
}

// assign the button handler function to the onclick event of the button
document.getElementById("myButton").onclick = myButtonHandler;