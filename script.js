setInterval(() => {
  $(".eye").css("height","20%")
  $(".eye").css("top","40%")
  setTimeout(() => {
    $(".eye").css("top","45%")
    $(".eye").css("height","10%")
    setTimeout(() => {
      $(".eye").css("top","25%")
      $(".eye").css("height","50%")
      setTimeout(() => {
        $(".eye").css("height","100%")
        
      }, 500);
      
    }, 300);
    
  }, 200);
  
}, 10000);

setTimeout(() => {
  

setInterval(() => {
  $(".mouth").addClass("smile")
    setTimeout(() => {
      $(".mouth").removeClass("smile")


      
    }, 4000);


  
}, 12000);
}, 1200);

var prevcenterY=0;
var direction="up";
var throttle="off"
var backgroundthrottle = "off"




$(document).ready(function() {
  for(i=0; i<22;i++){
    eval('var hairRoot'+i+'=$(".hairRoot'+i+'")')
  }
  // var hairRoot0 = $('.hairRoot0')
  // var hairRoot1= $('.hairRoot1')

  // var hairRoot2 = $('.hairRoot2')
  // var hairRoot3 = $('.hairRoot3')
  // var hairRoot4 = $('.hairRoot4')
  // var hairRoot5 = $('.hairRoot5')
  // var hairRoot6 = $('.hairRoot6')
  // var hairRoot7 = $('.hairRoot7')
  // var hairRoot8 = $('.hairRoot8')
  // var hairRoot9 = $('.hairRoot9')
  // var hairRoot10 = $('.hairRoot10')

  // var offset0 = $(hairRoot0).offset()
  // var offset1 = $(hairRoot1).offset()
  // var offset2 = $(hairRoot2).offset()
  // var offset3 = $(hairRoot3).offset()
  // var offset4 = $(hairRoot4).offset()
  // var offset5 = $(hairRoot5).offset()
  // var offset6 = $(hairRoot6).offset()
  // var offset7 = $(hairRoot7).offset()
  // var offset8 = $(hairRoot8).offset()
  // var offset9 = $(hairRoot9).offset()
  // var offset10 = $(hairRoot10).offset()
  // var offset11 = $(hairRoot10).offset()
  // var offset12 = $(hairRoot10).offset()
  // var offset13 = $(hairRoot10).offset()
  // var offset14 = $(hairRoot10).offset()
  // var offset15 = $(hairRoot10).offset()
  // var offset16 = $(hairRoot10).offset()
   // var center_x0 =offset0.left;
  // var center_y0= offset0.top;
  // var center_x1 =offset1.left;
  // var center_y1= offset1.top;
  // var center_x2 =offset2.left;
  // var center_y2= offset2.top;
  // var center_x3 =offset3.left;
  // var center_y3= offset3.top;
  // var center_x4 =offset4.left;
  // var center_y4= offset4.top;
  // var center_x5 =offset5.left;
  // var center_y5= offset5.top;
  // var center_x6 =offset6.left;
  // var center_y6= offset6.top;
  // var center_x7 =offset7.left;
  // var center_y7= offset7.top;
  // var center_x8 =offset8.left;
  // var center_y8= offset8.top;
  // var center_x9 =offset9.left;
  // var center_y9= offset9.top;
  // var center_x10=offset10.left;
  // var center_y10= offset10.top;
        // var radians0 = Math.atan2(mouse_x - center_x0, mouse_y - center_y0);
      // var radians1 = Math.atan2(mouse_x - center_x1, mouse_y - center_y1);
      // var radians2 = Math.atan2(mouse_x - center_x2, mouse_y - center_y2);
      // var radians3 = Math.atan2(mouse_x - center_x3, mouse_y - center_y3);
      // var radians4 = Math.atan2(mouse_x - center_x4, mouse_y - center_y4);
      // var radians5 = Math.atan2(mouse_x - center_x5, mouse_y - center_y5);
      // var radians6 = Math.atan2(mouse_x - center_x6, mouse_y - center_y6);
      // var radians7 = Math.atan2(mouse_x - center_x7, mouse_y - center_y7);
      // var radians8 = Math.atan2(mouse_x - center_x8, mouse_y - center_y8);
      // var radians9 = Math.atan2(mouse_x - center_x9, mouse_y - center_y9);
      // var radians10 = Math.atan2(mouse_x - center_x10, mouse_y - center_y10);
      
      // var degree0 = (radians0 * (180 / Math.PI)*-1 )-180;
      // var degree1 = (radians1 * (180 / Math.PI)*-1 )-180;
      // var degree2 = (radians2 * (180 / Math.PI)*-1 )-180;
      // var degree3 = (radians3 * (180 / Math.PI)*-1 )-180;
      // var degree4 = (radians4 * (180 / Math.PI)*-1 )-180;
      // var degree5 = (radians5 * (180 / Math.PI)*-1 )-180;
      // var degree6 = (radians6 * (180 / Math.PI)*-1 )-180;
      // var degree7 = (radians7 * (180 / Math.PI)*-1 )-180;
      // var degree8 = (radians8 * (180 / Math.PI)*-1 )-180;
      // var degree9 = (radians9 * (180 / Math.PI)*-1 )-180;
      // var degree10 = (radians10 * (180 / Math.PI)*-1 )-180;
            // var hair0 = $(".hairRoot0 .hair");
      // var hair1 = $(".hairRoot1 .hair");
      // var hair2 = $(".hairRoot2 .hair");
      // var hair3 = $(".hairRoot3 .hair");
      // var hair4 = $(".hairRoot4 .hair");
      // var hair5 = $(".hairRoot5 .hair");
      // var hair6 = $(".hairRoot6 .hair");
      // var hair7 = $(".hairRoot7 .hair");
      // var hair8 = $(".hairRoot8 .hair");
      // var hair9 = $(".hairRoot9 .hair");
      // var hair10 = $(".hairRoot10 .hair");

    // for(i=0;i<21;i++){
    //     eval('var hair'+i+'=$(".hairRoot'+i+' .hair")')
    //     }
    var height = $('body').css('height');
    var width = $('body').css('width');
    height=height.split("px");
    height=parseInt(height);
    heighthalf=height/2
    width=width.split("px");
    width=parseInt(width);
    widthhalf=width/2
    console.log(widthhalf);
      
      var hair0 = $(".hairRoot0 .hair");
      var hair1 = $(".hairRoot1 .hair");
      var hair2 = $(".hairRoot2 .hair");
      var hair3 = $(".hairRoot3 .hair");
      var hair4 = $(".hairRoot4 .hair");
      var hair5 = $(".hairRoot5 .hair");
      var hair6 = $(".hairRoot6 .hair");
      var hair7 = $(".hairRoot7 .hair");
      var hair8 = $(".hairRoot8 .hair");
      var hair9 = $(".hairRoot9 .hair");
      var hair10 = $(".hairRoot10 .hair");
      var hair11 = $(".hairRoot11 .hair");
      var hair12 = $(".hairRoot12 .hair");
      var hair13 = $(".hairRoot13 .hair");
      var hair14 = $(".hairRoot14 .hair");
      var hair15 = $(".hairRoot15 .hair");
      var hair16 = $(".hairRoot16 .hair");
      var hair17 = $(".hairRoot17 .hair");
      var hair18 = $(".hairRoot18 .hair");
      var hair19 = $(".hairRoot19 .hair");
      var hair20 = $(".hairRoot20 .hair");
      var hair21 = $(".hairRoot21 .hair");

  for(i=0; i<22;i++){
    eval('var offset'+i+"=$(hairRoot"+i+").offset()")
  }

  for(i=0; i<22;i++){
    eval(' var center_x'+i+'=offset'+i+'.left')
    eval('var center_y'+i+'=offset'+i+'.top')

  }



 
  
  
  function winDirection(e) {
    // var mouse_x = 0;
    
          var mouse_x = e.pageX;
          var mouse_x = e.pageX-500;
          if(mouse_x<0){
            mouse_x=0
          }


      var mouse_y = e.pageY;
      if(mouse_y<prevcenterY){
        direction="up";
      }
      else{
        direction="down";
    }
      prevcenterY=mouse_y;

      // for(i=0;i<21;i++){
      // eval('var radians'+i+'=Math.atan2(mouse_x - center_x'+i+',mouse_y - center_y'+i+')')
      // }
      var radians0 = Math.atan2(mouse_x - center_x0, mouse_y - center_y0);
      var radians1 = Math.atan2(mouse_x - center_x1, mouse_y - center_y1);
      var radians2 = Math.atan2(mouse_x - center_x2, mouse_y - center_y2);
      var radians3 = Math.atan2(mouse_x - center_x3, mouse_y - center_y3);
      var radians4 = Math.atan2(mouse_x - center_x4, mouse_y - center_y4);
      var radians5 = Math.atan2(mouse_x - center_x5, mouse_y - center_y5);
      var radians6 = Math.atan2(mouse_x - center_x6, mouse_y - center_y6);
      var radians7 = Math.atan2(mouse_x - center_x7, mouse_y - center_y7);
      var radians8 = Math.atan2(mouse_x - center_x8, mouse_y - center_y8);
      var radians9 = Math.atan2(mouse_x - center_x9, mouse_y - center_y9);
      var radians10 = Math.atan2(mouse_x - center_x10, mouse_y - center_y10);
      var radians11 = Math.atan2(mouse_x - center_x11, mouse_y - center_y11);
      var radians12 = Math.atan2(mouse_x - center_x12, mouse_y - center_y12);
      var radians13 = Math.atan2(mouse_x - center_x13, mouse_y - center_y13);
      var radians14 = Math.atan2(mouse_x - center_x14, mouse_y - center_y14);
      var radians15 = Math.atan2(mouse_x - center_x15, mouse_y - center_y15);
      var radians16 = Math.atan2(mouse_x - center_x16, mouse_y - center_y16);
      var radians17 = Math.atan2(mouse_x - center_x17, mouse_y - center_y17);
      var radians18 = Math.atan2(mouse_x - center_x18, mouse_y - center_y18);
      var radians19 = Math.atan2(mouse_x - center_x19, mouse_y - center_y19);
      var radians20 = Math.atan2(mouse_x - center_x20, mouse_y - center_y20);
      var radians21 = Math.atan2(mouse_x - center_x21, mouse_y - center_y21);
      var backgroundRadian = Math.atan2(mouse_x - widthhalf, mouse_y - heighthalf);

    // calculate degree
    // for(i=0;i<21;i++){
    //     eval('var degree'+i+'=(radians'+i+' * (180 / Math.PI)*-1 )-180;')
    //     }
      var degree0 = (radians0 * (180 / Math.PI)*-1 )-180;
      var degree1 = (radians1 * (180 / Math.PI)*-1 )-180;
      var degree2 = (radians2 * (180 / Math.PI)*-1 )-180;
      var degree3 = (radians3 * (180 / Math.PI)*-1 )-180;
      var degree4 = (radians4 * (180 / Math.PI)*-1 )-180;
      var degree5 = (radians5 * (180 / Math.PI)*-1 )-180;
      var degree6 = (radians6 * (180 / Math.PI)*-1 )-180;
      var degree7 = (radians7 * (180 / Math.PI)*-1 )-180;
      var degree8 = (radians8 * (180 / Math.PI)*-1 )-180;
      var degree9 = (radians9 * (180 / Math.PI)*-1 )-180;
      var degree10 = (radians10 * (180 / Math.PI)*-1 )-180;
      var degree11 = (radians11 * (180 / Math.PI)*-1 )-180;
      var degree12 = (radians12 * (180 / Math.PI)*-1 )-180;
      var degree13 = (radians13 * (180 / Math.PI)*-1 )-180;
      var degree14 = (radians14 * (180 / Math.PI)*-1 )-180;
      var degree15 = (radians15 * (180 / Math.PI)*-1 )-180;
      var degree16 = (radians16 * (180 / Math.PI)*-1 )-180;
      var degree17 = (radians17* (180 / Math.PI)*-1 )-180;
      var degree18 = (radians18 * (180 / Math.PI)*-1 )-180;
      var degree19 = (radians19* (180 / Math.PI)*-1 )-180;
      var degree20 = (radians20 * (180 / Math.PI)*-1 )-180;
      var degree21 = (radians21 * (180 / Math.PI)*-1 )-180;
      var degreeBackground = (backgroundRadian * (180/Math.PI)*-1 )-90;




    //   if(backgroundthrottle=="off"){
    //   $(".foreground").css("transform","rotate("+degreeBackground+"deg");
    //   backgroundthrottle="on"

    //   setTimeout(() => {
    //     backgroundthrottle="off";
        
    //   }, 500);
      
    
    // }
    $(".foreground").css("transform","rotate("+degreeBackground+"deg");




      wavinghair(hairRoot0,hair0,degree0)
      setTimeout(() => {
        wavinghair(hairRoot1,hair1,degree1)
        setTimeout(() => {
          wavinghair(hairRoot2,hair2,degree2)
          setTimeout(() => {
            wavinghair(hairRoot3,hair3,degree3)
            setTimeout(() => {
              wavinghair(hairRoot4,hair4,degree4)
              setTimeout(() => {
                wavinghair(hairRoot5,hair5,degree5)
                setTimeout(() => {
                  wavinghair(hairRoot6,hair6,degree6)
                  setTimeout(() => {
                    wavinghair(hairRoot7,hair7,degree7)
                    setTimeout(() => {
                      wavinghair(hairRoot8,hair8,degree8)
                      setTimeout(() => {
                        wavinghair(hairRoot9,hair9,degree9)
                        setTimeout(() => {
                          wavinghair(hairRoot10,hair10,degree10)

                          
                          
                        }, 50);
                        
                        
                      }, 50);
                      
                      
                    }, 50);
                    
                    
                  }, 50);
                  
                }, 50);

                
              }, 50);
              
            }, 50);
            
          }, 50);
          
        }, 50);
        
      },  50);
      setTimeout(() => {
        wavinghair(hairRoot11,hair11,degree11)
        setTimeout(() => {
          wavinghair(hairRoot12,hair12,degree12)
          setTimeout(() => {
            wavinghair(hairRoot13,hair13,degree13)
            setTimeout(() => {
              wavinghair(hairRoot14,hair14,degree14)
              setTimeout(() => {
                wavinghair(hairRoot15,hair15,degree15)
                setTimeout(() => {
                  wavinghair(hairRoot16,hair16,degree16)
                  setTimeout(() => {
                    wavinghair(hairRoot17,hair17,degree17)
                    setTimeout(() => {
                      wavinghair(hairRoot18,hair18,degree18)
                      setTimeout(() => {
                        wavinghair(hairRoot19,hair19,degree19)
                        setTimeout(() => {
                          wavinghair(hairRoot20,hair20,degree20)
                          setTimeout(() => {
                            wavinghair(hairRoot21,hair21,degree21)
                           
                            
                            
                          }, 50);
                          
                          
                        }, 50);
                        
                        
                      }, 50);
                      
                      
                    }, 50);
                    
                    
                  }, 50);
                  
                  
                }, 50);
                
                
              },50);
              
              
            }, 50);
            
            
          }, 50);
          
          
        }, 50);
        
        
      }, 50);
      
       

        
    }
    function wavinghair(root, hair,degree){

    $(root).css("transform","rotate("+degree+"deg)")
       for(let j=0;j<hair.length;j++){
         setTimeout(() => {
           if(direction=="up"){         
        $(hair[j]).css("transform","rotate(0deg)")        
         $(hair[j]).css("transform","rotate("+-1*((j+1)*2)+"deg)")
           }
           if(direction=="down"){
          $(hair[j]).css("transform","rotate(0deg)")
          $(hair[j]).css("transform","rotate("+((j+1)*2)+"deg)")
        }
        }, j*10);
       }
    }


    $(document).on('mousemove', function(e2) {
      if(throttle=="off"){
      winDirection(e2, );
      throttle="on"
      }
      setTimeout(() => {
        throttle="off"
        
      }, 50);
    });


var seasons = ["spring", "summer", "fall","winter"]
var seasonColors={
  "spring":["pink","palevioletred","rgb(221, 161, 181)","rgb(255, 191, 154)","rgb(255, 191, 154)","rgb(247, 166, 234)"],
  "summer":["rgb(28, 116, 36)","rgb(52, 107, 20)","rgb(255, 252, 51)","rgb(255, 246, 163)","rgb(255, 246, 163)"],
  "fall":["rgb(255, 246, 163)","rgb(255, 123, 0)","rgb(116, 96, 10)","rgb(228, 8, 63)","rgb(150, 126, 48)"],
  "winter":["rgb(150, 126, 48)","rgb(160, 184, 250)","rgb(66, 217, 255)","rgb(66, 217, 255)","rgb(49, 19, 121)"]
}
var backgroundColors={
  "spring":"rgb(255, 181, 233)",
  "summer":"rgb(255, 247, 170)",
  "fall":"rgb(228, 156, 123)",
  "winter":"rgb(159, 241, 255)"
}

function createSingleLeaf(colors){
  var randnumber = Math.floor(Math.random()*colors.length)
  var randheight = Math.floor(Math.random()*80+10)

  var color=colors[randnumber]
  // console.log(color)
  // console.log(colors)

  var leaf=$("<div>")
  var leafContainer=$("<div>")
  leaf.addClass("leaf")
  leaf.css("background-color",color)
  leafContainer.addClass("leafContainer")
  leafContainer.css("top",randheight+"%")
  leafContainer.append(leaf)
  $('.foreground').append(leafContainer)
}


var seasomNumber = 0;

setInterval(() => {
 
  var chosenseason = seasons[seasomNumber]
  var chosenColors = seasonColors[chosenseason]
  

  createSingleLeaf(chosenColors)
  
}, 300);
var changeSeasons = setInterval(() => {
  seasomNumber++;
  if(seasomNumber>3){
    seasomNumber=0
  }
  var season = seasons[seasomNumber];
  $('.background').html("")
$('.background').css("background-image","linear-gradient(to top, "+backgroundColors[season]+",white")
  changeHairColor(season);
  createstripe(season)

  


}, 12000)

//have the flowing leaves an peddals appear in front and back of the lady

function changeHairColor(season){
  //this 21 must change once more hair bases are added
  var currentSeasonColors = seasonColors[season];

for(let i=0;i<22;i++){
 var seasonColor = Math.floor(Math.random()*currentSeasonColors.length)
 seasonColor = currentSeasonColors[seasonColor];
//  console.log(seasonColor)
  $(".hairRoot"+i).css('background-color',seasonColor);

}

for(let i=0; i<hair0.length;i++){

  setTimeout(() => {
    var seasonColor = Math.floor(Math.random()*currentSeasonColors.length)
    // console.log(seasonColor)
    seasonColor = currentSeasonColors[seasonColor];
    // console.log(seasonColor);
    $(hair0[i]).css("background-color",seasonColor)
    $(hair1[i]).css("background-color",seasonColor)
    $(hair2[i]).css("background-color",seasonColor)
    $(hair3[i]).css("background-color",seasonColor)
    $(hair4[i]).css("background-color",seasonColor)
    $(hair6[i]).css("background-color",seasonColor)
    $(hair5[i]).css("background-color",seasonColor)
    $(hair7[i]).css("background-color",seasonColor)
    $(hair8[i]).css("background-color",seasonColor)
    $(hair9[i]).css("background-color",seasonColor)
    $(hair10[i]).css("background-color",seasonColor)
    $(hair11[i]).css("background-color",seasonColor)
    $(hair12[i]).css("background-color",seasonColor)
    $(hair13[i]).css("background-color",seasonColor)
    $(hair14[i]).css("background-color",seasonColor)
    $(hair15[i]).css("background-color",seasonColor)
    $(hair16[i]).css("background-color",seasonColor)
    $(hair17[i]).css("background-color",seasonColor)
    $(hair18[i]).css("background-color",seasonColor)
    $(hair19[i]).css("background-color",seasonColor)
    $(hair20[i]).css("background-color",seasonColor)
    $(hair21[i]).css("background-color",seasonColor)
    
  }, i*20);
}

}

//initial hair color
seasomNumber++;
if(seasomNumber>3){
  seasomNumber=0
}
var season = seasons[seasomNumber];
$('.background').html("")
$('.background').css("background-image","linear-gradient(to top, "+backgroundColors[season]+",white")

  changeHairColor(season);
  var chosenseason = seasons[seasomNumber]
  var chosenColors = seasonColors[chosenseason]
  createSingleLeaf(chosenColors)
  createstripe(season);


  
  

  function createstripe(season){ 
    var currentSeasonColors = seasonColors[season];
    for(let i=0;i<3;i++){
      var randnumber = Math.floor(Math.random()*currentSeasonColors.length);
      var stripe = $("<div>")
      stripe.addClass("shirtStripe")
      stripe.css("background-color",currentSeasonColors[randnumber]);
      $(".dress").append(stripe)
  
    }
  }

  function groovyHair(){
    console.log("groovyhair")
    var colorBlocks = $(".shirtStripe")
    var capturedColors = [];
    var count= colorBlocks.length
    console.log(count);
    for (i=0;i<colorBlocks.length;i++){
      var color = $(colorBlocks[i]).css("background-color");
      console.log(color);
      capturedColors.push(color);
      count--
    }
    if(count<1){
      createColorSky(capturedColors)
      console.log("coloringhair")
      var hairSegments = $(".hair");
      var hairNumber = hairSegments.length 
      for (i=0;i<hairNumber;i++){
        var randomNumber = Math.floor(Math.random()*colorBlocks.length)
        $(hairSegments[i]).css("background-color",capturedColors[randomNumber])
      }
      for (i=0;i<21;i++){
        var randomNumber = Math.floor(Math.random()*colorBlocks.length)
        $(".hairRoot"+i).css("background-color",capturedColors[randomNumber])
      }
      
    }
  }
  
 

  setInterval(() => {
     $('.leafContainer').each(function(){
      //  console.log(this)
      //  console.log($(this).css("visibility"))
       if($(this).css("visibility")=="hidden"){
         $(this).remove();
       }

     
   
      
    });

  }, 300);

  function createColorSky(capturedColors){
    $(".background").html("")
    for(let i=0;i<100;i++){
      setTimeout(() => {
        
      
      var randNumber = Math.floor(Math.random()*capturedColors.length)
      var stripe = $("<div>");
      stripe.addClass("skyStripe");
      stripe.css("background-color",capturedColors[randNumber])
      $(".background").append(stripe);
    }, i*3);

    }

  }

// function startSeasons(){
//   var changeSeasons = setInterval(() => {
//     seasomNumber++;
//     if(seasomNumber>3){
//       seasomNumber=0
//     }
//     var season = seasons[seasomNumber];
//     $('.background').css("background-color",backgroundColors[season])
//     changeHairColor(season);
  
    
  
  
//   }, 12000)

// }

$(".dress").click(function(event){
  // console.log("dresscolors")
event.stopPropagation();
event.preventDefault();
var stripes = $(".shirtStripe")
console.log(stripes)
console.log(stripes.length);
if(stripes.length>0){
groovyHair()
}})

})