function res() {
  var x = document.getElementById("ok");
  var y = document.getElementById("result");
  var inc = document.getElementById("inc").value;
  var ex_inc = document.getElementById("ex_inc").value;
  var age = document.getElementById("age").value;
  var dud = document.getElementById("dud").value;


  var chk=true;
  if (inc=="" || !isNum(inc)) {
    var er= document.getElementById("er1");
    er.style.display="block";
    chk=false;
    console.log("heree22 ");
  }else{console.log("heree ");
    var er= document.getElementById("er1");
    var err= document.getElementById("error1");
  er.style.display="none";
  err.style.display="none";
}

  if (ex_inc=="" || !isNum(ex_inc)) {
    var er= document.getElementById("er2");
    er.style.display="block";
    chk=false;
  }
  else{
    var er= document.getElementById("er2");
    var err= document.getElementById("error2");
  er.style.display="none";
  err.style.display="none";
}
  if(age=="" || !isNum(age)){
    var er= document.getElementById("er3");
    er.style.display="block";
    chk=false;
  }
  else{
    var er= document.getElementById("er3");
    var err= document.getElementById("error3");
  er.style.display="none";
  err.style.display="none";
}
 
  if (dud=="" || !isNum(dud)) {
    var er= document.getElementById("er4");
    er.style.display="block";
    chk=false;
  }else{
    var er= document.getElementById("er4");
    var err= document.getElementById("error4");
  er.style.display="none";
  err.style.display="none";
}

  event.preventDefault();
  let valid = true;
  if(chk){
    let ans = solve(inc, ex_inc, age, dud, valid);
 
    let fans = Math.floor(ans);
    if (fans<0.0) {
      fans=0;
      y.style.display = "block";
      x.style.display = "none";
      var des1=document.getElementById("des1");
      var des2=document.getElementById("des2");
      var final_ans=document.getElementById("final_ans");
      des1.innerHTML="Invalid input, Income after total deduction cannot be negative";
      des2.style.display="none";
      des3.style.display="none";
      final_ans.innerHTML="0";
      final_ans.style.display="none";
      
      
    } else {
      var des1=document.getElementById("des1");
      var des2=document.getElementById("des2");
      var final_ans=document.getElementById("final_ans");
      des1.innerHTML="Your overall income wil be";
      des2.style.display="block";
      final_ans.style.display="block";  
      console.log("your total income is", fans);
    }
  
    var zz=numberWithCommas(fans);
    var ch=document.getElementById("final_ans");
     ch.innerHTML=zz;

    //console.log(x.style.display);

    if (x.style.display === "" || x.style.display === "block") {
      y.style.display = "block";
      x.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    } 
  }
}

function bck(){
  var x = document.getElementById("ok");
  var y = document.getElementById("result");

  y.style.display="none";
  x.style.display="block";
}

function isNum(str) {
  return !isNaN(Number(str));
}

function solve(inc, ex_inc, agge, dud, valid) {
  let x,y,age,w;
  x=parseFloat(inc),y=parseFloat(ex_inc),age=parseFloat(agge),w=parseFloat(dud);
  let tt_inc = x + y - w;
  console.log(inc, ex_inc, dud, 'tt_inc is', tt_inc);
  if (tt_inc < 0.0) {
    valid = false;
    return -1;
  }
  if (tt_inc <= 800000.0) {
    applied = false;
    return tt_inc;
  } else {
    let ovr_inc = tt_inc - 800000;
    if (age < 40.0) {
      let tax = ovr_inc * 0.3;
      return tt_inc - tax;
    } else if (age >= 40.0 && age < 60.0) {
      let tax = ovr_inc * 0.4;
      return tt_inc - tax;
    } else if (age >= 60.0) {
      let tax = ovr_inc * 0.1;
      return tt_inc - tax;
    }
  }
}



//suggestions
function sugg1() {
  var x = document.getElementById("sugg1");
  if (x.style.display === "") {
    x.style.display = "block";
  } else x.style.display = "none";
}
function sugg2() {
  var x = document.getElementById("sugg2");
  if (x.style.display === "") {
    x.style.display = "block";
  } else x.style.display = "none";
}
function sugg3() {
  var x = document.getElementById("sugg3");
  if (x.style.display === "") {
    x.style.display = "block";
  } else x.style.display = "none";
}
function sugg4() {
  var x = document.getElementById("sugg4");
  if (x.style.display === "") {
    x.style.display = "block";
  } else x.style.display = "none";
}

//Errors
function er1() {
  var x = document.getElementById("er1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
  var y=document.getElementById("error1");
  if (y.style.display === "") {
    y.style.display = "block";
  } else y.style.display = "";
}
function er2() {
  var x = document.getElementById("er2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 

  var y=document.getElementById("error2");
  if (y.style.display === "") {
    y.style.display = "block";
  } else y.style.display = "";
}
function er3() {
  var x = document.getElementById("er3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
  var y=document.getElementById("error3");
  if (y.style.display === "") {
    y.style.display = "block";
  } else y.style.display = "";
}
function er4() {
  var x = document.getElementById("er4");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  var y=document.getElementById("error4");
  if (y.style.display === "") {
    y.style.display = "block";
  } else y.style.display = "";
}


function numberWithCommas(x) {
  let xx=parseInt(x);
  if(xx == 0)return 0;
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}