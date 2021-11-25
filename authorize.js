const link = window.location.href;

/* Check for open pipe */
if (window.location.host === 'github.com') {
    chrome.storage.local.get('bsGithubAuthInProgress', (data) => {
        if (data && data.bsGithubAuthInProgress) {      
            const code = link.split('=')[1]

            chrome.storage.local.set({bsGithubAuthInProgress: false})
            
            function reqListener () {
                let access_token = this.responseText.split("access_token=")[1].split('&')[0]
            }


            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", reqListener);
            oReq.open("POST", "https://github.com/login/oauth/access_token"
                + "?client_id=7a9e99b1950075f36492"
                + "&client_secret=" + "c4165a8650cb795d8bcceaf07ca9b8556940d041"
                + "&code=" + code);
            oReq.send();

        }


    });
}

