// Quando o formulário for enviado (salvando o checklist)
document.getElementById('checklist-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário e recarregamento da página

    // Criar um objeto com os dados do formulário
    let checklistData = {};
    const radios = document.querySelectorAll('input[type="radio"]:checked'); // Seleciona os radio buttons marcados

    radios.forEach(radio => {
        checklistData[radio.name] = radio.value; // Salva o valor de cada radio button selecionado
    });

    // Salvar os dados no localStorage (armazenamento local no navegador)
    localStorage.setItem('checklistData', JSON.stringify(checklistData));

    // Exibir mensagem de sucesso
    alert('Checklist salvo com sucesso!');
});

// Função para limpar o checklist
document.getElementById('clear-checklist').addEventListener('click', function() {
    // Desmarcar todos os radio buttons
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    });

    // Remover os dados do checklist salvos no localStorage
    localStorage.removeItem('checklistData');

    // Exibir mensagem de confirmação
    alert('Checklist limpo!');
});
