var gameApp = angular.module("gameApp", ["firebase"]);

var playerNum;

gameApp.controller("TictactoeController",function($scope, $firebase) {
	
	var ticTacRef = new Firebase("https://mjam.firebaseio.com/games");

	var lastGame;
            // Ask for all existing game info from firebase
            ticTacRef.once('value', function(gamesSnapshot) {
                // get the actual games data
              var games = gamesSnapshot.val();
                if(games === null)
                {
                    // No games at all, so make a new game -- As if we're Areg
                    lastGame = ticTacRef.push( {waiting: true} );
                    playerNum = 1;
                }
                else    // I do have at least one game out there...
                {
                  var keys = Object.keys(games);
                  var lastGameKey = keys[ keys.length - 1 ];
                  var lastGame = games[ lastGameKey ];
                    console.log("This person's game: " + lastGameKey);
                  if(lastGame.waiting)
                  {
                    // Currently someone is waiting -- Areg is there and we're Rocky
                    // Grab from Firebase its last game object
                    lastGame = ticTacRef.child(lastGameKey);
                    // Set a new game on this
                    lastGame.set( {
                    	waiting: false,
                        clickedSpaces: 0,
                        win: false,
                        jacksonWins: false,
                        jordanWins: false,
                        board: [" ", " ", " ", " ", " ", " ", " ", " ", " "]
                    } );
                    playerNum = 2;
                  }
                  else
                  {
                    // Make a new game -- As if we're Areg
                        lastGame = ticTacRef.push( {waiting: true} );
                        playerNum = 1;
                  }
                }
                // Attach the last game to what we're up to
              $scope.game = $firebase(lastGame);
            });



	var checkWin = function() {
	if ($scope.game.board[0] == $scope.game.board[1] && $scope.game.board[2] == $scope.game.board[1] && $scope.game.board[1] != " ") {
		$scope.game.win = true;
		if ($scope.game.board[0] == 'x') {
			$scope.game.jacksonWins = true;
		} else {
			$scope.game.jordanWins = true;
		}
	}
	if ($scope.game.board[3] == $scope.game.board[4] && $scope.game.board[5] == $scope.game.board[4] && $scope.game.board[4] != " ") {
		$scope.game.win = true;
		if ($scope.game.board[3] == 'x') {
			$scope.game.jacksonWins = true;
		} else {
			$scope.game.jordanWins = true;
		}
	}
	if ($scope.game.board[6] == $scope.game.board[7] && $scope.game.board[8] == $scope.game.board[7] && $scope.game.board[7] != " ") {
		$scope.game.win = true;
		if ($scope.game.board[6] == 'x') {
			$scope.game.jacksonWins = true;
		} else {
			$scope.game.jordanWins = true;
		}
	}
	if ($scope.game.board[0] == $scope.game.board[3] && $scope.game.board[6] == $scope.game.board[3] && $scope.game.board[3] != " ") {
		$scope.game.win = true;
		if ($scope.game.board[0] == 'x') {
			$scope.game.jacksonWins = true;
		} else {
			$scope.game.jordanWins = true;
		}
	}
	if ($scope.game.board[1] == $scope.game.board[4] && $scope.game.board[7] == $scope.game.board[4] && $scope.game.board[4] != " ") {
		$scope.game.win = true;
		if ($scope.game.board[1] == 'x') {
			$scope.game.jacksonWins = true;
		} else {
			$scope.game.jordanWins = true;
		}
	}
	if ($scope.game.board[2] == $scope.game.board[5] && $scope.game.board[8] == $scope.game.board[5] && $scope.game.board[5] != " ") {
		$scope.game.win = true;
		if ($scope.game.board[2] == 'x') {
			$scope.game.jacksonWins = true;
		} else {
			$scope.game.jordanWins = true;
		}
	}
	if ($scope.game.board[0] == $scope.game.board[4] && $scope.game.board[8] == $scope.game.board[4] && $scope.game.board[4] != " ") {
		$scope.game.win = true;
		if ($scope.game.board[0] == 'x') {
			$scope.game.jacksonWins = true;
		} else {
			$scope.game.jordanWins = true;
		}
	}
	if ($scope.game.board[2] == $scope.game.board[4] && $scope.game.board[6] == $scope.game.board[4] && $scope.game.board[4] != " ") {
		$scope.game.win = true;
		if ($scope.game.board[2] == 'x') {
			$scope.game.jacksonWins = true;
		} else {
			$scope.game.jordanWins = true;
		}
	} else if($scope.game.clickedSpaces == 9  && $scope.game.win === false) {
		// alert("DRAW");
	}
	};

	$scope.clicker = function(cellIndex) {
		if ($scope.game.board[cellIndex] == " " && $scope.game.win === false) {
			$scope.game.clickedSpaces++;
			if ($scope.game.clickedSpaces % 2 === 0) {
				$scope.game.board[cellIndex] = "o";
				//$scope.game.board.push[cellIndex];
				checkWin();
			} else {
				$scope.game.board[cellIndex] = "x";
				//$scope.game.board.push[cellIndex];
				checkWin();
			}
			console.log($scope.game.clickedSpaces);
			console.log($scope.game.board);
			console.log($scope.game.win);
			console.log("jackson wins " + $scope.game.jacksonWins);
			console.log("jordan wins " + $scope.game.jordanWins);
		}
		$scope.game.$save();
	};

	$scope.reset = function() {
		$scope.game.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
		$scope.game.clickedSpaces = 0;
		$scope.game.win = false;
		$scope.game.jacksonWins = false;
		$scope.game.jordanWins = false;
		$scope.game.$save();
		$
	};

	$scope.hideBoard = function() {
		if ($scope.game.win === true)
			return true;
		else
			return false;
	};

	$scope.mJacksonWins = function() {
		if ($scope.game.jacksonWins === true)
			return true;
		else
			return false;
	};

	$scope.mJordanWins = function() {
		if ($scope.game.jordanWins === true)
			return true;
		else
			return false;
	};

	$scope.draw = function() {
		if ($scope.game.clickedSpaces === 9  && $scope.game.win === false)
			return true;
		else
			return false;
	};

});