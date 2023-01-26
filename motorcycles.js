let targets = document.getElementsByClassName('target');
let target = targets[0];

let title = document.createElement('h2')
title.innerText = 'Motorcycles list';
title.classList.add('title');
target.appendChild(title);

fetch('https://parallelum.com.br/fipe/api/v1/motos/marcas')
    .then(resp => resp.json())
    .then(
        vehicles => {
            for (const vehicle of vehicles) {

                let div = document.createElement('div');
                div.classList.add('vehicle');

                let name = document.createElement('h4');
                name.classList.add('info');
                name.innerText = vehicle.nome;
                name.onclick = function infoClick(event) {

                    let box = document.createElement('div');
                    box.classList.add('box');

                    let info = document.createElement('p');
                    info.innerText = 'Motorcycle code: ' + vehicle.codigo;
                    box.appendChild(info);

                    name.appendChild(box);

                }
                div.appendChild(name);

                target.appendChild(div);
            }
        }
    )