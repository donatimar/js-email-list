function generateEmails() {
  const emailList = [];
  const emailListEl = document.getElementById("email-list");
  for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => response.json())
      .then((data) => {
        emailList.push(data.response);

        emailListEl.innerHTML = emailList
          .map((email) => {
            return `
                <li class="list-group-item d-flex justify-content-between align-items-center bg-warning fs-5">
                  <span>${email}</span>
                </li>`;
          })
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
