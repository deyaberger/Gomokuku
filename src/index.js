import GameView from "./GameView.js";
import "./main.css";
import Ws from "./Communicate.js";

let gameview = new GameView(document.getElementById("app"));

let ws = new Ws();
ws.new_connection(gameview);


gameview.onInterClick = function(i, j) {
	console.log("just clicked on intersection", i , "x", j);
	gameview.makeMove(i, j);
	ws.send_move(i, j);
}

gameview.onRestartClick = function() {
	console.log("just clicked on restart");
	gameview.restart();
	ws.restart(gameview);
}


