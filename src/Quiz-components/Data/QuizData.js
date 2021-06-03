const QuizBank = [
    {
        id: 0,
        question: `What is the capital of Nigeria?`,
        options: [`New Delhi`, `Abuja`, `Aba`, `Onisha`],
        answer: `Abuja`
    },
    {
        id: 1,
        question: `What is the capital of India?`,
        options: [`Punjab`, `Awka`, `Owerri`, `New Delhi`],
        answer: `New Delhi`
    },
    {
        id: 2,
        question: `What is the capital of Australia?`,
        options: [`Mumbai`, `Abuja`, `Warri`, `Sydney`],
        answer: `Sydney`
    },
    {
        id: 3,
        question: `What is the capital of Turkey?`,
        options: [`Bangalore`, `Ankara`, `Istanbul`, `Enugu`],
        answer: `Ankara`
    },
    {
        id: 4,
        question: `What is the capital of Syria?`,
        options: [`Rimadi`, `Damascus`, `Owerri`, `Tel Aviv`],
        answer: `Damascus`
    },
    {
        id: 5,
        question:  `What year did Nigeria win her Last AFCON?`,
        options: [`2013`,`2004`, `1994`, `2015`],
        answer: `2013`
    },
    {
        id: 6,
        question: `What is the capital of England?`,
        options: [`Manchester`, `Newcastle`, `London`, 'Swindon'],
        answer: `London`
    },
    {
        id: 7,
        question: `What year did Nigeria gain independence?`,
        options: [`1967`, `1947`, `1950`, `1960`],
        answer: `1960`
    },
    {
        id: 8,
        question:`Who was the first military head of state in Nigeria`,
        options: [`Gen. Ironsi`, `Gen. Obasanjo`, `Gen. Abacha`, `Gen. Muritala `],
        answer: `Gen. Ironsi`
    },
    {
        id: 9,
        question: `What is the capital of USA?`,
        options: [`New York`, `Washington D.C.`, `New Jersey`, `Texas`],
        answer: `Washington D.C.`    
    },
    {
        id: 10,
        question: `What month do Muslims fast?`,
        options: [`January`, `Shawal`, `Ramadan`,`August`],
        answer: `Ramadan`
    },
    {
        id: 11,
        question:`What is the capital of France?`,
        options: [`New York`, `Dublin`, `London`, `Paris`],
        answer: `Paris`
    },
    {
        id: 12,
        question:`Who is the CEO of Tesla?`,
        options: [`Jeff Bezos`, `Elon Musk`, `Bill Gates`, `Peter Parker`],
        answer: `Elon Musk`
    },
    {
        id: 13,
        question:`The Iphone was created by which company?`,
        options: [`Apple`, `Intel`, `Microsoft`, `Amazon`],
        answer: `Apple`
    },
    {
        id: 14,
        question:`How many Harry Potter books are there?`,
        options: [`1`, `4`, `6`, `7`],
        answer: `7`
    },
    {
        id: 15,
        question: `What is the capital of Croatia ?`,
        options: ["Split", "Osijek", "Zagreb", "Rijeka"],
        answer: `Zagreb`
    },
    {
        id: 16,
        question: `What is the capital of Slovenia ?`,
        options: ["Celje", "Ljubljana", "Maribor", "Koper"],
        answer:   `Ljubljana`
    },
    {
        id: 17,
        question: `What is the capital of Austria ?`,
        options: [`Graz`, `Salzburg`, "Innsbruck", "Vienna"],
        answer: "Vienna"
    },
    {
        id: 18,
        question: "What is the capital of Serbia ?",
        options: ["Belgrade", "Novi Sad", "Niš", "Subotica"],
        answer: "Belgrade"
    },
    {
        id: 19,
        question: "What is the capital of Bosnia and Herzegovina ?",
        options: ["Mostar", "Sarajevo", "Banja Luka", "Tuzla"],
        answer: "Sarajevo"
    },
    {
        id: 20,
        question: "What is the capital of Hungary ?",
        options: ["Zalaegerszeg", "Eger", "Szeged", "Budapest"],
        answer: "Budapest"
    },
    {
        id: 21,
        question: "What is the capital of Slovakia ?",
        options: ["Košice", "Nitra", "Bratislava", "Poprad"],
        answer: "Bratislava"
    },
    {
        id: 22,
        question: "What is the capital of Romania ?",
        options: ["Bucharest", "Craiova", "Constanta", "Braila"],
        answer: "Bucharest"
    },
    {
        id: 23,
        question: "What is the capital of Germany ?",
        options: ["Wolfsburg", "Munich", "Berlin", "Frankfurt"],
        answer: "Berlin"
    }


]

let QuizData = QuizBank.sort(() => Math.random() - Math.random()).slice(0, 10);


export default QuizData;