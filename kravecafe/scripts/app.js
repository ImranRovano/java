



////////////////////////////////////////////////////
/*
// HOME SECTION
*/
////////////////////////////////////////////////////

$( window ).on( "beforeunload", function() {
    $( window ).scrollTop(0);
});



$( window ).on( "load", function() {
  $( ".carousel" ).removeClass( "upward-animation" );
});
  


$( window ).on( "scroll", function() {

  if ($( document ).scrollTop() > 50) {
    $( ".header-nav__gradient--expand" ).addClass( "header-nav__gradient--contract" ); 
    $( ".header-nav__solid--hide" ).addClass( "header-nav__solid--show" ); 
    $( ".header-nav__gradient--logo" ).addClass( "header-nav__solid--logo" ); 
    $( ".header-navlink__gradient--font-size" ).addClass( "header-navlink__solid--font-size" ); 
    $( ".header-nav__gradient--nav-item" ).addClass( "header-nav__solid--nav-item" ); 
    $( ".header-nav__gradient-lists" ).addClass( "header-nav__solid-lists" ); 
  } else if ($( document ).scrollTop() < 50) {
    $( ".header-nav__gradient--expand" ).removeClass( "header-nav__gradient--contract" ); 
    $( ".header-nav__solid--hide" ).removeClass( "header-nav__solid--show" ); 
    $( ".header-nav__gradient--logo" ).removeClass( "header-nav__solid--logo" ); 
    $( ".header-navlink__gradient--font-size" ).removeClass( "header-navlink__solid--font-size" );
    $( ".header-nav__gradient--nav-item" ).removeClass( "header-nav__solid--nav-item" ); 
    $( ".header-nav__gradient-lists" ) .removeClass( "header-nav__solid-lists" );  
  }

  if ($( document ).scrollTop() > 300) {
    $( ".middle-body__img--box" ).removeClass( "upward-animation" );
    $( ".middle-body__dining-paragraph" ).removeClass( "left-to-right-animation" );
    $( ".middle-body__btn" ).removeClass( "left-to-right-animation" );
    $( ".middle-body__dining-row" ).addClass( "fade-in" );
  } 
  
  if ($( document ).scrollTop() > 1000) {
    $( ".bottom-body__img--box" ).removeClass( "upward-animation" );
    $( ".bottom-body__bakery-paragraph" ).removeClass( "right-to-left-animation" );
    $( ".bottom-body__btn" ).removeClass( "right-to-left-animation" );
    $( ".bottom-body__bakery-row" ).addClass( "fade-in" );
  }
});





////////////////////////////////////////////////////
/*
// MENU SECTION
*/
////////////////////////////////////////////////////

$( window ).on("load", function() {
  $( ".menu__accordion" ).removeClass( "upward-animation" );
  $( ".menu__card" ).addClass( "fade-in" );
});

$(function() {
  
  // OUTSIDE of menu page when clicking on menu nav options
    if ( window.location.href.indexOf( "menu.html#lunch" ) > 0 ) {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
    
      $(".menu__btn").eq(1).removeClass("collapsed");
      $(".menu__btn").eq(1).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseTwo").addClass("show"); // show accordion tab 
  
    } else if ( window.location.href.indexOf( "menu.html#dinner" ) > 0 ) {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
    
      $(".menu__btn").eq(2).removeClass("collapsed");
      $(".menu__btn").eq(2).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseThree").addClass("show"); // show accordion tab 
  
    } else if ( window.location.href.indexOf( "menu.html#beverage" ) > 0 ) {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
    
      $(".menu__btn").eq(3).removeClass("collapsed");
      $(".menu__btn").eq(3).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseFour").addClass("show"); // show accordion tab 
  
    } else if ( window.location.href.indexOf( "menu.html#wine" ) > 0 ) {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
    
      $(".menu__btn").eq(4).removeClass("collapsed");
      $(".menu__btn").eq(4).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseFive").addClass("show"); // show accordion tab 
  
    } else if ( window.location.href.indexOf( "menu.html#bakery" ) > 0 ) {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
    
      $(".menu__btn").eq(5).removeClass("collapsed");
      $(".menu__btn").eq(5).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseSix").addClass("show"); // show accordion tab 
  
    } else if ( window.location.href.indexOf( "menu.html#dessert" ) > 0 ) {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
    
      $(".menu__btn").eq(6).removeClass("collapsed");
      $(".menu__btn").eq(6).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseSeven").addClass("show"); // show accordion tab 
  
    } else if ( window.location.href.indexOf( "menu.html#special" ) > 0 ) {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
    
      $(".menu__btn").eq(7).removeClass("collapsed");
      $(".menu__btn").eq(7).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseEight").addClass("show"); // show accordion tab 
    } 
  
    // INSIDE of menu page when clicking on menu nav options
    $( "#breakfast_nav" ).on("click", function() {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
      
      $(".menu__btn").eq(0).removeClass("collapsed");
      $(".menu__btn").eq(0).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseOne").addClass("show"); // show accordion tab 
      
      $( "html, body").animate({
        scrollTop: $( "#breakfast" ).offset().top
      }, 100);
    });
  
    $( "#lunch_nav" ).on("click", function() {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
      
      $(".menu__btn").eq(1).removeClass("collapsed");
      $(".menu__btn").eq(1).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseTwo").addClass("show"); // show accordion tab 
      
      $( "html, body").animate({
        scrollTop: $( "#lunch" ).offset().top
      }, 100);
    });
  
    $( "#dinner_nav" ).on("click", function() {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
      
      $(".menu__btn").eq(2).removeClass("collapsed");
      $(".menu__btn").eq(2).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseThree").addClass("show"); // show accordion tab 
      
      $( "html, body").animate({
        scrollTop: $( "#dinner" ).offset().top
      }, 100);
    });
  
    $( "#beverage_nav" ).on("click", function() {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
      
      $(".menu__btn").eq(3).removeClass("collapsed");
      $(".menu__btn").eq(3).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseFour").addClass("show"); // show accordion tab 
      
      $( "html, body").animate({
        scrollTop: $( "#beverage" ).offset().top
      }, 100);
    });
  
    $( "#wine_nav" ).on("click", function() {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
      
      $(".menu__btn").eq(4).removeClass("collapsed");
      $(".menu__btn").eq(4).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseFive").addClass("show"); // show accordion tab 
      
      $( "html, body").animate({
        scrollTop: $( "#wine" ).offset().top
      }, 100);
    });
  
    $( "#bakery_nav" ).on("click", function() {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
      
      $(".menu__btn").eq(5).removeClass("collapsed");
      $(".menu__btn").eq(5).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseSix").addClass("show"); // show accordion tab 
      
      $( "html, body").animate({
        scrollTop: $( "#bakery" ).offset().top
      }, 100);
    });
  
    $( "#dessert_nav" ).on("click", function() {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
      
      $(".menu__btn").eq(6).removeClass("collapsed");
      $(".menu__btn").eq(6).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseSeven").addClass("show"); // show accordion tab 
      
      $( "html, body").animate({
        scrollTop: $( "#dessert" ).offset().top
      }, 100);
    });
  
    $( "#special_nav" ).on("click", function() {
      $(".menu__btn").addClass("collapsed");
      $(".menu__btn").attr("aria-expanded","false"); // toggles +/- symbol
      $(".collapse").removeClass("show"); // hide accordion tab 
      
      $(".menu__btn").eq(7).removeClass("collapsed");
      $(".menu__btn").eq(7).attr("aria-expanded","true"); // toggles +/- symbol
      $("#collapseEight").addClass("show"); // show accordion tab 
      
      $( "html, body").animate({
        scrollTop: $( "#special" ).offset().top
      }, 100);
    });
  
  });





////////////////////////////////////////////////////
/*
// LOCATION SECTION
*/
////////////////////////////////////////////////////

$( window ).on( "load", function() {
  $( ".location__left-col" ).removeClass( "upward-animation" );
  $( ".location__right-col" ).removeClass( "upward-animation" );
  $( ".location__title" ).addClass( "fade-in" );
  $( ".location__address" ).addClass( "fade-in" );
  $( ".location__hour" ).addClass( "fade-in" );
});

function initMap() {
  let location = {lat: 40.768057, lng: -73.970336};
  let map = new google.maps.Map(
      document.getElementById( "map" ), {zoom: 16, center: location,
      styles: 
      [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            },
            {
              "saturation": -40
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]});
  let marker = new google.maps.Marker({
    position: location, 
    map: map
  });  
} 



////////////////////////////////////////////////////
/*
// ABOUT SECTION
*/
////////////////////////////////////////////////////

$( window ).on( "load", function() {
  $( ".about__background-img" ).removeClass( "upward-animation" );
  $( ".about__arrow-link" ).removeClass( "upward-animation" );
  $( ".about__arrow-link" ).addClass( "fade-in" );
});

$( window ).on( "scroll", function() {
  // console.log($(document).scrollTop());
  if ($( document ).scrollTop() > 200) {
    $( ".about__content-container" ).removeClass( "upward-animation" );
    $( ".about__content-container" ).addClass( "fade-in" );
  }
});


////////////////////////////////////////////////////
/*
// GALLERY SECTION
*/
////////////////////////////////////////////////////

$( window ).on( "load", function() {
  $( ".gallery__hero-section" ).removeClass( "upward-animation" );
  $( ".gallery__hero-title" ).removeClass( "left-to-right-animation" );
  $( ".gallery__hero-title" ).addClass( "fade-in" );
  $( ".gallery__hero-sub-title" ).removeClass( "right-to-left-animation" );
  $( ".gallery__hero-sub-title" ).addClass( "fade-in" );
  $( ".gallery__hero-sub-img" ).removeClass( "left-to-right-animation" );
  $( ".gallery__hero-sub-img" ).addClass( "fade-in" );
  $( ".gallery__arrow" ).addClass( "fade-in" );

  $( ".gallery__hero-filter" ).addClass( "gallery__hero-filter--visible" );
});


////////////////////////////////////////////////////
/*
// LOGIN & SIGN UP SECTION
*/
////////////////////////////////////////////////////

$( ".login__btn-demo, .signup__btn-demo" ).on( "click", function() {
  window.location = "./dashboard.html";
});

////////////////////////////////////////////////////
/*
// DASHBOARD SECTION
*/
////////////////////////////////////////////////////

$( window ).on( "load", function() {
  // https://www.chartjs.org/
  let ctx = $( "#myChart" );
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [{
            lineTension: 0,
            label: "# of Orders",
            data: [Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)],
            backgroundColor: [
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)"
            ],
            borderColor: [
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)"
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
  // myChart();
});

// // https://fullcalendar.io/
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar-list');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: "bootstrap",
    timeZone: 'local',
    initialView: 'listMonth',

    // customize the button names,
    // otherwise they'd all just say "list"
    views: {
      listDay: { buttonText: 'Day' },
      listWeek: { buttonText: 'Week' },
      listMonth: { buttonText: 'Month' },
      listYear: { buttonText: 'Year' }
    },

    headerToolbar: {
      left: 'listDay,listWeek,listMonth,listYear',
      center: 'today prev,next',
      right: 'title'
    },
    events: 'https://fullcalendar.io/demo-events.json',
    events: 'https://fullcalendar.io/demo-events.json?overload-day'
  });
  calendar.render();
});

// left navigation options
$(function() {
  $( ".dashboard__li" ).eq(0).on( "click", function() {
    // dashboard
    $( ".dashboard__li" ).removeClass("dashboard-li-active");
    $( ".dashboard__li" ).eq(0).addClass("dashboard-li-active");
    $( ".dashboard__content--title" ).removeClass("inline-block");
    $( ".dashboard__content--title" ).eq(0).addClass("inline-block");

    // $( ".dashboard__body--calendar" ).removeClass("visible");
    $( ".dashboard__body" ).removeClass("visible");
    $( ".dashboard__body--dashboard" ).addClass("visible");

    // remove active from all .message-btn button
    $(".message-btn").removeClass("active");
    // add active to inbox-btn button
    $(".inbox-btn").addClass("active");
  });
  
  $( ".dashboard__li" ).eq(1).on( "click", function() {
    // profile
    $( ".dashboard__li" ).removeClass("dashboard-li-active");
    $( ".dashboard__li" ).eq(1).addClass("dashboard-li-active");
    $( ".dashboard__content--title" ).removeClass("inline-block");
    $( ".dashboard__content--title" ).eq(1).addClass("inline-block");

    // $( ".dashboard__body--calendar" ).removeClass("visible");
    $( ".dashboard__body" ).removeClass("visible");
    $( ".dashboard__body--profile" ).addClass("visible");

    // remove active from all .message-btn button
    $(".message-btn").removeClass("active");
    // add active to inbox-btn button
    $(".inbox-btn").addClass("active");
  });
  
  $( ".dashboard__li" ).eq(2).on( "click", function() {
    // message
    $( ".dashboard__li" ).removeClass("dashboard-li-active");
    $( ".dashboard__li" ).eq(2).addClass("dashboard-li-active");
    $( ".dashboard__content--title" ).removeClass("inline-block");
    $( ".dashboard__content--title" ).eq(2).addClass("inline-block");
  
    // $( ".dashboard__body--calendar" ).removeClass("visible");
    $( ".dashboard__body" ).removeClass("visible");
    $( ".message2__inbox" ).addClass("visible");

    // remove active from all .message-btn button
    $(".message-btn").removeClass("active");
    // add active to inbox-btn button
    $(".inbox-btn").addClass("active");
  });
  
  $( ".dashboard__li" ).eq(3).on( "click", function() {
    // orders
    $( ".dashboard__li" ).removeClass("dashboard-li-active");
    $( ".dashboard__li" ).eq(3).addClass("dashboard-li-active");
    $( ".dashboard__content--title" ).removeClass("inline-block");
    $( ".dashboard__content--title" ).eq(3).addClass("inline-block");
  
    // $( ".dashboard__body--calendar" ).removeClass("visible");
    $( ".dashboard__body" ).removeClass("visible");
    $( ".dashboard__body--orders" ).addClass("visible");

    // remove active from all .message-btn button
    $(".message-btn").removeClass("active");
    // add active to inbox-btn button
    $(".inbox-btn").addClass("active");
  });
  
  $( ".dashboard__li" ).eq(4).on( "click", function() {
    // calendar
    $( ".dashboard__li" ).removeClass("dashboard-li-active");
    $( ".dashboard__li" ).eq(4).addClass("dashboard-li-active");
    $( ".dashboard__content--title" ).removeClass("inline-block");
    $( ".dashboard__content--title" ).eq(4).addClass("inline-block");
  
    $( ".dashboard__body" ).removeClass("visible");
    $( ".dashboard__body--calendar" ).addClass("visible");

    // remove active from all .message-btn button
    $(".message-btn").removeClass("active");
    // add active to inbox-btn button
    $(".inbox-btn").addClass("active");
  });
});


$(function () {
  // click open
  $(".open-btn").on("click", function() {
    // remove active from all .message-btn button
    $(".message-btn").removeClass("active");
    // add active to open-btn button
    $(".open-btn").addClass("active");

    // remove .visible from all .message2__sub-section
    $(".message2__sub-section").removeClass("visible");
    // add visible to .message2__open
    $(".message2__open").addClass("visible");
  })

  // click reply
  $(".reply-btn").on("click", function() {
    // remove active from all .message-btn button
    $(".message-btn").removeClass("active");
    // add active to compose-btn button
    $(".compose-btn").addClass("active");

    // remove .visible from all .message2__sub-section
    $(".message2__sub-section").removeClass("visible");
    // add visible to .message2__compose
    $(".message2__compose").addClass("visible");
  })

  // click inbox
  $(".inbox-btn").on("click", function() {
    // remove active from all .message-btn button
    $(".message-btn").removeClass("active");
    // add active to inbox-btn button
    $(".inbox-btn").addClass("active");

    // remove .visible from all .message2__sub-section
    $(".message2__sub-section").removeClass("visible");
    // add visible to .message2__inbox
    $(".message2__inbox").addClass("visible");
  })

  // click sent
  $(".sent-btn").on("click", function() {
    // remove active from all .message-btn button
    $(".message-btn").removeClass("active");
    // add active to sent-btn button
    $(".sent-btn").addClass("active");

    // remove .visible from all .message2__sub-section
    $(".message2__sub-section").removeClass("visible");
    // add visible to .message2__sent
    $(".message2__sent").addClass("visible");
  })

  // click compose
  $(".compose-btn").on("click", function() {
    // remove active from all .message-btn button
    $(".message-btn").removeClass("active");
    // add active to compose-btn button
    $(".compose-btn").addClass("active");

    // remove .visible from all .message2__sub-section
    $(".message2__sub-section").removeClass("visible");
    // add visible to .message2__compose
    $(".message2__compose").addClass("visible");
  })
});


$( window ).on( "load", function() {
  // https://www.chartjs.org/
  let ctx = $( "#myChart2" );
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm"],
        datasets: [{
            lineTension: 0,
            label: "# of Orders",
            data: [Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1), Math.floor((Math.random() * 10) + 1)], // could put this in a loop statement
            backgroundColor: [
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)"
            ],
            borderColor: [
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)"
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
  // myChart();
});

$( window ).on( "load", function() {
  // https://www.chartjs.org/
  let ctx = $( "#myChart3" );
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [{
            lineTension: 0,
            label: "# of Orders",
            data: [Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1)],
            backgroundColor: [
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)"
            ],
            borderColor: [
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)"
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
  // myChart();
});

$( window ).on( "load", function() {
  // https://www.chartjs.org/
  let ctx = $( "#myChart4" );
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            lineTension: 0,
            label: "# of Orders",
            data: [Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 1000) + 1), Math.floor((Math.random() * 1000) + 1)],
            backgroundColor: [
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)",
                "rgba(184, 134, 11, .2)"
            ],
            borderColor: [
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)",
                "rgba(184, 134, 11, 1)"
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
  // myChart();
});

// https://fullcalendar.io/
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: "bootstrap",
    initialView: "dayGridMonth",
    editable: true,
    dayMaxEventRows: true, // for all non-TimeGrid views
    dayMaxEvents: true, // for all non-TimeGrid views
    dayPopoverFormat: { // will produce something like "Tuesday, September 18, 2018"
    month: 'short',
    year: 'numeric',
    day: 'numeric',
    weekday: 'short'
    },
    contentHeight: 730,
    selectable: true,
    headerToolbar: {
      left: "",
      center: "title",
      right: "today prev,next"
    },
    events: 'https://fullcalendar.io/demo-events.json',
    events: 'https://fullcalendar.io/demo-events.json?overload-day'
  });
  calendar.render();
});



document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar-list2');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: "bootstrap",
    timeZone: 'local',
    initialView: 'listMonth',
    views: {// customize the button names, otherwise they'd all just say "list"
      listDay: { buttonText: 'Day' },    
      listWeek: { buttonText: 'Week' },
      listMonth: { buttonText: 'Month' },
      listYear: { buttonText: 'Year' }
    },
    headerToolbar: {
      left: 'listDay,listWeek,listMonth,listYear',
      center: 'today prev,next',
      right: 'title'
    },
    events: 'https://fullcalendar.io/demo-events.json',
    events: 'https://fullcalendar.io/demo-events.json?overload-day'
  });
  calendar.render();
});

