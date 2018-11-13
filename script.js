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
        
        /*
            show the output ID
            reset #winnerOutput so it doesn't keep adding
        */
        $('#output').show();
        $('#winnerOutput').html('');
        
        // read input data, trim the ends, and split into arrays by new line
        let initList = $('#winnersList').val().trim().split('\n');
        let list = []; // initialize list array
        
        // get rid of Blank Spaces and push to list[] array
        $(initList).each(function(i, item){
           (item == '') ? '' : list.push(item);
        });
        
        // pick random array index based on list.length i number of times
        for(let i = 0; i < $('#winnerQty').val(); i++){
            /* 
                get random index number and grab value of winner
                Source: https://www.easyprogramming.net/javascript/js_random_number_generator.php
            */
            let index = Math.floor(Math.random() * (list.length));
            let winner = list[index];
            
            /*
                remove the winner from the array on each loop iteration
                This is so that someone who won isn't in the pool again for an unfair advantage
            */
            list.splice(index, 1);
            $('#winnerOutput').append($('<li>').append(winner));
        }
    });
});