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

// function validateInput(id, value) {
//   let error = "";
//   switch (id) {
//     case "quantity1":
//       const setnumber1 = document.getElementById("setnumber1").value;
//       if (value !== setnumber1) error = "*รับประทานยาไม่ถูกต้อง";
//       break;
//       case "quantity2":
//       const setnumber2 = document.getElementById("setnumber2").value;
//       if (value !== setnumber2) error = "*รับประทานยาไม่ถูกต้อง";
//       break;
//       case "quantity3":
//       const setnumber3 = document.getElementById("setnumber3").value;
//       if (value !== setnumber3) error = "*รับประทานยาไม่ถูกต้อง";
//       break;
//       case "quantity4":
//       const setnumber4 = document.getElementById("setnumber4").value;
//       if (value !== setnumber4) error = "*รับประทานยาไม่ถูกต้อง";
//       break;
//       case "quantity5":
//       const setnumber5 = document.getElementById("setnumber5").value;
//       if (value !== setnumber5) error = "*รับประทานยาไม่ถูกต้อง";
//       break;
//       case "quantity6":
//       const setnumber6 = document.getElementById("setnumber6").value;
//       if (value !== setnumber6) error = "*รับประทานยาไม่ถูกต้อง";
//       break;
//       case "quantity7":
//       const setnumber7 = document.getElementById("setnumber7").value;
//       if (value !== setnumber7) error = "*รับประทานยาไม่ถูกต้อง";
//       break;
//     default:
//       console.log("Unknwon id");
//   }
//   return error;
// }

function logSubmit(event) {
  event.preventDefault();
  alert("บันทึกข้อมูลเรียบร้อยแล้ว");

  for (const input of inputArray) {
    input.value = "";
  }
  
}
