//for side bar toggle

function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
    


} 

//for dark theme toggle

var checkbox=document.querySelector("input[name=theme]");

checkbox.addEventListener("change",function() {
    if(this.checked){
        trans()
        document.documentElement.setAttribute("data-theme","dark")
    
    }

    else{
        trans()
        document.documentElement.setAttribute("data-theme","light")
        
    }



}

)


let trans = () => {
    
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition")
    },1000)
    
    
}


//primary to-do functionality


var a1=document.getElementById("myUL")
var myNodelist = a1.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//for completed tasks
var list = document.getElementById('myUL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Add task
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var task = document.createTextNode(inputValue);
  li.appendChild(task);
  if (inputValue === '') {
    alert("Write Something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//also binding enter to newElement function along with clicking on the ADD button
document.addEventListener("keyup",function(even){
  if(event.keyCode == 13){
   
    newElement();  
      
  }
});





// Show todays date
const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//get user name
var user = prompt("Enter your name?");
document.getElementById("user").innerHTML = user;


