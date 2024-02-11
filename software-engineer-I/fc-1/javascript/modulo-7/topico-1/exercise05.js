const allLinksHTML = document.querySelectorAll(".link");

for (let index = 0; index < allLinksHTML.length; index++) {
  const link = allLinksHTML[index];
  link.href = "_blank";
}
