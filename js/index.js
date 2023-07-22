const template = document.createElement("nav");
// Pravim element <nav></nav> koji ce biti zajednicki za sve stranice tako sto ce se ukljucivati pomocu javascripta
template.innerHTML = `
<div id="navbar-container">
    <nav id="navbar" class="center-row">
      <a href="./index.html">home</a>
      <a href="./blog.html">blog</a>
      <a href="./gallery.html">gallery</a>
      <a href="./contact.html">contact</a>
    </nav>
  </div>
  `;
document.body.appendChild(template);
