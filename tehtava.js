const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const title1 = document.querySelector('#title1');
const title2 = document.querySelector('#title2');
const titleGrey = document.querySelector('#titleGrey');

const greenbox1text = document.querySelector('#greenbox1text');
const bluebox1text = document.querySelector('#bluebox1text');
const greenbox2text = document.querySelector('#greenbox2text');
const bluebox2text = document.querySelector('#bluebox2text');
const orangeboxtext = document.querySelector('#orangeboxtext');

const proxyosoite = 'https://cors-anywhere.herokuapp.com/'
const arrowButton = document.querySelector('#arrowButton');
const container = document.querySelector('#container');
const leftInfo = document.querySelector('#leftInfo');
const leftColumn = document.querySelector('#leftColumn');
const leftColumn2 = document.querySelector('#leftColumn2');
const leftColumn3 = document.querySelector('#leftColumn3');

const getText = () => {

    fetch(proxyosoite + 'http://users.metropolia.fi/~jyriher/tehtava_paivitys.json')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);

            one.innerHTML = result.instructions.header[0];
            two.innerHTML = result.instructions.header[1];
            three.innerHTML = result.instructions.content;
            title1.innerHTML = result.boxes.title1;
            title2.innerHTML = result.boxes.title2;

            for (i = 0; i < 3; i++) {
                greenbox1text.innerHTML += result.boxes.greenbox1[i] + '<br>';
            }

            bluebox1text.innerHTML += result.boxes.bluebox1;

            for (y = 0; y < 2; y++) {
                greenbox2text.innerHTML += result.boxes.greenbox2[y] + '<br>';
            }

            bluebox2text.innerHTML = result.boxes.bluebox2;
            orangeboxtext.innerHTML = result.boxes.orangebox;

        });
}

arrowButton.addEventListener('click', () => {
    info2.style.display = 'none';
    arrowButton.style.display = 'none';
    three.style.display = 'none';
   // four.style.width = '36%';
    leftInfo.style.display = 'flex';
    leftColumn.style.display = 'block';
    leftColumn2.style.display = 'block';
    leftColumn3.style.display = 'block';
 //   leftColumn2.style.background = 'blue';
    info.style.width = '56em';
    
    fetch(proxyosoite + 'http://users.metropolia.fi/~jyriher/tehtava_paivitys.json')
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        four.innerHTML = result.instructions.help[0];
        five.innerHTML = result.instructions.help[1];
        titleGrey.innerHTML = result.instructions.chart;
       // console.log(result.instructions.help[0]);
    });
});

getText();