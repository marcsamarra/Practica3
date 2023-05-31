const body = document.getElementById('body')
const radios =  document.querySelectorAll('input[name="colors"]')

radios.forEach(x=> {
    x.addEventListener('change',function(){
        switch (this.value) {
            case 'dark':
                body.classList.remove('light');
                body.classList.add('dark');
            break;
            case 'light':

                body.classList.remove('dark');
                body.classList.add('light');
            break;

        }


    })

});
