var rows = [];
var counterId = 0;

let addStudent = (carnet, schedule, late) => {
  console.log(carnet);
  let new_row = document.createElement("tr");
  console.log(new_row);
  let datetime = new Date();

  rows.push({
    id: counterId,
    carnet: carnet,
    schedule: schedule,
    late: late
  });

  console.log(rows);

  new_row.className = "table-active";
  new_row.innerHTML = `<th scope = 'row'>${carnet} </th>
 <td> ${schedule}</td>
 <td> ${datetime.toLocaleString()}</td>
 <td> ${late}</td>`;

  table_body.appendChild(new_row);
  var cellContainer = document.createElement("td");
  var deleteButton = document.createElement("button");
  var confirmar = document.createElement("input");

  confirmar.type = Text;
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-danger");

  deleteButton.innerText = "Eliminar";
  deleteButton.value = counterId;
  confirmar.id = "input-" + counterId;

  deleteButton.addEventListener("click", event => {
    var idElement = event.srcElement.value;
    var inputConfirm = document.querySelector(`input[id='input-${idElement}']`);
    var confirm = document.querySelector(`button[value='${idElement}']`)
      .parentElement.parentElement.firstChild;
    var trToDelete = document.querySelector(`button[value='${idElement}']`)
      .parentElement.parentElement;

    if (confirm.textContent == inputConfirm.value) {
      table_body.removeChild(trToDelete);

      rows.forEach((item, index) => {
        if ((item.id = idElement)) {
          rows.splice(index, 1);
        }
      });
    }
  });

  cellContainer.appendChild(deleteButton);
  cellContainer.appendChild(confirmar);
  new_row.appendChild(cellContainer);
  new_row.appendChild(confirmar);
  table_body.appendChild(new_row);
  counterId++;
};

let parseLateSwitch = value => {
  if (value) {
    return "Tarde";
  }
  return "A tiempo";
};
window.onload = function() {
  var carnet_field = document.querySelector("#carnet_field");
  var schedule_dropdown = document.querySelector("#schedule_field");
  var late_switch = document.querySelector("#late_switch");
  var submit_btn = document.querySelector("#submit_btn");
  var table_body = document.querySelector("#table_body");
  var carnet_regex = new RegExp("[0-9]{8}");

  submit_btn.addEventListener("click", () => {
    let carnet = carnet_field.value;
    let schedule =
      schedule_dropdown.options[schedule_dropdown.selectedIndex].text;
    let late = parseLateSwitch(late_switch.checked);

    if (carnet_regex.test(carnet)) {
      addStudent(carnet, schedule, late);
    } else {
      alert("Formato de carnet no válido");
    }
  });

  carnet_field.addEventListener("keyup", event => {
    let keyCode = event.keyCode;
    let carnet = carnet_field.value;
    if (keyCode == 13) {
      submit_btn.click();
    }
    if (carnet_regex.test(carnet)) {
      submit_btn.disabled = false;
    } else {
      submit_btn.disabled = true;
    }
  });
};
