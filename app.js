$(document).ready(function() {
  $('#submit').click(function() {
    var drawing = [];
    var first = $('#first').val();
    drawing.push(Number(first));
    var second = $('#second').val();
    drawing.push(Number(second));
    var third = $('#third').val();
    drawing.push(Number(third));
    var fourth = $('#fourth').val();
    drawing.push(Number(fourth));
    var fifth = $('#fifth').val();
    drawing.push(Number(fifth));
    var powerball = $('#powerball').val();
    drawing.push(Number(powerball));
console.log(drawing);

  var isWinner = 0;
  var lines = (function() {
        var lines = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "ticketNumbers.json",
            'dataType': "json",
            'success': function (data) {
                lines = data;
            }
        });
        return lines;
    })();

    for (var line in lines) {
    if (drawing.toString() === lines[line].toString()) {
      $('#result').append('<p id="resultP">' + line + ' is a winner!!!</p>');
      isWinner = 1;
    }
    };
    if (isWinner != 1) {
      $('#result').append('<p id="resultP">You are not a winner :(</p>');
  };
});
});
