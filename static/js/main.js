function buttonClickHandler(){
    if(this.value === "good") {
        alert('I knew you select it :)');
    } else {
        this.style.position = 'fixed';
        this.style.top = `${Math.round(Math.random() * window.innerHeight) - this.innerHeight}px`;
        this.style.left = `${Math.round(Math.random() * window.innerWidth) - this.innerWidth}px`;
    }
}

var buttons = document.getElementsByTagName('button');
for (item of buttons){
    item.addEventListener('click', buttonClickHandler);
}
