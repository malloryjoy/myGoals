function theGoal (){ 
  function getRandomNum() {
      return Math.floor((Math.random() * 10) + 1);
    }
    const task = getRandomNum();
  
    var yourTask = '';
    var taskDescription ='';
    
  if (task === 1){
    var yourTask = 'Work it out!';
    var taskDescription ='Get some more steps! Do some yoga! Grab your phone and get moving.';
  } else if (task === 2){
    var yourTask = 'Play Guitar';
    var taskDescription ='Work on those barre chords!';
  } else if (task === 3){
    var yourTask = 'Read a Book';
    var taskDescription ='You have a list that is three miles long, no doubt. Grab one of them and get to it!';

  } else if (task === 4){
    var yourTask = 'Learn a Language';
    var taskDescription ='Practice your Italian, Spanish, or French!';
  } else if (task === 5){
    var yourTask = 'Watch a Show';
    var taskDescription ='Burn through a few episodes of the equally long list of shows!';
  }else if (task === 6){
    var yourTask = 'Watch a Movie';
    var taskDescription ='Have fun with one of the many films in your anthology. Popcorn is for winners.';
  }
  else if (task === 7){
    var yourTask = 'Write Something';
    var taskDescription ='Go work on your scripts, baby girl!';
  }
  else if (task === 8){
    var yourTask = 'Play Chess';
    var taskDescription ='Let your brain get the workout tonight. Grab your set and do the hand thing!';
  }
  else if (task === 9){
    var yourTask = 'Clean something';
    var taskDescription ='You know you have three piles of laundry, probably. Go fold it. Or do the dishes.';
  }
  else {
    var yourTask = 'Night Off';
    var taskDescription ='Chip away at that Youtube playlist! Take a bath! The night is yours to enjoy.';
  }
    var theTask = yourTask.toUpperCase();
    console.log("Your focus today is \n" + theTask + "\n" + taskDescription);
  yourTaskContainer.innerHTML = `<h3 style="text-align: center;">Your goal to work on tonight is:</h3><br /><span class="nameofTask">${theTask}</span><br /><br />${taskDescription}<br />&nbsp;`; //framework for results display
  }
  
  const yourTaskContainer = document.getElementById('taskbox'); //displays the workout results

  
  const genTask = document.getElementById('genTask'); //assigns the workout generator to the Work Me Out button
  genTask.addEventListener('click', theGoal); //initates the generation of the workout when the button is clicked 


// Get the modal
var modal = document.getElementById("myTask");

// Get the button that opens the modal
var btn = document.getElementById("genTask");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get the button that chooses a new workout
const doOver = document.getElementById("newTask");

//When the user clicks the doover button, the process starts again
doOver.addEventListener('click', theGoal);

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}