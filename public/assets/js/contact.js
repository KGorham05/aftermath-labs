$(document).ready(function () {

    $('#email-modal').modal('hide');
    $('#logo').addClass('animate-it');
    $('#tag-line').addClass('animate-it');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyQODSq6BlayMNUPo3OVlp9HYEkFQMxtv9YH_LhnTg-n6HrSj43/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response)
                $('#email-input').val('');
                $('#email-modal').modal('show');
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('Oh no... something went wrong! Please try again later!')
            })
    })
});

