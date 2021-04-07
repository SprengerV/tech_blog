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
const delPost = async (event) => {
    const postId = $(this).attr('data-postId');
    const res = await fetch(`/api/post/del/${postId}`, {
        method: 'DELETE',
        body: { postId },
        headers: { 'Content-Type': 'application/json' }
    })
    res.ok ? document.location.replace('/') : alert('Failed to delete post');
}

$(document).ready(() => {
    $('#addPost').submit(makePost);
    $('.delBtn').click(delPost);
})
