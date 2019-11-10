$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: 'self',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '6623756220.1677ed0.7d37e28249b24bb1a1e708992224ad8d',
        /* accessToken: '1997457380.1677ed0.8169e3ae8a804f1e835198093a90926d', */
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 d-flex justify-content-center align-items-center instaimg mt-5"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

   /*  
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
 */

});
