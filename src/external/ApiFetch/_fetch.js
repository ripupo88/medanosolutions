export const _fetch = (url) => {
    const myHeaders = new Headers();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    return fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => result)
        .catch((error) => console.log('error', error));
};
