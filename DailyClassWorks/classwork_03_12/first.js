let comments = [];

function renderComments() {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';
    
    comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsList.appendChild(commentElement);
    });
}

function createCommentElement(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    
    const content = document.createElement('p');
    content.innerText = comment.text;
    commentDiv.appendChild(content);
    
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('comment-actions');
    
    const replyButton = document.createElement('button');
    replyButton.innerText = 'Reply';
    replyButton.onclick = () => showReplyInput(comment.id);
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => deleteComment(comment.id);
    
    actionsDiv.appendChild(replyButton);
    actionsDiv.appendChild(deleteButton);
    commentDiv.appendChild(actionsDiv);
    
    if (comment.replies && comment.replies.length > 0) {
        comment.replies.forEach(reply => {
            const replyElement = createCommentElement(reply);
            replyElement.classList.add('reply');
            commentDiv.appendChild(replyElement);
        });
    }
    
    if (comment.showReplyInput) {
        const replyInput = document.createElement('div');
        replyInput.classList.add('add-reply');
        
        const replyTextarea = document.createElement('textarea');
        replyInput.appendChild(replyTextarea);
        
        const replyButton = document.createElement('button');
        replyButton.innerText = 'Post Reply';
        replyButton.onclick = () => postReply(comment.id, replyTextarea.value);
        
        replyInput.appendChild(replyButton);
        commentDiv.appendChild(replyInput);
    }
    
    return commentDiv;
}

function postComment() {
    const commentText = document.getElementById('commentText').value;
    if (commentText.trim() === '') return;

    const newComment = {
        id: new Date().getTime(),
        text: commentText,
        replies: [],
        showReplyInput: false
            ``
    };

    comments.push(newComment);
    document.getElementById('commentText').value = ''; 
    renderComments();
}

function showReplyInput(commentId) {
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        comment.showReplyInput = true;
        renderComments();
    }
}

function postReply(commentId, replyText) {
    if (replyText.trim() === '') return;

    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        const newReply = {
            id: new Date().getTime(),
            text: replyText,
            replies: [],
            showReplyInput: false
        };
        
        comment.replies.push(newReply);
        comment.showReplyInput = false; 
        renderComments();
    }
}

function deleteComment(commentId) {
    comments = comments.filter(c => c.id !== commentId);
    renderComments();
}