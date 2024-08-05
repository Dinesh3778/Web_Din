document.getElementById('clickbutton').addEventListener('click',function(){
    alert("button click");
});

document.getElementById("input text").addEventListener("change",function(){
    alert("Input  value changed to : ")+ this.value;
});

document.getElementById("myform").addEventListener("submit",function(){
    event.preventDefault();
    alert("Form submitted");
});

document.getElementById("divq").addEventListener("mouseover",function(){
    this.style.backgroundColor="red";
    setTimeout(() => {
    this.style.backgroundColor=""
    }, 5000);
});

document.getElementById("keyin").addEventListener("keydown",function(){
    alert("key pressed" + event.key);
});

document.getElementById("mylist").addEventListener("click",function(){
    if(event.target.tagName === "LI"){
        console.log("Clicked on :", event.target.textContent);
        
    }
})