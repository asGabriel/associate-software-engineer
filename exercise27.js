async function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise has been done");
    }, 5000);
  });
}
async function timeOutFunction() {
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      throw new Error("Failed promise by timeout");
    }, 2000);
  });

  try {
    await Promise.race([asyncFunction(), timeoutPromise]);
  } catch (error) {
    console.error(error.message);
  }
}

timeOutFunction();
