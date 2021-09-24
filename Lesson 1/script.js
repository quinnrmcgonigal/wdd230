function addToList() {
    let newName = document.querySelector('#newName').value;
    let li = document.createElement('li');
    li.innerHTML = newName;

    document.querySelector('#nameList').appendChild(li);
}

addToList();
document.getElementById('demo').addEventListener('click', addToList);