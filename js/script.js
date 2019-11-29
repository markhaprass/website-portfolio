//jalankan even pada saat on.click

$('.page-scroll').on('click', function(e) {

//ambil semua href
    var tujuan = $(this).attr('href');
//tangkap elmn
    var elemenTujuan = $(tujuan);
//jalankan animasi scroll
    $('html, body').animate( {
        scrollTop: elemenTujuan.offset().top
    })

    e.preventDefault();

});


//paralax fx scroll
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    // if(wScroll > $('#portfolio').offset().top - 200 ) {
    //    $('#portfolio .img-thumbnail').addClass('muncul')
    // }

    if(wScroll > $('#portfolio').offset().top - 50 ) {
        $('#portfolio .img-thumbnail').each(function(i) {
            setTimeout(function() {
                $('#portfolio .img-thumbnail').eq(i).addClass('muncul')
            }, 800  * i + 1);
        });
        // $('#portfolio .img-thumbnail').addClass('muncul')
     }

});