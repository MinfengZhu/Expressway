//Require
import './style.css'
import 'mapbox.js'
import 'mapbox.js/theme/style.css'

/*map init*/
// Provide your access token
L.mapbox.accessToken = 'pk.eyJ1IjoidHdpbGlnaHRzbm93IiwiYSI6ImNpaDFjY3Z4bzB4Nzd3d20wbzViaW1tZTIifQ.x0KTGUMMOGwjNkEbHlswrg'
// //L.mapbox.accessToken = 'pk.eyJ1IjoiaGl0b25pYyIsImEiOiJjaW55aHhvcGgxODZndWttM2Vtcmt6dmJyIn0.eRFKQR3GxPYnigm-2sNzYg';

// // Create a map in the div #map
export var map = L.map('map', { minZoom: 6, maxZoom: 18 }).setView([27.957107298174993, 120.75759887695311], 13)

// //	添加一个街道的图层
//L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(map);
L.tileLayer('https://api.mapbox.com/styles/v1/hitonic/cj0kr08e600182rnthfip1fdb/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGl0b25pYyIsImEiOiJjaW55aHhvcGgxODZndWttM2Vtcmt6dmJyIn0.eRFKQR3GxPYnigm-2sNzYg').addTo(map)

// //remove leaflet information
$('.leaflet-bottom.leaflet-right').remove()
$('.leaflet-top.leaflet-left').remove()
$('.leaflet-bottom').remove()