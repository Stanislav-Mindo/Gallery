// selecting all elements 
const gallery = document.querySelectorAll('.gallery .image');
const previewBox = document.querySelector('.preview-box');
const previewImg = previewBox.querySelector('img');
const closeIcon = previewBox.querySelector('.icon');
const currentImg = previewBox.querySelector('.current-img');
const totalImg = previewBox.querySelector('.total-img');
const shadow = document.querySelector('.shadow');


window.onload = ()=>{
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length;
    let newIndex = i; //передача значения i в переменную newItem
    let clickImgIndex;
    gallery[i].onclick = ()=>{      
      clickImgIndex = newIndex;      
      function preview(){
        currentImg.textContent = newIndex + 1; 
        let selectedImgurl = gallery[newIndex].querySelector('img').src; //получение URL-адреса images, на который нажал пользователь
        previewImg.src = selectedImgurl; //передача URL-адреса изображения, по которому щелкнул пользователь, в источники предварительного просмотра        
      }
      //поработаем над предыдущей и следующей кнопкой
      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');
      if (newIndex == 0){
        prevBtn.style.display = "none";
      }
      if (newIndex >= gallery.length - 1){
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = ()=>{
        newIndex--;//уменьшение значения
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        }else {
          preview();
          nextBtn.style.display = "block";
        }
      }
      nextBtn.onclick = ()=>{
        newIndex++;//уменьшение значения
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        }else {
          preview();
          prevBtn.style.display = "block";
        }
      }
      preview()// запуск функции
      previewBox.classList.add('show');
      shadow.style.display = "block";
      document.querySelector('.gallery-container').style.overflow = "hidden"

      closeIcon.onclick = ()=>{
        newIndex = clickImgIndex;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove('show');
        shadow.style.display = "none";
      }
    }
    
  }
}
