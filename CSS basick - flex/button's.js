const buttons = document.querySelectorAll('myButton')
const spans = document.querySelectorAll('mySpan')

const Counter = function (){
    this.count = 0
    this.increase = function (){
        this.count = this.count + 1
    }
}

for (let i = 0; i < buttons.length; i++) {
    const counter = new Counter()
    const currentButton = buttons[i];
    const currentSpan = spans[i];
    currentSpan.innerHTML = counter.count;

    currentButton.addEventListener('click', (event) => {
        counter.increase()
        currentSpan.innerHTML = counter.count
    })
}

const counter = new Counter()
span.innerHTML = counter.count;
