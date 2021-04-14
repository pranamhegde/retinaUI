var installationCodesnippet = document.getElementById('installation-codesnippet');
var alertBoxLightBlueCodesnippet = document.getElementById('alert-box-light-blue-codesnippet');
var alertBoxLightGreenCodesnippet = document.getElementById('alert-box-light-green-codesnippet');
var alertBoxLightGreyCodesnippet = document.getElementById('alert-box-light-grey-codesnippet');
var alertBoxLightGoldenYellowCodesnippet = document.getElementById('alert-box-light-golden-yellow-codesnippet');
var buttonPrimaryCodesnippet = document.getElementById('button-primary-codesnippet');
var buttonSecondaryCodesnippet = document.getElementById('button-secondary-codesnippet');
var cardBoxCodesnippet = document.getElementById('card-box-codesnippet');




installationCodesnippet.innerText = '\n\n<link rel="stylesheet" href="https://retinaui.netlify.app/public/base.css">';
alertBoxLightBlueCodesnippet.innerText = '\n\n<div class="alert-box light-blue"> \n  <p>Alert Box</p>\n</div>';
alertBoxLightGreenCodesnippet.innerText = '\n\n<div class="alert-box light-green"> \n  <p>Alert Box</p>\n</div>';
alertBoxLightGreyCodesnippet.innerText = '\n\n<div class="alert-box light-grey"> \n  <p>Alert Box</p>\n</div>';
alertBoxLightGoldenYellowCodesnippet.innerText = '\n\n<div class="alert-box light-golden-yellow"> \n  <p>Alert Box</p>\n</div>';
buttonPrimaryCodesnippet.innerText = '\n\n<button class="button-primary">Home</button>\n';
buttonSecondaryCodesnippet.innerText = '\n\n<button class="button-secondary">Home</button>\n';
cardBoxCodesnippet.innerText = `\n\n <div class="card-box"> \n 
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy 
text ever since\n the 1500s, when an unknown printer took a galley of type and scrambled \n  it to make a type specimen book.
 </p>\n  </div> `;


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

//For Primary Button
document.getElementById('btn-copy-button-primary-codesnippet').onclick = () => {
    copyText(buttonPrimaryCodesnippet);
    copyToCopied(document.getElementById('btn-copy-button-primary-codesnippet'));
}

//For Secondary Button
document.getElementById('btn-copy-button-secondary-codesnippet').onclick = () => {
    copyText(buttonSecondaryCodesnippet);
    copyToCopied(document.getElementById('btn-copy-button-secondary-codesnippet'));
}

//For Card Box
document.getElementById('btn-copy-card-box-codesnippet').onclick = () => {
    copyText(cardBoxCodesnippet);
    copyToCopied(document.getElementById('btn-copy-card-box-codesnippet'));
}
