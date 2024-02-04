const firstPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First promise has been done. \n");
    }, 10000);
  });
};

const secondPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second promise has been done. \n");
    }, 12000);
  });
};

const thirdPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Third promise has been done. \n");
    }, 15000);
  });
};

async function execute() {
  const [firstResponse, secondResponse, thirdResponse] = await Promise.all([
    firstPromise(),
    secondPromise(),
    thirdPromise(),
  ]);

  console.log(firstResponse, secondResponse, thirdResponse);
}

execute();
