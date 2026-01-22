(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();


// MAP CODE


// Initialize map (lat, lng, zoom)
var map = L.map("map").setView([51.505, -0.09], 13);

// Add OpenStreetMap tiles (FREE, NO TOKEN)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19
}).addTo(map);

// Add marker
L.marker([28.6139, 77.2090])
  .addTo(map)
  .bindPopup("Hello from Leaflet!")
  .openPopup();
