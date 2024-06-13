//not currently working

export const fadeIn = {
  mounted() {
    const paragraphs = this.$el.querySelectorAll('.hidden');
    paragraphs.forEach((paragraph, index) => {
      setTimeout(() => {
        paragraph.classList.add('visible');
      }, 100 * (index + 1)); // Stagger the animation for each paragraph
    });
  }
};