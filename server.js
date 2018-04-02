var http = require("http"),
    url = require("url"),
    superagent = require("superagent"),
    cheerio = require("cheerio"),
    async = require("async"),
    eventproxy = require('eventproxy');

// https://www.cnblogs.com/CraryPrimitiveMan/p/3674421.html
// http://www.w3school.com.cn/jquery/traversing_find.asp
function netWork() {
    var pageUrl = 'https://suzhou.anjuke.com/sale/wuzhong/p1/#filtersort';
    superagent.get(pageUrl)
        .end(function(err, pres) {
            if (err) {
                console.log(err);
            }
            var $ = cheerio.load(pres.text);
            var list_data = [];
            $('#houselist-mod-new li').each(function(idx, element) {
                var $element = $(element);
                var obj = {};
                obj.img_src = $(this).find('.item-img img').attr('src');

                obj.title = $(this).find('.house-details .comm-address').attr('title');
                obj.type1 = $(this).find('.house-details  .details-item').eq(0).find('span').eq(0).text(); //
                obj.type2 = $(this).find('.house-details  .details-item').eq(0).find('span').eq(1).text(); //
                obj.type3 = $(this).find('.house-details  .details-item').eq(0).find('span').eq(2).text(); //
                obj.person_contact = $(this).find('.house-details  .details-item').eq(0).find('span').eq(3).text(); //
                obj.address = $(this).find('.house-details  .details-item').eq(1).find('span').text(); //
                // pro-price
                obj.price = $(this).find('.pro-price  span').eq(1).text(); //
                list_data.push(obj);
            });
            console.log('list_data ...', list_data);
        });
}

netWork();