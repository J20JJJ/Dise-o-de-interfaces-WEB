    // Función para cargar las imágenes de acuerdo con la categoría
    function cargar_Perks(categoria, cantidad) {
        const imgContainer = document.getElementById('img-container');
        const selectedContainer = document.getElementById('selected-images-list');
  
        // Limpiar las imágenes seleccionadas y la lista de seleccionadas
        selectedContainer.innerHTML = '';  // Borra las imágenes seleccionadas
        selectedImages.length = 0;  // Borra el array de imágenes seleccionadas
  
        // Limpiar el contenedor de imágenes
        imgContainer.innerHTML = '';
  
        // Crear las imágenes dinámicamente
        for (let i = 1; i <= cantidad; i++) {
          const imgElement = document.createElement('img');
          switch (categoria) {
            case 1:
              imgElement.src = `/img/survi/perk (${i}).png`;
              break;
            case 2:
              imgElement.src = `/img/killer/perk_K (${i}).png`;
              break;
          }
  
          imgElement.alt = `Imagen ${i}`;
          imgElement.classList.add('img-thumbnail');
          imgElement.setAttribute('data-id', i);
  
          // Agregar el evento 'click' a la imagen
          imgElement.addEventListener('click', function () {
            const imgSrc = imgElement.src;
            const imgId = imgElement.getAttribute('data-id');
  
            // Evitar agregar imágenes duplicadas
            if (!selectedImages.includes(imgId)) {
              selectedImages.push(imgId);
  
              // Crear el contenedor de la imagen seleccionada con estilos de Bootstrap
              const imgElementSelected = document.createElement('div');
              imgElementSelected.classList.add('col-4', 'col-md-2', 'mb-3', 'position-relative');
              imgElementSelected.innerHTML = `
              <img src="${imgSrc}" class="img-thumbnail mb-2 selected-img" data-id="${imgId}">
              <button type="button" class="btn-close bg-danger position-absolute top-0 end-0 remove-img" aria-label="Cerrar imagen" data-id="${imgId}"></button>
          `;
  
              // Agregar el contenedor al contenedor visual
              selectedContainer.appendChild(imgElementSelected);
  
              // Añadir evento al botón "Cerrar"
              const removeButton = imgElementSelected.querySelector('.remove-img');
              removeButton.addEventListener('click', function () {
                // Eliminar del contenedor visual
                imgElementSelected.remove();
  
                // Eliminar del array de seleccionadas
                const index = selectedImages.indexOf(imgId);
                if (index > -1) {
                  selectedImages.splice(index, 1);
                }
              });
            }
          });
  
          imgContainer.appendChild(imgElement);
        }
  
        // Actualizar la lista de todas las imágenes después de que se hayan agregado al DOM
        updateAllImages();
      }
  
      // Variables globales
      const selectedImages = [];
      let allImages = [];
  
      // Actualizar la lista de imágenes
      function updateAllImages() {
        allImages = Array.from(document.querySelectorAll('.img-thumbnail'));
      }
  
      // Función para girar la ruleta
      function girarRuleta() {
        if (selectedImages.length < 4) {
          alert('Por favor, selecciona al menos 4 imágenes.');
          return;
        }
  
        // Seleccionar 4 imágenes aleatorias de las seleccionadas
        const selectedImgs = [];
        while (selectedImgs.length < 4) {
          const randomIndex = Math.floor(Math.random() * selectedImages.length);
          const selectedImageId = selectedImages[randomIndex];
          const selectedImage = allImages.find(img => img.getAttribute('data-id') === selectedImageId);
  
          if (!selectedImgs.includes(selectedImage.src)) {
            selectedImgs.push(selectedImage.src);
          }
        }
  
        // Mostrar las imágenes seleccionadas en la ruleta
        document.getElementById('ruleta-img-1').src = selectedImgs[0];
        document.getElementById('ruleta-img-2').src = selectedImgs[1];
        document.getElementById('ruleta-img-3').src = selectedImgs[2];
        document.getElementById('ruleta-img-4').src = selectedImgs[3];
  
        // Agregar la clase de animación para girar la ruleta
        document.getElementById('ruleta-img-1').classList.add('girar');
        document.getElementById('ruleta-img-2').classList.add('girar');
        document.getElementById('ruleta-img-3').classList.add('girar');
        document.getElementById('ruleta-img-4').classList.add('girar');
  
        // Eliminar la clase de animación después de que termine la animación (4 segundos)
        setTimeout(function () {
          document.getElementById('ruleta-img-1').classList.remove('girar');
          document.getElementById('ruleta-img-2').classList.remove('girar');
          document.getElementById('ruleta-img-3').classList.remove('girar');
          document.getElementById('ruleta-img-4').classList.remove('girar');
        }, 4000); // 4000 ms = 4 segundos (tiempo de duración de la animación)
      }
  
      cargar_Perks(1, 12);