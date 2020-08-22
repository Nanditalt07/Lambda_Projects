//alert('Grrr.')
 /*chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
   const re = new RegExp('bear', 'gi')
   const matches = document.documentElement.innerHTML.match(re)
   sendResponse({count: matches.length})
 })*/

 chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  //const re = new RegExp('bear', 'gi')
  //const matches = document.documentElement.innerHTML.match(re)
  if(request.txt === "hello"){
    console.log("hey")
    let array = document.getElementsByClassName('col8 col');
    var grades = new Array();
    //let courseGPA = {
      //txt: "yaitscourseGPA"
    //}
    for(i=0; i<array.length; i++){
      grades[i] = array[i].innerText; 
      console.log(grades[i])
      //console.log(array[i].innerText)
    }

    chrome.runtime.sendMessage({
      info: grades // or whatever you want to send
    });
    //sendResponse(array)

    /*chrome.runtime.sendMessage({greeting: "yo"}, function(response) {
      console.log("here in content")
      console.log(response.farewell);
    });*/
    //localStorage.setItem("courseGPA", JSON.stringify(array));
    //console.log(array.length)
    //console.log(array)
    


  }
  //const matches = document.getElementsByClassName("col8 col").innerHTML
  //sendResponse({count: matches[0].textContent})
 })