const textEL = document.getElementById('text');  
const speakEL = document.getElementById('speak');  
const languageEL = document.getElementById('language');  
const voiceEL = document.getElementById('voice');  
let voices = [];  

// Load voices  
function loadVoices() {  
    voices = window.speechSynthesis.getVoices();  
    const selectedLang = languageEL.value; // Get selected language  
    voiceEL.innerHTML = ''; // Clear previous options  

    voices.forEach((voice) => {  
        // Add voices that match the selected language  
        if (voice.lang === selectedLang) {  
            const option = document.createElement('option');  
            option.value = voice.name;  
            option.textContent = `${voice.name} (${voice.lang})`;  
            voiceEL.appendChild(option);  
        }  
    });  
}  

// Add event listeners  
speakEL.addEventListener('click', speakText);  
languageEL.addEventListener('change', loadVoices);  
window.speechSynthesis.onvoiceschanged = loadVoices;  

function speakText() {  
    window.speechSynthesis.cancel();  

    const text = textEL.value;  
    const utterance = new SpeechSynthesisUtterance(text);  
    const selectedVoiceName = voiceEL.value;  
    
    // Find the selected voice  
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);  
    if (selectedVoice) {  
        utterance.voice = selectedVoice; // Set the selected voice for the utterance  
    }  

    utterance.lang = languageEL.value; // Set the language for the utterance  
    window.speechSynthesis.speak(utterance);  
}




















































// const textEL = document.getElementById('text');  
// const speakEL = document.getElementById('speak');  
// const languageEL = document.getElementById('language');  
// const voiceEL = document.getElementById('voice');  
// let voices = [];  

 
// function loadVoices() {  
//     voices = window.speechSynthesis.getVoices();  
//     const selectedLang = languageEL.value; 
//     voiceEL.innerHTML = '';  

//     voices.forEach((voice) => {    
//         if (voice.lang === selectedLang) {  
//             const option = document.createElement('option');  
//             option.value = voice.name;  
//             option.textContent = `${voice.name} (${voice.lang})`;  
//             voiceEL.appendChild(option);  
//         }  
//     });  
// }  

// speakEL.addEventListener('click', speakText);  
// languageEL.addEventListener('change', loadVoices);  
// window.speechSynthesis.onvoiceschanged = loadVoices;  

// function speakText() {  
//     window.speechSynthesis.cancel();  

//     const text = textEL.value;  
//     const utterance = new SpeechSynthesisUtterance(text);  
//     const selectedVoiceName = voiceEL.value;  
     
//     const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);  
//     if (selectedVoice) {  
//         utterance.voice = selectedVoice;
//     }  

//     utterance.lang = languageEL.value;
//     window.speechSynthesis.speak(utterance);  
// }
























































// const textEL = document.getElementById('text');  
// const speakEL = document.getElementById('speak');  
// const languageEL = document.getElementById('language');  

// speakEL.addEventListener('click', speakText);  

// function speakText() {  
//     window.speechSynthesis.cancel();  

//     const text = textEL.value;  
//     const utterance = new SpeechSynthesisUtterance(text);  
//     const selectedLanguage = languageEL.value;  

//     utterance.lang = selectedLanguage; // Set the language for the utterance  
//     window.speechSynthesis.speak(utterance);  
// }

































// const textEL = document.getElementById('text');
// const speakEL = document.getElementById('speak');

// speakEL.addEventListener('click', speakText);
// function speakText() {

    
//     window.speechSynthesis.cancel();

//     const text = textEL.value;
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
// }