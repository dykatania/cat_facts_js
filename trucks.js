let targets = document.getElementsByClassName('target');
let target = targets[0];

let title = document.createElement('h2')
title.innerText = 'Trucks list';
title.classList.add('title');
target.appendChild(title);

fetch('https://parallelum.com.br/fipe/api/v1/caminhoes/marcas')
    .then(resp => resp.json())
    .then(
        vehicles => {
            for (const vehicle of vehicles) {

                let div = document.createElement('div');
                div.classList.add('vehicle');

                let title = document.createElement('h4');
                title.classList.add('info');
                title.innerText = vehicle.nome;
                title.onclick = function infoClick() {

                    let box = document.createElement('div');
                    box.classList.add('box');

                    let info = document.createElement('p');
                    info.innerText = 'Truck code: ' + vehicle.codigo;
                    box.appendChild(info);

                    title.appendChild(box);
                }
                div.appendChild(title);

                target.appendChild(div);
            }
        }
    )