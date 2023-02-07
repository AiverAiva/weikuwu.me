$("[data-toggle=popover]").popover();
$("[data-toggle='tooltip']").tooltip()
$('body').on('click', function (e) {
    $('[data-toggle=popover]').each(function () {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
    $("[data-toggle='tooltip']").each(function () {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.tooltip').has(e.target).length === 0) {
            $(this).tooltip('disable');
        }
    });
});

$('#copy').tooltip({
    trigger: 'click',
    placement: 'bottom'
});
  
function setTooltip(message) {
$('#copy').tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}

function hideTooltip() {
setTimeout(function() {
    $('#copy').tooltip('hide');
}, 1000);
}
  
// Clipboard
var clipboard = new ClipboardJS('#copy');

clipboard.on('success', function(e) {
    setTooltip('Copied!');
    hideTooltip();
});
  
clipboard.on('error', function(e) {
    setTooltip('Failed!');
    hideTooltip();
});