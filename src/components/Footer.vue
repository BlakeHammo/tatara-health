    <template>
    <nav class="footer">
        <div class="footer-content">
        <p id="rights">&copy; 2024 Tatara Health. All Rights Reserved.</p>
        <a href="#terms" @click="navigate('terms')">Terms & Conditions</a>
        </div>
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
    .footer {
        width: 100%;
        background-color: #4E7E38; /* Primary color */
        color: #fff7e9;
        text-align: center;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    }

    .footer-content {
        margin: 0 auto;
    }

    #rights {
        margin-bottom: 0px;
        font-family: 'french-typewriter', sans-serif;
    }

    a {
        color: white;
        text-decoration: none;
        font-family: 'french-typewriter', sans-serif;
    }

    a:hover{
        text-decoration: underline;
    }
    </style>