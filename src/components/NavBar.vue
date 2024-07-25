<template>
    <nav class="navbar">
      <ul>
        <li><a href="#home" @click.prevent="navigate('home')">Home</a></li>
        <li><a href="#about" @click.prevent="navigate('about')">About</a></li>
        <li><a href="#booking" @click.prevent="navigate('booking')">Booking</a></li>
        <li><a href="#contact" @click.prevent="navigate('contact')">Contact</a></li>
        <li><a href="#FAQ" @click.prevent="navigate('FAQ')">FAQs</a></li>
      </ul>
    </nav>
</template>

<script setup>
import { defineEmits } from 'vue';

// Define emits
const emit = defineEmits(['navigate']);

// Navigate function to emit the event
const navigate = (page) => {
  emit('navigate', page);
};
</script>


<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #FC9AF8; /* Primary color */
  color: #fff7e9;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.navbar li {
  margin: 0;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-family: 'french-typewriter', sans-serif;
}

.navbar a:hover {
  text-decoration: underline;
}

/* mobile optimised*/
@media (min-width: 320px) and (max-width: 999px) {
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #FC9AF8; /* Primary color */
    color: #fff7e9;
    padding: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .navbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }

  .navbar li {
    margin: 0;
  }

  .navbar a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-family: 'french-typewriter', sans-serif;
  }

  .navbar a:hover {
    text-decoration: underline;
  }
}
</style>