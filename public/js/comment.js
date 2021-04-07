const addComment = async (event) => {
    event.preventDefault();
    const postId = $('#addCommentForm').attr('data-postId');
    const body = $('#addCommentBody').val();
    const res = await fetch('/api/comment/add', {
        method: 'POST',
        body: JSON.stringify({ postId, body }),
        headers: { 'Content-Type': 'application/json' }
    });
    res.ok ? window.location.replace(`/post/${postId}`) : alert('Failed to add comment');
}

$(document).ready(() => {
    $('#addCommentForm').submit(addComment);
})