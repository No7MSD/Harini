const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyugfcugUofl8r2K6vg6OfbMCclbwbPeveeCNVeoq2ExjRLYw6zGIizXpN_sYfDFuRV/exec";


// =========================
// QUIZ DATA
// =========================

const questions = [

    {
        question: "Na unnoda best friend ah?",
        yes: "Therium 😌",
        no: "Enna block pantu kannu munnadi nikkama poidu 😂"
    },

    {
        question: "Na unaku advice panna kepiya?",
        yes: "Good girl, friendship continued 😌",
        no: "Kekama thaan ivlo naal seri seri sonniya? Friendship discontinued 😂"
    },

    {
        question: "Na unaku nalla friend ah?",
        yes: "Nandrii machi, vera ethavuthu solruviyo nu bayanthutan 😂",
        no: "Edua serupa naaye, unaku kolupu adhigama aagiruchu.. How dare you to select this.. Get lost 😤"
    },

    {
        question: "Na unna hurt panna manichupiya?",
        yes: "You are my true friend ❤️",
        no: "Theriyama senja thappu ku manipae kidaiyatha 😭"
    },

    {
        question: "Naan unakku disturb panrenaa?",
        yes: "Mission successful 😈",
        no: "Innum effort podanum pola 😂"
    },

    {
        question: "Namma friendship long-term poguma?",
        yes: "Contract renew pannitom 🤝",
        no: "Seri, 24 hours notice kuduthutu po 😭😂"
    },

    {
        question: "Na unaku message pannama iruntha miss pannuviya?",
        yes: "Awwwwwww thankssssssssss 🥹❤️",
        no: "Okay, inimel nanum disturb panna maatan 😌"
    },

    {
        question: "Naan solradha nee sometimes ignore panriya?",
        yes: "At least honesty irukku 😂",
        no: "I know, ellame ignore thaan panuva 😂"
    },

    {
        question: "Na unna eppavume support pannuvena?",
        yes: "Awww… correct answer. Idha screenshot eduthu vechikaren 🥹😂",
        no: "Seri, inimel un problem-ku Google irukku… naan illa 😌"
    },

    {
        question: "Na unaku mukkiyamaana friend ah?",
        yes: "Theriyum… aana un vaaila kekkanum la 😌",
        no: "Appo ivlo naal friendship nu nadichitiya? Oscar kudikanum unakku 😂"
    },

    {
        question: "Na unkitta edhavadhu sonna secret ah vechupiya?",
        yes: "Good… un mela konjam nambikkai vechikalam 😌",
        no: "Dei… nee friend ah illa WhatsApp forward ah? 😂"
    },

    {
        question: "Na unakku phone panna edupiya?",
        yes: "Wow… en phone-ku value irukku pola 🥹",
        no: "Seri… inimel missed call kooda poda maaten 😤"
    },

    {
        question: "Na unna tease panna unakku pidikkuma?",
        yes: "Appo ready ah iru… ini dhaan actual torture start 😈",
        no: "Adhu unakku pidikalana enna? Enakku romba pidikkume 😂"
    },

    {
        question: "Na kovama irundha nee samadhanapaduthuviya?",
        yes: "Good friend certificate ready pannunga 🏆",
        no: "Naan kovama irundha kooda nee enjoy pannuva pola 😭"
    },

    {
        question: "Na unakku edhavadhu help ketta pannuvia?",
        yes: "Nandri machi… friendship worth-u irukku 😌🤝",
        no: "Seri… inimel naanum 'all the best' mattum sollitu poiduven 😂"
    },

    {
        question: "Na unna romba torture panrena?",
        yes: "Adhaan enakku venum 😌 Mission successful!",
        no: "Appo innum practice venum pola 😈"
    },

    {
        question: "Na first message pannama irundha nee message pannuviya?",
        yes: "Awww… enna thedi varuva pola 🥹😂",
        no: "Appo rendu perum silent-ah irundhu friendship-a close pannidalaam 😂"
    },

    {
        question: "Na unakku advice kudukradhu useful-ah irukka?",
        yes: "Finally! En advice-ku value vandhuduchu 😎",
        no: "Appo naan ivlo naal pesinadhellam wall kitta pesinadha? 😂"
    },

    {
        question: "Na unna marandhuta nee enna marandhuruviya?",
        yes: "Friendship romba temporary ah irukke 😭",
        no: "Awww… escape illa nu confirm pannita 😌😂"
    },

    {
        question: "Naan unakku favourite friend ah?",
        yes: "Theriyum… aana official confirmation venum 😌",
        no: "Seri, un favourite list-a naan hack panni edit panren 😂"
    },

    {
        question: "Na unna kalaichaa nee thirumba kalaippiya?",
        yes: "Appo war officially declared 😈",
        no: "Good… unakku bayam irukku nu therinjiduchu 😂"
    },

    {
        question: "Naan unakku oru important matter sonna serious-ah eduthuppiya?",
        yes: "Good girl… konjam maturity irukku 😌",
        no: "Seri, inimel important matter ellam unakku sollave maaten 😂"
    },

    {
        question: "Na unakku gift kudutha happy aaguviya?",
        yes: "Gift ready… aana expectations romba perusa vechikadha 😂 oru naal gift thedi varum",
        no: "Appo unna happy aakura alavuku oru gift varum, ready ah iru 😂"
    },

    {
        question: "Indha questions mudinjadhukku apramum en kooda friendship continue pannuva?",
        yes: "Congratulations! Nee official-ah en torture list-la permanent member 😈😂",
        no: "Seri… exit door anga irukku 🚪😂"
    },

    // 25th question
    {
        question: "Naan unna vida better friend-a irukka mudiyuma?",
        yes: "Finally! En talent-a recognize pannita 😎😂",
        no: "Correct answer. En level-ku vara konjam kashtam 😌😂"
    }

];


// =========================
// VARIABLES
// =========================

let currentQuestion = 0;

const attemptCounts = {};

const sessionId =
    Date.now().toString() + "-" + Math.random().toString(36).substring(2);


// =========================
// HTML ELEMENTS
// =========================

const questionElement = document.getElementById("question");
const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");
const answerElement = document.getElementById("answer");
const nextButton = document.getElementById("nextBtn");
const progressElement = document.getElementById("progress");


// =========================
// GOOGLE SHEET TRACKING
// =========================

function recordAnswer(option) {

    const current = questions[currentQuestion];

    if (!attemptCounts[currentQuestion]) {
        attemptCounts[currentQuestion] = 0;
    }

    attemptCounts[currentQuestion]++;

    const attempt = attemptCounts[currentQuestion];

    const data = new URLSearchParams();

    data.append("sessionId", sessionId);
    data.append("questionNo", currentQuestion + 1);
    data.append("question", current.question);
    data.append("selectedOption", option);
    data.append("attempt", attempt);

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors"
    })
    .catch(function(error) {
        console.log("Unable to save answer:", error);
    });
}


// =========================
// ANIMATION
// =========================

function createFloatingEmoji(emojis) {

    for (let i = 0; i < 8; i++) {

        const emoji = document.createElement("div");

        emoji.className = "answer-effect";

        emoji.innerText =
            emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left =
            Math.random() * 80 + 10 + "%";

        emoji.style.top =
            Math.random() * 40 + 40 + "%";

        document.body.appendChild(emoji);

        setTimeout(function() {
            emoji.remove();
        }, 1600);
    }
}


function yesAnimation() {

    createFloatingEmoji([
        "❤️",
        "💕",
        "💗",
        "💖",
        "🥰"
    ]);

    yesButton.classList.remove("answer-click");

    setTimeout(function() {
        yesButton.classList.add("answer-click");
    }, 10);
}


function noAnimation() {

    createFloatingEmoji([
        "😂",
        "🤣",
        "😈",
        "😤",
        "🙄"
    ]);

    noButton.classList.remove("answer-click");

    setTimeout(function() {
        noButton.classList.add("answer-click");
    }, 10);
}


// =========================
// LOAD QUESTION
// =========================

function loadQuestion() {

    const current = questions[currentQuestion];

    questionElement.innerText = current.question;

    progressElement.innerText =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;

    answerElement.innerText = "";

    yesButton.style.display = "inline-block";
    noButton.style.display = "inline-block";

    nextButton.style.display = "inline-block";

    if (currentQuestion === questions.length - 1) {
        nextButton.innerText = "Finish 🎉";
    } else {
        nextButton.innerText = "Next ➜";
    }
}


// =========================
// YES BUTTON
// =========================

yesButton.addEventListener("click", function() {

    const current = questions[currentQuestion];

    answerElement.innerText = current.yes;

    recordAnswer("YES");

    yesAnimation();

});


// =========================
// NO BUTTON
// =========================

noButton.addEventListener("click", function() {

    const current = questions[currentQuestion];

    answerElement.innerText = current.no;

    recordAnswer("NO");

    noAnimation();

});


// =========================
// NEXT BUTTON
// =========================

nextButton.addEventListener("click", function() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showFinalMessage();

    }

});


// =========================
// FINAL SCREEN
// =========================

function showFinalMessage() {

    progressElement.innerText =
        "🎉 Test Completed 🎉";

    questionElement.innerText =
        "Friendship Test Completed! 😂";

    answerElement.innerText =
        "25 questions survive pannita! " +
        "Official-ah nee en torture list-la permanent member 😈😂";

    yesButton.style.display = "none";
    noButton.style.display = "none";
    nextButton.style.display = "none";

    createConfetti();
}


// =========================
// CONFETTI
// =========================

function createConfetti() {

    const emojis = [
        "🎉",
        "🎊",
        "✨",
        "❤️",
        "😂",
        "🥳",
        "💖"
    ];

    for (let i = 0; i < 40; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.innerText =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.left =
            Math.random() * 100 + "%";

        document.body.appendChild(confetti);

        setTimeout(function() {
            confetti.remove();
        }, 4000);
    }
}


// =========================
// START QUIZ
// =========================

loadQuestion();
