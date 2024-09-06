document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const resultMessage = document.getElementById('result');

    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function() {
            const nextStepId = this.getAttribute('data-next');
            const path = this.getAttribute('data-path');

            // Hide all steps
            steps.forEach(step => step.classList.remove('ativo'));

            // Show the next step
            const nextStep = document.getElementById(nextStepId);
            if (nextStep) {
                nextStep.classList.add('ativo');
            }

            // Display result message based on path
            if (nextStepId === 'step-3' && path) {
                switch (path) {
                    case '1':
                        resultMessage.textContent = 'Você se aproxima da clareira iluminada. O que você faz agora?';
                        break;
                    case '2':
                        resultMessage.textContent = 'Você desce pelo terreno íngreme. O que você faz agora?';
                        break;
                    case '3':
                        resultMessage.textContent = 'Você segue pela trilha sinuosa. O que você faz agora?';
                        break;
                    default:
                        resultMessage.textContent = '';
                }
            }
        });
    });
});
