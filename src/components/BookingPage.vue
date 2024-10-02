<!--First Page of Website, Bio and Qualifications, Link to bookings page -->

<template>
    <div>
      <header>
        <h1 class="fade-in-text">Book a Consult</h1>
      </header>
      
      <main class="fade-in-text">
        
        <div class="button-container">
          <a href="https://tatara-health.simplecliniconline.com/diary" class="animated-btn" target="_blank">Book Now</a>
        </div>
        
        <div class="content-wrapper-horizontal">
          
          <div class="MainText">
            
            <h3>Initial Consult (60-90 minutes) - $170</h3>
            <p><strong>What to Expect</strong><br>
              During your initial consultation at Tatara Health, Chelsea will take you through a comprehensive 
              review of your health concerns, an in-depth discussion of all body systems, and an analysis of your 
              diet and lifestyle. Physical examinations may include iris, tongue, and nail analysis to ensure a 
              holistic understanding of your health.
            </p>
            <p><strong>Cost</strong><br>
              We work within your budget! Whether you prefer free diet and lifestyle changes or the inclusion 
              of herbs and nutritional supplements, we tailor our approach to suit your needs. Further testing 
              may be required, with additional costs depending on your condition. We'll work these into your 
              budget as needed.
            </p>
            <br>

            <h3>Follow-up Consult (30-45 minutes) - $90</h3>
            <p><strong>What to Expect</strong><br>
              Your follow-up consultation will take place 4-6 weeks after your initial visit. During this session,
              Chelsea will review the remedies, diet, and lifestyle changes previously recommended, assess your
              presenting health concern, discuss any new symptoms, and go over the results of any requested 
              tests or blood work. This consultation is shorter, lasting only 30-45 minutes. 
            </p>
            <p><strong>Cost</strong><br>
              The cost for the follow-up consultation is $90, and as always, we will work within your budget 
              for any additional remedies.
            </p>
            <br>

            <h3>Ongoing Care</h3>
            <p>At Tatara Health, we believe in providing continuous support to help you achieve and maintain
                optimal health. Our ongoing care involves regular check-ins to monitor your progress, make 
                necessary adjustments to your treatment plan, and address any new health concerns that may 
                arise. These sessions will typically last 30-45 minutes and will be scheduled at intervals 
                that best suit your individual needs. The cost for each ongoing care consultation is $90, and
                we remain committed to working within your budget for any additional remedies or testing
                required. Your health journey is our priority, and we're here to support you every step of 
                  the way.
            </p>
            <br>

            <h3>Discovery Call</h3>
            <p>A discovery call is a complimentary, 15-minute phone consultation designed to understand 
              your health goals and concerns. During this call, we will discuss your current health 
              status, any symptoms you’re experiencing, and your wellness objectives. This initial 
              conversation helps us determine how Tatara Health can best support you on your journey to 
              optimal health and allows you to ask any questions you might have about our services. It's 
              the perfect opportunity to ensure we’re the right fit for your holistic health needs.
            </p>
            <h5>Please note all in-person consultations are held in Bordertown, South Australia</h5>

          </div>
          
          <div class="image-container">
            <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\clinic.jpg" alt="Tatarahealth Clinic" class="images">
            <img src="D:\Adelaide Uni Diploma\Projects\tatara-health\tatara-health\src\assets\herbs.jpg" alt="Tatarahealth herbs in stock" class="images">
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

  .MainText {
    text-align: center;
    max-width: 100%;
    margin:20px;
  }


  iframe {
    border: none;
  }

  .animated-btn {
    display: inline-block;
    padding: 12px 25px;
    font-size: 18px;
    font-family: 'french-typewriter', sans-serif;
    font-weight: bold;
    color: white;
    background-color: #4E7E38;
    border: none;
    border-radius: 50px;
    text-decoration: none;
    transition: transform 0.2s ease-in-out;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .animated-btn:hover {
    transform: scale(1.1);
  }

  header {
    padding-bottom: 0px;
  }

  .images {
    max-width: 100%;
    height: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 20px;
    border-radius: 20px;
  }

  .content-wrapper-horizontal {
    display: flex;
    align-items: center;
    max-width: 1250px;
    margin: 0 auto;
  }

  .button-container {
    display: flex;
    justify-content: center; /* Centers horizontally */
    align-items: center;
  }

  .image-container {
    display: flex;              /* Use flexbox to stack images */
    flex-direction: column;     /* Stack images vertically */
    align-items: center;        /* Center images horizontally (optional) */
    gap: 10px;                  /* Space between images */
    margin: 20px;
}

  /* mobile optimised*/
  @media (min-width: 320px) and (max-width: 999px) {
    main {
      padding: 0px;
      padding-left: 0%;
      padding-right: 0%;
    }

    .MainText {
      text-align: center;
      max-width: 100%;
      padding-right: 0px;
    }

    .content-wrapper-horizontal {
      display: block;
    }

    .simple-clinic {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    iframe {
      border: none;
      height: 2300px;
    }
  }
  </style>
  