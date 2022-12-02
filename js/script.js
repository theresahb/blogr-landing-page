const featuresMenu = document.querySelector('.features')
const companyMenu = document.querySelector('.company')
const connectMenu = document.querySelector('.connect')
const featuresArrow = document.querySelector("img[alt='f-arrow']")
const companyArrow = document.querySelector("img[alt='c-arrow']")
const connectArrow = document.querySelector("img[alt='co-arrow']")
const featuresDropdown = document.querySelector('.features-dropdown')
const companyDropdown = document.querySelector('.company-dropdown')
const connectDropdown = document.querySelector('.connect-dropdown')
const mobileFeaturesMenu = document.querySelector('.mobile-features')
const mobileCompanyMenu = document.querySelector('.mobile-company')
const mobileConnectMenu = document.querySelector('.mobile-connect')
const mobileFeaturesArrow = document.querySelector("img[alt='mf-arrow']")
const mobileCompanyArrow = document.querySelector("img[alt='mc-arrow']")
const mobileConnectArrow = document.querySelector("img[alt='mco-arrow']")
const mobileFeaturesDropdown = document.querySelector('.mobile-f-dropdown')
const mobileCompanyDropdown = document.querySelector('.mobile-c-dropdown')
const mobileConnectDropdown = document.querySelector('.mobile-co-dropdown')

let hamburger = document.querySelector('.hamburger-menu')
let closeBtn = document.querySelector('.close')
let menu = document.querySelector('.mobile-menu')


featuresMenu.addEventListener('click', () => {
    featuresArrow.classList.toggle('rotate')
    featuresDropdown.classList.toggle('open')
})
companyMenu.addEventListener('click', () => {
    companyArrow.classList.toggle('rotate')
    companyDropdown.classList.toggle('open')
})

connectMenu.addEventListener('click', () => {
    connectArrow.classList.toggle('rotate')
    connectDropdown.classList.toggle('open')
})

mobileFeaturesMenu.addEventListener('click', () => {
    mobileFeaturesArrow.classList.toggle('rotate')
    mobileFeaturesDropdown.classList.toggle('out')
})

mobileCompanyMenu.addEventListener('click', () => {
    mobileCompanyArrow.classList.toggle('rotate')
    mobileCompanyDropdown.classList.toggle('out')
})

mobileConnectMenu.addEventListener('click', () => {
    mobileConnectArrow.classList.toggle('rotate')
    mobileConnectDropdown.classList.toggle('out')
})



hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none'
    closeBtn.style.display = 'block'
    menu.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    closeBtn.style.display = 'none'
    hamburger.style.display = 'block'
    menu.classList.remove('active')
})