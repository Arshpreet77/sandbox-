/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const costPerDay = 35;
let numDaysSelected = 0;
let totalCost = 0;
const daysOfWeek = document.querySelectorAll('.day-selector');
const clearButton = document.querySelector('#clear-button');
const halfDayButton = document.querySelector('#half-day-button');
const fullDayButton = document.querySelector('#full-day-button');
const calculatedCostElement = document.querySelector('#calculated-cost');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


function handleDayClick(event) {
    const clickedDay = event.target;
    
    if (!clickedDay.classList.contains('clicked')) {
    clickedDay.classList.add('clicked');
    numDaysSelected++;
    }
    
    // recalculate total cost
    totalCost = numDaysSelected * costPerDay;
    calculatedCostElement.innerHTML = totalCost;
    }
    
    daysOfWeek.forEach(day => {
    day.addEventListener('click', handleDayClick);
    });


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function clearSelectedDays() {
    daysOfWeek.forEach(day => {
    day.classList.remove('clicked');
    });
    
    numDaysSelected = 0;
    totalCost = 0;
    calculatedCostElement.innerHTML = totalCost;
    }
    
    clearButton.addEventListener('click', clearSelectedDays);



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


function handleHalfDayClick() {
    costPerDay = $20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    
    // recalculate total cost with new rate
    totalCost = numDaysSelected * costPerDay;
    calculatedCostElement.innerHTML = totalCost;
    }
    
    halfDayButton.addEventListener('click', handleHalfDayClick);
    
    function handleFullDayClick() {
    costPerDay = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    
   

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


 // recalculate total cost with new rate
 totalCost = numDaysSelected * costPerDay;
 calculatedCostElement.innerHTML = totalCost;
 }
 
 fullDayButton.addEventListener('click', handleFullDayClick)


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


// this has already been incorporated into the event listeners above, but you could call this function independently if needed
function calculateCost() {
totalCost = numDaysSelected * costPerDay;
calculatedCostElement.innerHTML = totalCost;
}