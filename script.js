async function farinha() {
    alert('qualquer coisa');
    const destino = document.getElementById('destino');
    if (!destino) return;

    try {
        const response = await fetch('dados.json');

        if (!response.ok) {
            throw new Error('falha ao carregar dados');
        }

        const pessoas = await response.json();

        destino.innerHTML = '';

        pessoas.forEach(item => {
            const linha = document.createElement('tr');

            linha.innerHTML = `
                <td>${item.nome}</td>
                <td>${item.idade}</td>
                <td>${item.altura}</td>
                <td>${item.cidade}</td>
                <td><button type="button">Botar</button></td>
            `;

            destino.appendChild(linha);

            
        });

    }
}