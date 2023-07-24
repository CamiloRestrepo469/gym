function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function calculateBodyFatPercentage(bmi) {
    // Aproximadamente, un IMC de 24.9 se considera un valor saludable, 
    // entonces asumimos que el 24.9 representa un 100% de grasa corporal.
    const bmiHealthy = 24.9;
    const bodyFatPercentage = (bmi - bmiHealthy) * 100 / bmiHealthy;
    return Math.max(0, bodyFatPercentage).toFixed(2); // El porcentaje de grasa corporal no puede ser negativo.
}

function getWeightStatus(bmi) {
    if (bmi < 18.5) {
        return "Bajo peso";
    } else if (bmi < 24.9) {
        return "Peso normal";
    } else if (bmi < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

function getBMIAndWeightStatus(weight, height) {
    const bmi = calculateBMI(weight, height);
    const bodyFatPercentage = calculateBodyFatPercentage(bmi);
    const weightStatus = getWeightStatus(bmi);

    return {
        bmi: bmi.toFixed(2),
        bodyFatPercentage,
        weightStatus
    };
}


let users = [];

function calculateMuscleMass(weight, height) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

// function addRecord(name, age, weight, height, muscleMass) {
//     const user = { name, age, weight, height, muscleMass };
//     users.push(user);
// }
function addRecord(name, age, weight, height, muscleMass) {
    const { bmi, bodyFatPercentage, weightStatus } = getBMIAndWeightStatus(weight, height);

    const user = {
        name,
        age,
        weight,
        height,
        muscleMass,
        bmi,
        bodyFatPercentage,
        weightStatus
    };

    users.push(user);
}


function getAllRecords() {
    return users;
}

function deleteRecord(index) {
    users.splice(index, 1);
}
