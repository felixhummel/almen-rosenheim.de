angular.module("almen", ["leaflet-directive"]);
function MainCtrl($scope) {
  $scope.almen = [{
    name: 'Tregler Alm',
    latlng: { lat: '47.75443', lng: '11.99677'},
    starting_points: [{
      name: 'Parkplatz Bundesstraße',
      latlng: { lat: '47.76395', lng: '11.96540' },
      zoom: 22
    }]
  }];
}

