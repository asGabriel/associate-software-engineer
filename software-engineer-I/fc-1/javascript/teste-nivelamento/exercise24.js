async function promisePretendToFailByTimeout() {
  7;
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise has been done");
    }, 5000);
  });

  const failPromise = setTimeout(() => {
    throw new Error("Failed promise by timeout");
  }, 3000);

  try {
    const result = await promise;
    clearTimeout(failPromise);
    
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

const execute = () => {
  promisePretendToFailByTimeout()
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));
};

execute();
