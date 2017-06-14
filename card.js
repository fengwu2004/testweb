/**
 * Created by yan on 14/06/2017.
 */
var number = 0

var card = document.getElementById('card_' + number)

var close = card.getElementsByClassName('close')[0]

var editor = card.getElementsByClassName('editor')[0]

card.addEventListener('mouseover', function() {

    close.style.visibility = 'visible'

    editor.style.visibility = 'visible'
})

card.addEventListener('mouseout', function() {

    close.style.visibility = 'hidden'

    editor.style.visibility = 'hidden'
})