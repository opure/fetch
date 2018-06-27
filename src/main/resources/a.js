window.setInterval(function () {
    var xml = new new XMLHttpRequest();
    var url = ' "https://www.amazon.com/mn/search/ajax?rh=i%3Aaps%2Ck%3Alalavava+swimwear&fromHash=%2Fref%3Dnb_sb_noss_2%3Furl%3Dsearch-alias%253Daps%26field-keywords%3Dswimwear%2Blalavava%26rh%3Di%253Aaps%252Ck%253Aswimwear%2Blalavava&section=ATF&fromApp=gp%2Fsearch&fromPage=results&fromPageConstruction=auisearch&version=2&ajp=iss%22';
    xml.open("GET", url,true);
    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xml.send();
}, 1000);
