// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
				{
					clue: " largest software IPO (9)",
					answer: "snowflake",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},

				{
					clue: " Facebook's VR subsidiary (6)",
					answer: "oculus",
					position: 3,
					orientation: "across",
					startx: 1,
					starty: 3
				},

				{
					clue: " Project tracking software from Atlassian (4)",
					answer: "jira",
					position: 7,
					orientation: "across",
					startx: 3,
					starty: 5
				},

				{
					clue: " A digital currency exchange (8)",
					answer: "coinbase",
					position: 8,
					orientation: "across",
					startx: 6,
					starty: 6
				},

				{
					clue: " Amazon's virtual assistant (5)",
					answer: "alexa",
					position: 10,
					orientation: "across",
					startx: 3,
					starty: 8
				},

				{
					clue: " a web based vector graphics editor and prototyping tool (5)",
					answer: "figma",
					position: 12,
					orientation: "across",
					startx: 8,
					starty: 10
				},

				{
					clue: " Software licensing and delivery business model (4)",
					answer: "saas",
					position: 13,
					orientation: "across",
					startx: 3,
					starty: 11
				},

				{
					clue: " Mail Delivery System (9)",
					answer: "mailchimp",
					position: 14,
					orientation: "across",
					startx: 2,
					starty: 13
				},

				{
					clue: " Canadian e-commerce platform (7)",
					answer: "shopify",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},

				{
					clue: " A no code tool (6)",
					answer: "bubble",
					position: 2,
					orientation: "down",
					startx: 13,
					starty: 1
				},

				{
					clue: " Elon Musk's Space Transportation Company (6)",
					answer: "spacex",
					position: 4,
					orientation: "down",
					startx: 6,
					starty: 3
				},

				{
					clue: " generative modeling using deep neural networks (acronym) (3)",
					answer: "gan",
					position: 5,
					orientation: "down",
					startx: 9,
					starty: 4
				},

				{
					clue: " The minimum amount of any physical entity (7)",
					answer: "quantum",
					position: 6,
					orientation: "down",
					startx: 11,
					starty: 4
				},

				{
					clue: " City that hosts World Economic Forum (5)",
					answer: "davos",
					position: 9,
					orientation: "down",
					startx: 3,
					starty: 7
				},

				{
					clue: " the best club at HBS (4)",
					answer: "caml",
					position: 11,
					orientation: "down",
					startx: 5,
					starty: 10
				}
			] 
		
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)