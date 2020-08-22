let data = JSON.parse(localStorage.getItem("courseGPA"));

//console.log(data[15])
for(i=0; i<data.length; i++){
    console.log(data[i])
    const div = document.createElement('div')
    div.textContent = data[i]
    document.body.appendChild(div)
}

/*chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log("here in display");
      if (request.greeting == "yo")
        sendResponse({farewell: "goodbye"});
    });*/