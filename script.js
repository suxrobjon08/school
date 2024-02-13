const select = document.getElementById('select');
const image = document.getElementById('image');
const cost = document.getElementById('cost');

select.addEventListener('change', function yangilandi () {
    if (select.value == 'oreo') {
        image.src = './images/oreo.png';
        cost.innerHTML = '1.5';
    } if (select.value == 'digestive') {
        image.src = './images/digestive.png';
        cost.innerHTML = '2.2';
    } if (select.value == 'shortbread') {
        image.src = './images/shortbread.png';
        cost.innerHTML = '1.3';
    } if (select.value == 'gingerbread') {
        image.src = './images/gingerbread.png';
        cost.innerHTML = '4.99';
    } if (select.value == 'biscoff') {
        image.src = './images/biscoff.png';
        cost.innerHTML = '6.22';
    } if (select.value == 'paul-hurst') {
        image.src = './images/paul.png';
        cost.innerHTML = '2.55';
    }
});
