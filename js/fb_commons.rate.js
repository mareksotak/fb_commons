jQuery(document).bind('eventAfterRate', function(event, data) {
  if (data.content_type == 'node' && data.widget_id == 1) {
    jQuery("#node-" + data.content_id + " .content-fb-commons-likes-data-wrapper").load("/fb-commons/ajax/like/" + data.content_id);
  }
});