$(function () {
    var $btnNav = $('.btn-nav');

    // ========================================================
    //  ページを切り替える関数
    // ========================================================
    function activatePage (el) {
        var $el = $(el);

        if ($el.hasClass('active')) {
            return;
        }

        var href = $el.attr('href') || '';
        var matchData = href.match(/#([a-z\-]+)$/);
        if (!matchData) {
            return;
        }

        var id = matchData[1];
        var $content = $('#' + id);
        
        $('.btn-nav.active').removeClass('active');
        $el.addClass('active');

        $('.block-content.active').removeClass('active');
        $content.addClass('active');
    }

    function initListeners () {

        // ========================================================
        //  クリックイベントでページを切り替える
        // ========================================================

        // ボタンクリック時
        $btnNav.on('click', function (e) {
            e.preventDefault();

            // 既にアクティブなボタンだったら何もしない
            if ($(this).hasClass('active')) {
                return;
            }

            activatePage(this);
        });

    }

    initListeners();
});
