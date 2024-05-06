/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import * as bootstrap from 'bootstrap';

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);

  let recipesImages = {
    1: "back-image-2019",
    2: "back-image-2020",
    3: "back-image-2021",
    4: "back-image-2022",
    5: "back-image-2023"
  }

  let recipesDescription = {
    1: {
      title: 'Delicias del mar',
      author: 'María Dueñas - 2019',
      text: 'Con influencias del mar y de su tierra natal, María se proclamó ganadora del certamen con este exquisito plato'
    },
    2: {
      title: 'De la huerta',
      author: 'Pedro García - 2020',
      text: 'Exquisita vuelta de tuerca al concepto de ensalda que conquistó el palador del jurado'
    },
    3: {
      title: 'Dulcura en verde',
      author: 'David Gómez - 2021',
      text: 'En la sencillez y los pequeños detalles reside el éxito, y este plato refleja a la perfección ambos conceptos'
    },
    4: {
      title: 'Delicias del Japón',
      author: 'Carla Ruíz - 2022',
      text: 'Mezcla de sabores, tradiciones y costrumbres que consigue un merecido premio'
    },
    5: {
      title: 'Dulce de miel',
      author: 'Natalia Rosi - 2023',
      text: 'La prueba de que un postre también puede ser un ganador en un concurso de cocina'
    }
  }

  function showReceipe(event) {
    let btnId = event.target.id;
    let imageContainer = event.target.parentNode.parentNode;
    let img = imageContainer.childNodes[1];
    let info = imageContainer.childNodes[3];
    let receipeVideoId = btnId.replace('btn', 'video');
    let receipContainer = document.querySelector(".poster-container__recipes");
    let video = document.getElementById(receipeVideoId);
    let receipeNumber = btnId.split('-')[2];


    for (let index = 0; index < videos.length; index++) {
      videos[index].style.zIndex = 0;
      videos[index].style.opacity = 0;
    }    

    for (let index = 0; index < imagesContainer.length; index++) {
      imagesContainer[index].className = "images__container";
    }

    for (let index = 0; index < images.length; index++) {
      images[index].className = "container__img";
    }

    for (let index = 0; index < infos.length; index++) {
      infos[index].className = "container__info";
    }

    imageContainer.className = "images__container selected";
    img.className = "container__img selected-img";
    info.className = "container__info selected-info";

    video.style.zIndex = 10;
    video.style.opacity = 10;
    receipContainer.className = "poster-container__recipes " + recipesImages[receipeNumber];
    recipeTitle.textContent = recipesDescription[receipeNumber].title;
    recipeAuthor.textContent = recipesDescription[receipeNumber].author;
    recipeText.textContent = recipesDescription[receipeNumber].text;
    
    window.scrollTo(0, receipContainer.offsetTop); 
  };

  let buttons = document.getElementsByClassName("info__btn");
  // let navButtons = document.getElementsByClassName("nav__btn");
  let videos = document.getElementsByClassName("video-container__video");
  let imagesContainer = document.getElementsByClassName("images__container");
  let images = document.getElementsByClassName("container__img");
  let infos = document.getElementsByClassName("container__info");
  let recipeTitle = document.querySelector(".description__title");
  let recipeAuthor = document.querySelector(".description__author");
  let recipeText = document.querySelector(".description__text");

  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', showReceipe);
  }
  
  // for (let index = 0; index < navButtons.length; index++) {
  //   navButtons[index].addEventListener('click', showReceipe);
  // }
}
)();
