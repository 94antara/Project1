var selectButton = document.querySelector("#find-btn");

function findStores () {
    var inputZip = document.querySelector("#zipcode");

    // google map search
    var myMap = `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen
    src="https://www.google.com/maps/embed/v1/search?q=convenience+store+near+${inputZip.value}&key=AIzaSyDOyc_e1ZQBY0X4VWplNnVsajPZnxiYD3w"></iframe>`

    var mapDiv = document.querySelector("#map");
    mapDiv.innerHTML = myMap;

   

}


//AIzaSyDOyc_e1ZQBY0X4VWplNnVsajPZnxiYD3w
selectButton.addEventListener("click", findStores)