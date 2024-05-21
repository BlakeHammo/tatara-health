<template>
  <NavBar @navigate="changePage"/>
  <div>
    <main>
      <HomePage v-if="currentPage === 'home'" />
      <AboutPage v-if="currentPage === 'about'" />
      <BookingPage v-if="currentPage === 'booking'" />
      <ContactPage v-if="currentPage === 'contact'" />
      <FAQPage v-if="currentPage === 'FAQ'" />
      
    </main>
    <Footer />
  </div>
  
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import BookingPage from './components/BookingPage.vue'
import ContactPage from './components/ContactPage.vue'
import FAQPage from './components/FAQPage.vue'

import { ref } from 'vue'

const currentPage = ref('home') // Set default page to home

// Function to change current page
const changePage = (page) => {
  currentPage.value = page
}


// Example: changePage('booking') to navigate to the booking page
</script>

<style scoped>

/* Add global styles here */
header {
  padding: 20px;
  text-align: center;
}

main {
  padding: 20px;
}

body {
  margin-top: 60px; /* Ensure content is not hidden behind the fixed navbar */
}
</style>
