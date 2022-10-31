let submit=document.querySelector(".submit");
let notesElem=document.querySelector('.notes');
let title=document.querySelector("#text");
let desc=document.querySelector('#desc');
let notes=JSON.parse(localStorage.getItem("notes"));
if(notes){
  notes.forEach(ele=>{
    addNotes(ele);
  })
}
submit.addEventListener("click",(e) =>{
  e.preventDefault();
  addNotes();
});

function addNotes(obj){
  let card=document.createElement("div");
  card.classList.add("card");
  let titleVal=title.value;
  let descVal=desc.value;
  if(obj){
    titleVal=obj.text,
    descVal=obj.value
  }
  if(titleVal){
    card.innerHTML=`<h3>${titleVal}</h3>
                                    <p class="ptag">${descVal}</p>
                             <button class="del">Delete</button><button class="edit">Edit</button>`;
    notesElem.appendChild(card);
    updateLs();
  }
  let del=card.querySelector(".del");
  del.addEventListener("click",()=>{
    card.remove();
    updateLs();
  })
  let edit=card.querySelector(".edit");
  edit.addEventListener("click",()=>{
    console.log(card.children[0].innerText,card.children[1].innerText)
    //document.write(card.children[0].innerText)
document.getElementById("text").value=card.children[0].innerText
      document.getElementById("desc").value=card.children[1].innerText
    card.remove();
    updateLs();
  });
  }
function updateLs(){
  let card=document.querySelectorAll(".card");
  let arr=[];
  card.forEach(element =>{
    arr.push({
      text:element.children[0].innerText,
      value:element.children[1].innerText
    })
  });
  localStorage.setItem("notes",JSON.stringify(arr));
  
}