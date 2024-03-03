"Даны два инпута, кнопка и абзац. В инпуты вводятся целые числа. Определите, какое из введенных чисел больше и выведите его в абзац."

let getRes = document.getElementById("getRes");

getRes.addEventListener("click", function(){
    let arr = [];
    let inputNum = document.querySelectorAll("#inputNum");
    inputNum.forEach(elem =>{ 
        if(!isNaN(parseFloat(elem.value))){
            arr.push(elem.value)
        }else{
            document.querySelector(".resultOutput").innerHTML = "Убейся...";
        }
    });
    document.querySelector(".resultOutput").innerHTML = Math.max(...arr);
})