$(function () {
  new WOW().init();
  $('[data-toggle="tooltip"]').tooltip();

  $('.grid').isotope({
    itemSelector: '.grid-item',
  });

  var customOptions = {
    placeholder: "روز / ماه / سال"
    , twodigit: true
    , closeAfterSelect: true
    , nextButtonIcon: "fa fa-arrow-circle-right"
    , previousButtonIcon: "fa fa-arrow-circle-left"
    , buttonsColor: "blue"
    , forceFarsiDigits: true
    , markToday: true
    , markHolidays: true
    , highlightSelectedDay: true
    , sync: true
    , gotoToday: true
    , pastYearsCount: 0
    ,  futureYearsCount: 3,
        startView: 'month',
        minView: 'month',
        startDate:"today"
  }

  kamaDatepicker('date-1',customOptions);
  kamaDatepicker('date-2',customOptions);
  kamaDatepicker('date-3',customOptions);
  kamaDatepicker('date-4',customOptions);

  $('#bd-next-date-1').css('color','#3bac10')
  $('#bd-next-date-2').css('color','#3bac10')
  $('#bd-next-date-3').css('color','#3bac10')
  $('#bd-next-date-4').css('color','#3bac10')
  $('#bd-next-date-5').css('color','#3bac10')
  $('#bd-next-date-6').css('color','#3bac10')
  $('#bd-prev-date-1').css('color','#3bac10')
  $('#bd-prev-date-2').css('color','#3bac10')
  $('#bd-prev-date-3').css('color','#3bac10')
  $('#bd-prev-date-4').css('color','#3bac10')
  $('#bd-prev-date-5').css('color','#3bac10')
  $('#bd-prev-date-6').css('color','#3bac10')
})

var app = new Vue({
  el:'#app',
  data:{
    air: {
      name:'Inside',
      type:0
    }
  },
  methods: {
    changeAir:function(name) {     
      this.air.name=name;
      this.air.type=0;
    }
  },
})