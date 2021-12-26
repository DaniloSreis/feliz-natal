const menu = document.querySelector('.menu-mobile')
const nav = document.querySelector('ul')
const links = document.querySelectorAll('nav ul li a')

menu.addEventListener('click', () => {
  menu.classList.toggle('active')
  nav.classList.toggle('active')
})

for (const link of links) {
  link.addEventListener('click', () => {
    menu.classList.remove('active')
    nav.classList.remove('active')
  })
}
