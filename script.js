const form = document.getElementById("id01");
const btnElement = document.getElementById("btn");
const inputArray = document.querySelectorAll("input");

form.addEventListener("submit", logSubmit);
for (const input of inputArray) {
  const id = input.getAttribute("id");
  const errorElement = document.getElementById(`${id}-error`);
  input.addEventListener("input", (event) =>
    handleChange(event, id, errorElement)
  );
}

function handleChange(event, id, errorElement) {
  const value = event.target.value;
  errorElement.textContent = validateInput(id, value);
  validateAllInputs();
}

function validateInput(id, value) {
  let error = "";
  switch (id) {
    case "quantity":
      const setnumber = document.getElementById("setnumber").value;
      if (value !== setnumber) error = "*รับประทานยาไม่ถูกต้อง";
      break;
    default:
      console.log("Unknwon id");
  }
  return error;
}

// function validateAllInputs() {
//   let pass = true;
//   for (const input of inputArray) {
//     const id = input.getAttribute("id");
//     const value = input.value;
//     pass = pass && validateInput(id, value) === "";
//   }
// }

function logSubmit(event) {
  event.preventDefault();
  // let output = "";
  // const formElements = event.target;
  // for (const formElement of formElements) {
  //   const id = formElement.getAttribute("id");
  //   if (id !== "btn") {
  //     output += `${id} : ${formElement.value} \n`;
  //   }
  // }

  alert(output);

  for (const input of inputArray) {
    input.value = "";
  }
}
