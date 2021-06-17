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





$(document).ready(function() {
  for(i=0; i<21;i++){
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

  for(i=0; i<21;i++){
    eval('var offset'+i+"=$(hairRoot"+i+").offset()")
  }

  for(i=0; i<21;i++){
    eval(' var center_x'+i+'=offset'+i+'.left')
    eval('var center_y'+i+'=offset'+i+'.top')

  }



 
  
  
  function winDirection(e) {

      var mouse_x = e.pageX;
      // var mouse_x = 0;
      // var mouse_x = e.pageX-500;
      // if(mouse_x<0){
      //   mouse_x=0
      // }


      var mouse_y = e.pageY;
      if(mouse_y<prevcenterY){
        direction="up";
      }
      else{
        direction="down";
    }
      prevcenterY=mouse_y;

      for(i=0;i<21;i++){
      eval('var radians'+i+'=Math.atan2(mouse_x - center_x'+i+',mouse_y - center_y'+i+')')
      }


      for(i=0;i<21;i++){
        eval('var degree'+i+'=(radians'+i+' * (180 / Math.PI)*-1 )-180;')
        }




      for(i=0;i<21;i++){
        eval('var hair'+i+'=$(".hairRoot'+i+' .hair")')
        }
      


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

                          
                          
                        }, 150);
                        
                        
                      }, 150);
                      
                      
                    }, 150);
                    
                    
                  }, 150);
                  
                }, 150);

                
              }, 150);
              
            }, 150);
            
          }, 150);
          
        }, 150);
        
      }, 150);
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
                      
                      
                    }, 150);
                    
                    
                  }, 150);
                  
                  
                }, 150);
                
                
              },150);
              
              
            }, 150);
            
            
          }, 150);
          
          
        }, 150);
        
        
      }, 150);
      
       

        
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
        }, j*30);
       }
    }
 




      //            window.console.log("de="+degree+","+radians);
//       if(degree>0&&degree<170){
//       lever='on'
//       rotation=degree;
//       $(pw).css('transform', 'rotate(' + degree + 'deg)');
//       }// $(pw).css('-webkit-transform', 'rotate(' + degree + 'deg)');
//       // $(pw).css('-o-transform', 'rotate(' + degree + 'deg)');
//       // $(pw).css('-ms-transform', 'rotate(' + degree + 'deg)');
//   }


    $(document).on('mousemove', function(e2) {
      if(throttle=="off"){
      winDirection(e2, );
      throttle="on"
      }
      setTimeout(() => {
        throttle="off"
        
      }, 50);
    });
  
  })


//   $(document).mouseup(function(e) {

//     $(document).off('mousemove');
//     if(lever==='on'){
//     if(rotation<30){
//     $('.bar').css('transform','rotate(0deg)')
//     }
//     else{
//       $('.bar').css('transform','rotate('+rotation/2+'deg)')

//     setTimeout(() => {
//       $('.bar').css('transform','rotate(0deg)')
//       }, rotation/4);
//     }
//     if(rotation>30){
//         roulette("One","pink",'darkred')
//         setTimeout(() => {
//           roulette("Two","lightgreen",'darkgreen')
//           setTimeout(() => {
//               roulette("Three","lightblue",'darkblue')
//                   setTimeout(() => {
//                       lever='off'


//                       producePallet()
//                       console.log(lever)                        
//                   },500);
//               }, 100);
//           }, 100);
//        }
//   }});
// });

// $(document).on('click','.pallet',function(e) {
// e.preventDefault();
// e.stopPropagation();
// $(e.target).remove();
// })