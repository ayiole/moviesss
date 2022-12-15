let uploadButton = document.querySelector('#btn');

uploadButton.addEventListener('click', () => {
    const form = new FormData();

    const file = document.querySelector('#upfile').files[0];
    const file2 = document.querySelector('#upfile2').files[0];
    
    form.append('upfile', file);
    form.append('upfile2', file2);

    fetch(`http://movies/test.php`, { method: 'POST', body: form})
    .then((response) => {
        return response.json();
    }).then((resp)=>{
        console.log(resp)
        return resp;

    });
});