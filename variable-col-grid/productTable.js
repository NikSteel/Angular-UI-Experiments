Array.prototype.peek = function() {
    return this[this.length - 1];
  }

// Products Table Angular App
angular.module('productsTableApp', [])

// create a controller for the table
.controller('ProductsController', function($scope) {
  // initialize the array
  $scope.data = [
    [{
      "row": "1",
      "col": "1",
      "val": "1x1"
    }],
    [{
      "row": "2",
      "col": "1",
      "val": "2x1"
    }],
    [{
      "row": "3",
      "col": "1",
      "val": "3x1"
    }],
    [{
      "row": "4",
      "col": "1",
      "val": "4x1"
    }]
  ];
  $scope.colKeys = [1];
  $scope.rowKeys = [1, 2, 3, 4];

  // add a column
  $scope.addColumn = function() {
    var colKey = ($scope.colKeys.length < 1) ? 1 : $scope.colKeys.peek() + 1;
    $scope.colKeys.push(colKey);
    $scope.data.forEach(function(row, index) {
      var rowKey = $scope.rowKeys[index];
      row.push({
        "row": rowKey.toString(),
        "col": colKey.toString(),
        "val": rowKey + "x" + colKey
      })
    });
  };

  // add a row
  $scope.addRow = function() {
    var newRow = [];
    var rowKey = ($scope.rowKeys.length < 1) ? 1 : $scope.rowKeys.peek() + 1;
    $scope.rowKeys.push(rowKey);
    $scope.colKeys.forEach(function(colKey, index) {
      newRow.push({
        "row": rowKey,
        "col": colKey,
        "val": rowKey + "x" + colKey
      });
    });
    $scope.data.push(newRow);
  };

  // remove a specific column
  $scope.removeColumn = function(colIndex) {
    var colKey = $scope.colKeys[colIndex];
    $scope.data.forEach(function(row) {
      row.forEach(function(rowItem, rowItemIndex) {
        if (rowItem.col == colKey.toString()) {
          row.splice(rowItemIndex, 1);
        }
      });

      if (row.length === 0) {
        row.data = [];
      }
    });
    $scope.colKeys.splice(colIndex, 1);
  };

  // remove a specific row
  $scope.removeRow = function(rowIndex) {
    if ($scope.data.length < 1) {
      $scope.data = [];
      $scope.rowKeys = [];
    } else {
      $scope.data.splice(rowIndex, 1);
      $scope.rowKeys.splice(rowIndex, 1);
    }
  };
});
