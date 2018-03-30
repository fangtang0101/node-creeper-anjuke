var http = require("http"),
    url = require("url"),
    superagent = require("superagent"),
    cheerio = require("cheerio"),
    async = require("async"),
    eventproxy = require('eventproxy');

// https://www.cnblogs.com/CraryPrimitiveMan/p/3674421.html




function netWork() {

    var pageUrl = 'https://suzhou.anjuke.com/sale/wuzhong/p1/#filtersort';

    superagent.get(pageUrl)
        .end(function(err, pres) {

            if (err) {
                console.log(err);
            }
            // pres.text  is all html 页面

            // console.log('pres ...',pres);
            var $ = cheerio.load(pres.text);

            console.log('all ...',$('#houselist-mod-new .list-item'));




            $('#houselist-mod-new .list-item').each(function(idx, element) {
                var $element = $(element);
                console.log('element ...',$element);
                // items.push({
                //     title: $element.attr('title'),
                //     href: $element.attr('href')
                // });
            });


            // console.log('text ...',pres.text);

            // console.log($('.list-item').children('.pro-price').text())

            // console.log($('.pro-price','.list-item').text());  // source pro-price in list-item  html()

            // console.log($('.item-img','.list-item').html());

            // console.log($('li').html());

            // console.log($('.list-item').find('.item-img').html());

            // console.log($('.list-item .item-img').html());

            // console.log($('.list-item'));



            // var listAll = $('.list-item');
            // console.log('len ...',$('.list-item'));
            // for (var i = 0; i < listAll.length; i++) {
            //     var articleUrl = listAll.eq(i);
            //     console.log(articleUrl);

            // }

        });
}

netWork();