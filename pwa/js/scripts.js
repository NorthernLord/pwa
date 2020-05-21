function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

const url = 'https://cmgt.hr.nl:8000/api/projects/';

const ul = document.getElementById('projects');
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let projects = data.projects;
  return projects.map(function(project) {
    let li = createNode('li');
    li.innerHTML = `${project.title}`;
    append(ul, li);
    li.className = 'project-title';
  })
})
  .catch(function(error) {
  console.log(error);
});   

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}