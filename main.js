var elem = document.querySelector('body')

// page1
var page1_presentation= document.querySelector('#page1-presentation')
var page1_avatar= document.querySelector('#page1-avatar')
var text_presentation= document.querySelector('.text-presentation')

// page2
var pages2=[
  document.querySelector('#pate2-comp'),
  document.querySelector('#pate2-box'),
  [
    document.querySelector('#pate2-box0'),
    document.querySelector('#pate2-box1'),
    document.querySelector('#pate2-box2'),
  ]
] 
// page4
var pages4=[
  document.querySelector('#page4-education'),
  document.querySelector('#page4-annee1'),
  document.querySelector('#page4-annee2'),
  document.querySelector('#page4-annee3'),
  document.querySelector('#page4-text1'),
  document.querySelector('#page4-text2'),
  document.querySelector('#page4-text3'),
  document.querySelector('#page4-text-remerciement'),
  document.querySelector('#page4-mecontacter'),
] 
var pages3=document.querySelector('#page3')
pages2[0].classList.add('opacityde0');
pages3.classList.add('opacityde0');

for (let i = 0; i < pages2[2].length; i++) {
  const element = pages2[2][i];
  element.classList.add("opacityde0");
}


for (let i = 0; i < pages4.length; i++) {
  const element = pages4[i];
  element.classList.add("opacityde0");
}



elem.onscroll = function () {

  // console.log(window.scrollY)
  if (window.scrollY == 0 && window.scrollY < 300) {
    page1_presentation.classList.add("fadein");
    page1_presentation.classList.remove("fadeout");
      
    page1_avatar.classList.add("flipIn");
    page1_avatar.classList.remove("flipOut");
      
    text_presentation.classList.add("transelateX");
    text_presentation.classList.remove("transete_X");
  }
  else if (window.scrollY > 300 && window.scrollY < 1350) {
    page1_presentation.classList.remove("fadein");
    page1_presentation.classList.add("fadeout");
      
    page1_avatar.classList.remove("flipIn");
    page1_avatar.classList.add("flipOut");
      
    text_presentation.classList.remove("transelateX");
    text_presentation.classList.add("transelateX");
    
    
    pages2[0].classList.add("fadein2");
    pages2[0].classList.remove("fadeout2");

    pages2[2][0].classList.remove("opacity0");
    pages2[2][0].classList.add("opacity1");
    pages2[2][1].classList.remove("opacity0_1");
    pages2[2][1].classList.add("opacity1_1");
    pages2[2][2].classList.remove("opacity0_2");
    pages2[2][2].classList.add("opacity1_2");
    
    }
  else if (window.scrollY > 1350 || window.scrollY < 300) {
    

    pages2[0].classList.remove("fadein2");
    pages2[0].classList.add("fadeout2");

    pages2[2][0].classList.add("opacity0");
    pages2[2][0].classList.remove("opacity1");
    pages2[2][1].classList.add("opacity0_1");
    pages2[2][1].classList.remove("opacity1_1");
    pages2[2][2].classList.add("opacity0_2");
    pages2[2][2].classList.remove("opacity1_2");
  }
  
  if (window.innerWidth < 1277) {

      if ((window.scrollY > 900 && window.scrollY < 2816)   ) {
        pages3.classList.add("opacity1");
        pages3.classList.remove("opacity0");
        
      }
      else if (window.scrollY < 900 || window.scrollY > 2816  ) {
        pages3.classList.add("opacity0");
        pages3.classList.remove("opacity1");
        
        }
  }
  else if (window.innerWidth > 1277) {

      if (window.scrollY > 900 && window.scrollY < 1964) {
        pages3.classList.add("opacity1");
        pages3.classList.remove("opacity0");
        
        }
      else if (window.scrollY < 900 || window.scrollY > 1900) {
        pages3.classList.add("opacity0");
        pages3.classList.remove("opacity1");
        
        }
  }


  if (window.scrollY > 1598 ) {
    pages4[0].classList.add("opacity1");
    pages4[0].classList.remove("opacity0");

    pages4[8].classList.add("opacity1");
    pages4[8].classList.remove("opacity0");
    
    pages4[7].classList.add("bliz");
    pages4[7].classList.remove("opacity0");
    
    pages4[1].classList.add("transX");
    pages4[1].classList.remove("trans_X");
    pages4[2].classList.add("transX1");
    pages4[2].classList.remove("trans_X1");
    pages4[3].classList.add("transX2");
    pages4[3].classList.remove("trans_X2");

    pages4[4].classList.add("transX");
    pages4[4].classList.remove("trans_X");
    pages4[5].classList.add("transX1");
    pages4[5].classList.remove("trans_X1");
    pages4[6].classList.add("transX2");
    pages4[6].classList.remove("trans_X2");
    
    }
  else if (window.scrollY < 1598) {
    pages4[0].classList.add("opacity0");
    pages4[0].classList.remove("opacity1");
    pages4[8].classList.add("opacity0");
    pages4[8].classList.remove("opacity1");

    pages4[7].classList.add("bliz");
    pages4[7].classList.remove("opacity1");
    
    pages4[1].classList.add("trans_X");
    pages4[1].classList.remove("transX");
    pages4[2].classList.add("trans_X1");
    pages4[2].classList.remove("transX1");
    pages4[3].classList.add("trans_X2");
    pages4[3].classList.remove("transX2");
    
    pages4[4].classList.add("trans_X");
    pages4[4].classList.remove("transX");
    pages4[5].classList.add("trans_X1");
    pages4[5].classList.remove("transX1");
    pages4[6].classList.add("trans_X2");
    pages4[6].classList.remove("transX2");
    
    }
}
