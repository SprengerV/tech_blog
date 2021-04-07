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
    console.log(postId)
    const res = await fetch(`/api/post/del/${postId}`, {
        method: 'DELETE',
        body: JSON.stringify({ postId }),
        headers: { 'Content-Type': 'application/json' }
    })
    res.ok ? document.location.replace('/dashboard') : alert('Failed to delete post');
}

$(document).ready(() => {
    $('#addPost').submit(makePost);
    $('.delBtn').on('click', delPost);
})
