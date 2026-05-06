document.addEventListener('DOMContentLoaded', () => {
    const boardBody = document.querySelector('tbody');
    
   
    const rawData = localStorage.getItem('boardData');
    const boardData = JSON.parse(rawData) || [];


    console.log("불러온 데이터:", boardData);

    if (boardData.length === 0) {
        boardBody.innerHTML = '<tr><td colspan="5" style="text-align:center;">등록된 게시글이 없습니다.</td></tr>';
    } else {
   
        boardBody.innerHTML = ''; 
        
   
        const sortedData = boardData.slice().reverse();
        
        sortedData.forEach((item, index) => {
            const row = `
                <tr>
                    <td>${boardData.length - index}</td>
                    <td><a href="./view.html?id=${item.id}">${item.title}</a></td>
                    <td>${item.author}</td>
                    <td>${item.date}</td>
                    <td>0</td>
                </tr>
            `;
            boardBody.innerHTML += row;
        });
    }
});