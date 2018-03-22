$("#theLink").click(function() {
  var link = $(this);
  var content = $('.details');
  
  if (link.text() === 'Show Details') {
    link.text('Hide Details');
    content.css('display', 'block');
  } else {
    link.text('Show Details');
    content.css('display', 'none');
  }
});
