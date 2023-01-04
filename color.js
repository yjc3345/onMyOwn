    var body = {
         setColor:function (color){
            document.querySelector('body').style.color = color;
        },
        setBackgroundColor:function (color){
            document.querySelector('body').style.backgroundColor = color;
        }
    }
    var Links ={
        setColor:function (color){
            var alist = document.querySelectorAll('a');
            var i = 0
            while(i < alist.length){
                alist[i].style.color = color;
                i = i + 1
            }
        }
    }
    function darkmode(self){
        var target = document.querySelector('body');
        if (self.value === 'dark'){ 
            body.setBackgroundColor('black'); 
            body.setColor('white');
            self.value = 'bright';

            Links.setColor('powderblue');
        } else {
            body.setBackgroundColor('white');
            body.setColor('black');
            self.value = 'dark';

            Links.setColor('blue');
        }    
    }