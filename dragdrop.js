const fills = document.querySelectorAll('.fill');
const taulukko = [];
const varasto = [];
const undraggable = [];
const modal = document.querySelector('#modal');
const span = document.querySelector('.close');
const prologue = document.querySelector('#prologue');
const trueAnswer = document.querySelector('#trueAnswer');
const falseAnswer = document.querySelector('#falseAnswer');
const vastaus = document.querySelector('#vastaus');
let answerCount = 0;
let answerCount2 = 0;
let answerCount3 = 0;
let answerCount4 = 0;
let executeFirst = false;
let executeSecond = false;
let executeThird = false;
let executeFourth = false;
const buttonColumn = document.querySelector('#buttonColumn');
// const proxyosoite = 'https://cors-anywhere.herokuapp.com/';
const rightOn = document.querySelector('#rightOn');
const info2 = document.querySelector('#info2');
const disappear = document.querySelector('#disappear');
//const three = document.querySelector('#three');
const sign = document.querySelector('#sign');
const sign2 = document.querySelector('#sign2');
const sign3 = document.querySelector('#sign3');
const sign4 = document.querySelector('#sign4');


const allowDrop = (ev) => {
    ev.preventDefault();
}

const drag = (ev) => {
    // console.log(ev);
    ev.dataTransfer.setData('text', ev.currentTarget.id);
    // ev.currentTarget.style.background = 'blue';
    taulukko.push(ev.target.parentNode);


}

const drop = (ev) => {
    ev.preventDefault();
    //  console.log(ev.target.id);
    let data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
    varasto.push(ev.target.id);


    ev.srcElement.childNodes['0'].style.background = '#60BD3C';



    // console.log(ev);


    /* if(event.dataTransfer.dropEffect !== 'none'){
         ev.target.appendChild(ev.target.parentNode);
     } */

    if (ev.srcElement.childNodes['0'].id - 1 == ev.currentTarget.id) {
        ev.dataTransfer.dropEffect = 'move';
        modal.style.display = 'block';
        //   alert('Just näin, nappiin meni!');
        taulukko.length = 0;



        fetch(proxyosoite + 'http://users.metropolia.fi/~jyriher/tehtava_paivitys.json')
            .then((response) => {
                return response.json();
            })
            .then((result) => {



                switch (ev.srcElement.childNodes['0'].id - 1) {
                    case 1:

                        executeFirst = true;
                        executeSecond = false;
                        executeThird = false;
                        executeFourth = false;

                        sign.style.display = 'inline-block';
                        ev.srcElement.childNodes['0'].float = 'left';

                        console.log(ev.srcElement.childNodes['0'].id - 1);
                        prologue.innerHTML = result.allquestions.drag.truefalsequestions.question['0'].content;

                        buttonColumn.style.display = 'flex';

                        console.log('vastauslaskuri: ' + answerCount);
                        trueAnswer.addEventListener('click', () => {
                            buttonColumn.style.display = 'none';
                            span.style.display = 'block';
                            answerCount++;
                            console.log('vastauslaskuri: ' + answerCount);
                            if (answerCount == 1) {
                                vastaus.innerHTML = result.allquestions.drag.truefalsequestions.question['0'].right['#text'];
                            } else if (answerCount == 3) {
                                vastaus.innerHTML = result.allquestions.drag.truefalsequestions.question[1].right['#text'];
                            } else if (answerCount == 5) {
                                vastaus.innerHTML = result.allquestions.drag.truefalsequestions.question[2].wrong['#text'];
                            }
                        });
                        falseAnswer.addEventListener('click', () => {
                            span.style.display = 'block';
                            buttonColumn.style.display = 'none';
                            answerCount++;
                            console.log('vastauslaskuri: ' + answerCount);
                            if (answerCount == 1) {
                                vastaus.innerHTML = result.allquestions.drag.truefalsequestions.question['0'].wrong['#text'];
                            } else if (answerCount == 3) {
                                vastaus.innerHTML = result.allquestions.drag.truefalsequestions.question[1].wrong['#text'];
                            } else if (answerCount == 5) {
                                vastaus.innerHTML = result.allquestions.drag.truefalsequestions.question[2].right['#text'];
                            }

                        });



                        span.addEventListener('click', () => {
                            answerCount++;
                            if ((answerCount % 2) == 0 && answerCount < 6) {
                                // modal.style.display = 'none';
                                console.log('vastauslaskuri: ' + answerCount);
                                span.style.display = 'none';
                                buttonColumn.style.display = 'flex';
                                vastaus.innerHTML = '';
                                //  prologue.innerHTML = '';


                                switch (answerCount) {
                                    case 2:
                                        prologue.innerHTML = result.allquestions.drag.truefalsequestions.question[1].content;
                                        // console.log('2.kyssä');
                                        break;
                                    case 4:
                                        prologue.innerHTML = result.allquestions.drag.truefalsequestions.question[2].content;
                                        //     console.log('3.kyssä');
                                        break;
                                    default:
                                        console.log('no can do')
                                        break;
                                }

                            } else {
                                //  prologue.innerHTML = 'uusi kokeilu';
                                //vastaus.innerHTML = '';
                                vastaus.innerHTML = '';
                                prologue.innerHTML = '';
                                modal.style.display = 'none';
                                span.style.display = 'none';
                                answerCount = 0;
                                console.log('klikit nollaantuu');
                                console.log('TÄNNE EI ENÄÄ PITÄISI TULLA ENÄÄ MITÄÄN');
                            }
                        });


                        // console.log('ANSWERCOUNT: ' + answerCount);
                        //answerCount = 0;
                        break;
                    case 3:

                        executeFirst = false;
                        executeSecond = true;
                        executeThird = false;
                        executeFourth = false;

                        sign2.style.display = 'inline-block';
                        ev.srcElement.childNodes['0'].float = 'left';

                        console.log(ev.srcElement.childNodes['0'].id - 1);
                        prologue.innerHTML = result.drag3.truefalsequestions.question['0'].content;
                        buttonColumn.style.display = 'flex';

                        console.log('vastauslaskuri: ' + answerCount2);
                        trueAnswer.addEventListener('click', () => {
                            buttonColumn.style.display = 'none';
                            span.style.display = 'block';
                            answerCount2++;
                            console.log('vastauslaskuri2: ' + answerCount2);
                            if (answerCount2 == 1) {
                                vastaus.innerHTML = result.drag3.truefalsequestions.question['0'].right['#text'];
                            } else if (answerCount2 == 3) {
                                vastaus.innerHTML = result.drag3.truefalsequestions.question[1].right['#text'];
                            } else if (answerCount2 == 5) {
                                vastaus.innerHTML = result.drag3.truefalsequestions.question[2].wrong['#text'];
                            }
                        });
                        falseAnswer.addEventListener('click', () => {
                            buttonColumn.style.display = 'none';
                            span.style.display = 'block';
                            answerCount2++;
                            console.log('vastauslaskuri2: ' + answerCount2);
                            if (answerCount2 == 1) {
                                vastaus.innerHTML = result.drag3.truefalsequestions.question['0'].wrong['#text'];
                            } else if (answerCount2 == 3) {
                                vastaus.innerHTML = result.drag3.truefalsequestions.question[1].wrong['#text'];
                            } else if (answerCount2 == 5) {
                                vastaus.innerHTML = result.drag3.truefalsequestions.question[2].right['#text'];
                            }

                        });



                        span.addEventListener('click', () => {
                            answerCount2++;
                            if ((answerCount2 % 2) == 0 && answerCount2 < 6) {
                                // modal.style.display = 'none';
                                console.log('vastauslaskuri2: ' + answerCount2);
                                span.style.display = 'none';
                                buttonColumn.style.display = 'flex';
                                vastaus.innerHTML = '';
                                //  prologue.innerHTML = '';


                                switch (answerCount2) {
                                    case 2:
                                        prologue.innerHTML = result.drag3.truefalsequestions.question[1].content;
                                        //console.log('2.kyssä');
                                        break;
                                    case 4:
                                        prologue.innerHTML = result.drag3.truefalsequestions.question[2].content;
                                        //     console.log('3.kyssä');
                                        break;
                                    default:
                                        console.log('no can do');
                                        break;
                                }

                            } else {
                                //  prologue.innerHTML = 'uusi kokeilu';
                                //vastaus.innerHTML = '';
                                vastaus.innerHTML = '';
                                prologue.innerHTML = '';
                                modal.style.display = 'none';
                                span.style.display = 'none';
                                answerCount2 = 0;
                                console.log('klikit nollaantuu');

                            }
                        });


                        // console.log('ANSWERCOUNT: ' + answerCount);
                        //answerCount = 0;
                        break;
                    case 5:

                        executeFirst = false;
                        executeSecond = false;
                        executeThird = true;
                        executeFourth = false;

                        sign3.style.display = 'inline-block';
                        ev.srcElement.childNodes['0'].float = 'left';

                        console.log(ev.srcElement.childNodes['0'].id - 1);
                        prologue.innerHTML = result.drag4.truefalsequestions.question['0'].content;
                        buttonColumn.style.display = 'flex';

                        console.log('vastauslaskuri3: ' + answerCount3);
                        trueAnswer.addEventListener('click', () => {
                            buttonColumn.style.display = 'none';
                            span.style.display = 'block';
                            answerCount3++;
                            console.log('vastauslaskuri3: ' + answerCount3);
                            if (answerCount3 == 1) {
                                vastaus.innerHTML = result.drag4.truefalsequestions.question['0'].right['#text'];
                            } else if (answerCount3 == 3) {
                                vastaus.innerHTML = result.drag4.truefalsequestions.question[1].wrong['#text'];
                            } else if (answerCount3 == 5) {
                                vastaus.innerHTML = result.drag4.truefalsequestions.question[2].right['#text'];
                            }
                        });
                        falseAnswer.addEventListener('click', () => {
                            buttonColumn.style.display = 'none';
                            span.style.display = 'block';
                            answerCount3++;
                            console.log('vastauslaskuri2: ' + answerCount3);
                            if (answerCount3 == 1) {
                                vastaus.innerHTML = result.drag4.truefalsequestions.question['0'].wrong['#text'];
                            } else if (answerCount3 == 3) {
                                vastaus.innerHTML = result.drag4.truefalsequestions.question[1].right['#text'];
                            } else if (answerCount3 == 5) {
                                vastaus.innerHTML = result.drag4.truefalsequestions.question[2].wrong['#text'];
                            }

                        });



                        span.addEventListener('click', () => {
                            answerCount3++;
                            if ((answerCount3 % 2) == 0 && answerCount3 < 6) {
                                // modal.style.display = 'none';
                                console.log('vastauslaskuri3: ' + answerCount3);
                                buttonColumn.style.display = 'flex';
                                span.style.display = 'none';
                                vastaus.innerHTML = '';
                                //  prologue.innerHTML = '';


                                switch (answerCount3) {
                                    case 2:
                                        prologue.innerHTML = result.drag4.truefalsequestions.question[1].content;
                                        //console.log('2.kyssä');
                                        break;
                                    case 4:
                                        prologue.innerHTML = result.drag4.truefalsequestions.question[2].content;
                                        //     console.log('3.kyssä');
                                        break;
                                    default:
                                        console.log('no can do');
                                        break;
                                }

                            } else {
                                //  prologue.innerHTML = 'uusi kokeilu';
                                //vastaus.innerHTML = '';
                                vastaus.innerHTML = '';
                                prologue.innerHTML = '';
                                modal.style.display = 'none';
                                span.style.display = 'none';
                                answerCount3 = 0;
                                console.log('klikit nollaantuu');

                            }
                        });

                        break;
                    case 7:

                        executeFirst = false;
                        executeSecond = false;
                        executeThird = false;
                        executeFourth = true;

                        sign4.style.display = 'inline-block';
                        ev.srcElement.childNodes['0'].float = 'left';

                        console.log(ev.srcElement.childNodes['0'].id - 1);
                        prologue.innerHTML = result.drag2.truefalsequestions.question['0'].content;
                        buttonColumn.style.display = 'flex';

                        console.log('vastauslaskuri4: ' + answerCount4);
                        trueAnswer.addEventListener('click', () => {
                            buttonColumn.style.display = 'none';
                            span.style.display = 'block';
                            answerCount4++;
                            console.log('vastauslaskuri4: ' + answerCount4);
                            if (answerCount4 == 1) {
                                vastaus.innerHTML = result.drag2.truefalsequestions.question['0'].right['#text'];
                            } else if (answerCount4 == 3) {
                                vastaus.innerHTML = result.drag2.truefalsequestions.question[1].right['#text'];
                            } else if (answerCount4 == 5) {
                                vastaus.innerHTML = result.drag2.truefalsequestions.question[2].wrong['#text'];
                            }
                        });
                        falseAnswer.addEventListener('click', () => {
                            buttonColumn.style.display = 'none';
                            span.style.display = 'block';
                            answerCount4++;
                            console.log('vastauslaskuri2: ' + answerCount4);
                            if (answerCount4 == 1) {
                                vastaus.innerHTML = result.drag2.truefalsequestions.question['0'].wrong['#text'];
                            } else if (answerCount4 == 3) {
                                vastaus.innerHTML = result.drag2.truefalsequestions.question[1].wrong['#text'];
                            } else if (answerCount4 == 5) {
                                vastaus.innerHTML = result.drag2.truefalsequestions.question[2].right['#text'];
                            }

                        });



                        span.addEventListener('click', () => {
                            answerCount4++;
                            if ((answerCount4 % 2) == 0 && answerCount4 < 6) {
                                // modal.style.display = 'none';
                                console.log('vastauslaskuri4: ' + answerCount4);
                                buttonColumn.style.display = 'flex';
                                span.style.display = 'none';
                                vastaus.innerHTML = '';
                                //  prologue.innerHTML = '';


                                switch (answerCount4) {
                                    case 2:
                                        prologue.innerHTML = result.drag2.truefalsequestions.question[1].content;
                                        //console.log('2.kyssä');
                                        break;
                                    case 4:
                                        prologue.innerHTML = result.drag2.truefalsequestions.question[2].content;
                                        //     console.log('3.kyssä');
                                        break;
                                    default:
                                        console.log('no can do');
                                        break;
                                }

                            } else {
                                //  prologue.innerHTML = 'uusi kokeilu';
                                //vastaus.innerHTML = '';
                                vastaus.innerHTML = '';
                                prologue.innerHTML = '';
                                modal.style.display = 'none';
                                span.style.display = 'none';
                                answerCount4 = 0;
                                console.log('klikit nollaantuu');

                            }
                        });
                        break;
                    default:
                        console.log('ei mikään näistä');
                }
            });
    } else {
        //   const back = ev.srcElement.childNodes[0];
        // ev.dataTransfer.dropEffect = 'none';
        console.log(ev.currentTarget.id);
        console.log(ev.srcElement.childNodes['0'].id - 1)
        taulukko[0].appendChild(ev.target.childNodes['0']);
        //  alert('No eihän se ihan näin mee');
        //  console.log(taulukko[0].childNodes)

        const blink = (a) => {
            setTimeout(() => {
                console.log(a);
                a.style.background = 'red';
                setTimeout(() => {
                   a.style.background = '#78ce4d'
                }, 300);
            }, 100);
        }
        blink(taulukko[0].childNodes[2]);
        // ev.currentTarget.setAttribute('draggable', true);
     //   taulukko[0].childNodes[2].style.background = 'red';
        taulukko.length = 0;
        //  console.log(back);
        // append back to the original parent            
        // back.appendChild(ev.target);
    }
}

const dragStart = (ev) => {
    console.log('start');
    console.log(varasto);
}

const dragEnd = (ev) => {

    sign.setAttribute('draggable', false);

    // console.log(ev);

    // console.log(varasto);
    // console.log('LOOK: ' + (ev.target.id - 1));

    if (ev.dataTransfer.dropEffect == 'none') {
        //    console.log(ev.target.parentNode);
        ev.target.parentNode.appendChild(ev.target);
        //   console.log('Palautettu vanhemmalle!');
        ev.currentTarget.setAttribute('draggable', true);
        taulukko.length = 0;
        //varasto.length = 0;
    } else if (varasto[0] == ev.target.id - 1) {
        // ev.currentTarget.setAttribute('draggable', false);
        ev.currentTarget.setAttribute('draggable', false);
        ev.target.children['0'].setAttribute('draggable', false);
        //   console.log(ev.target.children['0'])
        //   console.log('SAMAT!');
        undraggable.push(ev.target.id);
    } else if (undraggable.includes(ev.target.id)) {
        ev.currentTarget.setAttribute('draggable', false);
        ev.target.children['0'].setAttribute('draggable', false);
    }
    console.log('end');

    if (undraggable.length == 4) {
        rightOn.style.display = 'block';
    }
    //    console.log(taulukko);
    varasto.length = 0;
    //   console.log(undraggable);
}

for (fill of fills) {
    fill.setAttribute('draggable', true);
    // filler.addEventListener('ondragstart', drag);
    fill.addEventListener('dragend', dragEnd);
    fill.addEventListener('dragstart', dragStart);
}

rightOn.addEventListener('click', () => {
    info2.style.display = 'flex';
    disappear.style.display = 'none';
    three.style.display = 'flex';
    three.style.width = '50%';
    arrowButton.style.display = 'flex';
});