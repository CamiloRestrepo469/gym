// controller.js

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const age = parseInt(ageInput.value);
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (!isNaN(age) && !isNaN(weight) && !isNaN(height)) {
        const { bmi, bodyFatPercentage, weightStatus } = getBMIAndWeightStatus(weight, height);

        const muscleMass = calculateMuscleMass(weight, height);
        addRecord(name, age, weight, height, muscleMass, bmi, bodyFatPercentage, weightStatus);
        displayResult(muscleMass);
        displayUsers(getAllRecords());
        clearInputs();
    } else {
        alert('Ingresa valores válidos para edad, peso y altura.');
    }
});


function deleteUser(index) {
    deleteRecord(index);
    displayUsers(getAllRecords());
}

// Llenar datos de prueba
addRecord('Juan', 30, 80, 175, calculateMuscleMass(80, 175));
addRecord('María', 25, 60, 160, calculateMuscleMass(60, 160));
addRecord('Carlos', 35, 90, 180, calculateMuscleMass(90, 180));
displayUsers(getAllRecords());
