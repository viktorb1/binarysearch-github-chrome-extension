const core = require('@actions/core');
const github = require('@actions/github');

document.getElementById("submit-github").addEventListener("click", onClick);

function onClick(){
	console.log(document.getElementById("github-name").value)
}