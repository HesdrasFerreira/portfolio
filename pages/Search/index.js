import { params } from '../../components/header.js';

let query = params.q;

const queryString = `?q=${encodeURIComponent(`${query} user:hesdras`)}`;

function getSearchResult() {
    const url = `https://api.github.com/search/repositories${queryString}`;
    console.log(url);
    fetch(url).then(response =>
        response.json().then(data => {
            if (data.total_count > 0) {
                for (let index = 0; index < data.items.length; index++) {
                    let temp = document.createElement('a');
                    temp.className = 'card-body';
                    temp.href = data.items[index].html_url;
                    temp.innerHTML = `
                        <h5 class="card-title">
                        ${data.items[index].name}
                        </h5>
                        <p class="card-text">${data.items[index].description}</p>
                        <p class="card-text">
                        <small class="text-muted">${data.items[index].updated_at}</small>
                        </p>
                        <div class="card-space-between"></div>
                        `;
                    document
                        .getElementsByClassName('search-results')[0]
                        .appendChild(temp)
                        .setAttribute('target', '_blank');
                }
            } else {
                let notFoundMsg = document.createElement('div');
                notFoundMsg.innerHTML = `<br>Não tenho nenhum repositório com o nome "${query}".<br>Tente novamente ou veja meus repositórios em destaque na <a href="../../#repositories">página inicial</a>.`;
                document
                    .getElementsByClassName('search-results')[0]
                    .appendChild(notFoundMsg);
            }
        })
    );
}
getSearchResult();
