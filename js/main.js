angular.module("almen", []);
function MainCtrl($scope) {
  $scope.almen = [{
    name: 'Tregler Alm',
    lat: '47.75443',
    lng: '11.99677',
    starting_points: [{
      name: 'Parkplatz Bundesstraße',
      lat: '47.76395',
      lng: '11.96540'
    }]
  }];
  $scope.mapsURL = function(pt) {
    return 'http://maps.google.com/?q=' + pt.lat + ',' + pt.lng;
  }
  $scope.route = function(start, finish) {
    var params = [
      'saddr=' + start.lat + ',' + start.lng,
      'daddr=' + finish.lat + ',' + finish.lng,
      't=h',  // map type (m = normal, k = sattelite, h = hybrid, p = terrain),
      'dirflg=w'  // direction type (h = no highways, r = public transport only, w = walking)
    ]
    return 'https://maps.google.com/maps?' + params.join('&');
  }
}

