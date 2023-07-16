
const url = 'https://randomuser.me/api/?results=5';
const fetchEmployes = async () => {
    const response = await fetchEmployes(url);
    const data = await response.json();
    return data;
}


const container = document.querySelector('#container');

const display = (users) => {
    console.log(users);
 
    const listeUsers = users.map((person) => {
        const { picture, title, email} = person;
        return `
        
            <img>${picture}</img>
            <h5>${title}</h5>
            <h6>${email}</h6>
        `
    })
    container.innerHTML = listeUsers.join('');
    
}

let index = 0;
let pages = [];

const init = async() => {
    const followers = await fetchEmployes();

    setupUI();
}

const setupUI = () => {
    display(pages[index]);
}

init();
