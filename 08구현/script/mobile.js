
    //li태그를 변수에 담는다.
const tabList = document.querySelectorAll('.swiper-container');

for(let i=0;i<tabList.length;i++){//li태그의 개수만큼 반복하여 기능을 설정함
tabList[i].querySelector('.btn').addEventListener('click',function
(e){
e.preventDefault();//클릭시 이벤트를 무력화 하여 아무일도 없게함

for(var j = 0;j < tabList.length; j++){//li태그 on클래스 적용
    tabList[j].classList.remove('swiper-container');
}
this.parentNode.classList.add('swiper-container');//사용자가 선택한 항목에 on클래스 적용0
}

)
}


    

