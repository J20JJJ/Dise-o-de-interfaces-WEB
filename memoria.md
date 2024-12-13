# Memoria del Proyecto: Ruleta de Habilidades (Perks)

## Introducción

El proyecto **Ruleta de Habilidades (Perks)** está diseñado para el juego **Dead by Daylight** y permite a los jugadores seleccionar habilidades aleatorias, denominadas *Perks*, a partir de diferentes categorías, como *Survi* y *Killer*. Este proyecto utiliza **HTML**, **CSS**, **JavaScript** y el framework **Bootstrap 5** para garantizar que la interfaz sea responsiva y fácil de usar en diversos dispositivos. El objetivo principal de este proyecto es proporcionar una forma divertida e interactiva de elegir las habilidades de manera aleatoria, mejorando la experiencia del usuario.

## Metodología

### Herramientas Utilizadas

1. **HTML5**: Para la estructura semántica de la página, utilizando etiquetas adecuadas como `<header>`, `<nav>`, `<main>`, `<section>`.
2. **CSS**: Para el diseño visual y la implementación de animaciones y transiciones en las imágenes y botones.
3. **Bootstrap 5**: Framework utilizado para el diseño responsivo y la creación de una maquetación estructurada y eficiente, sin necesidad de escribir un CSS complejo desde cero.
4. **JavaScript**: Para la lógica de la ruleta, la selección dinámica de imágenes y la interacción con el usuario.
5. **Git & GitHub**: Para el control de versiones y almacenamiento del código en la nube, facilitando el acceso al proyecto desde cualquier dispositivo.
6. **ResponsivelyApp**: Herramienta utilizada para visualizar y probar el diseño del sitio web en diferentes tamaños y dispositivos de manera simultánea, asegurando que la interfaz se adapte correctamente a diversas resoluciones y proporcionando una experiencia de usuario óptima en dispositivos móviles, tabletas y computadoras de escritorio.

### Fases de Desarrollo

1. **Investigación y Planificación**: Investigación de las tecnologías web más adecuadas para el proyecto. Se eligió **Bootstrap 5** por su flexibilidad y la cantidad de estilos predefinidos que facilita el trabajo de diseño.
2. **Diseño Visual**: Planificación del diseño y maquetación con las herramientas de **Bootstrap**, asegurando que la página fuera clara, funcional y estética.
3. **Implementación de la Ruleta**: Desarrollo de la lógica de la ruleta usando JavaScript para manejar la selección de habilidades y la animación de la ruleta.
4. **Pruebas y Ajustes**: Se realizaron pruebas de compatibilidad en diferentes navegadores como **Firefox**, **Edge** y **Google Chrome**, para garantizar la funcionalidad del proyecto en estos entornos.

## Justificación de las Soluciones Adoptadas

- **Uso de Bootstrap 5**: Elegí **Bootstrap 5** debido a la gran cantidad de estilos y componentes ya predefinidos que ofrece, lo que me permitió desarrollar un diseño responsivo de manera rápida y eficiente, sin tener que escribir un gran número de reglas CSS desde cero.
  
- **Animaciones con CSS**: Para crear una experiencia de usuario atractiva, se utilizaron animaciones CSS para hacer que las imágenes de la ruleta giraran de manera fluida al seleccionarlas.

- **Interactividad**: Los usuarios pueden seleccionar y ver imágenes de las diferentes categorías con facilidad mediante el uso del ratón. Aunque no se implementó navegación por teclado, la interfaz es completamente funcional con el uso del ratón.

## Guía de Estilos

### Estilos Visuales

El diseño visual del proyecto se basa en **Bootstrap 5** combinado con imágenes personalizadas para el fondo principal y los elementos de la ruleta.

#### Fondo Principal
- **Imagen utilizada**:

<div style="display: flex; align-items: center;">
  <img src="" alt="" width="300" style="border: 1px solid white; margin-right: 15px;">
  <p>
    
  </p>
</div>

| ![Imagen de fondo de la página](img/bgsmoke.jpg) | La imagen de textura oscura (*bgsmoke.jpg*), que aporta un ambiente misterioso y sombrío, alineado con la atmósfera del juego **Dead by Daylight**. |
| :----------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |

- **Colores predominantes**: Tonos oscuros y grisáceos, que ayudan a destacar los elementos visuales en primer plano.
- **Justificación**: Este fondo añade inmersión al entorno del proyecto y permite un diseño limpio y centrado en los elementos funcionales.

#### Fondo de las Perks seleccionadas por la ruleta
- **Imagen utilizada**: 
  
| ![Imagen de rombo](img/teachable.png) | El rombo anaranjado (*teachable.png*), que se coloca como fondo de las habilidades que aparecen en la ruleta. |
| :-----------------------------------: | :-----------------------------------------------------------------------------------------------------------: |

- **Colores predominantes**: Anaranjado oscuro con detalles negros, inspirado en los colores característicos de **Dead by Daylight**, generando coherencia visual.
- **Justificación**: Este fondo resalta las habilidades seleccionadas al ofrecer un contraste llamativo contra el fondo oscuro general. <br>
  **Deberia quedar similar a aqui:**
  | ![Imagen de demostración de uso de fondo de Perks seleccionadas por la ruleta](img/Captura1.png) | Imagen de demostración de uso de fondo de Perks seleccionadas por la ruleta. |
  | :----------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |

#### Fondo de la lista de Perks que el usuario puede seleccionar

- **Imagen utilizada**:

| ![Imagen de fondo de la pagina](img/bgsmoke.jpg) | Usamos la misma imagen de textura oscura (*bgsmoke.jpg*) que usamos en el Fondo Principal de la pagina, ya que alineado con la atmósfera del juego **Dead by Daylight** encaja a la perfección. |
| :----------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

- **Colores predominantes**: Tonos oscuros y grisáceos, que ayudan a destacar los elementos visuales en primer plano.
- **Justificación**: Este fondo añade inmersión al entorno del proyecto y permite un diseño limpio y centrado en los elementos funcionales. <br>
  
  **Deberia quedar similar a aqui:**
  | ![Imagen de rombo](img/Captura2.png) | Imagen de demostración de uso de fondo de Perks seleccionadas por la ruleta. |
  | :----------------------------------: | :--------------------------------------------------------------------------: |

### Tipografía  
El proyecto utiliza la fuente personalizada **Roboto** para los textos, en combinación con las tipografías predeterminadas de Bootstrap 5, que incluyen **"-apple-system"**, **"BlinkMacSystemFont"**, **"Segoe UI"**, **"Roboto"**, **"Helvetica Neue"**, **"Arial"**, y fuentes genéricas como **"sans-serif"**. Esta configuración asegura un diseño moderno, funcional y minimalista.

## Consideraciones Técnicas

### Responsive Design

Gracias a **Bootstrap 5**, el proyecto es completamente responsivo. Las imágenes de la ruleta y los botones de selección se adaptan automáticamente a pantallas de diferentes tamaños, incluyendo dispositivos móviles, tabletas y escritorios.

### Pruebas y Ajustes

El proyecto fue probado en los siguientes navegadores:
- **Google Chrome**
- **Mozilla Firefox**
- **Microsoft Edge**

Se probo la responsividad con las siguientes herramientas:
- **ResponsivelyApp**
- **Google Chrome DevTools**
- **Edge DevTools**
- **Mozilla Firefox DevTools**

## Instalaciones

### Visual Studio Code

Se utilizó **Visual Studio Code (VSC)** como editor de texto. Se instalaron las siguientes extensiones:
- **Live Server**: Para ver el proyecto en tiempo real.
- **Bootstrap IntelliSense**: Para mejorar la productividad con la integración de clases de Bootstrap.
- **Git Graph**: Para visualizar y gestionar el flujo de trabajo con Git de manera visual.

### Git & GitHub

Se gestionó el proyecto utilizando **Git** y **GitHub** para el control de versiones. El flujo de trabajo básico fue el siguiente:

1. **Inicialización del repositorio**: `git init`
2. **Añadir archivos**: `git add .`
3. **Commit**: `git commit -m "Initial commit"`
4. **Subida al repositorio remoto**: `git push origin main`

### Dependencias

- **Bootstrap 5**: Se utilizó la última versión de **Bootstrap 5** para estructurar la maquetación de la página.

## Estadísticas de Uso

### Tamaño de Pantallas

El diseño se ha optimizado para pantallas con resolución de 1366x768px, que es una de las más comunes entre los usuarios, aunque el diseño es responsivo y se adapta a otros tamaños de pantalla.

### Navegadores Compatibles

El proyecto ha sido probado en los siguientes navegadores:
- **Google Chrome**
- **Mozilla Firefox**
- **Microsoft Edge**

## Conclusión

El proyecto **Ruleta de Habilidades (Perks)** es una implementación interactiva y funcional para la selección aleatoria de habilidades en el juego **Dead by Daylight**. Gracias a la utilización de **HTML5**, **CSS**, **JavaScript** y **Bootstrap 5**, se ha logrado crear una interfaz atractiva, accesible y completamente responsiva.

Aunque el proyecto está completamente funcional, se recomienda seguir realizando pruebas en dispositivos adicionales y ajustar algunos detalles de la interfaz para mejorar aún más la experiencia del usuario.

---

## Enlaces de Referencia

- [Bootstrap 5](https://getbootstrap.com)