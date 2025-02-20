document.getElementById('githubButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    alert('You will be redirected to my GitHub!');
    window.location.href = 'https://github.com/ahmedbernawi'; // Replace with your GitHub URL
});
