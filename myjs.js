const shareButton = document.querySelector('.share-button');
const url = window.location.href;
shareButton.addEventListener('click', event => {
    if (navigator.share) {
        navigator.share({
                title: 'Share this page',
                url: url
            }).then(() => {
                console.log('Thanks for sharing!');
            })
            .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});