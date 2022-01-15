function check(){
    let checkbox = document.querySelector("input[name=checkbox]")
    checkbox.addEventListener('change', function(){
        if (this.checked){
            $('.toggleBurgerMenu').css('height', '100vh')
            $('.toggleBurgerMenu').css('display','flex')
            $('.toggleBurgerMenu').css('flex-direction','column')
            $('.toggleBurgerMenu').css('justify-content', 'space-between')
            $('.toggleBurgerMenu').css('background-color', '#181818')

        }
        else {
            $('.toggleBurgerMenu').css('display', 'none')

        }
    })

}


check();
