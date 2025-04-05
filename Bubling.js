let div = document.querySelector("div");
let ul1 = document.querySelector("ul");
let lis = document.querySelectorAll("li");


div.addEventListener("click", function () {
    console.log("you click div!");
});

ul1.addEventListener("click", function (event) {
    console.log("you click ul!");
    event.stopPropagation(); // it is used to stop bubling 
});

for (let li of lis) {
    li.addEventListener("click", function (event) {
        console.log("you click li!");
        event.stopPropagation();
    })
}


//==========================================================

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("button + ul");

btn.addEventListener("click", (() => {
    console.log("clicked");
    let inpValue = inp.value+" ";
    inp.value ="";

    let li1 = document.createElement("li");
    li1.innerText = inpValue;
    ul.appendChild(li1);

    let del = document.createElement("button");
    del.innerText= "delete";
    del.classList.add("delete")
    li1.appendChild(del);

    //it is true but we try to another second way of event delegation
    // del.addEventListener("click",function(){
    //     li1.remove();
    // });
}));

//event delegation means click event not applying on the new child element by the js created.
// so we use to know the taget name = event.target.nodeName

ul.addEventListener("click",function(event){
    if(event.target.nodeName === "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});


// we use this method to some time bubling and we wish to  new element click event perform

