const filmBtn = document.getElementById('submit');

filmBtn.addEventListener('click', buttonWorking);

// Another way to make button function
// const filmBtn = document.getElementById('submit');
// filmBtn.onclick = buttonWorking

function buttonWorking(e) {
    const baseURL = 'https://ghibliapi.herokuapp.com/';
    e.preventDefault();
    fetch (baseURL + 'films/')
        .then(res => res.json())
        .then(json => {
            displayResults(json);
        })
}

const displayResults = (films) => {
    // this is grabbing the wrapper
    const wrapper = document.getElementById('moreResults')
    // this will do the code block for each film item
    for (film of films){
        // creates 3 new tags
        let card = document.createElement('div');
        let card_header = document.createElement('div');
        let card_body = document.createElement('div');
        //gives each tag a class / innerText if needed
        card.className = 'card'
        card_header.className = 'card-header'
        card_body.className = 'card-body'
        card_header.innerText = `${film.title} - ${film.release_date}`;
        card_body.innerText = film.description;
    
        // adding the inner divs to the card
        card.appendChild(card_header);
        card.appendChild(card_body);
    
        // adding a card to the container / wrapper
        wrapper.appendChild(card);
    }

}

// const displayResults = (filmInfo) => {
//     let filmsList = document.getElementById('films');
//     filmInfo.map(film => {
//         let filmLi = document.createElement('li');
//         filmLi.innerText = `${film.title} - ${film.release_date}`;
//         filmsList.appendChild(filmLi);
//     })
// }

// async/await
// const testing = async() => {
//     const baseURL = 'https://ghibliapi.herokuapp.com/';
//     let result = await fetch (baseURL + 'films/');
//     let json = await result.json()
//     console.log(json);
// }