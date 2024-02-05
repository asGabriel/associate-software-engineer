async function executePromise(responseMessage, TIME_TO_TIMEOUT) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(responseMessage);
    }, TIME_TO_TIMEOUT);
  });
}

async function executeExercise() {
  const first = await executePromise("First promisse OK", 1000);
  const second = await executePromise("Second promisse OK", 2000);
  const third = await executePromise("Third promisse OK", 3000);
  console.log(first, second, third);
}

executeExercise();
