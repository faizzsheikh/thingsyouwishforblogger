 $( function() {
  $('.closeable').on('click', function(e) {
    / Order of operations, have to set height style before removing close class /
    if (!$(this).hasClass('closeit')) {
      $(this).height('');      
    }
    else {
      $(this).height($(this).attr('data-height'));      
    }
    $(this).toggleClass('closeit')
  }).height('auto').each(function() {
    $(this).attr('data-height', $(this).height());
  }).height('');  
}); 
