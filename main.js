const questions = [
    {
        "question": "Jak nazywam cię najczęściej zdrobniale?",
        "options": ["Kochanie", "Skarbie", "Kruszynko", "Kiciu"],
        "correct_answer": "Skarbie"
    },
    {
        "question": "Jaki jest mój ulubiony kolor?",
        "options": ["Czerwony", "Niebieski", "Czarny", "Zielony"],
        "correct_answer": "Zielony"
    },
    {
        "question": "Gdzie chciałbym z tobą zamieszkać?",
        "options": ["W mieście", "Na wsi", "Domek przy lesie", "W lepiance"],
        "correct_answer": "Domek przy lesie"
    },
    {
        "question": "Jaki jest mój ulubiony styl ubierania się?",
        "options": ["Menel-style", "Elegancja-Francja", "Modnie", "Co pierwsze sie nawinie w szafie"],
        "correct_answer": "Menel-style"
    },
    {
        "question": "Co mówię do ciebie jako wyraz miłości?",
        "options": ["Spierdalaj", "Lofciam cie", "Kocham cie", "Tęsknie"],
        "correct_answer": "Spierdalaj"
    },
    {
        "question": "Jaki jest mój ulubiony gatunek filmowy?",
        "options": ["Dramat", "Horror", "Akcja", "Komedia", "Romantyczny"],
        "correct_answer": "Komedia"
    },
    {
        "question": "Jakiego rodzaju filmów nie lubię oglądać?",
        "options": ["Dramat", "Horror", "Romantyczny"],
        "correct_answer": "Romantyczny"
    },
    {
        "question": "Jakie jest moje aktualne marzenie, które chciałbym zrealizować z tobą?",
        "options": ["Oświadczyć sie", "Zerwać", "Zamieszkać razem"],
        "correct_answer": "Zamieszkać razem"
        },
    {
        "question": "Który z nas częściej organizuje niespodzianki dla drugiej osoby?",
        "options": ["Jakub", "Marysia"],
        "correct_answer": "Nie ma to znaczenia, bo liczy się to że sie oboje kochamy"
    },
    {
        "question": "Jaki jest mój ulubiony napój?",
        "options": ["Pepsi", "Coca-Cola", "Fanta", "Mirinda"],
        "correct_answer": "Mirinda"
    },
    {
        "question": "Co najbardziej lubię robić z tobą podczas wolnego czasu?",
        "options": ["Oglądać filmy", "Grać w gierki", "Śpiewać", "Bawić sie", "Wszystkie powyższe"],
        "correct_answer": "Wszystkie powyższe"
    },
    {
        "question": "Jaki jest mój ulubiony rodzaj muzyki?",
        "options": ["Rap", "Trap", "Hip-Hop", "Disco-polo", "Phonk"],
        "correct_answer": "Hip-Hop"
    },
    {
        "question": "Które z nas częściej przygotowuje śniadania?",
        "options": ["Oczywiście że ja :P", "Ty",],
        "correct_answer": "Oczywiście że ja :P"
        },
    {
        "question": "Które z nas jest bardziej romantyczne?",
        "options": ["Jakub", "Marysia"],
        "correct_answer": "Marysia"
    },
    {
        "question": "Co najbardziej cenię w naszym związku?",
        "options": ["Szacunek", "Wsparcie", "Lojalność", "Miłość"],
        "correct_answer": "Lojalność"
    },
    {
        "question": "Które z nas zazwyczaj wybiera filmy do oglądania?",
        "options": ["Jakub", "Marysia"],
        "correct_answer": "Marysia"
    },
    {
        "question": "Co najbardziej lubię w naszych wspólnych przejażdzkach?",
        "options": ["Prędkość", "Miejsce docelowe", "Wspólne śpiewanie", "Ananas"],
        "correct_answer": "Wspólne śpiewanie"
    },
    {
        "question": "Co jest moim ulubionym wspomnieniem z naszego pierwszego spotkania?",
        "options": ["Pocałunek", "Szukanie apartamentu", "Poznanie twojego brata", "Ty w bieliźnie", "Twoja obecność"],
        "correct_answer": "Twoja obecność"
    },
    {
        "question": "Jakie jest moje ulubione hobby?",
        "options": ["Śpiewanie", "Rysowanie", "Robienie grafik", "Motoryzacja", "Kodowanie", "Animowanie", "Obróbka Video", "Kurwa za dużo ich masz"],
        "correct_answer": "Kurwa za dużo ich masz"
    },
    {
        "question": "Jaki jest mój ulubiony sposób na relaks po ciężkim dniu?",
        "options": ["Gierkowanie", "Wylegiwanie się", "Jazda samochodem", "Walenie konia"],
        "correct_answer": "Wylegiwanie się"
    },
    {
        "question": "Co najbardziej lubię robić z tobą w domu?",
        "options": ["Leżeć", "Gotować", "Ruchać sie", "Oglądać filmy", "Grać", "Miziać sie"],
        "correct_answer": "Gotować"
    },
    {
        "question": "Jaki jest mój ulubiony prezent, który dostałem od ciebie?",
        "options": ["Klocki Lego", "Guma na chuja", "Breloczek spier-mana", "Perfumy", "Myszka", "Żel do miejsc intymnych"],
        "correct_answer": "Perfumy"
    },
    {
        "question": "Jaka jest moja ulubiona rzecz, którą robię dla ciebie?",
        "options": ["Prezenty", "Zaskakiwanie cię", "Zdjęcia", "Ruchanie"],
        "correct_answer": "Zaskakiwanie cię"
        },
    {
        "question": "Co najbardziej cenię w twojej obecności?",
        "options": ["Robienie loda", "Całuski", "Po prostu twoja obecność", "Przytulanie"],
        "correct_answer": "Po prostu twoja obecność"
    },
    {
        "question": "Co najbardziej lubię w twoim sposobie okazywania mi miłości?",
        "options": ["Szczerość", "Kreatywność", "Podejście", "Uczucie"],
        "correct_answer": "Szczerość"
    },
    {
        "question": "Co najbardziej mnie kręci w twojej sylwetce?",
        "options": ["Piersi", "Tyłek", "Charakter", "Cipcia", "Brzuszek"],
        "correct_answer": "Cała jesteś wspaniała i wszystko mi sie podoba <3"
    },
    {
        "question": "Co najbardziej cenię w naszej codziennej rutynie?",
        "options": ["Pisanie na dzień dobry", "Pisanie na dobranoc", "Spędzanie czasu podczas dnia", "Wszystko powyższe"],
        "correct_answer": "Wszystko powyższe"
    },
    {
        "question": "Jakie jest moje ulubione miejsce na romantyczny piknik?",
        "options": ["Polana", "Las", "Plaża", "Park"],
        "correct_answer": "Polana"
        },
    {
        "question": "Kochasz mnie?",
        "options": ["Tak"],
        "correct_answer": "Tak"
    },
    {
        "question": "Na pewno?",
        "options": ["Tak"],
        "correct_answer": "Tak"
    },
    {
        "question": "Jesteś pewna?",
        "options": ["Tak"],
        "correct_answer": "Tak"
    },
    {
        "question": "Zostaniesz ze mną na zawsze?",
        "options": ["Tak"],
        "correct_answer": "Tak"
    },
    {
        "question": "Ostatnie pytanie znajduje się na końcu quizu!",
        "options": ["OK"],
        "correct_answer": "OK"
    },
    
]
// Inicjalizacja zmiennych
let currentQuestionIndex = 0;
let score = 0;

// Funkcja renderująca pytanie
function renderQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            ${question.options.map(option => `<li><input type="radio" name="answer" value="${option}">${option}</li>`).join("")}
        </ul>
        <button onclick="submitAnswer()">Submit</button>
    `;
}

// Funkcja sprawdzająca odpowiedź
function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return; // Nie zaznaczono odpowiedzi

    const answer = selectedAnswer.value;
    const correctAnswer = questions[currentQuestionIndex].correct_answer;

    if (answer === correctAnswer) {
        score++; // Zwiększ punktację za poprawną odpowiedź
    }

    currentQuestionIndex++; // Przejdź do następnego pytania

    // Sprawdź, czy to było ostatnie pytanie
    if (currentQuestionIndex >= questions.length) {
        renderEndScreen();
    } else {
        renderQuestion(); // Renderuj następne pytanie
    }
}

// Funkcja renderująca ekran końcowy
function renderEndScreen() {
    const totalQuestions = questions.length;
    const endContainer = document.getElementById("end-container");
    endContainer.innerHTML = `
        <h2>Koniec Quizu</h2>
        <p>Twój wynik: ${score}/${totalQuestions}</p>
    `;
}

// Rozpocznij quiz
renderQuestion();