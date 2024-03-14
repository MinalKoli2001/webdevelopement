var date = new Date();
const year = date.getFullYear();

document.getElementById("year").innerHTML = year;

function addMeanToLS() {
  localStorage.setItem("redirectTo", "#meantable");
}
function addDSToLS() {
    localStorage.setItem("redirectTo", "#dstable");
  }

function redirectOnLoad() {
  // Using set timeout to trigger redirection after given time
  const redirectValFromLS = localStorage.getItem("redirectTo"); // Storing value
  if (!redirectValFromLS) return; // If no value is store, return which means function will end here only
  //   Mhanje hyachya pudhe code run nahi honar jr value nasli local storage madhe tr
  setTimeout(() => {
    window.location.href = redirectValFromLS;
    localStorage.removeItem("redirectTo"); // remove redirectTo from local storage
  }, 0); // 200 is 0.2 second, the code inside set timeout will be called after 1 second
}
