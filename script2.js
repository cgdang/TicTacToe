function TictactoeController($scope) {
	$scope.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

	var checkWin = function() {
	if ($scope.board[0] == $scope.board[1] && $scope.board[2] == $scope.board[1] && $scope.board[1] != " ") {
		alert("someone won");
	}
	if ($scope.board[3] == $scope.board[4] && $scope.board[5] == $scope.board[4] && $scope.board[4] != " ") {
		alert("someone won");
	}
	if ($scope.board[6] == $scope.board[7] && $scope.board[8] == $scope.board[7] && $scope.board[7] != " ") {
		alert("someone won");
	}
	if ($scope.board[0] == $scope.board[3] && $scope.board[6] == $scope.board[3] && $scope.board[3] != " ") {
		alert("someone won");
	}
	if ($scope.board[1] == $scope.board[4] && $scope.board[7] == $scope.board[4] && $scope.board[4] != " ") {
		alert("someone won");
	}
	if ($scope.board[2] == $scope.board[5] && $scope.board[8] == $scope.board[5] && $scope.board[5] != " ") {
		alert("someone won");
	}
	if ($scope.board[0] == $scope.board[4] && $scope.board[8] == $scope.board[4] && $scope.board[4] != " ") {
		alert("someone won");
	}
	if ($scope.board[2] == $scope.board[4] && $scope.board[6] == $scope.board[4] && $scope.board[4] != " ") {
		alert("someone won");
	} else if(clickedspaces == 9) {
		alert("Draw!");
	}
	};
	
	var clickedspaces = 0;

	$scope.clicker = function(cellindex) {
		if ($scope.board[cellindex] == " ") {
			clickedspaces++;
			if (clickedspaces % 2 === 0) {
				$scope.board[cellindex] = "O";
				$scope.board.push[cellindex];
				checkWin();
			} else {
				$scope.board[cellindex] = "X";
				$scope.board.push[cellindex];
				checkWin();
			}	
		} else {
			alert("Select another cell");
		}	
	};
}

