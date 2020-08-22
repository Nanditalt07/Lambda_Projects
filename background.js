/*console.log("Im in the background")
let array = document.getElementsByClassName('col8 col');
for(elt of array){
    console.log(elt.innerText)
  }*/

  //let data = JSON.parse(localStorage.getItem("courseGPA"));
  //console.log(data[0].innerText)

 chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
      localStorage.setItem("courseGPA", JSON.stringify(request.info));
      //localStorage["info"] = request.info;
      //console.log(localStorage["info"].length)
      /*for(elt in request.info){
        console.log(request.info[elt])
      }*/
      //console.log(request.info)
    }
);