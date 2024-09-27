<!--First Page of Website, Bio and Qualifications, Link to bookings page -->

<template>
    <div>
      <header class="fade-in-text">
        <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\Tatara-Health-Horizontal-Logo.svg" alt="Tatara Health" id="Tatara-Banner">
      </header>
      
      <main class="fade-in-text">
        <h3 id="SubHeading">
          Evidence informed holistic health care
        </h3>
        <div id="content-wrapper">
          <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\IMG_0913.png" alt="Chelsea leaning against a gate" id="main-image">
          
          <div class="content-wrapper-vertical" >
            <h3 id="MainText">
            Tatara Health is a naturopathic clinic dedicated to improving health and
            wellbeing with a root cause approach. Offering personalised treatment
            plans backed by evidence informed holistic health care, Tatara Health
            employs a wide range of healing modalities to help you achieve your health goals.
            </h3>
            <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\Tatara-Health-Flowers.svg" alt="Tatara Health Brand Flowers" id="Tatara-Flowers">

          </div>
          
        </div>
        
      </main>
    </div>
  </template>
  
  <script setup>
  </script>
  


  
  <style scoped>
  /* Add your styles for the homepage here */
  /* default desktop view*/
  header {
    padding: 35px;
    text-align:center;
  }
  
  main {
    padding: 20px;
    padding-left: 15%;
    padding-right: 15%;
    
  }

  #Tatara-Banner {
    padding-top: 20px;
    max-width: 70%;
    height: auto;
  }

  #SubHeading {
    text-align: center;
    font-size:xx-large;
    margin-top: 0px;
  }

  #MainText {
    text-align: center;
    font-weight: normal;
    line-height: 25px;
    padding-inline: 20px;
  }

  #content-wrapper {
    display: flex;
    align-items: center;
    padding-top: 40px;
  }

  #main-image {
    max-width: 50%;
    height: auto;
    margin-right: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }

  .content-wrapper-vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  #Tatara-Flowers {
    padding-top: 40px;
    max-width: 30%;
    height: auto;
  }

    /* mobile optimised*/
  @media (min-width: 320px) and (max-width: 999px) {
    header {
      padding-left: 0%;
      padding-right: 0%;
      text-align:center;
      padding-bottom: 10px;
    }
  
    main {
      padding: 0px;
      padding-left: 0%;
      padding-right: 0%;
      
    }

    #Tatara-Banner {
      padding-top: 10%;
      max-width: 100%;
      height: auto;
    }

    #SubHeading {
      text-align: center;
      font-size:xx-large;
      margin-top: 0px;
      margin-bottom: 0px;
      padding-left: 5%;
      padding-right: 5%;
    }

    #MainText {
      text-align: center;
      font-weight: normal;
      line-height: 25px;
      padding-inline: 20px;
    }

    #content-wrapper {
      display:block;
      align-items: center;
      padding-top: 40px;
    }

    #main-image {
      max-width: 100%;
      height: auto;
      margin-right: 0px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .content-wrapper-vertical {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0px;
    }

    #Tatara-Flowers {
      padding-top: 10px;
      max-width: 30%;
      height: auto;
      margin-bottom: 20px;
    }
  }
  

  </style>
  