(function(){
    var datepicker = window.datepicker;
    var monthData;
    var $wrapper;
    datepicker.buildUi = function(year,month){
        monthData = datepicker.getMonthData(year,month);

        var html = '<div class="ui-datepicker-header">' +
        '<a href="javascript:;" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>' +
        '<a href="javascript:;" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>' +
        '<span class="ui-datepicker-current-month">'+ monthData.year + '-' + monthData.month +'</span>' +
    '</div>' +
    '<div class="ui-datepicker-body">' +
        '<table>' +
            '<thead>' +
                '<tr>' +
                    '<th>一</th>' +
                    '<th>二</th>' +
                    '<th>三</th>' +
                    '<th>四</th>' +
                    '<th>五</th>' +
                    '<th>六</th>' +
                    '<th>日</th>' +
                '</tr>' +
            '</thead>' +
            '<tbody>';

            for(var i = 0;i < monthData.days.length;i++){
                var data = monthData.days[i];
                if(i%7 === 0){
                    html += '<tr>';
                }
                html += '<td>' + data.showDate + '</td>';
                if(i%7 === 6){
                    html += '</tr>';
                }
            }

                html += '</tbody>' +
                '</table>' +
            '</div>';

            return html;
    };

    datepicker.render = function(direction){
        var month,year; 
        if(monthData){
            year = monthData.year;
            month = monthData.month;
        }
        if(direction === 'prev'){
            month--;
        }else if(direction === 'next'){
            month++;
        }
        var html = datepicker.buildUi(year,month);

        $wrapper = document.querySelector('.ui-datepicker-wrapper');

        if(!$wrapper){
            $wrapper = document.createElement('div');
            $wrapper.className = 'ui-datepicker-wrapper';
            document.body.appendChild($wrapper);
        }
        $wrapper.innerHTML = html;
    };

    datepicker.init = function(input){
        var html = datepicker.buildUi();
        // document.body.innerHTML = html;
        $wrapper = document.createElement('div');
        $wrapper.className = 'ui-datepicker-wrapper';
        $wrapper.innerHTML = html;

        document.body.appendChild($wrapper);

        var $input = document.querySelector(input);
        var isOpen = false;

        $input.addEventListener('click',function(){
            if(isOpen){
                $wrapper.classList.remove('ui-datepicker-wrapper-show');
                isOpen = false;
            }else{
                $wrapper.classList.add('ui-datepicker-wrapper-show');
                var left = $input.offsetLeft;
                var top = $input.offsetTop;
                var height = $input.offsetHeight;
                $wrapper.style.top = top + height + 2 + 'px';
                $wrapper.style.left = left + 'px';
                isOpen = true;
            }
        },false);

        $wrapper.addEventListener('click',function(e){
            var $target = e.target;
            if(!$target.classList.contains('ui-datepicker-btn')){
            }else{
                 if($target.classList.contains('ui-datepicker-prev-btn')){
                    datepicker.render('prev');
                }else if($target.classList.contains('ui-datepicker-next-btn')){
                    datepicker.render('next');
                }
            }  
           
        },false);
    };
})();