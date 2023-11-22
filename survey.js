const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  const name = `${answer}`;

  rl.question("What's an activity that you like doing? ", (answer) => {
    const activity = `${answer}`;

    rl.question("What do you listen to while doing that? ", (answer) => {
      const music = `${answer}`;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        const meal = `${answer}`;

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          const food = `${answer}`;

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            const sport = `${answer}`;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              const superpower = `${answer}`;

              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}!`);

              rl.close();
            });
          });
        });
      });
    });
  });
});