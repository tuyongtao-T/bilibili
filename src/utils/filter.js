//JavaScript 日期处理类库
import moment from 'moment'
import Vue from 'vue'

//时间处理
Vue.filter('time', function(data,formatString) {
    if(data) {
        let formatString = formatString || 'YYYY-MM-DD';
        return moment(data).format(formatString);
    }
    return data;
})


