mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12',
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 8 // starting zoom
});

const marker = new mapboxgl.Marker({color: "red"})
        .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
        .setPopup(
            new mapboxgl.Popup({offset: 25}).setHTML(
                `<h4><b>${listing.location}</b></h4>
                <p>Exact location will be provided after booking</p>`))
        .addTo(map);