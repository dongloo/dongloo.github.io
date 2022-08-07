
$(document).ready(function () {
    var initialLocaleCode = 'vi';
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
      },
      defaultDate: '2018-05-07',
      locale: 'vi',
      weekNumbers: true,
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      showNonCurrentDates: true,
      weekNumberTitle: 'Tuần',
      nowIndicator: true,
      eventColor: 'green',
      events: [
        {
          title: 'Sự kiện cả ngày',
          start: '2018-05-01',
          color: '#5db2ff'
        },
        {
          title: 'Sự kiện dài',
          start: '2018-05-06',
          end: '2018-05-07',
          color: '#a0d468'
        },
        {
          id: 999,
          title: 'Sự kiện lặp lại',
          start: '2018-05-09T16:00:00',
          color: '#ffce55'
        },
        {
          id: 999,
          title: 'Sự kiện lặp lại',
          start: '2018-05-16T16:00:00',
          color: '#ffce55'
        },
        {
          title: 'Hội nghị',
          start: '2018-05-11',
          end: '2018-05-13',
          color: '#ed4e2a'
        },
        {
          title: 'Gặp gỡ',
          start: '2018-05-07T10:30:00',
          end: '2018-05-07T12:30:00',
          color: '#fb6e52'
        },
        {
          title: 'Ăn trưa',
          start: '2018-05-07T12:00:00',
          color: '#2dc3e8'
        },
        {
          title: 'Gặp gỡ',
          start: '2018-05-07T14:30:00',
          color: '#5db2ff'
        },
        {
          title: 'Giờ thư giãn',
          start: '2018-05-07T17:30:00',
          color: '#5db2ff'
        },
        {
          title: 'Ăn tối',
          start: '2018-05-07T20:00:00',
          color: '#5db2ff'
        },
        {
          title: 'Xem phim',
          start: '2018-05-07T20:00:00',
          color: '#5db2ff'
        },
        {
          title: 'Ăn tối',
          start: '2018-05-07T20:00:00',
          color: '#5db2ff'
        },
        {
          title: 'Chơi game',
          start: '2018-05-07T21:00:00',
          color: '#5db2ff'
        },
        {
          title: 'Đọc báo',
          start: '2018-05-07T21:30:00',
          color: '#5db2ff'
        },
        {
          title: 'Code',
          start: '2018-05-07T22:00:00',
          color: '#5db2ff'
        },
        {
          title: 'Lướt face',
          start: '2018-05-07T23:00:00',
          color: '#5db2ff'
        },
        {
          title: 'Đọc sách',
          start: '2018-05-07T23:20:00',
          color: '#5db2ff'
        },
        {
          title: 'Đi ngủ',
          start: '2018-05-07T23:45:00',
          color: '#5db2ff'
        },
        {
          title: 'Tiệc sinh nhật',
          start: '2018-05-13T07:00:00',
          color: '#5db2ff'
        },
        {
          title: 'Google',
          url: 'http://google.com/',
          start: '2018-05-28',
          color: '#5db2ff'
        }
      ],
      eventClick: function(eventObj) {
        if (eventObj.url) {
          alert(
            'Clicked ' + eventObj.title + '.\n' +
            'Will open ' + eventObj.url + ' in a new tab'
          );

          window.open(eventObj.url);

          return false; // prevents browser from following link in current tab.
        } else {
          alert('Clicked ' + eventObj.title);
        }
      },

    });

});
