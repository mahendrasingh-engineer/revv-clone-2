var searchbarContainer = document.getElementById("searchbarContainer")
      var searchBar = document.getElementById("searchBar");
      window.onscroll = function(){
        if(window.pageYOffset >= 582){
          searchBar.style.display="grid";
          searchbarContainer.style.display= "block";
        } else {
          searchBar.style.display="none";
          searchbarContainer.style.display= "none";
        }
      }