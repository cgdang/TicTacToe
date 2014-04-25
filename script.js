function TictactoeController($scope) {
	$scope.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

	var clickedSpaces = 0;

	var win = false;

	var jacksonWins = false;

	var jordanWins = false;

	var checkWin = function() {
	if ($scope.board[0] == $scope.board[1] && $scope.board[2] == $scope.board[1] && $scope.board[1] != " ") {
		win = true;
		if ($scope.board[0] == 'x') {
			jacksonWins = true;
		} else {
			jordanWins = true;
		}
	}
	if ($scope.board[3] == $scope.board[4] && $scope.board[5] == $scope.board[4] && $scope.board[4] != " ") {
		win = true;
		if ($scope.board[3] == 'x') {
			jacksonWins = true;
		} else {
			jordanWins = true;
		}
	}
	if ($scope.board[6] == $scope.board[7] && $scope.board[8] == $scope.board[7] && $scope.board[7] != " ") {
		win = true;
		if ($scope.board[6] == 'x') {
			jacksonWins = true;
		} else {
			jordanWins = true;
		}
	}
	if ($scope.board[0] == $scope.board[3] && $scope.board[6] == $scope.board[3] && $scope.board[3] != " ") {
		win = true;
		if ($scope.board[0] == 'x') {
			jacksonWins = true;
		} else {
			jordanWins = true;
		}
	}
	if ($scope.board[1] == $scope.board[4] && $scope.board[7] == $scope.board[4] && $scope.board[4] != " ") {
		win = true;
		if ($scope.board[1] == 'x') {
			jacksonWins = true;
		} else {
			jordanWins = true;
		}
	}
	if ($scope.board[2] == $scope.board[5] && $scope.board[8] == $scope.board[5] && $scope.board[5] != " ") {
		win = true;
		if ($scope.board[2] == 'x') {
			jacksonWins = true;
		} else {
			jordanWins = true;
		}
	}
	if ($scope.board[0] == $scope.board[4] && $scope.board[8] == $scope.board[4] && $scope.board[4] != " ") {
		win = true;
		if ($scope.board[0] == 'x') {
			jacksonWins = true;
		} else {
			jordanWins = true;
		}
	}
	if ($scope.board[2] == $scope.board[4] && $scope.board[6] == $scope.board[4] && $scope.board[4] != " ") {
		win = true;
		if ($scope.board[2] == 'x') {
			jacksonWins = true;
		} else {
			jordanWins = true;
		}
	} else if(clickedSpaces == 9  && win === false) {
		// alert("DRAW");
	}
	};

	$scope.clicker = function(cellIndex) {
		if ($scope.board[cellIndex] == " " && win === false) {
			clickedSpaces++;
			if (clickedSpaces % 2 === 0) {
				$scope.board[cellIndex] = "o";
				$scope.board.push[cellIndex];
				checkWin();
			} else {
				$scope.board[cellIndex] = "x";
				$scope.board.push[cellIndex];
				checkWin();
			}
			console.log(clickedSpaces);	
			console.log($scope.board);
			console.log(win);
			console.log("jackson wins " + jacksonWins);
			console.log("jordan wins " + jordanWins);
		} else {
			// alert("MJ, PICK ANOTHER ONE");
		}	
	};

	$scope.reset = function() {
		$scope.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
		clickedSpaces = 0;
		win = false;
	};

	$scope.mJacksonWins = function() {
		if (jacksonWins === true)
			return true;
		else
			return false;
	};

	$scope.mJordanWins = function() {
		if (jordanWins === true)
			return true;
		else
			return false;
	};

	$scope.draw = function() {
		if (clickedSpaces == 9  && win === false)
			return true;
		else
			return false;
	};

}

