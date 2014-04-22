function TictactoeController($scope) {
	$scope.board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
	$scope.clicker = function(cellIndex) {
		$scope.board[cellIndex]="X";	
	}
}