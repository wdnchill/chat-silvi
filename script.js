const botMessages = [
  {
    keyword: "halo",
    response: "Halo juga!"
  },
  {
    keyword: "hallo",
    response: "Halo juga!"
  },
  {
    keyword: "hai",
    response: "Halo juga!"
  },
  {
    keyword: "apa kabar",
    response: "Aku baik-baik saja, terima kasih. Bagaimana dengan Kamu?"
  },
  {
    keyword: "kamu manusia atau bukan",
    response: "HAHAHAHAH kamu lucu Jelas jelas aku ini bot yang di buat oleh manusia "
  },
  {
    keyword: "siapa kamu",
    response: "Saya adalah Silvia bot chat anda."
  },
  {
    keyword: "siapa tuan mu",
    response: "Majikan saya adalah tuan muda WILDAN FIR DAUS."
  },
  {
    keyword: "siapa majikan kamu",
    response: "Majikan saya adalah tuan muda WILDAN FIR DAUS."
  },
  {
    keyword: "siapa wildan fir daus",
    response: "Dia adalah majikan saya  jangan lupa follow akun instagram nya @wdnchil."
  },
  {
    keyword: "terima kasih",
    response: "Sama-sama, senang bisa membantu."
  },
  {
    keyword: "thx",
    response: "Sama-sama, senang bisa membantu."
  },
  {
    keyword: "selamat tinggal",
    response: "Selamat tinggal, semoga hari Anda menyenangkan!"
  }
];

function normalizeInput(input) {
  return input.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '');
}

function sendUserMessage() {
  const userInput = document.getElementById("user-input").value;
  const normalizedInput = normalizeInput(userInput);
  const chatBody = document.getElementById("chat-body");

  // create user message element and append to chat body
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.innerHTML = `<p>${userInput}</p>`;
  chatBody.appendChild(userMessage);

  // clear user input
  document.getElementById("user-input").value = "";

  // find bot response based on normalized keyword
  const botResponse = botMessages.find(message => normalizeInput(message.keyword) === normalizedInput);

  // create bot message element and append to chat body
  if (botResponse) {
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.innerHTML = `<p>${botResponse.response}</p>`;
    chatBody.appendChild(botMessage);
  } else {
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.innerHTML = "<p>Maaf, saya tidak mengerti.</p>";
    chatBody.appendChild(botMessage);
  }

  // scroll to bottom of chat body
  chatBody.scrollTop = chatBody.scrollHeight;
}

const userInput = document.getElementById("user-input").value.toLowerCase();

if (userInput.endsWith("?")) {
  // user asked a question
} else if (userInput.endsWith("!")) {
  // user made an exclamation
} else {
  // user made a statement
}

