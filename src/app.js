/*
  File: app.js
  Author: Béres Délia
  Copyright: 2023, Béres Délia
  Group: Szoft I-1-E
  Date: 2023-04-08
  Github: https://github.com/deliaberes/ships.git
  Licens: GNU GPL
  */
const doc = {
    tbody: null
};
const state = {
    ships: []
};

window.addEventListener('load', () => {
    init();
    getShips();
});

function init() {
    doc.tbody = document.querySelector('#ships');
}
function getShips() {
    let host = 'https://localhost:8000/';
    let endpoint = 'ships';
    let url = host + endpoint;
    fetch(url)
    .then(response => response.json())
    .then(result => {
        state.ship = result;
        render();
    });
}

function render() {
    let rows = '';
    state.ships.forEach(ships => {
        console.log(ship.name);
        rows += `
            <tr>
                <td>${ship.name}</td>
                <td>${ship.length}</td>
                <td>${ship.cost}</td>
                <td>${ship.person}</td>
                <td>${ship.trailer}</td>
            </tr>
        `;
    });
    doc.tbody.innerHTML = rows;
}








