const containerEl = document.querySelector(".container");

const careers = ["Frontend Developer", "Software Developer","Backend Developer"];

let careerIndex = 0;

let characterIndex = 0;

updateText();


function updateText(){
    characterIndex += 1;
    containerEl.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
    if(characterIndex === careers[careerIndex].length){
        careerIndex+=1;
        characterIndex = 0;
    }
    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(updateText, 300);
}
