var Body = {
    setColor: function (color){
    // document.querySelector('body').style.color= color;
    $('body').css('color', color);
    },
    setBackgroundColor: function (color){
    // document.querySelector('body').style.backgroundColor= color;
    $('body').css('backgroundColor', color);
    }
}
var Links = {
    setColor: function (color){
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i < alist.length) {
    //   alist[i].style.color = 'color'
    //   i = i + 1;
    //     }
    // jquery를 사용하려면 $과 함께 사용해줘야 함
    // 이페지에 있는 모든 a태그를 jquery로 제어하겠다
    // 위에 주석처리한 부분을 jquery를 간단하게 사용 가능
    $('a').css('color', color);
    }
}

function nightdayHandler(self){
    var target = document.querySelector('body');
        if (self.value === 'night'){
            Body.setBackgroundColor('black');
            Body.setColor('white');
            self.value = 'day';
            
            Links.setColor('powerderblue');
        }  else {
            Body.setBackgroundColor('white');
            Body.setColor('black');
            self.value = 'night';

            Links.setColor('blue');
        }
}
