let count = 0;

function sliderNext(){
    count++; 

    let johnDisplay = document.getElementsByClassName("john");
    let tanyaDisplay = document.getElementsByClassName("tanya");

    if (count > 1){
        count = 0;
    }
    else if(count < 0){
        count = 1;
    }

    if (count === 0){

for (let i = 0; i < johnDisplay.length; i++){
    tanyaDisplay[i].style.display = "block";
    johnDisplay[i].style.display = "none";
}

    }else if(count === 1) {

        for (let i = 0; i < johnDisplay.length; i++){
            tanyaDisplay[i].style.display = "none";
            johnDisplay[i].style.display = "block";
        }

    }
     
}

function sliderPrev(){
    count--; 

    let johnDisplay = document.getElementsByClassName("john");
    let tanyaDisplay = document.getElementsByClassName("tanya"); 

    if (count < 0){
        count = 1;
    }else if(count > 1){
        count = 0;
    }

    if (count === 0){

        for (let i = 0; i < johnDisplay.length; i++){
            tanyaDisplay[i].style.display = "block";
            johnDisplay[i].style.display = "none";
        }

    }
    else if(count === 1) {

        for (let i = 0; i < johnDisplay.length; i++){
            tanyaDisplay[i].style.display = "none";
            johnDisplay[i].style.display = "block";
        }

    }
    
}