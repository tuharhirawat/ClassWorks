document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');
        galleryItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-tags').includes(filter)) {
            item.style.display = 'block'; 
          } else {
            item.style.display = 'none'; 
          }
        });
      });
    });
  });
  