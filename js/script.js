const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes')


// console.log(new Date());
// console.log(new Date().getSeconds());
// console.log(new Date().getMinutes());
// console.log(new Date().getHours());
// console.log(new Date().getDate());

function clock() {
    let time = new Date(),
        second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30

    hour.style = `transform:rotate(${hours}deg)`
    min.style = `transform:rotate(${minutes}deg)`
    sec.style = `transform:rotate(${second}deg)`
    hoursNumber.innerHTML =time.getHours() < 10 ? '0'+ time.getHours() : time.getHours();
    minutesNumber.innerHTML =time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    setTimeout(() => clock(), 1000);
}
clock()
const links = document.querySelectorAll('.tabsItem'),
tabs = document.querySelectorAll('.tabsContentItem')
// console.log(links);
// console.log(tabs);
for (let i = 0; i < links.length; i++) {
    links [i].addEventListener('click', function (e) {
        e.preventDefault()
        for (let i = 0; i < links.length; i++) {
            tabs[i].classList.remove('active')
            links[i].classList.remove('active')
        }
        this.classList.add('active')
        tabs [i].classList.add('active')
    })
    
}