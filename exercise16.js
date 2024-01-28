function greetings(name) {
  try {
    if (name.length > 0) return `Hello ${name}, nice to see you here`;
  } catch (error) {
    return { message: "Invalid name", error: error.message };
  }

  return "Guest";
}

// test1
console.log(greetings(""));

//test2
console.log(greetings("Gabriel"));

//test3
console.log(greetings());
