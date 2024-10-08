document.addEventListener('DOMContentLoaded', function() {
	common.init();
	ui.init();
});

const common = {
    include : function() {
        //header, footer load는 항상 상위에 설정할것
        $('#header').load("./include/header.html");
        $('#footer').load("./include/footer.html");
    },

    header: function () {

    },

    footer : function() {

    },


    //common function 목록
    init : function() {
        common.include();
        common.header();
        common.footer();        
    }

}


const ui = {

    //ui function 목록
    init : function() {
           
    }
}
