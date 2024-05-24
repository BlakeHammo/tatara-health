<!--First Page of Website, Bio and Qualifications, Link to bookings page -->

<template>
    <div>
      <header>
        <h1>Who is Tatara Health?</h1>
      </header>
      
      <main>
        <div class="content-wrapper-horizontal">
          <div class="MainText">
            <p>
            Chelsea holds a Bachelor of Health Sciences in Naturopathy and a Bachelor of Health and Medical Sciences in Public Health, 
            bringing a unique take to natural health care.
            </p>

            <h3>
              Qualifications:
            </h3>

            <li>Bachelor of Health and Medical Sciences in Public Health (University of Adelaide)</li>
            <li>Bachelor of Health Sciences in Naturopathy (Torrens University)</li>
            <li>NHAA Member </li>
            

            <h3>A word from Chelsea</h3>

            <p>Fresh out of high school I was eager to study something in the health, with no realistic ideas of what this would look like for 
              me I stumbled into Public Health. I loved the concept of improving health at a community level, and preventing lifestyle diseases
               that face many Australian’s today. However, I soon realised that public health wasn’t for me. While my goal was to make 
               meaningful change for Australian’s, I felt that this wasn’t possible in the current public health landscape of Australia at 
               the time – so I turned to Naturopathy. After my own health issues and those of my family, I saw the benefit that naturopathy 
               can have on health, but also the meaningful generational change that can come with it. In my practice today, I love to combine 
               my background in public health with my passion for naturopathy to help my clients make meaningful change, and become the 
               healthiest versions of themselves. </p>
          </div>

          <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\IMG_0987.png" alt="Chelsea leaning against a tree" id="main-image">
        </div>
        
        <br>

        <div class="content-wrapper-vertical">
          <div class="MainText" id="bottom-text">
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
            <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\IMG_6399.jpeg" alt="Airial view of old farm" class="image">
            <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\IMG_3811.jpeg" alt="Papa working" class="image">
            <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\IMG_2131.jpeg" alt="Papa working" class="image">

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
    padding: 20px;
    text-align: center;
  }
  
  main {
    padding: 20px;
  }

  .MainText {
    text-align: left;
  }

  #bottom-text {
    text-align: center;
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
    padding-left: 50px;
  }

  .image {
    max-width:30%;
    height: auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  h3 {
    margin-bottom: 0;
  }
  </style>
  