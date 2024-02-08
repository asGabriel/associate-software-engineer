const calculateArea = (base, height) => {
  try {
    if (!base || !height) {
      throw new TypeError(
        `Entrada invalida, favor atribuir valores para base e altura`
      );
    }
    if (typeof base !== "number" || typeof height !== "number") {
      throw new TypeError(
        `Entrada invalida, favor inserir apenas numeros entre virgulas para base a altura`
      );
    }
    return `A área do retangulo é: ${base * height}`;
  } catch (error) {
    console.log(error);
  }
};

console.log(calculateArea("2", null));
