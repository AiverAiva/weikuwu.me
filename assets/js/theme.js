$("[data-toggle=popover]").popover();
$("[data-toggle='tooltip']").tooltip()
$('body').on('click', function (e) {
    $('[data-toggle=popover]').each(function () {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});

var content= document.createElement('div');
content.innerHTML = "AiverAiva#1234 <a tabindex='0' id='copy' data-clipboard-text='AiverAiva#1234'><i class='bx bxs-copy' id='copy-button'></i></a>"
// AiverAiva#1234 
// onclick='copyDiscordTag()' data-toggle='tooltip' data-placement='top' title='Tooltip on top'
$('#shapes-trigger').tooltip({
    title: 'Shapes'
}).popover({
    html : true,
    // title: boomHTML,
    content: content,
    placement: 'top'
}).on('show.bs.popover', function() {
    $(this).tooltip('hide');
    $('[data-toggle="tooltip"]').tooltip('disable');
}).on('hide.bs.popover', function() {
    $('[data-toggle="tooltip"]').tooltip('enable');
});

// (function(){
// 	new Clipboard('#copy-button');
// })();

function copyDiscordTag() {
    navigator.clipboard.writeText('AiverAiva#1234')
    // var tooltip = document.getElementById("myTooltip");
    // tooltip.innerHTML = "Copied: " + copyText;
}

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