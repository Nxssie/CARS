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
            <li class="nav-item" id="rss-icon">
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
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Sesión
              </a>
              <div class="dropdown-menu">
                  <a id="login-entry" class="dropdown-item" href="user.html">Login <i class="fas fa-sign-in-alt" id="login-icon"></i></a>
                  <a id="register-entry" class="dropdown-item" href="register.html">Register <i class="fas fa-user-plus" id="register-icon"></i></a>
                  <a id="profile-entry" class="dropdown-item" href="user-info.html">Profile <i class="fas fa-user"></i></a>
                  <a id="logout-entry" class="dropdown-item" href="#">Logout <i class="fas fa-power-off"></i> </a>
              </div>
            </li>
          </ul>
        </div>
      </div>`
}