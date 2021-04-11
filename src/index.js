var installationCodesnippet = document.getElementById('installation-codesnippet');
var alertBoxLightBlueCodesnippet = document.getElementById('alert-box-light-blue-codesnippet');
var alertBoxLightGreenCodesnippet = document.getElementById('alert-box-light-green-codesnippet');
var alertBoxLightGreyCodesnippet = document.getElementById('alert-box-light-grey-codesnippet');
var alertBoxLightGoldenYellowCodesnippet = document.getElementById('alert-box-light-golden-yellow-codesnippet')



installationCodesnippet.innerText = '\n<link rel="stylesheet" href="https://retinaui.netlify.app/public/base.css">';
alertBoxLightBlueCodesnippet.innerText = '\n<div class="alert-box light-blue"> \n  <p>Alert Box</p>\n</div>';
alertBoxLightGreenCodesnippet.innerText = '\n<div class="alert-box light-green"> \n  <p>Alert Box</p>\n</div>';
alertBoxLightGreyCodesnippet.innerText = '\n<div class="alert-box light-grey"> \n  <p>Alert Box</p>\n</div>';
alertBoxLightGoldenYellowCodesnippet.innerText = '\n<div class="alert-box light-golden-yellow"> \n  <p>Alert Box</p>\n</div>'


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
document.getElementById('btn-copy-installation-codesnippet').onclick = () => {
    copyText(installationCodesnippet);
    copyToCopied(document.getElementById('btn-copy-installation-codesnippet'));

}

//For light blue alert box
document.getElementById('btn-copy-alert-box-light-blue-codesnippet').onclick = () => {
    copyText(alertBoxLightBlueCodesnippet);
    copyToCopied(document.getElementById('btn-copy-alert-box-light-blue-codesnippet'));
}

//For light green alert box
document.getElementById('btn-copy-alert-box-light-green-codesnippet').onclick = () => {
    copyText(alertBoxLightGreenCodesnippet);
    copyToCopied(document.getElementById('btn-copy-alert-box-light-green-codesnippet'));
}

//For light grey alert box
document.getElementById('btn-copy-alert-box-light-grey-codesnippet').onclick = () => {
    copyText(alertBoxLightGreyCodesnippet);
    copyToCopied(document.getElementById('btn-copy-alert-box-light-grey-codesnippet'));
}

//For light golden yellow alert box
document.getElementById('btn-copy-alert-box-light-golden-yellow-codesnippet').onclick = () => {
    copyText(alertBoxLightGoldenYellowCodesnippet);
    copyToCopied(document.getElementById('btn-copy-alert-box-light-golden-yellow-codesnippet'));
}
