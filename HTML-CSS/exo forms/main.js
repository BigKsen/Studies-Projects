//Récupere les éléments du formulaire lors du chargement de la page
//OU
// à la place de récupérer element par element, on peut recuperer seulement le formulaire et ensuite appeler tous les elements du form en faisant form.nameDeL'element
const taskForm = document.getElementById("task_form");
const taskField = document.getElementById("task_field");
const taskDescriptionField = document.getElementById("task_description_field");
const startDateField = document.getElementById("start_date_field");
const endDateField = document.getElementById("end_date_field");
const personNameField = document.getElementById("person_name");
const urgencyField = document.getElementById("urgency");
const submitButton = document.getElementById("submit_btn");
const resetButton = document.getElementById("reset_btn");
const table = document.querySelector("table");
let span_task = document.querySelector(".span_task");
let span_name = document.querySelector(".span_name");
let span_start = document.querySelector(".span_start");
let span_end = document.querySelector(".span_end");

// Fixer le minimum pour la date (min= date du jour)

// fonction qui ecoute le click submit et recupere les value des cifférents champs
taskForm.addEventListener("submit", (e) => {
  // si on fait avec le click et ensuite on desactive le comportement par defaut, nos verifications de champs disparaissent, vaut mieux faire avec submit sur le form
  e.preventDefault(); // arrête le comportement par default qui nous laisse voir l'output que qq secondes danhs la console car submit le formulaire
  span_task.textContent = taskField.value;
  span_name.textContent = personNameField.value;
  span_start.textContent = startDateField.value;
  span_end.textContent = endDateField.value;

  if (urgencyField.checked) {
    // si la tache est urgente, elle s'affichera en rouge dans le tableau
    span_task.style.color = "red";
  } else {
    span_task.style.color = "black";
  }

  taskField.value = "";
  taskDescriptionField.value = "";
  personNameField.value = "";
  startDateField.value = "";
  endDateField.value = "";
  urgencyField.checked = "";
});
