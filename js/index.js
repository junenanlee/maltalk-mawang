// $(document).ready(function () {
console.log("start");
let map;
var maekerArray;

function initMap() {
  // // The location of Uluru
  // const uluru = { lat: 37.5443501084499, lng: 126.99201794539339 };
  // const styledMapType = new google.maps.StyledMapType(
  //   [
  //     { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
  //     { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
  //     { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
  //     {
  //       featureType: "administrative",
  //       elementType: "geometry.stroke",
  //       stylers: [{ color: "#c9b2a6" }],
  //     },
  //     {
  //       featureType: "administrative.land_parcel",
  //       elementType: "geometry.stroke",
  //       stylers: [{ color: "#dcd2be" }],
  //     },
  //     {
  //       featureType: "administrative.land_parcel",
  //       elementType: "labels.text.fill",
  //       stylers: [{ color: "#ae9e90" }],
  //     },
  //     {
  //       featureType: "landscape.natural",
  //       elementType: "geometry",
  //       stylers: [{ color: "#dfd2ae" }],
  //     },
  //     {
  //       featureType: "poi",
  //       elementType: "geometry",
  //       stylers: [{ color: "#dfd2ae" }],
  //     },
  //     {
  //       featureType: "poi",
  //       elementType: "labels.text.fill",
  //       stylers: [{ color: "#93817c" }],
  //     },
  //     {
  //       featureType: "poi.park",
  //       elementType: "geometry.fill",
  //       stylers: [{ color: "#a5b076" }],
  //     },
  //     {
  //       featureType: "poi.park",
  //       elementType: "labels.text.fill",
  //       stylers: [{ color: "#447530" }],
  //     },
  //     {
  //       featureType: "road",
  //       elementType: "geometry",
  //       stylers: [{ color: "#f5f1e6" }],
  //     },
  //     {
  //       featureType: "road.arterial",
  //       elementType: "geometry",
  //       stylers: [{ color: "#fdfcf8" }],
  //     },
  //     {
  //       featureType: "road.highway",
  //       elementType: "geometry",
  //       stylers: [{ color: "#f8c967" }],
  //     },
  //     {
  //       featureType: "road.highway",
  //       elementType: "geometry.stroke",
  //       stylers: [{ color: "#e9bc62" }],
  //     },
  //     {
  //       featureType: "road.highway.controlled_access",
  //       elementType: "geometry",
  //       stylers: [{ color: "#e98d58" }],
  //     },
  //     {
  //       featureType: "road.highway.controlled_access",
  //       elementType: "geometry.stroke",
  //       stylers: [{ color: "#db8555" }],
  //     },
  //     {
  //       featureType: "road.local",
  //       elementType: "labels.text.fill",
  //       stylers: [{ color: "#806b63" }],
  //     },
  //     {
  //       featureType: "transit.line",
  //       elementType: "geometry",
  //       stylers: [{ color: "#dfd2ae" }],
  //     },
  //     {
  //       featureType: "transit.line",
  //       elementType: "labels.text.fill",
  //       stylers: [{ color: "#8f7d77" }],
  //     },
  //     {
  //       featureType: "transit.line",
  //       elementType: "labels.text.stroke",
  //       stylers: [{ color: "#ebe3cd" }],
  //     },
  //     {
  //       featureType: "transit.station",
  //       elementType: "geometry",
  //       stylers: [{ color: "#dfd2ae" }],
  //     },
  //     {
  //       featureType: "water",
  //       elementType: "geometry.fill",
  //       stylers: [{ color: "#b9d3c2" }],
  //     },
  //     {
  //       featureType: "water",
  //       elementType: "labels.text.fill",
  //       stylers: [{ color: "#92998d" }],
  //     },
  //   ],
  //   { name: "Styled Map" }
  // );
  // const map = new google.maps.Map(document.getElementById("map"), {
  //   mapTypeControlOptions: {
  //     mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
  //   },
  //   zoom: 12,
  //   center: uluru,
  // });
  // // The marker, positioned at Uluru
  // map.mapTypes.set("styled_map", styledMapType);
  // map.setMapTypeId("styled_map");

  // var marker;

  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  const styledMapType = new google.maps.StyledMapType(
    [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#c9b2a6" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ color: "#dcd2be" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ae9e90" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#93817c" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#a5b076" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#447530" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f5f1e6" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#fdfcf8" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#f8c967" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e9bc62" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#e98d58" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{ color: "#db8555" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#806b63" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{ color: "#8f7d77" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ebe3cd" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#b9d3c2" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#92998d" }],
      },
    ],
    { name: "Styled Map" }
  );
  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5443501084499, lng: 126.99201794539339 },
    zoom: 12,
    mapTypeControlOptions: {
      mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
    },
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");

  $.each(mapData, function (i, d) {
    marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(parseFloat(d.la), parseFloat(d.lo)),
      title: d.locplcNm,
      icon: "img/marker_3.png",
    });
    const infowindow = new google.maps.InfoWindow({
      content: d.locplcNm,
    });
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          //html로 표시될 인포 윈도우의 내용
          infowindow.setContent(`
          <div class="info">
            <b style="font-size:16px;">${d.locplcNm}</b><br>
            <div style="font-size:14px; margin-top:5px;">
              ${d.addr}
            </div>
            <div style="font-size:14px; margin-top:5px;">
              ${d.rprsntvPhone}
            </div>
            </div>
          </div>`);

          //인포윈도우가 표시될 위치
          infowindow.open(map, marker);
        };
      })(marker, i)
    );

    if (marker) {
      marker.addListener("click", function () {
        //중심 위치를 클릭된 마커의 위치로 변경
        map.setCenter(this.getPosition());

        //마커 클릭 시의 줌 변화
        // map.setZoom(14);
      });
    }
  });
}
