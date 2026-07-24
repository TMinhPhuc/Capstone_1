$(document).ready(function() {
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-theme');
        $('#theme-toggle').html('<i class="fa-solid fa-sun"></i> Light Mode');
    }

    $('#theme-toggle').click(function() {
        $('body').toggleClass('dark-theme'); 
        if ($('body').hasClass('dark-theme')) {
            localStorage.setItem('theme', 'dark'); 
            $(this).html('<i class="fa-solid fa-sun"></i> Light Mode'); 
        } else {
            localStorage.setItem('theme', 'light'); 
            $(this).html('<i class="fa-solid fa-moon"></i> Dark Mode'); 
        }
    });
});
