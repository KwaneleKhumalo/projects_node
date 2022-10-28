let latOut = document.querySelector('.lat'),
    longOut = document.querySelector('.long'),
    url = document.querySelector('.url');
   
    window.load = () => {
        autoSubmit();
    }


function autoSubmit() {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        latOut.value = lat;
        longOut.value = long;

        let form = document.querySelector('form');
        form.submit();
        // url.append(`&${latOut.value} ${longOut.value}`);
        console.log(`${latOut.value} ${longOut.value}`);
    });

}

 