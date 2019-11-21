browser.runtime.onMessage.addListener(receiver);

// original body id
const body = document.querySelector("body");

var observer = new MutationObserver(process);
observer.observe(document.querySelector("body"), {
  childList: true,
  subtree: true
});


function process() {

  const imageDivs = document.querySelectorAll('.eLAPa');
   for (const imageDiv of imageDivs) {
    const image = imageDiv.querySelector(".FFVAD");
    const text = image.getAttribute("alt");
    const overlay = imageDiv.querySelector("._9AhH0");
    if (!overlay.classList.contains("textProcessed")) {
      overlay.classList.add("textProcessed");
      overlay.textContent = text;

    } 
    }
    
  
}

// A message is received
function receiver(request, sender, sendResponse) {
  if (request.active) {

    body.classList.add("my-beautiful-extension");
  } else {

    body.classList.remove("my-beautiful-extension");
  }
}
