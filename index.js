githubUser = 'hesdras';

function getGHUserData() {
    const url = `https://api.github.com/users/${githubUser}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userAvatarImg.src = data.avatar_url;
            myName.textContent = data.name;
            repoBtn.href = `https://github.com/${githubUser}?tab=repositories`;
            document.title = `${data.name} - Porfolio`;
        });
}
getGHUserData();

function getReposData() {
    const url = `https://api.github.com/users/${githubUser}/repos`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let index = 0; index < data.length; index++) {
                temp = document.createElement('a');
                temp.className = 'card-body';
                temp.href = data[index].html_url;
                temp.innerHTML = `
                    <h5 class="card-title">
                    <i class="bi bi-archive"></i>${data[index].name}
                    </h5>
                    <p class="card-text repositories">${data[index].description}</p>
                    <p class="card-text repositories">
                    <small class="text-muted">${data[index].updated_at}</small>
                    </p>
                    <div class="card-space-between"></div>
                    `;
                document
                    .getElementsByClassName('cards-repositories')[0]
                    .appendChild(temp)
                    .setAttribute('target', '_blank');
            }
        });
}
getReposData();
