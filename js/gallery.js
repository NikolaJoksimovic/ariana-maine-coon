document.addEventListener("DOMContentLoaded", function () {
  // Ovo selektuje tvoj "dokument, HTML stranicu sta god" i doda mu event listener. Taj event listener slusa tj prati sta se desava na stranici. U nasem slucaju, definisali smo da on kad "cuje" da se DOMContentLoaded tj ucitali su se svi elementi, aktivira funkciju koju smo definisali u nastavku.

  // Get the modal and close button elements
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Get all elements with class "img-container-gallery"
  const imgContainerGalleryElements = document.querySelectorAll(
    ".img-container-gallery"
  );

  // Function to open the modal and display the clicked image
  function openModal(imgSrc) {
    modal.style.display = "flex";
    // Ovo je isto kao da si u css-u stavila:
    // .modal {
    //    display: block;
    // }
    modalContent.src = imgSrc;
    // A ovo posto je modalContent zapravo <img id="modal-content" src="" alt="cat.jpg" />
    // Ti mu postavljas ovo src na imgSrc
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Add click event listeners to each img-container-gallery element
  imgContainerGalleryElements.forEach((element) => {
    element.addEventListener("click", function () {
      const imgSrc = element.querySelector("img").src; //ovo sada trazi element <img> unutar img-container-gallery elementa, uzima njegov src i poziva openModal funkciju definisanu iznad.
      // src je ono unutar <img> taga. U nasem slucaju imas ovako neku sliku u htmlu:
      // <img src="./images/Maine_Coon_cat_by_Tomitheos.png" alt="cat.jpg" />
      openModal(imgSrc);
    });
  });

  // Add click event listener to close button
  closeBtn.addEventListener("click", closeModal); //na klik poziva closeModal funkciju definisanu iznad

  // Add click event listener to modal (to close it when clicking outside the image)

  modal.addEventListener("click", (event) => {
    // Posto ti imas ovakvu strukturu u HTML-u:
    // <div id="modal" class="modal">
    //   <span class="close">&times;</span>
    //   <img id="modal-content" src="" alt="cat.jpg" />
    // </div>
    // Ti ovde ispod implementiras da se taj modal(to je to otvaranje slike sto su trazili) zatvori kada kliknes van same slike. Znaci imas element modal koji u sebi ima neki sadrzaj(modal-content koji je ustvari sama slika) i kad kliknes van te slike zatvara se modal.
    if (event.target === modal) {
      closeModal();
    }
  });
});
