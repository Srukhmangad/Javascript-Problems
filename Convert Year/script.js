function convertYear(){
    var year = parseInt(document.getElementById("year").value);
    var converted = 0;



    //if(year>=35 & year<=99)
    if(year>=70 & year<=99){
        converted = 1900 + year;
        console.log(converted);
        document.getElementById("convertedyear").value = converted;
    }
    
    else{
        converted = 2000 + year;
        console.log(converted);
        document.getElementById("convertedyear").value = converted;
    }
}