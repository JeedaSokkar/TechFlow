const icon=document.getElementById("icon")
const btn=document.getElementById("btn")
const list=document.getElementById("list")

icon.onclick=()=>{
    if(btn.classList.contains("hidden") && list.classList.contains("hidden")){
       btn.classList.remove("hidden")
list.classList.remove("hidden") 
    }
    else{
        btn.classList.add("hidden")
        list.classList.add("hidden")
    }

}