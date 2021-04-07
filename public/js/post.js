const makePost = async (event) => {
    event.preventDefault();
    const newTitle = $('#postTitle').val();
    const newBody = $('#postBody').val();
    const res = await fetch('/api/post/add', {
        method: 'POST',
        body: JSON.stringify({
            title: newTitle,
            body: newBody
        }),
        headers: {'Content-Type': 'application/json'}
    });
    res.ok ? document.location.replace('/') : alert('Failed to create post');
}
async function delPost(event) {
    event.preventDefault();
    const postId = $(this).attr('data-postId');
    const res = await fetch(`/api/post/del/${postId}`, {
        method: 'DELETE',
        body: JSON.stringify({ postId }),
        headers: { 'Content-Type': 'application/json' }
    })
    res.ok ? document.location.replace('/dashboard') : alert('Failed to delete post');
}
const editPost = async (event) => {
    event.preventDefault();
    const postId = $('#editForm').attr('data-postId');
    const title = $('#editTitle').val();
    const body = $('#editBody').val();
    const res = await fetch(`/api/post/edit/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            postId,
            title,
            body
        }),
        headers: { 'Content-Type': 'application/json'}
    })
    res.ok ? document.location.replace('/dashboard') : alert('Failed to edit post');
}

$(document).ready(() => {
    $('#addPost').submit(makePost);
    $('.delBtn').on('click', delPost);
    $('#editForm').submit(editPost);
})
