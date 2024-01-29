const randomStrings = ["Adriano", "Luana", "Matioli", "Naiara"];

const numericObject = {
  a: 1,
  b: 2,
  c: 3,
};

const students = [
  { name: "Ana", age: 20, birthDate: "2004-11-20" },
  { name: "João", age: 21, birthDate: "2003-01-21" },
  { name: "Maria", age: 19, birthDate: "2005-02-03" },
  { name: "Pedro", age: 22, birthDate: "2002-03-01" },
  { name: "Fernanda", age: 18, birthDate: "2006-01-30" },
  { name: "Carlos", age: 25, birthDate: "1999-07-26" },
  { name: "Lucas", age: 21, birthDate: "2003-01-04" },
  { name: "Beatriz", age: 24, birthDate: "2000-08-07" },
  { name: "Roberto", age: 30, birthDate: "1994-09-12" },
  { name: "Marta", age: 27, birthDate: "1997-04-17" },
  { name: "Diego", age: 22, birthDate: "2002-05-20" },
  { name: "Camila", age: 19, birthDate: "2005-06-19" },
  { name: "Renata", age: 28, birthDate: "1996-01-30" },
  { name: "Henrique", age: 21, birthDate: "2003-04-15" },
  { name: "Victor", age: 23, birthDate: "2001-01-10" },
  { name: "Sofia", age: 20, birthDate: "2004-03-17" },
  { name: "Raquel", age: 29, birthDate: "1995-04-15" },
  { name: "Rafael", age: 26, birthDate: "1998-03-07" },
  { name: "Daniela", age: 18, birthDate: "2006-09-22" },
  { name: "Luis", age: 31, birthDate: "1993-12-31" },
  { name: "Isabella", age: 20, birthDate: "2004-06-14" },
  { name: "Amanda", age: 19, birthDate: "2005-07-02" },
  { name: "Leonardo", age: 24, birthDate: "2000-07-22" },
  { name: "Gabriela", age: 22, birthDate: "2002-03-11" },
  { name: "Marcelo", age: 27, birthDate: "1997-10-10" },
  { name: "Ricardo", age: 25, birthDate: "1999-10-15" },
  { name: "Felipe", age: 19, birthDate: "2005-08-30" },
  { name: "Letícia", age: 28, birthDate: "1996-01-14" },
  { name: "Natália", age: 26, birthDate: "1998-10-08" },
  { name: "Bruno", age: 23, birthDate: "2001-12-09" },
  { name: "Thiago", age: 21, birthDate: "2003-06-12" },
  { name: "André", age: 30, birthDate: "1994-01-31" },
  { name: "Juliana", age: 18, birthDate: "2006-12-31" },
  { name: "Gustavo", age: 19, birthDate: "2005-08-06" },
  { name: "Fábio", age: 21, birthDate: "2003-09-07" },
  { name: "Eduardo", age: 29, birthDate: "1995-04-23" },
  { name: "Cláudia", age: 26, birthDate: "1998-05-26" },
  { name: "Bianca", age: 19, birthDate: "2005-06-10" },
  { name: "Cristiane", age: 28, birthDate: "1996-09-10" },
  { name: "Márcio", age: 31, birthDate: "1993-06-11" },
  { name: "Júlia", age: 20, birthDate: "2004-10-15" },
  { name: "Caio", age: 21, birthDate: "2003-12-31" },
  { name: "Carolina", age: 19, birthDate: "2005-11-26" },
  { name: "Patrícia", age: 23, birthDate: "2001-05-20" },
  { name: "Alex", age: 25, birthDate: "1999-08-20" },
  { name: "Vanessa", age: 24, birthDate: "2000-07-17" },
  { name: "Mônica", age: 27, birthDate: "1997-09-02" },
  { name: "Luana", age: 22, birthDate: "2002-10-26" },
  { name: "Vitor", age: 19, birthDate: "2005-11-19" },
  { name: "Isadora", age: 28, birthDate: "1996-12-04" },
];

const events = [...Array(50)].map((_, i) => ({
  nome: `Evento${i + 1}`,
  data: new Date(2022 + i, 1, 1),
}));

const people = [...Array(50)].map((_, i) => ({
  nome: `Pessoa${i + 1}`,
  dataNascimento: new Date(1950 + i, 1, 1),
}));

const words = ['gato', 'cachorro', 'gato', 'pássaro'];

const sales = {
  "estudantes": [
    {"id": 1001, "dataNascimento": "2005-03-02"},
    {"id": 1002, "dataNascimento": "2003-07-15"},
    {"id": 1003, "dataNascimento": "2004-11-21"},
    {"id": 1004, "dataNascimento": "2006-01-04"},
    {"id": 1005, "dataNascimento": "2002-05-09"}
  ],
  "compras": [
    {"idEstudante": 1001, "categoria": "Tecnologia", "valor": 500, "dataCompra": "2023-03-15"},
    {"idEstudante": 1002, "categoria": "Livros", "valor": 80, "dataCompra": "2023-03-20"},
    {"idEstudante": 1003, "categoria": "Roupas", "valor": 200, "dataCompra": "2023-03-22"},
    {"idEstudante": 1004, "categoria": "Jogos", "valor": 150, "dataCompra": "2023-03-25"},
    {"idEstudante": 1005, "categoria": "Tecnologia", "valor": 1200, "dataCompra": "2023-03-28"},
    {"idEstudante": 1001, "categoria": "Roupas", "valor": 300, "dataCompra": "2023-03-30"},
    {"idEstudante": 1003, "categoria": "Tecnologia", "valor": 750, "dataCompra": "2023-04-02"},
    {"idEstudante": 1002, "categoria": "Alimentação", "valor": 50, "dataCompra": "2023-04-05"},
    {"idEstudante": 1004, "categoria": "Livros", "valor": 90, "dataCompra": "2023-04-07"},
    {"idEstudante": 1005, "categoria": "Jogos", "valor": 400, "dataCompra": "2023-04-10"}
  ]
};

const studentsError = [
  { name: "Ana", age: 20, birthDate: "2004-11-20" },
  { name: "João", age: 21, birthDate: "2003-01-21" },
  { name: "Maria", age: 19, birthDate: "12/01/2021" },
  { name: "Pedro", age: 22, birthDate: "Data: 2000-11-23" },
  { name: "Fernanda", age: 18, birthDate: "2006-01-30" },
]

export { randomStrings, numericObject, students, events, people, words, sales, studentsError };
