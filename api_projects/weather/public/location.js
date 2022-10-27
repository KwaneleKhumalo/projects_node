const getPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(`${long} ${lat}`);
    });
}

 getPosition()

 