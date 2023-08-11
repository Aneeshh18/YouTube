export const nameList = [
  "John Smith",
  "Jane Doe",
  "Michael Johnson",
  "Emily Williams",
  "William Brown",
  "Olivia Davis",
  "James Miller",
  "Sophia Wilson",
  "David Anderson",
  "Ava Martinez",
  "Robert Taylor",
  "Isabella Garcia",
  "Daniel Jackson",
  "Mia Lopez",
  "Joseph Harris",
  "Amelia Lee",
  "Thomas Martin",
  "Ella Moore",
  "Charles Clark",
  "Lily Young",
  "Christopher Turner",
  "Grace Hall",
  "Matthew Hernandez",
  "Chloe Allen",
  "Andrew Hill",
  "Sofia Walker",
  "Anthony Perez",
  "Liam Scott",
  "Elizabeth Mitchell",
  "Benjamin Green",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomMessages(length) {
  const words = [
    "Hello", "How", "Are", "You", "Today", "I", "Hope", "Everything", "Is", "Going",
    "Well", "Have ", "A", "Great:)", "Day", "Nice", "To", "Meet", "You", "What's", "Up",
    "Doing", "Anything", "Exciting", "Just", "Chilling;)", "Enjoying", "The", "Weather",
    "Working", "Hard", "Relaxing", "At", "Home", "Eating;>", "Delicious", "Food",
    "Thinking", "About", "Life", "Dreaming", "Big", "Exploring", "New", "Places",
    "Learning", "Something", "New", "Feeling", "Happy", "Spreading", "Positivity",
    "Sending", "Good", "Vibes", "Wishing", "You", "Well", "Take", "Care"
  ];
  let result = "";
  let counter = 0;
  while (counter < length) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    result += randomWord + " ";
    counter += randomWord.length + 1; // +1 for the space
  }
  return result.trim();
}
