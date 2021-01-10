// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");
       
       let launchStatusCheck= document.getElementById("launchStatusCheck")
       let lauchStatus = document.getElementById("launchStatus");
       let faultyItems = document.getElementById("faultyItems")
       let pilotStatus = document.getElementById("pilotStatus");
       let copilotStatus = document.getElementById("copilotStatus");
       let fuelStatus = document.getElementById("fuelStatus");
       let cargoStatus = document.getElementById("cargoStatus");
       if (pilotName.value===""|| copilotName.value===""||fuelLevel.value===""||cargoMass.value===""){
           alert("All values must be entered");
         event.preventDefault();
       }
       else if (isNaN(Number(fuelLevel.value), Number(cargoMass.value))){
         alert("Fuel Level and Cargo Mass entries must be a number")
       event.preventDefault(); 
       }
       else {
          faultyItems.style.visibility= "visible"
          pilotStatus.innerHTML(`Pilot, ${pilotName.value}, is not ready`);
          copilotStatus.innerHTML(`Co-Pilot, ${copilotName.value}, is not ready`);
          if(fuelStatus < 10,000){
             return ("Fuel level too low for launch")
          }
          if (cargoMass > 10,000){
             return ("Cargo mass too high for launch")
          }
          launchStatus.innerHTML("Shuttle not ready for launch")
          launchStatus.style.font = "red"
       }
      //faultyItems.style.visibility= "visible"
      // pilotStatus.innerHTML(`Pilot, ${pilotName.value}, is ready`)
      // copilotName.innerHTML(`Co-Pilot, ${copilotName.value}, is ready`)
      // if(fuelStatus > 10,000){
      //    return ("Fuel level high enough for launch")
      // }
      // if (cargoMass < 10,000){
      //    return ("Cargo mass low enough for launch")
      // }
      // launchStatus.innerHTML("Shuttle is ready for launch")
      // launchStatus.style.font = "green"

   })
   fetch ('https://handlers.education.launchcode.org/static/planets.json')
      .then (function(response){
         return response.json()
      })
      .then (function(data){
         console.log(data)
      })
      .catch (function(err){
         console.error(err)
      })      
})

window.onload = init;
