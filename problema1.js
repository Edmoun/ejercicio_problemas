const dato = "Hola a todos"
const conLet = (letras) => {
    const lett = {};
    for (letra of letras) {
        if (letra in lett) {
            lett[letra] += 1;
        } else {
            lett[letra] = 1;
        }
    }
}