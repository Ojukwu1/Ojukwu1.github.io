
// Initialising variables
var pHeight = 1; 
var pWidth = 1; 
var drawColor;

// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function () {
    event.preventDefault();
  //  alert("Submitted");

    // Declaring Variable for Size 
    pHeight = $("[name='height']").val();
    pWidth = $("[name='width']").val();

 //   alert('height is = ' + pHeight);
 //   alert('width is = ' + pWidth);
    
    // Call makeGrid
    makeGrid(pHeight, pWidth);

})


function makeGrid(h,w) {

// Your code goes here!

     // Clear current grids
    $("tr").remove();
    //$("td").remove();

    // Create new grids
    for (var row = 1; row <= h; row++) {
        $('#pixelCanvas').append('<tr id=row' + row +'></tr>');
        for (var col = 1; col <= w; col++) {
            $('#row' + row).append('<td></td>');
        }
       
    } 
  // alert('grid drawn');

    // add color
    $('td').click(function () {
        //alert("The Table data was clicked.");
        drawColor = $('#colorPicker').val();
        $(this).attr('style','background-color:' + drawColor);

    });
    

return;
}
