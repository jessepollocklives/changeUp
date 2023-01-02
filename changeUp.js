// List of activities

const activities = [
  'Ask a friend to get together sometime soon',
  'Ask someone out on a date',
  'Brush your teeth',
  'Burn some incense',
  'Clean something',
  'Do a dance',
  'Do some push-ups',
  'Do some stretches',
  'Drink a soda',
  'Drink a sparkling water',
  'Drink some coffee',
  'Drink some tea',
  'Drink some water',
  'Eat a vegetable',
  'Eat some fruit',
  'Floss',
  'Gargle some mouthwash',
  'Get some fresh air',
  'Give yourself a footrub',
  'Go for a bike ride',
  'Go for a drive',
  'Go for a hike',
  'Go for a jog',
  'Go for a run',
  'Go for a walk',
  'Go outside, close your eyes and focus on what you hear',
  'Go swimming',
  'Go to the beach, look at the water',
  'Go to the garden',
  'Go to the woods',
  'Have a snack',
  'Light a candle',
  'Listen to African music',
  'Listen to Bach',
  'Listen to Beethoven',
  'Listen to CAN',
  'Listen to Chopin',
  'Listen to Cluster',
  'Listen to Gamelan',
  'Listen to Mozart',
  'Listen to a cover version of one of your favorite songs',
  'Listen to a piece of ambient music',
  'Listen to a piece of classical music',
  'Listen to some jazz',
  'Listen to South American music',
  'Look at some photos from a random year in your life',
  'Look at some photos of outer space',
  'Make a sketch',
  'Massage your head',
  'Meditate',
  'Organize or re-organize something',
  'Plan a trip',
  'Plan a vacation',
  'Play Wordle',
  'Play an instrument',
  'Play solitaire',
  'Play the Google Snake game',
  'Read a random wikipedia article',
  'Read about a chess strategy',
  'Read about an investing strategy',
  'Read about the solar system',
  'Read some horoscopes',
  'Read some inspirational quotes',
  'Read some poetry',
  'Read the Wikipedia page of the year you were born',
  "Read the summary of a plot of a movie you've never seen",
  'Schedule a massage',
  'Scratch your back',
  'Smell some flowers',
  'Spend time with a pet',
  'Take a bath',
  'Take a break, do whatever you want',
  'Take a nap, you choose how long!',
  'Take a power nap',
  'Take a shower',
  'Text an old friend',
  'Turn off all your electronics and close your eyes',
  'Wash your hands',
  'Write a poem',
  'Write a story'
];

// Choose two random indexes
const index1 = Math.floor(Math.random() * activities.length);
let index2;

do {
  index2 = Math.floor(Math.random() * activities.length);
  } while (index2 === index1);

// Output
let message = "...\n....\n.....\n......\n.......\n........\n" +
  "It's time to changeUp...\n" +
  "Close your eyes, take a few deep breaths...\n" +
  "........\n.......\n......\n.....\n....\n...\n\n" +
  "Now choose one of the following activites to changeUp your thinking!\n\n" +
  "Choice A: " + activities[index1] + "\n\n" +
  "OR\n\n" +
  "Choice B: " + activities[index2];

console.log(message);

