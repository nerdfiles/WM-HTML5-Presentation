jQuery(function($) {

    $('html.no-js').removeClass('no-js').addClass('js-enabled');
    
    $('#control a').each(function(e) {
        
        var $self = $(this),
            loc = location.href;
            
        if ( loc[loc.length-1] === '/' || loc.indexOf('index.html') !== -1 ) {
            $self.attr('href', 'slide-1.html');
        } else {
            
        }
        
        $self.bind('click', function(e) {
        
            var $self = $(this);
            
            e.preventDefault();
        
        });
        
    });
    
});