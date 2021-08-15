function run() {
  let url = "https://github.com/login/oauth/authorize?client_id=7a9e99b1950075f36492&scope=repo"
  chrome.storage.local.set({ pipe_bsghsync: true });
  chrome.tabs.create({url, selected: true});
}

document.getElementById("submit-github").addEventListener("click", run);
