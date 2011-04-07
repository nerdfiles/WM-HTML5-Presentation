jQuery(function($) {

    $('html.no-js').removeClass('no-js').addClass('js-enabled');
    
<<<<<<< HEAD
    var index = $('article').html();
    
    $('#control a').each(function(e) {
        
        // init controls
        
        var $self = $(this),
            currentHref = location.href,
            selfHref = $self.attr('href'),
            $prevSlide = $('.prev-slide'),
            $nextSlide = $('.next-slide'),
            
            // for each control
            masterSlideNum = 0;
            
        // ...
        
        if ( $self.is('[href="#slide-0"]') ) {
            $self.hide();
        }
            
        $self.bind('click', function(e) {
        
            var $self = $(this),
                selfHref = $self.attr('href'),
                slideNum = selfHref.match(/([\d]+)/),
                slideNum = parseInt(slideNum[0], 10);
                
            masterSlideNum = slideNum;
            
            if ( $self.is('[href="#slide-1"]') ) {
                $self.prev().show();
            }
            
            if ( $self.hasClass('prev-slide') ) {
                $self.next().attr('href', '#slide-' + (masterSlideNum+1));
                if ( (masterSlideNum-1) === -1 ) {
                    $self.hide();
                } else {
                    $self.attr('href', '#slide-' + (masterSlideNum-1));
                }
            } else if ( $self.hasClass('next-slide') ) {
                $self.prev().attr('href', '#slide-' + (masterSlideNum-1));
                $self.attr('href', '#slide-' + (masterSlideNum+1));
            }
            
            // load page
            
            if ( masterSlideNum === 0 ) {
                
                $("article").html( index );
                
            } else {
            
                $.ajax({
                    url:        'slides/slide-' + masterSlideNum + '.html',
                    cache:      true,
                    beforeSend: function(jqXHR, settings) {
                    },
                    complete:   function(jqXHR, textStatus) {
                    },
                    success:    function(data, textStatus, jqXHR) {
                    
                        $("article").html(data);
                        
                    }
                });
                
            }

=======
    $('#control a').each(function(e) {
        
        var $self = $(this),
            loc = location.href;
            
        if ( loc[loc.length-1] === '/' || loc.indexOf('index.html') !== -1 ) {
            $self.attr('href', 'slide-1.html');
        } else {
            
        }
        
        $self.bind('click', function(e) {
        
            var $self = $(this);
            
>>>>>>> 01d94bdb01ee6b2a309110e20323835c1f981c38
            e.preventDefault();
        
        });
        
    });
    
});