var images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var gallery = document.getElementById("gallery");

for (image of images) {
  gallery.innerHTML += `
            <div class="card">
          <a data-toggle="modal" data-target="#id${image}">
            <img class="card-img-top" src="img/gallery/${image}.jpg" alt="Tesla" />
          </a>
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          id="id${image}"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <button
            type="button"
            class="close mr-2"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <div
            class="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <img class="img-fluid rounded" src="img/gallery/1.jpg" alt="" />
          </div>
        </div>
            `;
}
