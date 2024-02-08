try {
  // typeError
  const object = null;
  console.log(object.property);

  // rangeError
  const array = new Array(-1);

  // referenceError
  console.log(variableWithWrongName);
  
} catch (error) {
  if (error instanceof TypeError) {
    console.log({
      message: "Invalid object to read property",
      error: error.message,
    });
  } else if (error instanceof RangeError) {
    console.log({
      message: "Invalid array",
      error: error.message,
    });
  } else if (error instanceof ReferenceError) {
    console.log({
      message: "Variable doesn't exists",
      error: error.message,
    });
  }
}
