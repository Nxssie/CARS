export function loadFooter() {
  console.log("Footer.");
  //var footer = document.getElementById("page-footer");

  //footer.innerHTML =
  return `
  <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6-xs-12-segment-one md-mb-30 sm-mb-30">
              <h3 class="footer-h">Bienvenido</h3>
              <p class="footer-p">
                Página web Tesla Canarias
              </p>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 segment-two md-mb-30 sm-mb-30">
              <h2 class="footer-h f-h2">Enlaces</h2>
              <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="about.html">La empresa</a></li>
                <li><a href="models.html">Modelos</a></li>
                <li><a href="gallery.html">Galería</a></li>
                <li><a href="contact.html">Contacto</a></li>
                <li><a href="game.html">Minijuego</a></li>
                <li><a href="offices.html">Oficinas</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 segment-three sm-mb-30">
              <h2 class="footer-h f-h2">Síguenos!</h2>
              <p class="footer-p">
                Puedes seguirnos en nuestras principales redes sociales.
              </p>
              <a href="https://www.facebook.com/TeslaMoto/"><i class="fab fa-facebook"></i></a>
              <a href="https://twitter.com/tesla"><i class="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/company/tesla-motors"><i class="fab fa-linkedin"></i></a>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 segment-four sm-mb-30">
              <h2 class="footer-h f-h2">Novedades</h2>
              <div class="footer-p">
                Suscríbete a nuestras novedades semanales.
              </div>
              <form action="approve-mail.html" id="emailSub">
                  <input type="email" name="email">
                  <input type="submit" value="Suscribirme">
                  <span id="emailError">* Email no válido.</span>
              </form>
              
            </div>
          </div>
        </div>
      </div>
  `;
}
