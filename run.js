function run() {
  let url = "https://github.com/login/oauth/authorize?client_id=7a9e99b1950075f36492&scope=repo"
  let repo = document.getElementById('github-name')

  chrome.storage.local.set({bsGithubAuthInProgress: true}, function() {
      chrome.tabs.create({url, selected: true})

      chrome.tabs.onUpdated.addListener(
        function(tabId, changeInfo, tab) {
          if (changeInfo.url.startsWith("https://github.com/?code=")) {
            
          }
        }
      );
  });

  
}

document.getElementById("submit-github").addEventListener("click", run);


window.addEventListener('urlchange', function(){
    console.log('location changed!');
})


