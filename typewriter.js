const sentence = "hello there from lighthouse labs";


for (let x = 0; x < sentence.length; x++) {
  setTimeout(() => {
    process.stdout.write(sentence[x]);

    if (x === sentence.length - 1) {
      process.stdout.write('\n');
    }
  }, x * 50);
}