// public/write.js
document.addEventListener('DOMContentLoaded', () => {
    const writeForm = document.getElementById('writeForm');

    if (!writeForm) {
        console.error("writeForm을 찾을 수 없습니다. HTML에 id='writeForm'이 있는지 확인하세요.");
        return;
    }

    writeForm.addEventListener('submit', function(e) {
        e.preventDefault();

      
        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');
        const contentInput = document.getElementById('content');

        const boardData = JSON.parse(localStorage.getItem('boardData')) || [];

        const newPost = {
            id: Date.now(),
            title: titleInput.value,
            author: authorInput.value,
            content: contentInput.value,
            date: new Date().toLocaleDateString(),
            views: 0
        };

        if (!newPost.title || !newPost.author) {
            alert('제목과 작성자를 입력해주세요!');
            return;
        }

        boardData.push(newPost);
        localStorage.setItem('boardData', JSON.stringify(boardData));

        alert('성공적으로 저장되었습니다!');

        location.href = './list.html'; 
    });
});