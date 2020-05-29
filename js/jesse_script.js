// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
				{
					clue: " Water (5,3)",
					answer: "adamsale",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
				{
					clue: " Unfashionable (5)",
					answer: "dated",
					position: 4,
					orientation: "across",
					startx: 5,
					starty: 3
				},
				{
					clue: " Nullify (6)",
					answer: "negate",
					position: 7,
					orientation: "across",
					startx: 5,
					starty: 5
				},
				{
					clue: " Quick short punch (3)",
					answer: "jab",
					position: 8,
					orientation: "across",
					startx: 2,
					starty: 6
				},
				{
					clue: " No votes (4)",
					answer: "nays",
					position: 9,
					orientation: "across",
					startx: 1,
					starty: 8
				},
				{
					clue: " Slim (6)",
					answer: "slight",
					position: 11,
					orientation: "across",
					startx: 5,
					starty: 9
				},
				{
					clue: " Podium (4)",
					answer: "dais",
					position: 12,
					orientation: "across",
					startx: 1,
					starty: 10
				},
				{
					clue: " Regions (5)",
					answer: "areas",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: " Precision (8)",
					answer: "accuracy",
					position: 2,
					orientation: "down",
					startx: 3,
					starty: 1
				},
				{
					clue: " Gemstone (7)",
					answer: "emerald",
					position: 3,
					orientation: "down",
					startx: 8,
					starty: 1
				},
				{
					clue: " Vigilant (5)",
					answer: "alert",
					position: 5,
					orientation: "down",
					startx: 6,
					starty: 3
				},
				{
					clue: " Choose (6)",
					answer: "select",
					position: 6,
					orientation: "down",
					startx: 10,
					starty: 4
				},
				{
					clue: " Signal agreement (3)",
					answer: "nod",
					position: 9,
					orientation: "down",
					startx: 1,
					starty: 8
				},
				{
					clue: " To free (3)",
					answer: "rid",
					position: 10,
					orientation: "down",
					startx: 7,
					starty: 8
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
