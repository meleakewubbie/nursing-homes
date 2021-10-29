mapboxgl.accessToken = 'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-v9', // style URL
    zoom: 5.5, // starting zoom
    center: [138, 38] // starting center
});
async function geojsonFetch() { 
    // fetch geojson
 };

geojsonFetch();
async function geojsonFetch() {
    let response, earthquakes, japan, table;
    response = await fetch('assets/earthquakes.geojson');
    earthquakes = await response.json();
    response = await fetch('assets/japan.json');
    japan = await response.json();
};

geojsonFetch();
//load data to the map as new layers and table on the side.
map.on('load', function loadingData() {

    map.addSource('earthquakes', {
        type: 'geojson',
        data: earthquakes
    });

    map.addLayer({
        'id': 'earthquakes-layer',
        'type': 'circle',
        'source': 'earthquakes',
        'paint': {
            'circle-radius': 8,
            'circle-stroke-width': 2,
            'circle-color': 'red',
            'circle-stroke-color': 'white'
        }
    });


    map.addSource('japan', {
        type: 'geojson',
        data: japan
    });

    map.addLayer({
        'id': 'japan-layer',
        'type': 'fill',
        'source': 'japan',
        'paint': {
            'fill-color': '#0080ff', // blue color fill
            'fill-opacity': 0.5
        }
    });

});
