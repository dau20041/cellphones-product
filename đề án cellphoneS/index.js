    

var sliderIndex = ()=>{

//Slider----------------------------
const rightbtn  = document.querySelector(".fa-chevron-right");
const leftbtn =document.querySelector(".fa-chevron-left");
const imgNum=document.querySelectorAll(".slider-content-left-pic img")
const imgNumberLi=document.querySelectorAll(".slider-content-left-text li")
let index=0;
console.log(rightbtn)

rightbtn.addEventListener("click",function(){
    index=index+1;
    if(index>imgNum.length-1)
    {
        index=0;
    }
    document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
    removeactive()
    imgNumberLi[index].classList.add("active")
})

leftbtn.addEventListener("click",function(){
    index=index-1;
    if(index<=0)
    {
        index=imgNum.length-1;
    }
    document.querySelector(".slider-content-left-pic").style.right = index* 100+"%";
    removeactive()
    imgNumberLi[index].classList.add("active")
})
// --------------------
imgNumberLi.forEach(function(image,index){

    image.addEventListener("click",function(){
        document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
        removeactive()
        image.classList.add("active")

    })
})
function removeactive(){
    let imgactive = document.querySelector(".active")
    imgactive.classList.remove("active")
}
function imgAuto(){
    index=index+1;
    if(index>imgNum.length-1)
    {
        index=0;
    }
    console.log(index) 
    document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
    imgNumberLi[index].classList.add("active")
}
setInterval(imgAuto,4000)

// ----------------------
const rightbtntwo  = document.querySelector(".fa-chevron-right-two");
const leftbtntwo =document.querySelector(".fa-chevron-left-two");
const imgNubertwo=document.querySelectorAll(".slider-product-one-content-items")


rightbtntwo.addEventListener("click",function () {
    index=index+1;
    if(index>imgNubertwo.length-1)
    {
        index=0;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index* 100 +"%";
})

leftbtntwo.addEventListener("click",function (){
    index=index-1;
    if(index<=0)
    {
        index=imgNubertwo.length-1;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index* 100+"%";
})
// ----------------

function imgAuto1(){
    index=index+1;
    if(index>imgNubertwo.length-1)
    {
        index=0;
    }
    console.log(index) 
    document.querySelector(".slider-product-one-content-items-content").style.right = index* 100 +"%";
}
setInterval(imgAuto1,3000)

// ----------------
const rightbtntwoo  = document.querySelector(".fa-chevron-right-twoo");
const leftbtntwoo =document.querySelector(".fa-chevron-left-twoo");
const imgNubertwoo=document.querySelectorAll(".container-sale-one-content-items")


rightbtntwoo.addEventListener("click",function () {
    index=index+1;
    if(index>imgNubertwoo.length-1)
    {
        index=0;
    }
    document.querySelector(".container-sale-one-content-items-content").style.right = index* 100 +"%";
})

leftbtntwoo.addEventListener("click",function (){
    index=index-1;
    if(index<=0)
    {
        index=imgNubertwoo.length-1;
    }
    document.querySelector(".container-sale-one-content-items-content").style.right = index* 100+"%";
})

/*
function imgAuto(){
    index=index+1;
    if(index>imgNum.length-1)
    {
        index=0;
    }
    document.querySelector(".slider-content-left-pic").style.right = index* 100 +"%";
}
setInterval(imgAuto,3000)
*/

}
window.onload =function () {
    sliderIndex();
}
  function hien()
  {
      document.getElementById("hide1").style.display ="block";
  }
  function an()
  {
      document.getElementById("hide1").style.display ="none";
  }
  function hien1()
  {
      document.getElementById("hide2").style.display ="block";
  }
  function an1()
  {
      document.getElementById("hide2").style.display ="none";
  }
function hien2()
{
    document.getElementById("hide3").style.display ="block";
}
function an2()
{
    document.getElementById("hide3").style.display ="none";
}
function hien3()
{
    document.getElementById("hide4").style.display ="block";
}
function an3()
{
    document.getElementById("hide4").style.display ="none";
}
function hien4()
{
    document.getElementById("hide5").style.display ="block";
}
function an4()
{
    document.getElementById("hide5").style.display ="none";
}
function hien5()
{
    document.getElementById("hide6").style.display ="block";
}
function an5()
{
    document.getElementById("hide6").style.display ="none";
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-content');
    const moreContent = document.querySelector('.more-content');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            button.innerText = 'Thu gọn';
        } else {
            moreContent.style.display = 'none';
            button.innerText = 'Xem thêm';
        }
    })
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-content-question');
    const moreContent = document.querySelector('.more-content-question');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            
        } else {
            moreContent.style.display = 'none';
            
        }
    })
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-content-question1');
    const moreContent = document.querySelector('.more-content-question1');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            
        } else {
            moreContent.style.display = 'none';
            
        }
    })
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-content-question2');
    const moreContent = document.querySelector('.more-content-question2');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            
        } else {
            moreContent.style.display = 'none';
            
        }
    })
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-content-question3');
    const moreContent = document.querySelector('.more-content-question3');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            
        } else {
            moreContent.style.display = 'none';
            
        }
    })
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.show-more-content-question4');
    const moreContent = document.querySelector('.more-content-question4');
    button.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            
        } else {
            moreContent.style.display = 'none';
            
        }
    })
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("upBtn").style.display = "block";
    } else {
        document.getElementById("upBtn").style.display = "none";
    }
}

 function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 }
 

    
