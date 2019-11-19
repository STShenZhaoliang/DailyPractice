// 这个main.js是我们项目的js入口文件
import $ from 'jquery'

$(function(){
        $('li:odd').css('backgroundColor', 'lightblue')
        $('li:even').css('backgroundColor', function(){
            return '#' + 'D97634'
        })
    }
)