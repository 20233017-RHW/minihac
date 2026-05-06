document.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    
    if (!postId) {
        alert('잘못된 접근입니다.');
        location.href = './list.html';
        return;
    }

    const boardData = JSON.parse(localStorage.getItem('boardData')) || [];

  
    const post = boardData.find(item => item.id === Number(postId));

  
    if (post) {
        document.getElementById('view-title').innerText = post.title;
        document.getElementById('view-author').innerText = post.author;
        document.getElementById('view-date').innerText = post.date;
        document.getElementById('view-content').innerText = post.content;
        
        
        console.log("조회된 데이터:", post);
    } else {
   
        alert('존재하지 않는 게시글입니다.');
        location.href = './list.html';
    }
});