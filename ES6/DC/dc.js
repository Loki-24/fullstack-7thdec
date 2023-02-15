function display_Dc() {
    //var ct = new Date().toLocaleTimeString()
    setInterval(() => {
        var ct = new Date().toLocaleTimeString()
        document.getElementById('dc').innerHTML = ct
    }, 1000);

}