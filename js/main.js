angular.module("almen", ["leaflet-directive"]);
function MainCtrl($scope) {
  $scope.almen = [{
    name: 'Tregler Alm',
    lat: '47.75443',
    lng: '11.99677',
    starting_points: [{
      name: 'Parkplatz Bundesstraße',
      lng: '47.76395',
      lat: '11.96540'
    }]
  }];
  $scope.dafuq = { lat: '47.75443', lng: '11.99677'}
  $scope.zoom = 22;
}

