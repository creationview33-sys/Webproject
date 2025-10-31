document.addEventListener('DOMContentLoaded', function() {

    // --- "See More" Functionality ---
    const seeMoreBtn = document.getElementById('see-more-btn');
    const moreProducts = document.getElementById('more-products');

    if (seeMoreBtn && moreProducts) {
        seeMoreBtn.addEventListener('click', function() {
            moreProducts.classList.toggle('expanded');
            seeMoreBtn.textContent = moreProducts.classList.contains('expanded')
                ? 'See Less'
                : 'See More';
        });
    }

    // --- WhatsApp Button Functionality ---
    const buyButtons = document.querySelectorAll('.buy-btn');
    const whatsappNumber = '+265996235143'; // your WhatsApp number

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent.trim();
            const productPrice = productCard.querySelector('.price').textContent.trim();
            const productImageUrl = productCard.querySelector('.product-image').getAttribute('src');

            // Build WhatsApp message
            const message = 
`Hi! 👋 I'm interested in this product:

*${productName}*
💰 Price: ${productPrice}

🖼️ Product image: ${window.location.origin}/${productImageUrl}

Can you please provide more details?`;

            // Encode and open WhatsApp link
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
        });
    });

});



document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".testimonials-container");
  const testimonials = document.querySelectorAll(".testimonial");
  const total = testimonials.length;
  let index = 0;

  function showNextPair() {
    index = (index + 2) % total;
    const offset = -(index * 50); // 50% = two cards width
    container.style.transform = `translateX(${offset}%)`;
  }

  // Auto slide every 5 seconds
  setInterval(showNextPair, 5000);
});



document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
    });
  });