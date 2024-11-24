let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function () {
    let item = document.createElement("li");
    item.innerText = inp.value;


    let Delbtn = document.createElement("button");
    Delbtn.innerText = "delete";
    Delbtn.classList.add("delete");
    item.appendChild(Delbtn);
ul.appendChild(item);
inp.value = "";

});

// let Delbtns = document.querySelectorAll(".delete");
// for(Delbtn of Delbtns){
//     Delbtn.addEventListener("click",function (){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

ul.addEventListener("click", function () {
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});