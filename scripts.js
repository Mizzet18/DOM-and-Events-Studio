// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
    console.log('Window Loaded')
    let flightStatusElem = document.getElementById("flightStatus");
    let shuttleBackgroundElem = document.getElementById("shuttleBackground");
    let rocketElem = document.getElementById("rocket");
    let upElem = document.getElementById("up");
    let downElem = document.getElementById("down");
    let rightElem = document.getElementById("right");
    let leftElem = document.getElementById("left");
    let takeoffElem = document.getElementById("takeoff");
    let landingElem = document.getElementById("landing");
    let missionAbortElem = document.getElementById("missionAbort");

    takeoffElem.addEventListener("click", function(){
        let isTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (isTakeoff){
            flightStatusElem.innerText = "Shuttle in flight."
        }
    })
})