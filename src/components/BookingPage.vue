<!--First Page of Website, Bio and Qualifications, Link to bookings page -->

<template>
    <div>
      <header>
        <h1>Book a Consult</h1>
      </header>
      
      <main>
        <div class="content-wrapper-horizontal">
          <div class="MainText">
            <h3>Initial Consult (60-90 minutes) - $170</h3>
            <p>What to Expect:</p>
            <p>During your initial consultation at Tatara Health, Chelsea will take you through a comprehensive 
              review of your health concerns, an in-depth discussion of all body systems, and an analysis of your 
              diet and lifestyle. Physical examinations may include iris, tongue, and nail analysis to ensure a 
              holistic understanding of your health.
            </p>
            <p>Cost:</p>
            <p>We work within your budget! Whether you prefer free diet and lifestyle changes or the inclusion 
              of herbs and nutritional supplements, we tailor our approach to suit your needs. Further testing 
              may be required, with additional costs depending on your condition. We'll work these into your 
              budget as needed.
            </p>
            <br>

            <h3>Return Consult (30-45 minutes) - $90</h3>
            <p>What to Expect:</p>
            <p>Your follow-up consultation will take place 4-6 weeks after your initial visit. During this session,
               Chelsea will review the remedies, diet, and lifestyle changes previously recommended, assess your
                presenting health concern, discuss any new symptoms, and go over the results of any requested 
                tests or blood work. This consultation is shorter, lasting only 30-45 minutes. 
            </p>
            <p>Cost:</p>
            <p>The cost for the follow-up consultation is $90, and as always, we will work within your budget 
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

          </div>
          
          
            <iframe 
              class="simple-clinic"
              src="https://tatara-health.simplecliniconline.com/diary"
            ></iframe>
          
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

  .MainText {
    text-align: left;
    max-width: 40%;
    padding-right: 40px;
  }

  .content-wrapper-horizontal {
    display: flex;
    align-items: center;
  }

  .simple-clinic {
    width: 1000px;
    height: 1300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  iframe {
    border: none;
  }
  </style>
  