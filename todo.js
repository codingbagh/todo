//Verify our inputs
//use Arrays and loops to render these




//Access all the necessary we are going to use
const input = document.getElementById("input")
const addBtn = document.getElementById("add")
const itemContainer = document.getElementById("items")
const items = []

document.addEventListener("click",(e)=>{
if(e.target.id==="remove"){
    const parent = e.target.parentNode
   parent.parentNode.remove()
}

if(e.target.id==="done"){
       const parent = e.target.parentNode
       parent.parentNode.classList.add("Done")
}


})


//Creating our function
// <div class="list Done">
        // Go Home
//      <div class="btn">
//           <div class="remove">Del</div>
//           <div class="remove">Done</div>
//      </div>
// </div>




const createElements=(values)=>{

//Create our div elements
const list = document.createElement("div")
const delBtn = document.createElement("div")
const doneBtn = document.createElement("div")
const btnContainer =document.createElement("div")


// set attributes
list.setAttribute("class","list")
btnContainer.setAttribute("class","btn")
delBtn.setAttribute("class","remove")
doneBtn.setAttribute("class","remove")
delBtn.setAttribute("id","remove")
doneBtn.setAttribute("id","done")


//Adding Text Content
delBtn.append("Del")
doneBtn.append("Done")



//Append elements unto parent element
btnContainer.append(delBtn,doneBtn)
list.append(values,btnContainer)
itemContainer.append(list)

input.value=""
}






const addElement = ()=>{

if(input.value!==""){
//Add values to Arrays
items.unshift(input.value)
items.map((item,index)=>index===0 && createElements(item))

}else{
        alert("input can't be empty")
}






}



addBtn.addEventListener("click",addElement)