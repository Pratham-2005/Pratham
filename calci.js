document.getElementById('add').addEventListener('click',function(){
    var input1 = document.getElementById('number1').value;
    var input2 = document.getElementById('number2').value;
    var addition = parseInt(input1) + parseInt(input2);
    document.getElementById('output').innerHTML = addition;
    console.log(addition);
});
  