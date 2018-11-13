/*
	script.js
	Title: Winner Picker
	Author: Nazmus
	URL: https://www.easyprogramming.net
	Github: https://github.com/naztronaut/

	Custom JS file for WinnerPicker
*/

$(document).ready(function () {
    $('#submit').on('click', function(){
        
        $('#output').show();
        $('#winnerOutput').html('');
        
        //read input data
        let initList = $('#winnersList').val().trim().split('\n');
        let list = [];
        
        // get rid of Blank Spaces
        $(initList).each(function(i, item){
           (item == '') ? '' : list.push(item);
        });
        
        //pick random array index based on list.length i number of times
        for(let i = 0; i < $('#winnerQty').val(); i++){
            let winner = list[Math.floor(Math.random() * (list.length))];
            $('#winnerOutput').append($('<li>').append(winner));
        }
    });
});