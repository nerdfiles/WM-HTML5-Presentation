jQuery(function($) {
    
    $('a.next-slide').bind('click', function(e) {
    
        //$('article').html('');
        
        $('article').load('slides/slide-1.html', function() {
            //alert('Load was performed.');
        });
        
        e.preventDefault();
        
    });
    
});