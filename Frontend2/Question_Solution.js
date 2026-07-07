// Prompt 
function posNeg() {
    var num = parseInt(prompt("Enter a number:"));
    if (num > 0) {
        alert("The number is positive.");
    }
    else if (num < 0) {
        alert("The number is negative.");
    }
    else {
        alert("The number is zero.");
    }
}

// WeekDay Number Progaram

function weekDay() {
    var dayNum = parseInt(prompt("enter the number of the days:-"));
    switch (dayNum) {
        case 1:
            alert("Monday");
            break;
        case 2:
            alert("Tuesday");
            break;
        case 3:
            alert("Wednesday");
            break;
        case 4:
            alert("Thursday");
            break;
        case 5:
            alert("Friday");
            break;
        case 6:
            alert("Saturday");
            break;
        case 7:
            alert("Sunday");
            break;
        default:
            alert("Invalid day number. Please enter a number between 1 and 7.");
    }
}

// Checking the Number of days in a month

function monthDays() {
    var monthNum = parseInt(prompt("Enter the number of the month (1-12):"));
    if (monthNum == 1 || monthNum == 3 || monthNum == 5 || monthNum == 7 || monthNum == 8 || monthNum == 10 || monthNum == 12) {
        alert("The month has 31 days.");
    } else if (monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11) {
        alert("The month has 30 days.");
    } else if (monthNum == 2) {
        alert("The month has 28 days or 29 days in a leap year.");
    } else {
        alert("Invalid month number. Please enter a number between 1 and 12.");
    }
}

// Checking the season it belong with simple discription

function seasonCheck() {
    var monthNum = parseInt(prompt("Enter the number of the month (1-12):"));
    if (monthNum >= 3 && monthNum <= 5) {
        alert("Spring");
    } else if (monthNum >= 6 && monthNum <= 8) {
        alert("Summer");
    } else if (monthNum >= 9 && monthNum <= 11) {
        alert("Autumn");
    } else if (monthNum == 12 || monthNum == 1 || monthNum == 2) {
        alert("Winter");
    } else {
        alert("Invalid month number");
    }
}

// Giving the months name 

function seasonCheck() {
    var monthName = prompt("Enter the number of the month (1-12):");
    if (monthNum == "March" || monthNum == "April" || monthNum == "May") {
        alert("Spring");
    } else if (monthNum == "June" || monthNum == "July" || monthNum == "August") {
        alert("Summer");
    } else if (monthNum == "September" || monthNum == "October" || monthNum == "November") {
        alert("Autumn");
    } else if (monthNum == "December" || monthNum == "January" || monthNum == "February") {
        alert("Winter");
    } else {
        alert("Invalid month number");
    }
}
//  Write a JavaScript program to accept three numbers from the user and display their sum

function threeNumSum() {
    var a = parseInt(prompt("Enter the Number 1"));
    var b = parseInt(prompt("Enter the Number 1"));
    var c = parseInt(prompt("Enter the Number 1"));

    var sum = a + b + c;
    alert(sum);
}

// Write a JavaScript program to accept a number and check whether it is zero or positive or negative. Display the result.

function posOrNeg() {
    var a = parseInt(prompt("Enter the Number:- "));
    if (a > 0) {
        alert("The Number is Positive")
    } else if (a < 0) {
        alert("the number is Negative");
    } else {
        alert("The number is zero")
    }
}

//Write a JavaScript program to check whether a character is a vowel or consonant

function vowelCheck() {
    var input = document.getElementById("vowelCheck").value.toLowerCase();

    if (input == "a" || input == "e" || input == "i" || input == "o" || input == "u") {
        document.getElementById("result").innerHTML = "It is a vowel";
    } else {
        document.getElementById("result").innerHTML = "it is not a vowel";
    }
}

//  Write a JavaScript program to accept two numbers and display the largest number.

function largestNoResult() {
    var input1 = parseInt(document.getElementById("largestNo1").value);
    var input2 = parseInt(document.getElementById("largestNo2").value);

    if (input1 > input2) {
        document.getElementById("result2").innerHTML = input1 + " is  greater";
    } else if (input1 < input2) {
        document.getElementById("result2").innerHTML = input2 + " is  greater";
    } else {
        document.getElementById("result2").innerHTML = "Both are equal";
    }
}

//Write a JavaScript program to accept a time in hours (0-23) and display whether it is morning, afternoon, evening, or night.


function checkTime() {
    let hour = parseInt(document.getElementById("time").value);

    if (hour < 0 || hour > 23) {
        document.getElementById("result3").innerHTML = "Please Enter the Valid hour(0-23)";
    }
    else if (hour >= 5 && hour <= 11) {
        document.getElementById("result3").innerHTML = "GoodMorning";
    } else if (hour >= 12 && hour <= 16) {
        document.getElementById("result3").innerHTML = "GoodAfterNoon";
    } else if (hour >= 17 && hour <= 19) {
        document.getElementById("result3").innerHTML = "Good Evening";
    } else {
        document.getElementById("result3").innerHTML = "Good Night";
    }
}

// Write a JavaScript program to accept a character and check whether it is an alphabet, digit, or special character.

function checkCharacter() {
    let ch = document.getElementById("character").value;

    if (ch >= 'A' && ch <= 'Z' || ch >= 'a' && ch <= 'z') {
        document.getElementById("result4").innerHTML = ch + " is an Alphabet";
    }
    else if (ch >= '0' && ch <= '9') {
        document.getElementById("result4").innerHTML = ch + " is a Digit";
    }
    else {
        document.getElementById("result4").innerHTML = ch + " is a Special Character";
    }
}

//Write a JavaScript program to accept a temperature in Celsius and display whether it is cold (<15), moderate (15-30), or hot (>30).

function checkTemperature() {
    let temp = Number(document.getElementById("temperature").value);

    if (temp < 15) {
        document.getElementById("result5").innerHTML = "Cold";
    }
    else if (temp >= 15 && temp <= 30) {
        document.getElementById("result5").innerHTML = "Moderate";
    }
    else {
        document.getElementById("result5").innerHTML = "Hot";
    }
}

// (Q33). Write a JavaScript program to accept total electricity units consumed.
// Rate per unit = Rs. 4
// Tax rules:
// 1-200 => No tax
// 201-300 => 2% tax
// 301-400 => 4% tax
// 401-500 => 6% tax
// Above 500 => 10% tax
// Display:
// Total units
// Bill (without tax)
// Tax percentage
// Tax amount
// Final bill amount

function calculateBill() {

    let units = Number(document.getElementById("units").value);

    let rate = 4;
    let bill = units * rate;

    let taxPercent = 0;

    if (units >= 1 && units <= 200) {
        taxPercent = 0;
    }
    else if (units <= 300) {
        taxPercent = 2;
    }
    else if (units <= 400) {
        taxPercent = 4;
    }
    else if (units <= 500) {
        taxPercent = 6;
    }
    else {
        taxPercent = 10;
    }

    let taxAmount = (bill * taxPercent) / 100;
    let finalBill = bill + taxAmount;

    document.getElementById("result6").innerHTML =
        "Total Units : " + units + "<br>" +
        "Bill (Without Tax) : ₹" + bill + "<br>" +
        "Tax Percentage : " + taxPercent + "%<br>" +
        "Tax Amount : ₹" + taxAmount + "<br>" +
        "Final Bill : ₹" + finalBill;
}

// //Write a JavaScript program to accept Employee ID and Basic Salary and calculate DA and HRA:
// 10,000-20,000 => DA 5%, HRA 10%
// 20,001-30,000 => DA 5%, HRA 15%
// 30,001-50,000 => DA 10%, HRA 15%
// Above 50,000 => DA 10%, HRA 20%
// Display all values and gross salary.

function calculateSalary() {

    let empId = document.getElementById("empId").value;
    let basicSalary = Number(document.getElementById("basicSalary").value);

    let daPercent = 0;
    let hraPercent = 0;

    if (basicSalary >= 10000 && basicSalary <= 20000) {
        daPercent = 5;
        hraPercent = 10;
    }
    else if (basicSalary <= 30000) {
        daPercent = 5;
        hraPercent = 15;
    }
    else if (basicSalary <= 50000) {
        daPercent = 10;
        hraPercent = 15;
    }
    else {
        daPercent = 10;
        hraPercent = 20;
    }

    let da = (basicSalary * daPercent) / 100;
    let hra = (basicSalary * hraPercent) / 100;
    let grossSalary = basicSalary + da + hra;

    document.getElementById("result7").innerHTML =
        "Employee ID : " + empId + "<br>" +
        "Basic Salary : ₹" + basicSalary + "<br>" +
        "DA (" + daPercent + "%) : ₹" + da + "<br>" +
        "HRA (" + hraPercent + "%) : ₹" + hra + "<br>" +
        "<b>Gross Salary : ₹" + grossSalary + "</b>";
}

//(Q36). Write a JavaScript program to create a TV Showroom Billing System with menu:
// B/b - Black & White TV
// C/c - Color TV
// E/e - Exit

// Black & White TV:
// 1 => 14-inch (10000), no discount
// 2 => 21-inch (20000), 20% discount if quantity >= 5

// Color TV:
// 1 => 14-inch, 10% discount
// 2 => 21-inch, 30% discount if quantity >= 5

// Display:
// TV type
// Price
// Quantity
// Total bill
// Final payable amount
// Exit should show a thank-you message.

function tvBilling() {

    let tvType = document.getElementById("tvType").value.toLowerCase();
    let size = Number(document.getElementById("size").value);
    let qty = Number(document.getElementById("qty").value);

    let tvName = "";
    let price = 0;
    let discount = 0;

    if (tvType == "e") {
        document.getElementById("result8").innerHTML =
            "<h3>Thank You! Visit Again.</h3>";         return;
    }
    
    if (tvType == "b") {

        tvName = "Black & White TV";

        if (size == 1) {
            price = 10000;
        }
        else if (size == 2) {
            price = 20000;

            if (qty >= 5) {
                discount = 20;
            }
        }
        else {
            document.getElementById("result8").innerHTML = "Invalid Size";
            return;
        }
    }
    else if (tvType == "c") {

        tvName = "Color TV";

        if (size == 1) {
            price = 10000;
            discount = 10;
        }
        else if (size == 2) {
            price = 20000;

            if (qty >= 5) {
                discount = 30;
            }
        }
        else {
            document.getElementById("result8").innerHTML = "Invalid Size";
            return;
        }
    }

    else {
        document.getElementById("result8").innerHTML = "Invalid TV Type";
        return;
    }

    let totalBill = price * qty;
    let discountAmount = totalBill * discount / 100;
    let finalAmount = totalBill - discountAmount;

    document.getElementById("result8").innerHTML =
        "TV Type : " + tvName + "<br>" +
        "Price : ₹" + price + "<br>" +
        "Quantity : " + qty + "<br>" +
        "Total Bill : ₹" + totalBill + "<br>" +
        "Discount : " + discount + "%<br>" +
        "Final Payable Amount : ₹" + finalAmount;
}