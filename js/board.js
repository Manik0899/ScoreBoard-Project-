var list = document.querySelector("#scores-list ol");

var addForm = document.forms["add-player"];


// TO ADD NEW PLAYER NAME
addForm.addEventListener("submit", function(e){
    e.preventDefault();
    var value1 = addForm.querySelector("#player").value;
    var value2 = addForm.querySelector("#country").value;
    var value3 = addForm.querySelector("input[type=number]").value;

    var li = document.createElement("li");
    var playerName = document.createElement("span");
    var countryName = document.createElement("span");
    var scorePoints = document.createElement("span");
    var deletebtn = document.createElement("span");

    li.appendChild(playerName);
    li.appendChild(countryName);
    li.appendChild(scorePoints);
    li.appendChild(deletebtn);

    list.appendChild(li);

    playerName.textContent = value1;
    countryName.textContent = value2;
    scorePoints.textContent = value3;
    deletebtn.textContent = "Delete";

    playerName.classList.add("name");
    countryName.classList.add("country");
    scorePoints.classList.add("goals");
    deletebtn.classList.add("delete");

    addForm.querySelector("#player").value = "";
    addForm.querySelector("#country").value = "";
    addForm.querySelector("input[type=number]").value = "";
});



// TO DELETE THE PLAYER NAME
list.addEventListener("click", function(e){
    if(e.target.classList == "delete"){
        var li = e.target.parentElement;
        list.removeChild(li);
    }
});



// TO SEARCH FOR ANY PLAYER NAME
var searchForm = document.querySelector("#search-name");
// var searchForm = document.forms["search-name"][0];
searchForm.addEventListener("keyup", function(e){
    console.log(e.target.value);
    var searchItem = list.querySelectorAll("li");

    for(var i=0; i<searchItem.length; i++){
        if(searchItem[i].textContent.toUpperCase().indexOf(e.target.value.toUpperCase()) >-1){
            searchItem[i].style.display = "block";
        }
        else{
            searchItem[i].style.display = "none";
        }
    }
});



//TO HIDE COMPLETE LIST
var hideForm = document.querySelector("#add-player #hide");
hideForm.addEventListener("click", function () {
  if (list.style.display == "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
});