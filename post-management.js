document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для кнопок редактирования
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const postItem = this.closest('.post-item');
            const postTitle = postItem.querySelector('.post-title').textContent;
            const postDescription = postItem.querySelector('.post-description').textContent;
            const postCategory = postItem.querySelector('.post-category').textContent;

            // Здесь можно открыть модальное окно редактирования
            alert(`Редактирование поста:\nНазвание: ${postTitle}\nОписание: ${postDescription}\nКатегория: ${postCategory}`);
        });
    });

    // Обработчики для кнопок удаления
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Вы уверены, что хотите удалить этот пост?')) {
                const postItem = this.closest('.post-item');
                postItem.style.opacity = '0';
                postItem.style.transition = 'opacity 0.3s';

                setTimeout(() => {
                    postItem.remove();
                    // Здесь можно добавить AJAX-запрос для удаления на сервере
                }, 300);
            }
        });
    });
});
