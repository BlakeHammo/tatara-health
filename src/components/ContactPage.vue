<!--First Page of Website, Bio and Qualifications, Link to bookings page -->

<template>
    <div>
      
      <main>
        <div>
          <h1 class="centered">Get in touch</h1>
          <p class="centered">
            To get in touch with Chelsea, please email <a href="mailto:chelsea@tatarahealth.com.au?subject=Website%20Inquiry">chelsea@tatarahealth.com.au</a><br>
            or call 0466 108 445 <br>
            Instagram: <a href="https://www.instagram.com/tatara.health/">@tatara.health</a><br>
            Facebook: 
          </p>
          <br>

          <div class="content-wrapper-horizontal"></div>
          <!--Placeholders
            <a href=”https://www.google.com“> <img src=”your_image.gif” width=”100″ height=”132″> </a>
            <a href=”https://www.google.com“> <img src=”your_image.gif” width=”100″ height=”132″> </a>
            <a href=”https://www.google.com“> <img src=”your_image.gif” width=”100″ height=”132″> </a>
            <a href=”https://www.google.com“> <img src=”your_image.gif” width=”100″ height=”132″> </a>
            <a href=”https://www.google.com“> <img src=”your_image.gif” width=”100″ height=”132″> </a>
            <a href=”https://www.google.com“> <img src=”your_image.gif” width=”100″ height=”132″> </a>
          -->
          <div id="image-centered">
            <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\IMG_0942.png" alt="Chelsea standing in a paddock next to an old gum tree" id="main-image">
          </div>
        </div>

      </main>
    </div>
  </template>
  
  <script setup>
  </script>
  


  
  <style scoped>
  /* Add your styles for the homepage here */
  
  main {
    padding: 20px;
    padding-left: 15%;
    padding-right: 15%;
  }

  #main-image {
    max-width: 50%;
    height: auto;
  }

  .centered {
    text-align: center;
  }

  h1 {
    padding-top: 20px;
  }

  #image-centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-wrapper-horizontal {
    display: flex;
    align-items: center;
  }
  </style>
  