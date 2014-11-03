var mainJs = new MainJsClass();

function MainJsClass() {
    var scope = this;

    this.commonFeatures = function () {

    };

    this.hideMenu = function () {
        $('.ls-list:first').show();
        $('.ls-ttl').click(function() {
            if($(this).next('.ls-list').css('display') == 'none') {
                $('.ls-list').slideUp();
                $(this).next('.ls-list').slideDown();
            }
            else {
                $(this).next('.ls-list').slideToggle();
            }
        });
    }

    $(function(){
       scope.commonFeatures();
       scope.hideMenu();
    });
}