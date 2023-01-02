import wordDB from "../wordDB.txt"

export const words = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
];

export const generateSet = async () => {
    let wordSet;
    let correctWord;
    await fetch(wordDB)
    .then((r) => r.text())
    .then((res) => {
        const wordArray  = res.split("\n")
        wordSet = new Set(wordArray)
        correctWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    });
    return {wordSet, correctWord};
}