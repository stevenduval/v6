// Semi-Custom Template Builder v6 updated 1/7/2020 by Steven Duval

// on pageload make sure page is scrolled to the top
$( document ).ready(function() {
  var position = $($('.relative')).offset().top;
  $("body, html").animate({
		scrollTop: position
  } , 1500);
  var height = $('.div').height() - $('.nav').height();
  $('.innerColumn').css('height', height)
});

$(window).on('resize', function(){
  var height = $('.div').height() - $('.nav').height();
  $('.innerColumn').css('height', height)
});


// set global var to select all collapsible divs
var coll = $('.collapsible');

// check for click on all items with class of collapsible
coll.on('click', function(){
  // loop through each element with class of collapsible but not the currently clicked item
  // if it has a class of active1 remove it and hide its content 
  $(coll).not(this).each(function(index, btn) {
    if ($(btn).hasClass('active1')) {
      $(btn).removeClass('active1');
      $(btn).next().hide();
    }
  });
  // get content of currently selected element
  var content = $(this).next();
  // toggle active1 class
  $(this).toggleClass('active1');
  // show content if active1 class is present
  ($(this).hasClass('active1')) ? $(content).fadeIn(3000) : $(content).hide();
  // set position depending on which section button is clicked
  if ($(this).index() === 2) { var position = 151;}
  if ($(this).index() === 4) { var position = 219;}
  if ($(this).index() === 6) { var position = 287;}
  if ($(this).index() === 8) { var position = 355;}
  if ($(this).index() === 10) { var position = 423;}
  // scroll to element depending upon which section button is clicked
  $("body, html").delay(400).animate({
    scrollTop: position
  } , 2000);
});

// listen for clicks on images, buttons and span tags with classes of content
$('.content').on('click', 'img, button, span', function() {
  var section;
  // grab text for the parent is label set section code to first option otherwise last option
  ($(this).parent().is('label')) ? section = $(this).parent().parent().prev().text() : section = $(this).parent().prev().text();
  // get the value of the name attribute for the current element
  var elemAttrName = $(this).attr('name');
  // default image src path to be inserted
  var imgSRC = '<img class=imagedemo src=images/' + elemAttrName + '.jpg>';
  // header section 
  if (section === 'Header Section'){
    // when all other items besides the sub header buttons are clicked
    if (elemAttrName != 'subheader' && elemAttrName != 'noSubheader') {
      // remove image tag
      $('#header img:last-child').remove();
      // add image tag
      $('#header').append(imgSRC);
      // add text to pdf area
      $('#demoHeader').text(elemAttrName);
    } // when subheader or no sub header button is clicked
    else {
      // remove image tag
      $('#subheader img:last-child').remove();
      // add image tag if equal to selected element is equal to subheader
      if ( elemAttrName == 'subheader') {$('#subheader').append(imgSRC);}
      // add text to pdf area
      $('#demosubHeader').text(elemAttrName);
      // toggle active class for subheader and no subheader buttons
      if (!$(this).hasClass('active')){ 
        $(this).addClass('active');
        $(this).next().toggleClass('active');
      } 
    }
  }
  // featured articles section
  else if (section === 'Featured Articles') {
    // remove image tag
    $('#FeaturedArticles img:last-child').remove();
    // add image tag
    $('#FeaturedArticles').append(imgSRC);
    // add text to pdf area
    $('#demoFeatured').text(elemAttrName);
  }
  // additional articles section
  else if (section === 'Additional Articles') {
    // loop through each button, except current button
    $('button').not(this).each(function(index, element) {
      // check if class btnTest exists
      if ($(element).hasClass('btnTest')) {
        // if exists remove btnTest class
        $(element).removeClass('btnTest');
      }
    })
    // if active item is an image add btnTest class to next element
    if ($(this).is('img')) { $(this).next().addClass('btnTest');}
    // if active item is a button add btnTest class to current element
    if ($(this).is('button')) { $(this).addClass('btnTest');} 
    // remove image tag
    $('#AdditionalArticles img:last-child').remove();
    // add image tag
    $('#AdditionalArticles').append(imgSRC);
    // add text to pdf area
    $('#demoAdditional').text(elemAttrName);
  }// call out section
  else if (section === 'Call Out Sections') {
    // if sign up section is clicked
    if (elemAttrName === 'signup') {
      // check if image tag is present, if it is remove it, otherwise add it
      ($('#item1').has('img').length === 1) ? $('#item1 img:last-child').remove() : $('#item1').append(imgSRC);
      // check if image is present, if present add text to pdf, else set text to nothing
      ($('#item1').has('img').length === 1) ? $('#demoCallOut1').text(elemAttrName) : $('#demoCallOut1').text('');
    } // if list section clicked
    else if (elemAttrName === 'list') {
      // check if image tag is present, if it is remove it, otherwise add it
      ($('#item2').has('img').length === 1) ? $('#item2 img:last-child').remove() : $('#item2').append(imgSRC);
      // check if image is present, if present add text to pdf, else set text to nothing
      ($('#item2').has('img').length === 1) ? $('#demoCallOut2').text(elemAttrName) : $('#demoCallOut2').text('');
    } // if badgest section is clicked
    else if (elemAttrName === 'badges1' || elemAttrName === 'badges2' ) {
      // remove image in item3 section
      $('#item3 img:last-child').remove();
      /// add image in item3 section
      $('#item3').append(imgSRC);
      // set text pdf text
      $('#demoCallOut3').text(elemAttrName)
    }
  }
  else if (section === 'Footer Sections') {
    // remove image in item3 section
    $('#Footer img:last-child').remove();
    /// add image in item3 section
    $('#Footer').append(imgSRC);
    // set text pdf text
    $('#demoFooter').text(elemAttrName)
  }
});

var pdfdoc = new jsPDF();
var specialElementHandlers = {
'#ignoreContent': function (element, renderer) {
return true;
}
};
$(document).ready(function(){
    var name = jQuery.now()+'.pdf';

   $('#showPdf').click(function() {
      var pdf = new jsPDF();
      pdf.addHTML($("#divContent"), function() {
      var blob = pdf.output("blob");
        window.open(URL.createObjectURL(blob));
      });
    });
  $('#downloadPdf').click(function() {
    var pdf = new jsPDF();
    pdf.addHTML($("#divContent"), function() {
    pdf.save('Template_WireFrame.pdf');
    });
  });;
});
