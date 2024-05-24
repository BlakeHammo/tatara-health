<!--First Page of Website, Bio and Qualifications, Link to bookings page -->

<template>
    <div>
      <header>
        <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\Tatara-Health-Horizontal-Logo.svg" alt="Tatara Health" id="Tatara-Banner">
      </header>
      
      <main>
        <h3 id="SubHeading">
          Evidence informed holistic health care
        </h3>
        <div id="content-wrapper">
          <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\IMG_0913.png" alt="Chelsea leaning against a gate" id="main-image">
          <h3 id="MainText">
          Tatara Health is a naturopathic clinic dedicated to improving health and
          wellbeing with a root cause approach. Offering personalised treatment
          plans backed by evidence informed holistic health care, Tatara Health
          employs a wide range of healing modalities to help you achieve your health goals.
          </h3>
        </div>
        
      </main>
    </div>
  </template>
  
  <script setup>
  </script>
  


  
  <style scoped>
  /* Add your styles for the homepage here */
  header {
    padding: 20px;
    text-align:center;
  }
  
  main {
    padding: 20px;
    
  }

  #Tatara-Banner {
    padding-top: 20px;
    max-width: 70%;
    height: auto;
  }

  #SubHeading {
    text-align: center;
    font-size:xx-large
  }

  #MainText {
    text-align: center;
    font-weight: normal;
    line-height: 25px;
  }

  #content-wrapper {
    display: flex;
    align-items: center;

  }

  #main-image {
    max-width: 50%;
    height: auto;
    padding-right: 20px;
  }

  </style>
  