const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const form = document.getElementById('form');
const resultDiv = document.getElementById('result');
const usersDiv = document.getElementById('users');

function displayResult(result) {
    resultDiv.textContent = `Masa muscular: ${result}`;
}

function displayUsers(records) {
    usersDiv.innerHTML = '';
    records.forEach((record, index) => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <p><b>Nombre:</b> ${record.name}</p>
            <p><b>Edad:</b> ${record.age}</p>
            <p><b>Peso:</b> ${record.weight} kg</p>
            <p><b>Altura:</b> ${record.height} cm</p>
            <p><b>Masa muscular:</b> ${record.muscleMass}</p>
            <p><b>IMC:</b> ${record.bmi}</p>
            <p><b>Porcentaje de grasa corporal:</b> ${record.bodyFatPercentage}%</p>
            <p><b>Estado del peso:</b> ${record.weightStatus}</p>
            <button onclick="deleteUser(${index})">Eliminar</button>
            <hr>
        `;
        usersDiv.appendChild(userDiv);
    });
}


function clearInputs() {
    nameInput.value = '';
    ageInput.value = '';
    weightInput.value = '';
    heightInput.value = '';
}
