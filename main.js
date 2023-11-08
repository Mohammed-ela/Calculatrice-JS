document.addEventListener('DOMContentLoaded', function() {
        // On enregsitre les information dans des constantes
    const form = document.getElementById('formulaire');
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const operationSelect = document.getElementById('operation');
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.querySelector('.error');
        // Lorsque le boutton submit est cliqué 
    form.addEventListener('submit', function(event) {
        // on recharge pas la page
        event.preventDefault();
        // on stock les information entré par l'utilisateur dans des const (car on va les manipulés)
        const num1 = parseFloat(number1Input.value);
        const num2 = parseFloat(number2Input.value);

        const operation = operationSelect.value;
        // si on a autre chose que des nombre par ex:des lettre ou caractere
        if (isNaN(num1) || isNaN(num2)) {
            // on ecris un msg d'erreur en affichant la DIV error sans oublié de masqué la div resultat
            errorDiv.textContent = 'Veuillez entrer des nombres valides !';
            errorDiv.style.display = 'block';
            resultsDiv.style.display = 'none';
        } else {
            // si le nombre est correcte , on affiche pas d'erreur
            errorDiv.style.display = 'none';
            // on initialise une variable resultat a nul
            let result;
            switch (operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        //on fait le calcul uniquement si on divise pas par 0 ! 
                        result = num1 / num2;
                    } else {
                        //Lorsqu'on a le cas de la division par 0 !
                        errorDiv.textContent = 'La Division par zéro interdite Jeune débutant !';
                        // on affiche la div erreur pour affiche le msg d'erreur :)
                        errorDiv.style.display = 'block';
                        // on masque la div resultat 
                        resultsDiv.style.display = 'none';
                        return;
                    }
                    break;
                default:
                    // si aucun cas d'operateur est reconnu , on affiche la div error avec un msg ! tout en masquant la div resultat
                    errorDiv.textContent = 'Opération inconnu ! Veuillez choisir entre : + - * / ';
                    errorDiv.style.display = 'block';
                    resultsDiv.style.display = 'none';
                    return;
            }
                    // si l'operation et le calcule a bien etait effectué on affiche le resultat a l'aide de textcontent en affichant la div result

                    resultsDiv.textContent = `Résultat : ${result}`;
                    resultsDiv.style.display = 'block';
        }
    });

    form.addEventListener('reset', function() {
        errorDiv.style.display = 'none';
        resultsDiv.style.display = 'none';
    });
});
