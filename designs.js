
$('document').ready(function() {
  $(document).on('click', 'td', function(evt) {
    //select color element
    let userColor = $('#colorPicker').val();
    $(this).css('background-color', userColor);
    evt.preventDefault;
  });
  $('#sizePicker').submit(function(event){
    event.preventDefault();
    makeGrid();
  });

// When size is submitted by the user, call makeGrid()
  function makeGrid() {

    //select grid elements
    let height = $('#inputHeight').val();
    let width = $('#inputWidth').val();
    //select grid element
    let grid = $('#pixelCanvas');


    grid.find('tr').remove();
      for (var h = 0; h < height; h++) {
        grid.append('<tr></tr>');
          for (var w = 0; w < width; w++) {
            grid.find('tr:last').append('<td></td>');
          }
      }
  }
});
