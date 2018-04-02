var http = require("http"),
    url = require("url"),
    superagent = require("superagent"),
    cheerio = require("cheerio"),
    async = require("async"),
    eventproxy = require('eventproxy');
// https://www.cnblogs.com/CraryPrimitiveMan/p/3674421.html
// http://www.cnblogs.com/hannover/p/4109779.html
function netWork() {
    var pageUrl = 'https://movie.douban.com/top250?start=0';
    superagent.get(pageUrl)
        .end(function(err, pres) {
            if (err) {
                console.log(err);
            }
            // pres.text  is all html 页面
            // console.log('pres ...',pres);
            var $ = cheerio.load(pres.text);
            var list_data = [];
            $('.grid_view li').each(function(idx, element) {
                var $element = $(element);
                // var em = $element('em');
                // console.log('element ...',$element);
                var obj = {};
                obj.id = $(this).find('em').text();
                obj.link = $(this).find('.pic a').attr('href');
                obj.img_alt = $(this).find('.pic a img').attr('alt');
                obj.img_src = $(this).find('.pic a img').attr('src');
                obj.star = $(this).find('.star .rating_num').text();
                obj.quote = $(this).find('.quote .inq').text();
                console.log('obj ...', obj);
                list_data.push(obj);
            });
            console.log('list_data ...',list_data);
            // console.log('text ...',pres.text);
            // console.log($('.list-item').children('.pro-price').text())
            // console.log($('.pro-price','.list-item').text());  // source pro-price in list-item  html()
            // console.log($('.item-img','.list-item').html());
            // console.log($('li').html());
            // console.log($('.list-item').find('.item-img').html());
            // console.log($('.list-item .item-img').html());
            // console.log($('.list-item'));
        });
}

netWork();