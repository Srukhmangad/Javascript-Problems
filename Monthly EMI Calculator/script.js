function calculate(){
    var amt = parseInt(document.getElementById("principal").value);
    var months = parseInt(document.getElementById("tenure").value);
    var r = parseInt(document.getElementById("rate").value);
    var roi = r/12/100;
    var pow = Math.pow(1+roi,months);
    console.log(pow);
    
    var result = (amt * roi * pow)/(pow - 1);
    console.log(result);

    document.getElementById("result").innerHTML = `Your Monthly EMI will be ₹ ${Math.ceil(result)}.`;
    }