export function loadNavbar(){

return `
<div class="container" id="navbar3">
        <a class="navbar-brand" id="logo" href="index.html">
          <img class="img-fluid" src="img/tesla_logo.svg" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <!-- Dropdown -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Información
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="about.html">La empresa</a>
                <a class="dropdown-item" href="models.html">Nuestros modelos</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="gallery.html">Galería</a>
            </li>
            <li class="nav-item">
              <a type="application/rss+xml"href="Tesla_RSS.xml">
                <i class="fas fa-rss"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="game.html">Minijuego</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="offices.html">Oficinas</a>
            </li>
          </ul>
        </div>
      </div>`
}