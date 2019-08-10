import L from "leaflet";

const map = L.map("mapid").setView([-27.15852, 151.26337], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-27.15852, 151.26337])
  .addTo(map)
  .bindPopup("Ground Control<br/>to Major Tom")
  .openPopup();
