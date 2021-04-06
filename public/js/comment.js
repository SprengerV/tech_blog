const newComment = async (event) => {
    event.preventDefault();
    const postId = $('#addComment').attr('data-postId');
    const body = $('#newComment').val();
    const res = await fetch('/api/comment/add', {
        method: 'POST',
        body: JSON.stringify({ postId, body }),
        headers: { 'Content-Type': 'application/json' }
    });
    res.ok ? window.location.replace(`/post/${postId}`) : alert('Failed to add comment');
}

$(document).ready(() => {
    $('#addComment').submit(newComment);
})