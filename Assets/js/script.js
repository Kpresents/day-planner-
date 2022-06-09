
var descriptionEl= [9,10,11,12,13,14,15,16,17];
var saveBtn= document.querySelectorAll(".saveBtn")

//step 1: add current date to the header
var currentEl= document.querySelector('#currentDay');
// var currentHour= moment().hour()

console.log (currentHour)

currentEl.textContent= moment().format ("dddd, MMMM Do");
// currentEl.textContent= moment() + "current Time";

  //current 24 hr timecode ex. 9pst=21
var currentTime = moment().hour();
// Testing the current hour value to ensure the conditions are being met. 
// var currentHour= 11;
    //getting the text area elements with the class of hour-area

var currentHour = document.querySelectorAll(".hour-area");
 //i starts at 0 and increments by 1 until i=9 
for(i=0; i<9; i++){
    saveBtn[i].addEventListener("click", save)
    //get the id at the index i which represents the work day hour for the text area element. For ex. 17
    // workHour= currentHour[i].id;
    // //output the workHour to the console 
    // console.log(workHour);
//if convert current time into a number is greater than converting workhour into a number 
    if(parseInt(currentTime)>descriptionEl[i]){
        
        //current hour at the index of i, it gets all the classes in the text area element and adding "past" to the existing classes
        currentHour[i].classList.add("past");
    
    }
    //if converting current time to a number is equal to current workHour converted into a number 
    else if(parseInt(currentTime)== descriptionEl[i]){
        //if the condition is met then add an additional class present to the list to change element to green.
        currentHour[i].classList.add("present");
    
    }
    //if converting current time to a number is less than the present workHour converted into a number
    else if(parseInt(currentTime)<descriptionEl[i]){
        //if it meets the condition then add an additional class, future to the list to change the element red. 
        currentHour[i].classList.add("future");
    }

    if(localStorage.getItem("time"+ descriptionEl[i])){
        document.querySelector("#time" +descriptionEl[i]).value=localStorage.getItem("time"+ descriptionEl[i])
    }
}

function save(event){
    var id =this.getAttribute("data-id");

    var event = document.querySelector("#"+id);

    console.log(id, event.value);
    localStorage.setItem(id,event.value);

}
 
