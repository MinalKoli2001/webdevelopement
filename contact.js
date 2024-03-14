function Reg() {
  const nameMsg = document.getElementById("nameMsg");
  const emailMsg = document.getElementById("emailMsg");
  //For  Name
  let fname = document.getElementById("name").value;
  if (fname == "") {
    document.getElementById("nameMsg").innerHTML = "Your name is required!";
  } else {
    document.getElementById("nameMsg").innerHTML = "";
  }
  if (fname.length < 3 || fname.length > 15) {
    document.getElementById("nameMsg").innerHTML = "Name length 4-15 char..!";
  } else {
    document.getElementById("nameMsg").innerHTML = "";
  }
  //For  Email
  let email = document.getElementById("email").value;
  if (email == "") {
    document.getElementById("emailMsg").innerHTML = "Your email is required!";
  } else {
    document.getElementById("emailMsg").innerHTML = "";
  }
  //   if (fname.length < 3 || fname.length > 15) {
  //     document.getElementById("emailMsg").innerHTML = "Name length 4-15 char..!";
  //     return false;
  //   } else {
  //     document.getElementById("emailMsg").innerHTML = "";
  //   }
  return false;
}
