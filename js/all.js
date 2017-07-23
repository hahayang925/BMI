$(document).ready(function(){

  var data = JSON.parse(localStorage.getItem('BMIdata')) || [];

//擷取資料 改變顏色
function saveData(e){
   e.preventDefault;
  var height_str = $('#height').val();
  var weight_str = $('#weight').val();
  var weight = parseInt(weight_str);
  var height = parseInt(height_str);
  var bmi = ((Math.round((weight/Math.pow(height/100,2))*100))/100).toFixed(2);
  var dt = new Date();
  var year = dt.getFullYear();
  var month = dt.getMonth()+1;
  var date = dt.getDate();
  var condition='';
  var color='';
  if(bmi<18.5){
      //體重過輕
      color='under-weight';
      condition='過輕';
      $('.btn').css('display','none');
      $('.result').css({
        'display':'inline-block',
        'border-width':'6px',
        'border-color':'#31BAF9',
        'border-style':'solid',
        'color':'#31BAF9'});
      $('.refresh').css('background-color','#31BAF9');
      $('#bmi_data').text(bmi);
      $('#comment').css({
        'display':'inline',
        'color':'#31BAF9'});
      $('#comment').text(condition);
    }else if(18.5<=bmi,bmi<=24){
      //理想體重
      color= 'ideal-weight';
      condition ='理想';
      $('.btn').css('display','none');
      $('.result').css({
        'display':'inline-block',
        'border-width':'6px',
        'border-color':'#86D73E',
        'border-style':'solid',
        'color':'#86D73E'});
      $('.refresh').css('background-color','#86D73E');
      $('#bmi_data').text(bmi);
      $('#comment').css({
        'display':'inline',
        'color':'#86D73E'});
      $('#comment').text(condition);
    }else if(24<bmi,bmi<=27){
      //體重過重
      color='over-weight';
      condition ='過重';
      $('.btn').css('display','none');
      $('.result').css({
        'display':'inline-block',
        'border-width':'6px',
        'border-color':'#FF982D',
        'border-style':'solid',
        'color':'#FF982D'});
      $('.refresh').css('background-color','#FF982D');
      $('#bmi_data').text(bmi);
      $('#comment').css({
        'display':'inline',
        'color':'#FF982D'});
      $('#comment').text(condition);
      //$('.btn').addClass('over-weight');
    //  $('.btn').removeClass('animate');
    }else if(27<bmi,bmi<=30){
      //輕度肥胖
      color='light-weight';
      condition='輕度肥胖';
      $('.btn').css('display','none');
      $('.result').css({
        'display':'inline-block',
        'border-width':'6px',
        'border-color':'#FF6C02',
        'border-style':'solid',
        'color':'#FF6C02'});
      $('.refresh').css('background-color','#FF6C02');
      $('#bmi_data').text(bmi);
      $('#comment').css({
        'display':'inline',
        'color':'#FF6C02'});
      $('#comment').text(condition);
    //  $('.btn').addClass('heavy-weight');
    //  $('.btn').removeClass('animate');
    }else if(30<bmi){
      //重度肥胖
      color='heavy-weight';
      condition='重度肥胖';
      $('.btn').css('display','none');
      $('.result').css({
        'display':'inline-block',
        'border-width':'6px',
        'border-color':'#FF1200',
        'border-style':'solid',
        'color':'#FF1200'});
      $('.refresh').css('background-color','#FF1200');
      $('#bmi_data').text(bmi);
      $('#comment').css({
        'display':'inline',
        'color':'#FF1200'});
      $('#comment').text(condition);
    }else{
      console.log('error');
    };
  var calculate = {bmi:bmi,height:height,weight:weight,year:year,month:month,date:date,color:color,condition:condition};
  data.push(calculate);
  updateList(data);
  localStorage.setItem('BMIdata',JSON.stringify(data));
  }
//更新紀錄
function updateList(items){
  str = '';
  var len = items.length;
  var border_color='';
  for(var i=len-1;i>=0;i--){
    str += '<ul class="bmi-result  ' + items[i].color + '"><li><h2>'+ items[i].condition +'</h2></li><li><h3>BMI</h3></li>';
    str += '<li><h2 id="color">'+ items[i].bmi +'</h2></li>';
    str += '<li><h3>weight</h3></li>';
    str += '<li><h2>' + items[i].weight + ' kg</h2></li>';
    str += '<li><h3>height</h3></li>';
    str += '<li><h2>'+ items[i].height + ' cm</h2></li>';
    str += '<li><h3>'+ items[i].month + '-' + items[i].date + '-' + items[i].year + '</h3></li></ul>';
   }
  document.querySelector('.list').innerHTML = str;
  //console.log(len);
}

//重新輸入內容
function refresh(e){
  e.preventDefault();
  $('.result').css('display','none');
  $('.btn').css('display','inline-block');
  $('#comment').css('display','none');
  $('#height').val('');
  $('#weight').val('');
}

$('.btn').on('click',saveData);
 updateList(data);
$('.refresh').on('click',refresh);
})
