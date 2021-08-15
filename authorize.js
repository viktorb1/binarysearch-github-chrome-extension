const link = window.location.href;

/* Check for open pipe */
if (window.location.host === 'github.com') {
  chrome.storage.local.get('pipe_bsghsync', (data) => {
    if (data && data.pipe_bsghsync) {
    	window.close()
    }
  });
}
