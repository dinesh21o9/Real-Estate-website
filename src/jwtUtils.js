// Function to set the JWT token as a cookie
function setJwtCookie(jwt, expirationMinutes) {
    var expires = "";
  
    if (expirationMinutes) {
      var date = new Date();
      date.setTime(date.getTime() + (expirationMinutes * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
  
    document.cookie = "jwt=" + jwt + expires + "; path=/";
    console.log("cookie set successfully");
  }
  
  // Function to get the JWT token from the cookie
  function getJwtCookie() {
    var cookieName = "jwt=";
    var cookieArray = document.cookie.split(";");
  
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
  
    return "";
  }
  
  // Function to remove the JWT token cookie
  function removeJwtCookie() {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  