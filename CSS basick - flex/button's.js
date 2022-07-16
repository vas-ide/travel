const button = document.getElementById('button')
const span = document.getElementById('span')

const Counter = function (){
    this.count = 0
    this.increase = function (){
        this.count = this.count + 1
    }
}

const counter = new Counter()
span.innerHTML = counter.count;


button.addEventListener('click', (event) => {
    //console.log(event)
    counter.increase()
    span.innerHTML = counter.count
    //console.log(counter.count)
})