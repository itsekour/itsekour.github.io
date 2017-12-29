window.addEventListener("load", function() {



    var menuBtn = document.getElementById("menu-btn");

    menuBtn.addEventListener("click", function (e) {

        var node = document.getElementById("profPic");
        node.classList.toggle("hide");
        node.classList.toggle("profile-picture");

    });

});


