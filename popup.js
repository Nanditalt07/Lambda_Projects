/*document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick () {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
        })
    }

    function setCount (res) {
        const div = document.createElement('div')
        div.textContent = `${res.count} bears`
        document.body.appendChild(div)
        }
},false)*/


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick () {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            let msg = {
                txt: "hello"
            }
            chrome.tabs.create({ url: chrome.runtime.getURL("displaygpa.html") });

            chrome.tabs.sendMessage(tabs[0].id, msg)
        })
    }

    /*function setCount (res) {
        const div = document.createElement('div')
        div.textContent = `${res.count} bear`
        document.body.appendChild(div)
        }*/
},false)