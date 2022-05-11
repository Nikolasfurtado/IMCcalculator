
function calculateimc(){
    const weigth = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    var sum;
   
    sum = weigth /( height*height);
    var result;
    result =  document.getElementById("result");
    result.innerHTML = sum.toFixed(2);
    

    
   
    if (result > 30){
        var wich = document.getElementById("fatorthin").innerHTML = "resources/fat.jpg";

    }



}


