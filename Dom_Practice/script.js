function changeText() {
    const element = document.getElementById("demo");
    element.innerHTML = "Hello BBD University , This was DOM Manipulation";
    element.style.textAlign = "center";
    element.classList.add("blink");
    document.getElementById("btn1").style.display = "none";

    document.getElementById("addBtn").addEventListener("click", function () {

    })
}

function changeToPositiveThoughts() {
    var elements = document.getElementsByClassName("my_class");

    // Loop through them and change their text
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "Text Changed " + (i + 1);
    }
}
function changeToPositiveThoughts() {
    const elements = document.getElementsByClassName("my_class");

    const positiveThoughts = [
        "Believe in yourself and all that you are.",
        "Every expert was once a beginner.",
        "Your only limit is your mind. Keep pushing!"
    ];

    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = positiveThoughts[i];
        elements[i].style.color = "#2b9348";  // positive green
        elements[i].style.fontSize = "18px";
        elements[i].style.fontWeight = "bold";
        elements[i].style.padding = "10px";
        elements[i].style.backgroundColor = "#e9f7ef";
        elements[i].style.borderRadius = "8px";
        elements[i].style.marginBottom = "10px";
        elements[i].style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
    }

    document.getElementById("btn2").style.display = "none";
}

document.getElementById("addBtn").addEventListener("click", function () {
    var input = document.getElementById("itemInput");
    var text = input.value;

    if (text.trim() !== "") {
        var li = document.createElement("li");
        li.innerText = " " + text;

        document.getElementById("myList").appendChild(li);
        input.value = ""; // clear the input
    }
});

function addItem() {
    var input = document.getElementById("itemInput");
    var text = input.value;

    var li = document.createElement("li");
    li.innerText = " " + text;

    document.getElementById("myList").appendChild(li);
    input.value = "";
}

document.getElementById("addBtn").addEventListener("click", function () {
    var input = document.getElementById("itemInput");
    var text = input.value;

    if (text.trim() !== "") {
        var li = document.createElement("li");
        li.innerText = " " + text;

        document.getElementById("myList").appendChild(li);
        input.value = ""; // clear the input
    }
});


document.getElementById("addBtn").addEventListener("click", function () {
    var name = document.getElementById("studentName").value.trim();
    if (name !== "") {
        var li = document.createElement("li"); // createElement
        li.innerText = " " + name;
        document.getElementById("studentList").appendChild(li); // appendChild
        document.getElementById("studentName").value = ""; // clear input box
    } else {
        alert("Please enter a student name.");
    }
});

// Remove last student
document.getElementById("removeBtn").addEventListener("click", function () {
    var list = document.getElementById("studentList");
    if (list.lastChild) {
        list.removeChild(list.lastChild); // removeChild
    }
});


function changeTheme() {
    // Theme name get karo from dropdown
    const theme = document.getElementById("themeSelector").value;
    const body = document.body;

    // Background & Text color set karo according to theme
    if (theme === "ocean") {
        body.style.backgroundColor = "#0077b6";
        body.style.color = "#ffffff";
    } else if (theme === "sunset") {
        body.style.backgroundColor = "#ff6f61";
        body.style.color = "#ffffff";
    } else if (theme === "dark") {
        body.style.backgroundColor = "#121212";
        body.style.color = "#e0e0e0";
    } else if (theme === "forest") {
        body.style.backgroundColor = "#2a9d8f";
        body.style.color = "#ffffff";
    } else if (theme === "light") {
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#000000";
    } else {
        body.style.backgroundColor = "";
        body.style.color = "";
    }

    // Selected theme ko localStorage me save karo
    localStorage.setItem("selectedTheme", theme);
}

// / Page load hone par theme apply kar do
window.onload = function () {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        document.getElementById("themeSelector").value = savedTheme;
        changeTheme();
    }
};