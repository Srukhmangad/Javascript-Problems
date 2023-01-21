function Multiple(num,length)
{
    var num = parseInt(num);
    var len = parseInt(length);
    var result = 0;
    arr = [];
    for(let i=1;i<=len;i++){
        result = num * i;
        arr.push(result);
        
        document.getElementById("multiple").innerHTML= arr.join('<br>');
        result = 0;
    }

}