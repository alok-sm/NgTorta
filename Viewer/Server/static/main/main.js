$(function(){
    $('#porta-body').load(function(){
        setIframeHeight('porta-body');
    });
    
    $.get('http://localhost:3000/url', function(response){
        $("#porta-body").attr('src', response.url);   
    })
});

function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search)){
        return decodeURIComponent(name[1]);
    }
}

function setIframeHeight(id) {
    var ifrm = document.getElementById(id);
    var doc = ifrm.contentDocument? ifrm.contentDocument: 
        ifrm.contentWindow.document;
    ifrm.style.visibility = 'hidden';
    ifrm.style.height = "10px"; // reset to minimal height ...
    // IE opt. for bing/msn needs a bit added or scrollbar appears
    ifrm.style.height = getDocHeight(doc) + "px";
    ifrm.style.visibility = 'visible';
}

function getDocHeight(doc) {
    doc = doc || document;
    // stackoverflow.com/questions/1145850/
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight , window.innerHeight);
    return height;
}