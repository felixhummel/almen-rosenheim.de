angular.module("almen", ["leaflet-directive"]);
function MainCtrl($scope) {
  $scope.map = {
    latlng: { lat: '47.8597', lng: '12.1177' },
    zoom: 11,
    marker: { lat: '47.8597', lng: '12.1177' },
    message: 'foo'
  };
  $scope.almen = [{
    name: 'Tregler Alm',
    pt: {
      latlng: { lat: '47.75443', lng: '11.99677'},
      zoom: 16
    },
    starting_points: [{
      name: 'Parkplatz Bundesstraße',
      latlng: { lat: '47.76395', lng: '11.96540' },
      zoom: 16
    }]
  }];
  $scope.goTo = function(pt) {
    $scope.map.latlng = pt.latlng;
    $scope.map.marker = pt.latlng;
  };
  $scope.goAndZoom = function(pt) {
    $scope.map.latlng = pt.latlng;
    $scope.map.zoom = pt.zoom;
  };
}

