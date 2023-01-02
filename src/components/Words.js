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
    await fetch(wordDB)
    .then((r) => r.text())
    .then((res) => {
        const wordArray  = res.split("\n")
        wordSet = new Set(wordArray)
    });
    return {wordSet};
}