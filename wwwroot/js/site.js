// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//Declare variables 
var names = document.getElementById("myfile");
var nameArea = document.getElementById('nameArea');
var nameList = "";
var namesArray = [];
var sortedArray = [];
var fileReader = new FileReader();

//Add event listeners
names.addEventListener("change", handleUpload);

function handleUpload(e) {

    var fileToLoad = e.target.files[0];

    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        namesArray = textFromFileLoaded.split(/\r?\n/);

        //Convert namesArray items into arrays;
        for (var j = 0; j < namesArray.length; j++) {
            namesArray[j] = namesArray[j].split(' ');
        }

        //Sort namesArray by last name
        sortedArray = namesArray.sort(function (a, b) {
            if (a[a.length - 1] < b[b.length - 1]) { return -1; }
            if (a[a.length - 1] > b[b.length - 1]) { return 1; }
            return 0;
        })
        
        //Loop over sorted array to display p tags in the target div
        for (var i = 0; i < namesArray.length; i++) {
            console.log(namesArray[i]);
            nameList += "<p>" + namesArray[i].join(" ")+ "</p>";
        }

        nameArea.innerHTML = nameList;
    }

    fileReader.readAsText(fileToLoad, "UTF-8");
}

