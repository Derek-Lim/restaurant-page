import './style.css';
import homePage from './home.js';
import contactPage from './contact.js';

document.body.append(header());
document.body.append(homePage());
document.body.append(footer());

function header() {
    const header = document.createElement('header');
    //Add nav
    const nav = document.createElement('nav');
    header.append(nav);
    //Add "home" button
    const homeButton = document.createElement('button');
    homeButton.classList.add('home');
    homeButton.textContent = 'Home';
    nav.append(homeButton);
    //Add "menu" button
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu');
    menuButton.textContent = 'Menu';
    nav.append(menuButton);
    //Add "contact" button
    const contactButton = document.createElement('button');
    contactButton.classList.add('contact');
    contactButton.textContent = 'Contact';
    nav.append(contactButton);

    return header;
}

function footer() {
    const footer = document.createElement('footer');
    //Add link to original website
    const a = document.createElement('a');
    a.href = 'https://eckben.github.io/bearysBreakfastBar/';
    a.textContent = 'Real website - https://eckben.github.io/bearysBreakfastBar/';
    footer.append(a);
    //Add link to background image
    const a1 = document.createElement('a');
    a1.href = 'https://www.freepik.com/vectors/food';
    a1.textContent = 'Background image created by dgim-studio - www.freepik.com';
    footer.append(a1);

    return footer;
}

const homeButton = document.querySelector('.home');

homeButton.addEventListener('click', () => {
    //remove everything inside div#content
    const one = document.querySelector('.one');
    one.remove();
    const two = document.querySelector('.two');
    two.remove();
    const three = document.querySelector('.three');
    three.remove();
    const four = document.querySelector('.four');
    four.remove();
    //insert "home" content into div#content
    document.body.append(homePage());

    //remove footer
    const previousFooter = document.querySelector('footer');
    previousFooter.remove();
    //create footer
    document.body.append(footer());
});

const contactButton = document.querySelector('.contact');

contactButton.addEventListener('click', () => {
    //remove everything inside div#content
    const one = document.querySelector('.one');
    one.remove();
    const two = document.querySelector('.two');
    two.remove();
    const three = document.querySelector('.three');
    three.remove();
    const four = document.querySelector('.four');
    four.remove();
    //insert "home" content into div#content
    document.body.append(contactPage());

    //remove footer
    const previousFooter = document.querySelector('footer');
    previousFooter.remove();
    //create footer
    document.body.append(footer());
})