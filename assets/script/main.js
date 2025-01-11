let task = "";
document.getElementById("add-task").onclick = () => {
  let inputTask = document.getElementById("input-task").value;
  task += `
<ul>
<li>${inputTask}</li>
</ul>
`;
  document.getElementById("tasks").innerHTML = task;
};
