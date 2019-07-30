$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('.dropdown-menu').on('click', function (event) {   
    event.stopPropagation();
  });

  var customOptions = {
    placeholder: "روز / ماه / سال",
    twodigit: true,
    closeAfterSelect: true,
    nextButtonIcon: "fa fa-arrow-circle-right",
    previousButtonIcon: "fa fa-arrow-circle-left",
    buttonsColor: "blue",
    forceFarsiDigits: true,
    markToday: true,
    markHolidays: true,
    highlightSelectedDay: true,
    sync: true,
    gotoToday: true,
    pastYearsCount: 0,
    futureYearsCount: 3,
    startView: 'month',
    minView: 'month',
    startDate: "today"
  }

  $("[data-role='date-persian']").pDatepicker({
    autoClose:true,
    minDate:new Date(),
    format:"dddd D MMMM YYYY",
    selectedDate:null,
    initialValue:false,
  });

  $("[data-role='date-gregorian']").pDatepicker({
    autoClose:true,
    minDate:new Date(),
    format:"dddd D MMMM YYYY",
    calendarType:'gregorian',
    selectedDate:null,
    initialValue:false
  });
})

var app = new Vue({
  el: '#app',
  data: {
    air: {
      name: 'Inside',
      type: 0
    }
  },
  methods: {
    changeAir: function (name) {
      this.air.name = name;
      this.air.type = 0;
    }
  },
})