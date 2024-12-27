function Addcity() {
    var cityName; 
    var zip = document.getElementById("zip").value; 
    if (zip === "60608") {
        cityName = "Karachi";
    } else if (zip=== "68114") {
        cityName = "Islamabad"; 
    } else if (zip === "53212") {
        cityName = "Lahore"; 
    }
    document.getElementById("city").value = cityName;
}
