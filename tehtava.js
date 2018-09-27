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
const lineColumns = document.querySelector('#lineColumns');
const lineColumns2 = document.querySelector('#lineColumns2');
const fillColumns = document.querySelector('#fillColumns');
const textColumns = document.querySelector('#textColumns');
const dragColumns = document.querySelector('#dragColumns');

const firstText = document.querySelector('#firstText');
const secondText = document.querySelector('#secondText');
const secondText2 = document.querySelector('#secondText2');
const secondText3 = document.querySelector('#secondText3');
const thirdText = document.querySelector('#thirdText');
const fourthText = document.querySelector('#fourthText');
const fillText1 = document.querySelector('#fillText1');
const fillText2 = document.querySelector('#fillText2');
const fillText3 = document.querySelector('#fillText3');
const fillText4 = document.querySelector('#fillText4');
const fill1 = document.querySelector('.fill1');
const fill2 = document.querySelector('.fill2');
const fill3 = document.querySelector('.fill3');
const fill4 = document.querySelector('.fill4');
const empties = document.querySelectorAll('.empty');


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
    lineColumns.style.display = 'flex';
    lineColumns2.style.display = 'flex';
    fillColumns.style.display = 'flex';
    textColumns.style.display = 'flex';
    dragColumns.style.display = 'flex';

    fetch(proxyosoite + 'http://users.metropolia.fi/~jyriher/tehtava_paivitys.json')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            four.innerHTML = result.instructions.help[0];
            five.innerHTML = result.instructions.help[1];
            titleGrey.innerHTML = result.instructions.chart;
            firstText.innerHTML = result.allquestions.drag.content;
            secondText.innerHTML = result.drag2.content['#text']['0'];
            secondText2.innerHTML = result.drag2.content.font['#text'];
            secondText3.innerHTML = result.drag2.content['#text']['1'];
            thirdText.innerHTML = result.drag3.content;
            fourthText.innerHTML = result.drag4.content;
            fillText1.innerHTML = result.allquestions.drag.header;
            fillText3.innerHTML = result.drag3.header;
            fillText4.innerHTML = result.drag4.header;
            fillText2.innerHTML = result.drag2.header;
            // console.log(result.instructions.help[0]);
        });
});



getText();