header.innerHTML = `<section class="row header">
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="/../../"
            ><img class="logo" src="/../../assets/images/hf-logo.png"
        /></a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div
            class="collapse navbar-collapse"
            id="navbarTogglerDemo02"
        >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a
                        class="nav-link active"
                        aria-current="page"
                        href="/portfolio/../../#about"
                        >perfil</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/portfolio/../../#projects"
                        >projetos</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/portfolio/../../#experience"
                        >experiência</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/portfolio/../../#repositories"
                        >repositórios github</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/portfolio/../../#recommendations"
                        >conteúdo</a
                    >
                </li>
            </ul>
            <form class="d-flex">
                <input
                    id="searchForm"
                    class="form-control search me-2"
                    type="search"
                    placeholder="Pesquisar..."
                    aria-label="Search"
                />
            </form>
        </div>
    </div>
</nav>
</section>`;

searchForm.addEventListener('change', goToSearch);

function goToSearch() {}

const urlSearchParams = new URLSearchParams(window.location.search);
export const params = Object.fromEntries(urlSearchParams.entries());

searchForm.addEventListener(
    'keydown',
    function (event) {
        if (event.defaultPrevented) {
            return;
        }

        switch (event.key) {
            case 'Enter':
                location.href = `/portfolio/pages/Search/?q=${searchForm.value}`;
                break;
            default:
                return;
        }

        event.preventDefault();
    },
    true
);
