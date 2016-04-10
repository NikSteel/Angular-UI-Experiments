function SampleCtrl($scope) {
  $scope.people = [
    {id:1, last: "Clooney", first: "George"},
    {id:2, last: "james", first:"LeBron"}
  ];
  
  $scope.addPerson= function() {
    var newId = $scope.people.length;
    newId++;
    
    $scope.people.push(
      {id:newId, last: $scope.addLast, first: $scope.addFirst}
    );
    
    
  };
};
