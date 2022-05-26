$(document).ready(function(){
    var $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2,
    init = function(){
        bindEvents();
        if(validIndex(openedIndex)){
            animateItems($mainMenuItems.eq(openedIndex), true, 700);
        }
    },
    bindEvents = function(){
        $mainMenuItems.children(".images").click(function(){
            var newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);
        });
        $(".button").hover(function(){
            $(this).addClass("hovered");
        },
        function(){
            $(this).removeClass("hovered");
        });
        $(".button").click(function(){
            var newIndex = $(this).index();
            checkAndAnimateItem(newIndex);
        });
    },
    validIndex = function(indexToCheck){
        return(indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    },
    animateItems = function($item,toOpen,speed){
        var $colorImage = $item.find(".color"),
        itemParam = toOpen ? {width:"42rem"}: {width:"8.75rem"},
        colorImageParam = toOpen ? {left:"0rem"}: {left:"8.75rem"};
         $colorImage.animate(colorImageParam,speed);
        $item.animate(itemParam,speed);
    },
    checkAndAnimateItem = function(indexToCheckAndAnimate){
            if(openedIndex === indexToCheckAndAnimate){
                animateItems = ($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
                openedIndex = -1;
            }else{
                if(validIndex(indexToCheckAndAnimate)){
                    animateItems($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = indexToCheckAndAnimate;
                    animateItems($mainMenuItems.eq(openedIndex), true, 250);
                }
            }
    };   
    init();    
});

