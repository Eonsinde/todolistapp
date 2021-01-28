let showAlert = (message, duration) => {
    if (document.querySelector('.alert-box')){
        document.querySelector('.alert-box').remove()
        let div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.width = '400px';
        div.style.left = '0px';
        div.style.right = '0px';
        div.style.top = '5px';
        div.style.margin = 'auto';
        div.style.textAlign = 'center';
        div.style.boxShadow = '0 0 20px #000000bc';
        div.className = 'alert-box bg-primary text-white text-capitalize p-2';
        div.appendChild(document.createTextNode(message));
        document.body.appendChild(div);
        setTimeout(() => { div.remove(); }, duration);
    }else{
        let div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.width = '400px';
        div.style.left = '0px';
        div.style.right = '0px';
        div.style.top = '5px';
        div.style.margin = 'auto';
        div.style.textAlign = 'center';
        div.style.boxShadow = '0 0 20px #000000bc';
        div.className = 'alert-box bg-primary text-white text-capitalize p-2';
        div.appendChild(document.createTextNode(message));
        document.body.appendChild(div);
        setTimeout(() => { div.remove(); }, duration);
    }
    
}

export default showAlert;
