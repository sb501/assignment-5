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
       event.preventDefault();
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");
       let missionTarget =  document.getElementById("missionTarget")
       let launchStatusCheck= document.getElementById("launchStatusCheck")
       let lauchStatus = document.getElementById("launchStatus");
       let faultyItems = document.getElementById("faultyItems")
       let pilotStatus = document.getElementById("pilotStatus");
       let copilotStatus = document.getElementById("copilotStatus");
       let fuelStatus = document.getElementById("fuelStatus");
       let cargoStatus = document.getElementById("cargoStatus");
       let ready = true;
       if (pilotName.value===""|| copilotName.value===""||fuelLevel.value===""||cargoMass.value===""){
           alert("All values must be entered");
       }
       if (isNaN(Number(fuelLevel.value), Number(cargoMass.value))){
         alert("Fuel Level and Cargo Mass entries must be a number")
       }
        if (fuelLevel.value <= 10000 ){
            
           faultyItems.style.visibility= "visible" 
            fuelStatus.innerHTML = "Fuel Level too low for launch"
            launchStatus.innerHTML="Shuttle not ready for launch"
           launchStatus.style.color = "red"
           ready = false;
      }

        if (cargoMass.value >= 10000){
          
            faultyItems.style.visibility= "visible"
           
            cargoStatus.innerHTML = "Cargo Mass too high for launch"
            launchStatus.innerHTML= "Shuttle not ready for launch"
          launchStatus.style.color = "red"
          ready = false;
        }

        if(ready){
          faultyItems.style.visibility= "visible"
          launchStatus.innerHTML="Shuttle is ready for launch"
          launchStatus.style.color = "green"
       }
  

   })
   
   fetch ('https://handlers.education.launchcode.org/static/planets.json')
      .then (function(response){
        response.json().then(function(json) {
                let planets = json
        let index = Math.floor(Math.random()*planets.length);
        let planet = planets[index]

        let template = `
        <h2>Mission Destination</h2>
            <ol>
            <li>Name: ${planet.name} </li>
            <li>Diameter: ${planet.diameter}</li>
            <li>Star: ${planet.star}</li>
            <li>Distance from Earth: ${planet.distanceFromEarth}</li>
            <li>Number of Moons:${planet.numberOfMoons}</li>
            </ol>
            <img src="${planet.image}">`
        missionTarget.innerHTML = template
        })
        
         
      })
      .then (function(data){
         console.log(data)
      })
      .catch (function(err){
         console.error(err)
      })      
})

