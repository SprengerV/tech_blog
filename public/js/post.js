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

$(document).ready(() => {
    $('#addPost').submit(makePost);
})
