function registrarLecturaGlucosa() {
    var lectura = parseInt(document.getElementById('lectura').value);
    var momento = document.getElementById('momento').value;

    var resultado;

    if (momento === 'ayunas') {
        // Rango normal en ayunas: 70-99 mg/dL
        if (lectura >= 70 && lectura <= 99) {
            resultado = 'Nivel de glucosa normal en ayunas';
        } else if (lectura < 70) {
            resultado = 'Hipoglucemia en ayunas';
        } else if (lectura >= 100 && lectura <= 125) {
            resultado = 'Pre-diabetes en ayunas';
        } else {
            resultado = 'Diabetes en ayunas';
        }
    } else if (momento === 'antes') {
        // Rango normal antes de la comida: 70-130 mg/dL
        if (lectura >= 70 && lectura <= 130) {
            resultado = 'Nivel de glucosa normal antes de la comida';
        } else if (lectura < 70) {
            resultado = 'Hipoglucemia antes de la comida';
        } else {
            resultado = 'Hiperglucemia antes de la comida';
        }
    } else if (momento === '2horas') {
        // Rango normal 2 horas después de comer: < 140 mg/dL
        if (lectura < 140) {
            resultado = 'Nivel de glucosa normal 2 horas después de comer';
        } else if (lectura >= 140 && lectura <= 199) {
            resultado = 'Prediabetes 2 horas después de comer';
        } else {
            resultado = 'Hiperglucemia 2 horas después de comer';
        }
    }

    alert(resultado);
}
