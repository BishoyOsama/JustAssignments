const inputs = document.querySelectorAll("input");
const box = document.querySelector('#checkbox');
const standard = document.querySelector('#standard');
const confirmation  = document.querySelector('#confirmation');
const box2 = document.querySelector('#checkbox1');

const patterns = {
username:/^[a-z\d]{5,12}$/i,
password:/^[\w@-]{8,20}$/ ,
passwordconfirmation:/^[\w@-]{8,20}$/, 
email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
}; 


function validate(field,regex){
   if(regex.test(field.value)){
       field.className = "valid";
   }else{
       field.className = "invalid";
   }
}

// passing over each input to validate 

inputs.forEach((input)=>{
    input.addEventListener('keyup',(event)=>{
        validate(event.target, patterns[event.target.attributes.name.value]);
        if($('#standard').val() === $('#confirmation').val()){
            $('#confirmation').addClass("valid");
        }else if($('#standard').val() !== $('#confirmation').val()){
            $('#confirmation').removeClass('valid');
            $('#confirmation').addClass('invalid');
        }
    });
});


//show password checkbox
box.addEventListener('click',function(){
    if(box.checked == true){
        standard.type = "text";
        confirmation.type = "text"
    }else if(box.checked == false){
        standard.type = "password";
        confirmation.type = "password";
    }
});

//agree to terms checkbox
box2.addEventListener('click',function(){
    if(box2.checked == true){
        $('button').css('cursor','pointer');
        $('button').css('opacity',1);
    }else if(box2.checked == false){
        $('button').css('cursor','not-allowed');
        $('button').css('opacity',0.6);
    }
});