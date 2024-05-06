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
      text: 'Esta receta combina la frescura del marisco con la variedad de verduras, creando un plato vibrante y delicioso. Los mariscos, como camarones o vieiras, se mezclan con una selección de verduras como pimientos, calabacines y champiñones. Todo se saltea en aceite de oliva con ajo y hierbas aromáticas, creando una fusión de sabores. La combinación se sirve caliente, realzando la frescura de los ingredientes y ofreciendo una experiencia culinaria única que combina la tierra y el mar.'
    },
    2: {
      title: 'De la huerta',
      author: 'Pedro García - 2020',
      text: 'Esta receta aprovecha la frescura y diversidad de los productos del huerto para crear un plato que celebra la naturaleza. Verduras como tomates, pimientos, calabacines y berenjenas son cosechadas directamente del huerto y preparadas con hierbas aromáticas y aceite de oliva. Los ingredientes se combinan y se asan lentamente en el horno, realzando sus sabores naturales y creando una deliciosa sinfonía de sabores. El resultado es un plato reconfortante y nutritivo que captura la esencia misma del campo y ofrece una experiencia culinaria auténtica y satisfactoria.'
    },
    3: {
      title: 'Dulcura en verde',
      author: 'David Gómez - 2021',
      text: 'En la sencillez y los pequeños detalles reside el éxito. Esta receta presenta una colorida combinación de verduras frescas, como zanahorias, calabacines, berenjenas y pimientos, sazonadas con ajo, aceite de oliva y hierbas provenzales. Tras ser cortadas y sazonadas, las verduras se hornean hasta que estén ligeramente doradas. Durante la cocción, los aromas se mezclan, creando una fragancia irresistible. Las verduras al horno se sirven calientes, ofreciendo un plato sabroso y nutritivo, perfecto como acompañamiento o plato principal. Esta receta resalta la frescura y versatilidad de las verduras.'
    },
    4: {
      title: 'Delicias del Japón',
      author: 'Carla Ruíz - 2022',
      text: 'Esta receta japonesa fusiona sabores delicados y técnicas precisas para crear una experiencia culinaria única. Ingredientes frescos como el pescado crudo, arroz de sushi y algas nori se combinan con destrezas en el corte y presentación. El sushi, cuidadosamente enrollado o moldeado a mano, se sirve con wasabi y salsa de soja para realzar su sabor. Cada bocado es una explosión de frescura y armonía, reflejando la atención meticulosa a los detalles que caracteriza a la cocina japonesa.'
    },
    5: {
      title: 'Dulce de miel',
      author: 'Natalia Rosi - 2023',
      text: 'Este postre con miel es una deliciosa combinación de dulzura natural y sabores reconfortantes. La miel, un ingrediente protagonista, se mezcla con mantequilla, harina y huevos para crear una masa suave y aromática. Esta mezcla se vierte sobre frutas frescas, como peras o manzanas, y se hornea hasta que estén doradas y burbujeantes. Al servir, se rocía con un toque adicional de miel, creando un postre indulgente que resalta la riqueza y versatilidad de este delicioso ingrediente natural.'
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

  let buttons = document.querySelectorAll(".container__info > .info__btn");
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
