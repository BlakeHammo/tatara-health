<!--First Page of Website, Bio and Qualifications, Link to bookings page -->

<template>
    <div>
      <header>
        <h1 class="fade-in-text">Who is Tatara Health?</h1>
      </header>
      
      <main class="fade-in-text">
        <div class="content-wrapper-horizontal">
          
          <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\IMG_0987.png" alt="Chelsea leaning against a tree" id="main-image" class="margin">
          
          <div class="MainText">
          
            <h3 id="center-text" class="margin">A word from Chelsea</h3>

            <p id="center-text" class="margin">Fresh out of high school I was eager to study something in the health industry, with no realistic ideas of what this would look like for 
              me I stumbled into Public Health. I loved the concept of improving health at a community level, and preventing lifestyle diseases
               that face many Australian’s today. However, I soon realised that public health wasn’t for me. While my goal was to make 
               meaningful change for Australian’s, I felt that this wasn’t possible in the current public health landscape of Australia at 
               the time – so I turned to Naturopathy. After my own health issues and those of my family, I saw the benefit that naturopathy 
               can have on health, but also the meaningful generational change that can come with it. In my practice today, I love to combine 
               my background in public health with my passion for naturopathy to help my clients make meaningful change, and become the 
               healthiest versions of themselves. </p>
          </div>
        </div>

        <br>
        
        <div class="content-wrapper-horizontal">
          <div class="margin">
            <h3>
              Qualifications:
            </h3>

            <li>Bachelor of Health and Medical Sciences in Public Health (University of Adelaide)</li>
            <li>Bachelor of Health Sciences in Naturopathy (Torrens University)</li>
            <li>NHAA Member </li>

            <p>
            Chelsea holds a Bachelor of Health Sciences in Naturopathy and a Bachelor of Health and Medical Sciences in Public Health, 
            bringing a unique take to natural health care.
            </p>
          </div>

          <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\Tatara-Health-Flowers.svg" alt="Tatara Health Brand Flowers" id="Tatara-Flowers" class="margin">

        </div>

        
        

        
        
        <br>
        <br>
        <br>
        <br>

        <div class="content-wrapper-vertical">
          <div class="MainText margin" id="center-text">
            <h3> What is Tatara Health? </h3>
            
            <p>Tatara: a 1000-acre farm located 15km south of Bordertown. The farm was purchased by my great grandparents in the 1950’s, and eventually 
              taken over by my grandparents. It’s where my mum grew up, and a place that holds many happy memories from my childhood. During his time tending 
              the farm, my grandpa (Papa), opted to change the farming practices. He elected not to use chemicals and employed other regenerative farming 
              practices; something that was not easily done at the time. When I had the opportunity to ask Papa why he did this many years later, he told me 
              that the end product of farming is people; and I think that perfectly encapsulates everything that my clinic is about, and the reason I decided 
              to name it in his honour. While unfortunately Papa isn’t here to see my clinic finally come to life, I hope that it can continue his legacy of 
              all things health that he inspired in his family and beyond.  
            </p>
          </div>

          <br>

          <div class="content-wrapper-horizontal">
            <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\IMG_6399.jpeg" alt="Airial view of old farm" class="image margin">
            <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\IMG_3811.jpeg" alt="Papa working" class="image margin">
            <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\IMG_2131.jpeg" alt="Papa working" class="image margin">

          </div>



        </div>


      </main>
    </div>
  </template>
  
  <script setup>
  </script>
  


  
  <style scoped>
  /* Add your styles for the homepage here */
  header {
    padding: 35px;
    text-align: center;
  }
  
  main {
    padding: 20px;
    padding-left: 15%;
    padding-right: 15%;
  }

  .MainText {
    text-align: left;
  }

  #center-text {
    text-align: center;
  }

  .margin { 
    margin-left: 20px;
    margin-right: 20px;
  }

  .content-wrapper-horizontal {
    display: flex;
    align-items: center;
  }

  .content-wrapper-vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  #main-image {
    max-width: 50%;
    height: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }

  .image {
    max-width:30%;
    height: auto;
    margin-left: 20px;
    margin-right: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }

  h3 {
    margin-bottom: 0;
  }

  #Tatara-Flowers {
    padding-top: 40px;
    max-width: 35%;
    height: auto;
    margin-right: 50px;
  }

  /* mobile optimised*/
  @media (min-width: 320px) and (max-width: 999px) {
    header {
      padding: 35px;
      text-align: center;
    }
  
    main {
      padding: 0px;
      padding-left: 0%;
      padding-right: 0%;
    }

    .MainText {
      text-align: left;
    }

    #center-text {
      text-align: center;
    }

    .content-wrapper-horizontal {
      display: block;
      align-items: center;
    }

    .content-wrapper-vertical {
      display: block;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    #main-image {
      max-width: 90%;
      height: auto;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .image {
      max-width:90%;
      height: auto;
      margin-left: 0px;
      margin-right: 0px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h3 {
      margin-bottom: 0;
    }

    #Tatara-Flowers {
      padding-top: 40px;
      max-width: 100%;
      height: auto;
    }

    .margin { 
      margin-left: 5%;
      margin-right: 5%;
    }
  }
  </style>
  