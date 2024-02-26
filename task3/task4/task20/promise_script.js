function changeImage() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://randomfox.ca/floof/');

    xhr.responseType = 'json';

    xhr.send()

    xhr.onload = () => {
        const data = xhr.response;

        document.querySelector('img').setAttribute('src', data.image);
    };
}