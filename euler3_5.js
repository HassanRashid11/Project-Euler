
function countr()  {
    var y = document.getElementById('input').value;
    var g = 0;
    for (var i=1; i <=y; i++)   {
        if (i % 3 === 0 || i % 5 === 0)  {
        g += i;
        }    
    }
    document.getElementById("solution").innerHTML = g + "!";
}