(function(){

    'use strict'

    var Email = document.getElementById('txtEmail');
    var Pass = document.getElementById('txtPass');
    var btn = document.getElementById('btn');
    var span = document.getElementById('span');
    var spanSenha = document.getElementById('spanSenha');
    
    btn.addEventListener('click', function(e){
        if(Email.value === ""  ){
           span.innerHTML = 'preenche aí, pô';
            e.preventDefault();
        }
        else if(Pass.value === ""){
            spanSenha.innerHTML = 'preenche aí, pô';
            e.preventDefault();

        }
        else {
            document.getElementById('form').submit();
        }
    })

})();

