function game(num1,num2){
    x= parseInt(num1);
    y=parseInt(num2);

    for(let i=0; i<6;i++){
        x+=1;
        if(x===y){
            return true;
        }
    }
    return false;

}
var num1 = prompt("Enter Your position")
var num2 = prompt("Enter Your friend's position")
window.alert(game(num1,num2));