// run on page load 
$(document).ready(function(){
  $("#btn1").click(function(){
    $("#subheader").show("#subheader");
  });
});
$(document).ready(function(){
  $("#btn2").click(function(){
    $("#subheader").hide("#subheader");
  });
});

// set global var to select all collapsible divs
var coll = $('.collapsible');

// add active1 class to the section that is clicked and show /hide depending on if active class is present
coll.on('click', function(){
  $(this).toggleClass('active1');
  var content = $(this).next();
  ($(this).hasClass('active1')) ? $(content).show() : $(content).hide();
});


var header = document.getElementById("myDIV1");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var header = document.getElementById("myDIV2");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var header = document.getElementById("myDIV3");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


$('.content').on('click', 'img' ,function(){
  var section = $(this).parent().prev().text();
  var x = $(this).attr('name');
  var imgSRC = '<img class=imagedemo src=images/' + x + '.jpg>';
  if (section === 'Header Section') {
    $('#header').append(imgSRC);
    $('#demoHeader').text(x);
  } else if (section === 'Featured Articles') {
    $('#FeaturedArticles').append(imgSRC);
    $('#demoFeatured').text(x);
  }
});


function myFunctionsubHeader() {
  document.getElementById("myImageSubheader").src = "images/subheader.jpg";
  document.getElementById("myImageSubheader").name = "subheader";
  var x = document.getElementById("btn1").name;
  document.getElementById("demosubHeader").innerHTML = x;
}

function myFunctionNosubHeader() {
  var x = document.getElementById("btn2").name;
  document.getElementById("demosubHeader").innerHTML = x;
}

function myFunctionFeatured1() {
  document.getElementById("myImageFeatured").src = "images/article1.jpg";
  document.getElementById("myImageFeatured").name = "article1";
  var x = document.getElementById("myImageFeatured").name;
  document.getElementById("demoFeatured").innerHTML = x;
}

function myFunctionFeatured2() {
  document.getElementById("myImageFeatured").src = "images/article2I.jpg";
  document.getElementById("myImageFeatured").name = "article2I";
  var x = document.getElementById("myImageFeatured").name;
  document.getElementById("demoFeatured").innerHTML = x;
}

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
