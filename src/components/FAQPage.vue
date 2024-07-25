<!--First Page of Website, Bio and Qualifications, Link to bookings page -->

<template>
    <div>
      <header>
        <h1>FAQs</h1>
      </header>
      
      <main>
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
          <h3 @click="toggleParagraph(index)">{{ faq.question }}</h3>
          <p v-show="faq.isVisible" class="faq-answer fade-in-text">
            {{ faq.answer }}
          </p>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'


  const faqs = ref([
    {
      question: "What is naturopathy?",
      answer: `Naturopathy is a system of alternative medicine that centres around the body’s innate ability to heal 
      itself with the support of natural remedies. The profession was established during the 1900’s, but many
      naturopathic practices date back thousands of years. Our work is guided by the six naturopathic principles
      that emphasise treating an individual as a whole and addressing the root cause of illness to bring the 
      body back to health.

      So, how exactly do we do this? Modern naturopathy implements diet and lifestyle modification, nutritional 
      therapeutics and herbal medicine to address the root cause of disease, where evidence-based practices are paramount.
      
      Contrary to popular belief, naturopaths aren’t ‘anti-western medicine’, but rather work alongside doctors and 
      other practitioners to achieve the best outcomes for their clients.`,
      isVisible: false
    },
    {
      question: "What sort of remedies will I receive?",
      answer: `Clients may receive a variety of natural remedies tailored to their individual needs, including 
      herbal remedies in the form of tinctures, capsules, or teas; nutritional supplements such as vitamins 
      and minerals; and personalised diet and lifestyle advice to support overall health and well-being.
      Each treatment plan is customized based on a comprehensive assessment of your health and wellness goals.`,
      isVisible: false
    },
    {
      question: "What is the structure of consults?",
      answer: `Our initial consultation offers a thorough review of your health concerns, including 
      detailed discussions on all body systems, diet, and lifestyle. Physical examinations such as 
      iris, tongue, and nail analysis complement this holistic assessment, typically spanning 60-90 minutes. 
      The consultation fee is $170, excluding remedies, which are customized to fit your budget, whether focusing 
      on free lifestyle adjustments or incorporating herbs and supplements. The follow-up consultation is 
      scheduled 4-6 weeks later and only lasts 30-45 minutes. During this consult previous recommendations will 
      be revisited and any new symptoms or test results assessed. Our ongoing naturopathic care aims to address 
      root causes of illness through personalised approaches, spanning months with flexible appointment frequencies,
       ensuring meaningful, sustainable improvements in your overall health and wellbeing.`,
      isVisible: false
    },
    {
      question: "What is evidence informed holistic healthcare?",
      answer: `Evidence-informed holistic healthcare integrates the best available scientific research 
      with clinical expertise and patient preferences to provide comprehensive care that addresses the whole 
      person—mind, body, and spirit. This approach ensures that treatments and interventions are based on 
      reliable evidence while also considering the patient's unique circumstances, needs, and values. By combining
       conventional medical practices with holistic therapies, evidence-informed holistic healthcare aims to 
       achieve optimal health and well-being through personalised, effective, and compassionate care.`,
      isVisible: false
    },
    {
      question: "What are the contact/working hours of Tatara Health?",
      answer: `Chelsea visits the physical clinic space in Bordertown for one week every month, but you can contact 
      her during business hours any other time.`,
      isVisible: false
    },
    {
      question: "Do you offer online services?",
      answer: `Of course! If you’d prefer to see Chelsea via telehealth, you can book an online consultation via 
      the booking page on the website. Your prescription will be posted to you after the appointment.`,
      isVisible: false
    },
    {
      question: "What happens if I need to change or cancel an appointment?",
      answer: `If you need to cancel an appointment, please notify us at least 24 hours in advance to receive 
      a full refund. Cancellations made less than 24 hours before the scheduled appointment may not be eligible
       for a refund. This policy helps ensure that we can accommodate other clients and manage our schedule effectively.`,
      isVisible: false
    }
  ])
  

  const toggleParagraph = (index) => {
    faqs.value[index].isVisible = !faqs.value[index].isVisible
  }
  </script>
  
  
  <style scoped>
  /* Add your styles for the homepage here */
  
  main {
    padding: 20px;
    padding-left: 15%;
    padding-right: 15%;
  }

  .faq-item {
  margin-bottom: 20px;
  padding-bottom: 5px;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-answer[style] {
  max-height: 1000px; /* Arbitrary large value to ensure full expansion */
}

/* mobile optimised*/
@media (min-width: 320px) and (max-width: 999px) {
  main {
    padding: 0px;
    padding-left: 0%;
    padding-right: 0%;
  }

  .faq-item {
    margin-bottom: 20px;
    padding-bottom: 5px;
  }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .faq-answer[style] {
    max-height: 1000px; /* Arbitrary large value to ensure full expansion */
  }
}

  </style>
  