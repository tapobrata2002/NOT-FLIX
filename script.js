//video controls


//FAQ box
var head = document.querySelectorAll(".tile");
var li = document.querySelectorAll(".faq li");
head.forEach(function(h3, index) {
    h3.addEventListener("click", function() {
        var plus = h3.querySelector(".plus")
        var text = li[index].querySelector(".text")

        if(plus.classList.contains("rotate")) {
            plus.classList.remove("rotate");
            text.classList.remove("show");
        }
        
        else{
            head.forEach(function(elem, index1) {
                elem.querySelector(".plus").classList.remove("rotate");
                li[index1].querySelector(".text").classList.remove("show");
            });
            plus.classList.toggle("rotate");
            text.classList.toggle("show");
        }
    });
});

