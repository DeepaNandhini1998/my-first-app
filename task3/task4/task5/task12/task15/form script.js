let form = document.getElementById("Registration form");
form.addEventListener("submit" , function(event){
 event.preventDefault();
})

let clickBtn = document.getElementById("submit");
clickBtn.addEventListener("click", clickHandler);

function clickHandler(){
    let tbl = document.getElementById("tbody");
    let row = tbl.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();

  let FirstName = document.getElementById("FirstName").value;
  let LastName=document.getElementById("LastName").value;
  let Address=document.getElementById("Address").value;
  let Pincode=document.getElementById("Pincode").value;
  let Gender=document.getElementsByName("Gender");
  var chkbx = document.querySelectorAll('input[type=checkbox]:checked');
 let State = document.getElementById("State").value;
  let Country =document.getElementById("Country").value;


  if(!FirstName)
   {
       alert("Name cannot be Empty. Please! Enter the FirstName.")
       return false;
   } 
   else if(!LastName)
   {
       alert("Name cannot be Empty. Please! Enter the LastName.");
       return false;
   }
  else if(!Address)
   {
       alert("Address cannot be Empty. Please! Enter the Address.");
       return false;
   }
   else if(!Pincode)
   {
       alert("Pincode cannot be Empty. Please! Enter the Pincode.");
       return false;
   }
   else if(Pincode<6)
   {
       alert("Pincode Enter the valid Pincode.");
       return false;
   }
   else if(!State)
   {
       alert("State cannot be Empty. Please! Enter the State.");
       return false;
   }
   else if(!Country)
   {
       alert("Country cannot be Empty. Please! Enter the Country.");
       return false;
   }

   var gendervalue;
   for (let i = 0; i < gender.length; i++) {
       if (gender[i].checked) {
           console.log(gender[i].checked);
           gendervalue = gender[i].value;
           console.log(gendervalue);
       }
   }

   if(Gender[0].checked === false && Gender[1].checked === false && Gender[2].checked === false)
   {
       alert("Gender cannot be Empty. Please!!! select the Gender.");
       return false;
   }
   var array = [];
   for (var i = 0; i < chkbx.length; i++) {
       array.push(chkbx[i].value);
       }
   cell1.innerHTML = FirstName;
   cell2.innerHTML = LastName;
   cell3.innerHTML = Address;
   cell4.innerHTML = Pincode;
   cell5.innerHTML = gendervalue;
   cell6.innerHTML = Array;
   cell7.innerHTML = State;
   cell8.innerHTML = Country;
   alert("Thank You, Form data's is saved successfully.!!");
   
   form.reset(); 
   }