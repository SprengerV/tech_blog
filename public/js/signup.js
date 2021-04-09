const signUpFormHandler = async (event) => {
    try {
        event.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        const passwordConfirm = $('#passwordConfirm').val();
        if (!username) {
            alert('Please enter a username');
            return
        }
        if (!password) {
            alert('Please enter a password');
            return
        }
        if (!passwordConfirm) {
            alert('Please confirm your password');
            return
        }
        if (password === passwordConfirm) {
            const response = await fetch('/api/auth/', {
                method: 'POST',
                body: JSON.stringify({
                    userName: username,
                    password: password
                }),
                headers: { 'Content-Type': 'application/json'}
            });
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('User name already taken');
                return
            }
        } else {
            alert('Password confirmation does not match');
            return
        }
    } catch (err) {
        alert(err);
    }
};

document
    .querySelector('#signupForm')
    .addEventListener('submit', signUpFormHandler)