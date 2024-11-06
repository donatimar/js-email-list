function generateEmails() {
  const emailList = [];
  const emailListEl = document.getElementById("email-list");
  for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => response.json())
      .then((data) => {
        emailList.push(data.response);

        emailListEl.innerHTML = emailList
          .map((email) => `<li>${email}</li>`)
          .join("");

        if (emailList.length === 10) {
          console.log("Elenco delle email generate:", emailList);
        }
      });
  }
}

document
  .getElementById("generate-button")
  .addEventListener("click", generateEmails);
