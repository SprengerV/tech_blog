async function addPost(event) {
    event.preventDefault();
    const newTitle = $('#addPostTitle').val();
    const newBody = $('#addPostBody').val();
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
async function editPost(event) {
    event.preventDefault();
    const postId = $('#editPostForm').attr('data-postId');
    const title = $('#editPostTitle').val();
    const body = $('#editPostBody').val();
    const res = await fetch(`/api/post/edit/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({
            postId,
            title,
            body
        }),
        headers: { 'Content-Type': 'application/json'}
    });
    res.ok ? document.location.replace('/dashboard') : alert('Failed to edit post');
}

$(document).ready(() => {
    $('#addPostForm').submit(addPost);
    $('.delBtn').on('click', delPost);
    $('#editPostForm').submit(editPost);
})
