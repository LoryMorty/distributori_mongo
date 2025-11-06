document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/distributori');
    const distributori = await response.json();
    const tbody = document.querySelector('#tabella tbody');


    distributori.forEach(d => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${d.id}</td>
            <td>${d.nome}</td>
            <td>${d.provincia}</td>
            <td>${d.indirizzo}</td>
            <td>${d.prezzo_benzina}</td>
            <td>${d.prezzo_diesel}</td>
            <td>${d.livello_benzina}/${d.capacita_benzina} L (${d.percent_benzina}%)</td>
            <td>${d.livello_diesel}/${d.capacita_diesel} L (${d.percent_diesel}%)</td>
        `;
        tbody.appendChild(row);
    });
});