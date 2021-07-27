window.addEventListener('load',function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(responseJson){
           let astronauts= document.getElementById('container'); 

        let count= document.getElementById('count')
        count.innerHTML += `${responseJson.length}`

           responseJson.sort(function(a,b){
             return  (b.hoursInSpace > a.hoursInSpace) ? 1: -1
            });

            for(let astronaut of responseJson )
           astronauts.innerHTML += `
           
           <div class ="astronaut">
                <div class="bio">
                
           <h3>${astronaut.lastName}, ${astronaut.firstName}</h3> 
            <ul>
                <li> Hours in space: ${astronaut.hoursInSpace}</li>
                <li style= "color:${(astronaut.active) ? 'green' : 'black'}"> Active: ${astronaut.active}</li>   
                <li> Skills: ${astronaut.skills.join(", ")}</li> 
            </ul> 
                </div>
            <img class= "avatar" src=${astronaut.picture}> 
            </div>  
                        
           `
          
   
             
           
        });
    });
});