var installationCodesnippet = document.getElementById('installation-codesnippet');


installationCodesnippet.innerText = '<link rel="stylesheet" href="https://retinaui.netlify.app/public/base.css">';

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
    
    setTimeout(() => {HTMLElement.innerHTML = 'Copy'}, 1500);

}


//For the Installation Element
document.getElementById('copy-btn-installation-codesnippet').onclick = () => {
    copyText(installationCodesnippet);
    copyToCopied(document.getElementById('copy-btn-installation-codesnippet'));

}