const DEFAULT_USER = {
  name: 'Sam',
  email: 'sam@learnrush.nl',
  password: 'learn123',
  grade: 'VWO 3',
  favoriteSubject: 'Wiskunde',
  goal: 'Voldoende halen voor wiskunde',
  avatarColor: '#7c3aed',
  streak: 4,
  xp: 820,
  badgeCount: 7,
  activeSubject: 'Wiskunde'
};

const SUBJECTS = [
  {
    name: 'Wiskunde',
    emoji: '🧠',
    mood: 'Puzzelen en winnen',
    progress: 68,
    accent: '#7c3aed',
    desc: 'Problemen oplossen en logica oefenen zonder stress.',
    hero: 'Waarom niet dit meteen proberen?'
  },
  {
    name: 'Nederlands',
    emoji: '✍️',
    mood: 'Teksten maken',
    progress: 72,
    accent: '#f59e0b',
    desc: 'Lezen, schrijven en analyse met meer creativiteit.',
    hero: 'Je kunt dit met stijl laten zien.'
  },
  {
    name: 'Engels',
    emoji: '🌍',
    mood: 'Leren spreken',
    progress: 81,
    accent: '#38bdf8',
    desc: 'Woorden, grammatica en spreekvaardigheid in een rut.',
    hero: 'Word een echte wereldburger.'
  },
  {
    name: 'Geschiedenis',
    emoji: '🏛️',
    mood: 'Ontdekken en begrijpen',
    progress: 56,
    accent: '#ec4899',
    desc: 'Verken verhalen, feiten en grote momenten uit het verleden.',
    hero: 'De geschiedenis gaat niet dood.'
  },
  {
    name: 'Biologie',
    emoji: '🌱',
    mood: 'Leven ontdekken',
    progress: 64,
    accent: '#10b981',
    desc: 'Cellen, dieren en planten op een makkelijke, duidelijke manier.',
    hero: 'Je leert hoe leven werkt.'
  },
  {
    name: 'Natuurkunde',
    emoji: '⚡',
    mood: 'Wonderen ontdekken',
    progress: 59,
    accent: '#0ea5e9',
    desc: 'Krachten, energie en experimenten op een snellere manier.',
    hero: 'De wetenschap is eigenlijk cool.'
  }
];

const QUIZ_DATA = {
  Wiskunde: [
    {
      question: 'Welke uitdrukking is gelijk aan 3 × 4?',
      answers: ['12', '7', '8', '11'],
      correct: 0
    },
    {
      question: 'Wat is 15 + 7?',
      answers: ['20', '22', '21', '24'],
      correct: 2
    },
    {
      question: 'Hoeveel is 9 ÷ 3?',
      answers: ['4', '2', '3', '5'],
      correct: 2
    }
  ],
  Nederlands: [
    {
      question: 'Wat is het hoofdidee van een tekst?',
      answers: ['De belangrijkste boodschap', 'Het jaartal', 'Een samenvatting met rijm', 'Alle woorden in de tekst'],
      correct: 0
    },
    {
      question: 'Wat is een zelfstandig naamwoord?',
      answers: ['Een werkwoord', 'Een persoon, dier of ding', 'Een bijwoord', 'Een leesteken'],
      correct: 1
    },
    {
      question: 'Wat is een synoniem van “mooi”?',
      answers: ['Snel', 'Leuk', 'Schattig', 'Prachtig'],
      correct: 3
    }
  ],
  Engels: [
    {
      question: 'How do you say “ik ga naar school” in English?',
      answers: ['I go to school', 'I am school', 'I school go', 'Go to I school'],
      correct: 0
    },
    {
      question: 'What is the plural of “child”?',
      answers: ['Childs', 'Children', 'Childes', 'Childer'],
      correct: 1
    },
    {
      question: 'Which sentence is correct?',
      answers: ['She are happy', 'She is happy', 'She am happy', 'She be happy'],
      correct: 1
    }
  ],
  Geschiedenis: [
    {
      question: 'Wie was de eerste mens op de maan?',
      answers: ['Neil Armstrong', 'Yuri Gagarin', 'Buzz Aldrin', 'Michael Collins'],
      correct: 0
    },
    {
      question: 'Wat was de naam van het oude Romeinse bouwwerk voor sportwedstrijden?',
      answers: ['Colosseum', 'Piramide', 'Aquaduct', 'Forum'],
      correct: 0
    },
    {
      question: 'Welke gebeurtenis begon in 1945?',
      answers: ['Einde van de Tweede Wereldoorlog', 'Ontdekking van Amerika', 'Val van het Romeinse Rijk', 'Start van de eerste olympische Spelen'],
      correct: 0
    }
  ],
  Biologie: [
    {
      question: 'Wat doet chlorofyl in een plant?',
      answers: ['Het maakt water', 'Het vangt licht op', 'Het vervoert voedingsstoffen', 'Het maakt afweerstoffen'],
      correct: 1
    },
    {
      question: 'Waarin zit de informatie van een cel?',
      answers: ['In het membraan', 'In de nucleus', 'In het blad', 'In de huid'],
      correct: 1
    },
    {
      question: 'Welke van deze is een dier?',
      answers: ['Maansteen', 'Schildpad', 'Berg', 'Koffie'],
      correct: 1
    }
  ],
  Natuurkunde: [
    {
      question: 'Wat is snelheid?',
      answers: ['De afstand per tijdseenheid', 'Gewicht van een voorwerp', 'Hoe warm iets is', 'Hoe groot iets is'],
      correct: 0
    },
    {
      question: 'Wat is energie?',
      answers: ['De kracht om iets te laten gebeuren', 'Een soort pijn', 'Niets dan warmte', 'Een stof in de natuur'],
      correct: 0
    },
    {
      question: 'Welke kracht trekt objecten naar de aarde?',
      answers: ['Spanning', 'Zwaartekracht', 'Druk', 'Trilling'],
      correct: 1
    }
  ]
};

const STATE = {
  currentUser: null,
  quizIndex: 0,
  activeSubject: DEFAULT_USER.activeSubject,
  modalMode: 'signup'
};

const STORAGE_KEYS = {
  users: 'learnrush-users',
  currentUser: 'learnrush-current-user'
};

const subjectGrid = document.getElementById('subjectGrid');
const profileForm = document.getElementById('profileForm');
const authForm = document.getElementById('authForm');
const authModal = document.getElementById('authModal');
const authTitle = document.getElementById('authTitle');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const createProfileBtn = document.getElementById('createProfileBtn');
const discoverBtn = document.getElementById('discoverBtn');
const focusBtn = document.getElementById('focusBtn');
const rewardBtn = document.getElementById('rewardBtn');
const switchAuthBtn = document.getElementById('switchAuthBtn');
const closeModalBtn = document.getElementById('closeModal');
const quizQuestion = document.getElementById('quizQuestion');
const answerButtons = document.getElementById('answerButtons');
const quizFeedback = document.getElementById('quizFeedback');
const quizSubjectChip = document.getElementById('quizSubjectChip');

function getUsers() {
  const users = JSON.parse(localStorage.getItem(STORAGE_KEYS.users) || '[]');
  return users.length ? users : [DEFAULT_USER];
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users));
}

function getSavedCurrentUser() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.currentUser) || 'null');
  return saved || null;
}

function saveCurrentUser(user) {
  localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(user));
}

function setUser(user) {
  STATE.currentUser = user;
  saveCurrentUser(user);
  renderDashboard();
  renderProfile();
}

function getCurrentUser() {
  return STATE.currentUser || getSavedCurrentUser() || DEFAULT_USER;
}

function initUser() {
  const saved = getSavedCurrentUser();
  if (saved) {
    STATE.currentUser = saved;
  } else {
    STATE.currentUser = DEFAULT_USER;
    saveCurrentUser(DEFAULT_USER);
  }
}

function renderSubjectGrid() {
  subjectGrid.innerHTML = SUBJECTS.map((subject) => {
    const isActive = subject.name === STATE.activeSubject;
    return `
      <article class="subject-card ${isActive ? 'active' : ''}" data-subject="${subject.name}" style="border-top: 5px solid ${subject.accent};">
        <div class="subject-card-header">
          <div class="subject-emoji" style="background:${hexToRgba(subject.accent, 0.16)}">${subject.emoji}</div>
          <span class="chip" style="background:${hexToRgba(subject.accent, 0.12)}; color:${subject.accent};">${subject.mood}</span>
        </div>
        <h3>${subject.name}</h3>
        <p>${subject.desc}</p>
        <div class="subject-meta">
          <span>${subject.progress}% klaar</span>
          <span>⭐ 1 badge</span>
        </div>
        <div class="progress-bar" style="margin-top: 14px;">
          <span style="width: ${subject.progress}%; background: linear-gradient(135deg, ${subject.accent}, #9a8bff);"></span>
        </div>
        <button class="secondary-btn" type="button" data-start-subject="${subject.name}">
          ${isActive ? 'Kies terug' : 'Ga naar vak'}
        </button>
      </article>
    `;
  }).join('');

  document.querySelectorAll('[data-start-subject]').forEach((button) => {
    button.addEventListener('click', () => {
      const subject = button.dataset.startSubject;
      STATE.activeSubject = subject;
      quizSubjectChip.textContent = subject;
      renderSubjectGrid();
      renderDashboard();
      renderQuiz();
      document.getElementById('challenge').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function renderDashboard() {
  const user = getCurrentUser();
  const xpValue = document.getElementById('xpValue');
  const streakValue = document.getElementById('streakValue');
  const badgeValue = document.getElementById('badgeValue');
  const focusValue = document.getElementById('focusValue');
  const heroName = document.getElementById('heroName');
  const heroAvatar = document.getElementById('heroAvatar');

  xpValue.textContent = `${user.xp}`;
  streakValue.textContent = `${user.streak} dagen`;
  badgeValue.textContent = `${user.badgeCount}`;
  focusValue.textContent = user.favoriteSubject || STATE.activeSubject;
  heroName.textContent = user.name || 'Sam';
  heroAvatar.textContent = (user.name || 'S').slice(0, 1).toUpperCase();
  heroAvatar.style.background = `linear-gradient(135deg, ${user.avatarColor || '#7c3aed'}, #ec4899)`;
}

function renderProfile() {
  const user = getCurrentUser();
  const profileName = document.getElementById('profileName');
  const profileMeta = document.getElementById('profileMeta');
  const profileGoal = document.getElementById('profileGoal');
  const profileAvatar = document.getElementById('profileAvatar');
  const profileFormInputs = profileForm.elements;

  profileName.textContent = user.name || 'Sam';
  profileMeta.textContent = `${user.grade || 'VWO 3'} • ${user.favoriteSubject || 'Wiskunde'}`;
  profileGoal.textContent = `Leerdoel: ${user.goal || 'Voldoende halen voor wiskunde'}`;
  profileAvatar.textContent = (user.name || 'S').slice(0, 1).toUpperCase();
  profileAvatar.style.background = `linear-gradient(135deg, ${user.avatarColor || '#7c3aed'}, #ec4899)`;

  profileFormInputs.name.value = user.name || 'Sam';
  profileFormInputs.grade.value = user.grade || 'VWO 3';
  profileFormInputs.favoriteSubject.value = user.favoriteSubject || 'Wiskunde';
  profileFormInputs.goal.value = user.goal || 'Voldoende halen voor wiskunde';

  document.querySelectorAll('.color-chip').forEach((chip) => {
    const isActive = chip.dataset.color === (user.avatarColor || '#7c3aed');
    chip.classList.toggle('active', isActive);
  });
}

function renderQuiz() {
  const currentSubject = STATE.activeSubject;
  const questionSet = QUIZ_DATA[currentSubject] || QUIZ_DATA.Wiskunde;
  const question = questionSet[STATE.quizIndex % questionSet.length];

  quizSubjectChip.textContent = currentSubject;
  quizQuestion.textContent = question.question;
  answerButtons.innerHTML = question.answers.map((answer, index) => `
    <button class="answer-btn" type="button" data-index="${index}">${answer}</button>
  `).join('');

  answerButtons.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => handleAnswer(button, Number(button.dataset.index), question));
  });

  quizFeedback.textContent = '';
}

function handleAnswer(button, chosenIndex, question) {
  const questionSet = QUIZ_DATA[STATE.activeSubject] || QUIZ_DATA.Wiskunde;
  const isCorrect = chosenIndex === question.correct;
  const user = getCurrentUser();

  answerButtons.querySelectorAll('button').forEach((btn) => {
    const idx = Number(btn.dataset.index);
    btn.disabled = true;
    if (idx === question.correct) btn.classList.add('correct');
    if (idx === chosenIndex && !isCorrect) btn.classList.add('wrong');
  });

  if (isCorrect) {
    user.xp += 40;
    user.streak += 1;
    user.badgeCount += 1;
    quizFeedback.textContent = 'Goed gedaan! +40 XP';
    quizFeedback.style.color = '#0b7d5d';
  } else {
    user.streak = Math.max(1, user.streak);
    quizFeedback.textContent = `Niet helemaal goed. Het juiste antwoord was: ${question.answers[question.correct]}`;
    quizFeedback.style.color = '#b42340';
  }

  saveCurrentUser(user);
  renderDashboard();
  openNextQuestion(questionSet);
}

function openNextQuestion(questionSet) {
  setTimeout(() => {
    STATE.quizIndex = (STATE.quizIndex + 1) % questionSet.length;
    renderQuiz();
  }, 1100);
}

function showAuthModal(mode = 'signup') {
  STATE.modalMode = mode;
  authModal.classList.remove('hidden');
  authModal.setAttribute('aria-hidden', 'false');
  authTitle.textContent = mode === 'signup' ? 'Maak jouw LearnRush-account' : 'Log in op LearnRush';
  const authInputs = authForm.querySelectorAll('input');
  authInputs[0].closest('label').classList.toggle('hidden', mode === 'login');
  if (mode === 'login') {
    authForm.querySelector('input[name="name"]').value = '';
  }
}

function closeAuthModal() {
  authModal.classList.add('hidden');
  authModal.setAttribute('aria-hidden', 'true');
}

function resetAuthForm() {
  authForm.reset();
}

function createAccount(name, email, password) {
  const users = getUsers();
  const existing = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    alert('Dit e-mailadres bestaat al. Log in in plaats van opnieuw te registreren.');
    return null;
  }

  const newUser = {
    ...DEFAULT_USER,
    name,
    email,
    password,
    favoriteSubject: 'Wiskunde',
    goal: 'Voldoende halen voor wiskunde',
    streak: 1,
    xp: 150,
    badgeCount: 1,
    avatarColor: '#7c3aed',
    activeSubject: 'Wiskunde'
  };

  users.push(newUser);
  saveUsers(users);
  setUser(newUser);
  return newUser;
}

function loginWithAccount(email, password) {
  const users = getUsers();
  const user = users.find(
    (entry) => entry.email.toLowerCase() === email.toLowerCase() && entry.password === password
  );

  if (!user) {
    alert('Inloggegevens kloppen niet. Probeer opnieuw of maak een account aan.');
    return null;
  }

  setUser(user);
  return user;
}

profileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(profileForm);
  const user = getCurrentUser();

  user.name = form.get('name');
  user.grade = form.get('grade');
  user.favoriteSubject = form.get('favoriteSubject');
  user.goal = form.get('goal');
  user.activeSubject = user.favoriteSubject;
  STATE.activeSubject = user.favoriteSubject;

  const activeColor = document.querySelector('.color-chip.active')?.dataset.color || '#7c3aed';
  user.avatarColor = activeColor;

  const users = getUsers();
  const index = users.findIndex((entry) => entry.email === user.email);
  if (index >= 0) {
    users[index] = user;
    saveUsers(users);
  }

  saveCurrentUser(user);
  renderDashboard();
  renderProfile();
  renderSubjectGrid();
  renderQuiz();
  alert('Je profiel is opgeslagen!');
});

authForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(authForm);

  if (STATE.modalMode === 'signup') {
    const name = form.get('name')?.toString().trim();
    const email = form.get('email')?.toString().trim();
    const password = form.get('password')?.toString().trim();

    if (!name || !email || password.length < 6) {
      alert('Vul alle velden correct in. Het wachtwoord moet minimaal 6 tekens zijn.');
      return;
    }

    const created = createAccount(name, email, password);
    if (created) {
      resetAuthForm();
      closeAuthModal();
    }
    return;
  }

  const email = form.get('email')?.toString().trim();
  const password = form.get('password')?.toString().trim();

  if (!email || !password) {
    alert('Vul e-mail en wachtwoord in.');
    return;
  }

  const loggedIn = loginWithAccount(email, password);
  if (loggedIn) {
    resetAuthForm();
    closeAuthModal();
  }
});

loginBtn.addEventListener('click', () => showAuthModal('login'));
signupBtn.addEventListener('click', () => showAuthModal('signup'));
createProfileBtn.addEventListener('click', () => showAuthModal('signup'));
discoverBtn.addEventListener('click', () => {
  document.getElementById('vakken').scrollIntoView({ behavior: 'smooth' });
});
focusBtn.addEventListener('click', () => {
  document.getElementById('challenge').scrollIntoView({ behavior: 'smooth' });
});
rewardBtn.addEventListener('click', () => {
  const user = getCurrentUser();
  user.xp += 25;
  user.badgeCount += 1;
  setUser(user);
  alert('Bonus verdiend! +25 XP en een extra badge.');
});
closeModalBtn.addEventListener('click', closeAuthModal);

switchAuthBtn.addEventListener('click', () => {
  showAuthModal(STATE.modalMode === 'signup' ? 'login' : 'signup');
});

authModal.addEventListener('click', (event) => {
  if (event.target === authModal) closeAuthModal();
});

document.querySelectorAll('.color-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.color-chip').forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');
  });
});

function hexToRgba(hex, alpha) {
  const value = hex.replace('#', '');
  const bigint = parseInt(value, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

initUser();
renderDashboard();
renderProfile();
renderSubjectGrid();
renderQuiz();
showAuthModal('signup');
window.addEventListener('load', () => {
  closeAuthModal();
});


































