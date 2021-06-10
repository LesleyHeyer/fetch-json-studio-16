window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
       response.json().then( function(json) {
        const div = document.getElementById("container");
        const count = document.getElementById("astronautCount");
        // Add HTML that includes the JSON data
        for (let i = 0; i < json.length + 1; i++) {
            div.innerHTML += `
            <div class = "astronaut">
                <div class = "bio">
                    <h3> ${json[i].firstName} ${json[i].lastName} </h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li id="active">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                <img class = "avatar" src = ${json[i].picture}>
            </div>
            
            `;
              // if (json[active.value] !== false) {
              //   document.getElementById("active").style.color = "green";
              // } 
        };

        // count.innerHTML = "Astronaut Count: " + json.length;

       });

    });
 });

    
 function findMinValue(json){
    let min = json[0].hoursInSpace;
    for (i = 0; i < json.length; i++){
      if (json[i].hoursInSpace < min){
        min = json[i].hoursInSpace;
      }
    }
    return min;
  }

  function descendingOrder(json) {
    let descendingArray = [];
    for (let i = 0; i < json.length; i++) {
        descendingArray.push(findMinValue(json));
    }
    return descendingArray;

  }