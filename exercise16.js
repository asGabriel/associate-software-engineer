function greetings(name) {
  try {
    if (name.length > 0) return `Hello ${name}, nice to see you here`;
  } catch (error) {
    return { message: "Invalid name", error: error.message };
  }
  // if(name === undefined) return "You must insert a valid name";

  return "Guest";
}

// test1
console.log(greetings(""));

//test2
console.log(greetings("Gabriel"));

//test3
console.log(greetings());
