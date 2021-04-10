var installationCodesnippet = document.getElementById('installation-codesnippet');
var alertBoxLightGreenCodesnippet = document.getElementById('alert-box-light-green-codesnippet');
var alertBoxLightBlueCodesnippet = document.getElementById('alert-box-light-blue-codesnippet');


installationCodesnippet.innerText = '<link rel="stylesheet" href="https://retinaui.netlify.app/public/base.css">';
alertBoxLightGreenCodesnippet.innerText = '\t\t<div class="alert-box light-green"> \n  <p>Alert Box</p>\n</div>';
alertBoxLightBlueCodesnippet.innerText = '\t\t<div class="alert-box light-blue"> \n  <p>Alert Box</p>\n</div>';

const copyText = (HTMLElement) =>{
    if(!HTMLElement){
        return;
    }

    let elementText = HTMLElement.innerText;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);

    inputElement.select();

    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
}

const copyToCopied = (HTMLElement) =>{
    var OriginalText = HTMLElement.innerText;
    console.log(OriginalText)
    HTMLElement.innerText = 'Copied!';
    
    setTimeout(() => {HTMLElement.innerHTML = 'Copy'}, 1000);

}


//For the Installation Element
document.getElementById('copy-btn-installation-codesnippet').onclick = () => {
    copyText(installationCodesnippet);
    copyToCopied(document.getElementById('copy-btn-installation-codesnippet'));

}

//For light green alert box
document.getElementById('copy-alert-box-light-green-codesnippet').onclick = () => {
    copyText(alertBoxLightGreenCodesnippet);
    copyToCopied(document.getElementById('copy-alert-box-light-green-codesnippet'));
}

//For light blue alert box
document.getElementById('copy-alert-box-light-blue-codesnippet').onclick = () => {
    copyText(alertBoxLightBlueCodesnippet);
    copyToCopied(document.getElementById('copy-alert-box-light-blue-codesnippet'));
}