// set global var to select all collapsible divs
var coll = $('.collapsible');

// check for click on all items with class of collapsible
coll.on('click', function(){
  // loop through each element with class of collapsible but not the currently clicked item
  // if it has a class of active1 remove it and hide its content 
  $(coll).not(this).each(function(index, btn){
    if ($(btn).hasClass('active1')){
      $(btn).removeClass('active1');
      $(btn).next().hide();
    }
  });
  // get content of currently selected element
  var content = $(this).next();
  //toggle active1 class and show content if active1 class is present
  $(this).toggleClass('active1');
  ($(this).hasClass('active1')) ? $(content).show() : $(content).hide();
});

// listen for clicks on images and buttons in items with classes of content
$('.content').on('click', 'img, button', function(){
  var section = $(this).parent().prev().text();
  var x = $(this).attr('name');
  var imgSRC = '<img class=imagedemo src=images/' + x + '.jpg>';
  // header section 
  if (section === 'Header Section'){
    // when all other items besides the sub header buttons are clicked
    if (x != 'subheader' && x != 'noSubheader') {
      $('#header img:last-child').remove();
      $('#header').append(imgSRC);
      $('#demoHeader').text(x);
    } // when subheader button is clicked
    else if ( x === 'subheader') {
      $('#subheader img:last-child').remove();
      $('#subheader').append(imgSRC);
      $('#demosubHeader').text(x);
      if (!$(this).hasClass('active')){ 
        $(this).addClass('active');
        $(this).next().toggleClass('active');
      } 
    }
  // when no sub header button is clicked
    else if (x === 'noSubheader') {
      $('#subheader img:last-child').remove();
      $('#demosubHeader').text(x); 
      if (!$(this).hasClass('active')){ 
        $(this).addClass('active');
        $(this).prev().toggleClass('active');
      }
    }
  }
  // featured articles section
  else if (section === 'Featured Articles') {
    $('#FeaturedArticles img:last-child').remove();
    $('#FeaturedArticles').append(imgSRC);
    $('#demoFeatured').text(x);
  }
  // additional articles section
  else if (section === 'Additional Articles') {



    if (x === 'article2I') {
      $('#myImageAdditional img:last-child').remove();
      $('#AdditionalArticles').append(imgSRC);
      $('#demoAdditional').text(x);
      $(this).next().addClass('btnTest');
      

    }
  }
});



function myFunctionAdditional1() {
  document.getElementById("myImageAdditional").src = "images/article2Ix4.jpg";
  document.getElementById("myImageAdditional").name = "article2Ix4";
  var x = document.getElementById("myImageAdditional").name;
  document.getElementById("demoAdditional").innerHTML = x;
  document.getElementById("btn3").setAttribute("class","btnTest" );
  document.getElementById("btn4").setAttribute("class","btn" );
  document.getElementById("btn5").setAttribute("class","btn" );
  document.getElementById("btn6").setAttribute("class","btn" );
  document.getElementById("btn7").setAttribute("class","btn" );
  document.getElementById("btn8").setAttribute("class","btn" );
  document.getElementById("btn9").setAttribute("class","btn" );
  document.getElementById("btn10").setAttribute("class","btn" );
}

function myFunctionAdditional1NI() {
  document.getElementById("myImageAdditional").src = "images/article2NIx4.jpg";
  document.getElementById("myImageAdditional").name = "article2NIx4";
  var x = document.getElementById("btn4").name;
  document.getElementById("demoAdditional").innerHTML = x;
  document.getElementById("btn3").setAttribute("class","btn" );
  document.getElementById("btn4").setAttribute("class","btnTest" );
  document.getElementById("btn5").setAttribute("class","btn" );
  document.getElementById("btn6").setAttribute("class","btn" );
  document.getElementById("btn7").setAttribute("class","btn" );
  document.getElementById("btn8").setAttribute("class","btn" );
  document.getElementById("btn9").setAttribute("class","btn" );
  document.getElementById("btn10").setAttribute("class","btn" );
}

function myFunctionAdditional2() {
  document.getElementById("myImageAdditional").src = "images/article3x4.jpg";
  document.getElementById("myImageAdditional").name = "article2Ix4";
  var x = document.getElementById("myImageAdditional").name;
  document.getElementById("demoAdditional").innerHTML = x;
  document.getElementById("btn3").setAttribute("class","btn" );
  document.getElementById("btn4").setAttribute("class","btn" );
  document.getElementById("btn5").setAttribute("class","btnTest" );
  document.getElementById("btn6").setAttribute("class","btn" );
  document.getElementById("btn7").setAttribute("class","btn" );
  document.getElementById("btn8").setAttribute("class","btn" );
  document.getElementById("btn9").setAttribute("class","btn" );
  document.getElementById("btn10").setAttribute("class","btn" );
}

function myFunctionAdditional2ALT() {
  document.getElementById("myImageAdditional").src = "images/article3altx4.jpg";
  document.getElementById("myImageAdditional").name = "article3altx4";
  var x = document.getElementById("btn6").name;
  document.getElementById("demoAdditional").innerHTML = x;
  document.getElementById("btn3").setAttribute("class","btn" );
  document.getElementById("btn4").setAttribute("class","btn" );
  document.getElementById("btn5").setAttribute("class","btn" );
  document.getElementById("btn6").setAttribute("class","btnTest")
  document.getElementById("btn7").setAttribute("class","btn" );
  document.getElementById("btn8").setAttribute("class","btn" );
  document.getElementById("btn9").setAttribute("class","btn" );
  document.getElementById("btn10").setAttribute("class","btn" );
}

function myFunctionAdditional3() {
  document.getElementById("myImageAdditional").src = "images/article4x4.jpg";
  document.getElementById("myImageAdditional").name = "article4x4";
  var x = document.getElementById("myImageAdditional").name;
  document.getElementById("demoAdditional").innerHTML = x;
  document.getElementById("btn3").setAttribute("class","btn" );
  document.getElementById("btn4").setAttribute("class","btn" );
  document.getElementById("btn5").setAttribute("class","btn" );
  document.getElementById("btn6").setAttribute("class","btn" );
  document.getElementById("btn7").setAttribute("class","btnTest" );
  document.getElementById("btn8").setAttribute("class","btn" );
  document.getElementById("btn9").setAttribute("class","btn" );
  document.getElementById("btn10").setAttribute("class","btn" );
}

function myFunctionAdditional3ALT() {
  document.getElementById("myImageAdditional").src = "images/article4altx4.jpg";
  document.getElementById("myImageAdditional").name = "article4altx4";
  var x = document.getElementById("btn8").name;
  document.getElementById("demoAdditional").innerHTML = x;
  document.getElementById("btn3").setAttribute("class","btn" );
  document.getElementById("btn4").setAttribute("class","btn" );
  document.getElementById("btn5").setAttribute("class","btn" );
  document.getElementById("btn6").setAttribute("class","btn" );
  document.getElementById("btn7").setAttribute("class","btn" );
  document.getElementById("btn8").setAttribute("class","btnTest" );
  document.getElementById("btn9").setAttribute("class","btn" );
  document.getElementById("btn10").setAttribute("class","btn" );
}

function myFunctionAdditional4() {
  document.getElementById("myImageAdditional").src = "images/article5Ix4.jpg";
  document.getElementById("myImageAdditional").name = "article5Ix4";
  var x = document.getElementById("myImageAdditional").name;
  document.getElementById("demoAdditional").innerHTML = x;
  document.getElementById("btn3").setAttribute("class","btn" );
  document.getElementById("btn4").setAttribute("class","btn" );
  document.getElementById("btn5").setAttribute("class","btn" );
  document.getElementById("btn6").setAttribute("class","btn" );
  document.getElementById("btn7").setAttribute("class","btn" );
  document.getElementById("btn8").setAttribute("class","btn" );
  document.getElementById("btn9").setAttribute("class","btnTest" );
  document.getElementById("btn10").setAttribute("class","btn" );

}

function myFunctionAdditional4NI() {
  document.getElementById("myImageAdditional").src = "images/article5NIx4.jpg";
  document.getElementById("myImageAdditional").name = "article5NIx4";
  var x = document.getElementById("btn10").name;
  document.getElementById("demoAdditional").innerHTML = x;
  document.getElementById("demoAdditional").innerHTML = x;
  document.getElementById("btn3").setAttribute("class","btn" );
  document.getElementById("btn4").setAttribute("class","btn" );
  document.getElementById("btn5").setAttribute("class","btn" );
  document.getElementById("btn6").setAttribute("class","btn" );
  document.getElementById("btn7").setAttribute("class","btn" );
  document.getElementById("btn8").setAttribute("class","btn" );
  document.getElementById("btn9").setAttribute("class","btn" );
  document.getElementById("btn10").setAttribute("class","btnTest" );
}

function myFunctionCallOut1() {
  var checkBox = document.getElementById("myCheck1");
  var text = document.getElementById("text1");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
  document.getElementById("myCheck1").name = "signup";
  var x = document.getElementById("myCheck1").name;
  document.getElementById("demoCallOut1").innerHTML = x;
  if (checkBox.checked == true){
    demoCallOut1.style.display = "block";
  } else {
     demoCallOut1.style.display = "none";
  }
}

function myFunctionCallOut2() {
  var checkBox = document.getElementById("myCheck2");
  var text = document.getElementById("text2");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
  document.getElementById("myCheck2").name = "list";
  var x = document.getElementById("myCheck2").name;
  document.getElementById("demoCallOut2").innerHTML = x;
  if (checkBox.checked == true){
    demoCallOut2.style.display = "block";
  } else {
     demoCallOut2.style.display = "none";
  }
}

function myFunctionCallOut3() {
  document.getElementById("myImageCallOutSections").src = "images/badges1.jpg";
  document.getElementById("myImageCallOutSections").name = "badges1";
  var x = document.getElementById("myImageCallOutSections").name;
  document.getElementById("demoCallOut3").innerHTML = x;
}
function myFunctionCallOut4() {
  document.getElementById("myImageCallOutSections").src = "images/badges2.jpg";
  document.getElementById("myImageCallOutSections").name = "badges2";
  var x = document.getElementById("myImageCallOutSections").name;
  document.getElementById("demoCallOut3").innerHTML = x;
}

function myFunctionFooter1() {
  document.getElementById("myImageFooter").src = "images/footer1.jpg";
  document.getElementById("myImageFooter").name = "footer1";
  var x = document.getElementById("myImageFooter").name;
  document.getElementById("demoFooter").innerHTML = x;
}
function myFunctionFooter2() {
  document.getElementById("myImageFooter").src = "images/footer2.jpg";
  document.getElementById("myImageFooter").name = "footer2";
  var x = document.getElementById("myImageFooter").name;
  document.getElementById("demoFooter").innerHTML = x;
}

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
