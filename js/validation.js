$(document).ready(function () {
    var countError = [];
    $("#register").on('click', function () {
        var name = $("#name").val();
        var age = $("#age").val();
        var nickname = $("#nickname").val();
        var isName = name != "" && isNaN(name);
        if (isName) {
            successBorder("name");
            countError[0] = 0;
        } else {
            borderDanger("name");
            countError[0] = 1;
        }
        var isAge = age != "" && age > 0 && !isNaN(age) && age == parseInt(age) && age.length <= 3;
        if (isAge) {
            successBorder("age");
            countError[1] = 0;
        } else {
            borderDanger("age");
            countError[1] = 2;
        }

        var atLeast9charator = nickname.length >= 9 && nickname != "";
        var atLeast1Uppercase = false;
        for (let i = 0; i < nickname.length; i++) {
            var chars = nickname.charAt(i);
            if (isNaN(chars)) {
                var isUpperCase = chars.toUpperCase() == chars;
                atLeast1Uppercase = atLeast1Uppercase || isUpperCase;
            }
        }
        var isNickname = atLeast1Uppercase && atLeast9charator;
        if (isNickname) {
            successBorder("nickname");
            countError[2] = 0;
        } else {
            borderDanger("nickname");
            countError[2] = 3;
        }
        var allValid = isNickname && isName && isAge;
        if (allValid) {
            showMessageSuccess();
        } else {
            showMessageError(countError);
        }
    })
})
var errorSMS = ["Name is empty","Age must be number!","Nickname shall contain one upppercase and 9 chars"];
function successBorder(success) {
    $("#" + success).addClass("border-success").removeClass("border-danger");
}
var borderDanger = (element) => {
    $("#" + element).addClass("border-danger").removeClass("border-success");
}
var showMessageSuccess = () => {
    var success = `
         <div class="alert alert-success">
             success
        </div>
    `;
    $("#message").html(success);
}
var showMessageError = (errors) => {
    var showError = "";
    if(errors[0] == 1) {
        showError += "-"+ errorSMS[0]+"<br>";
    }else {
        showError += "";
    }
    if(errors[1] == 2) {
        showError +="-"+ errorSMS[1]+"<br>";
    }else {
        showError += "";
    }
    if(errors[2] == 3) {
        showError +="-"+ errorSMS[2]+"<br>";
    }else {
        showError += "";
    }
    $("#message").html(`
    <div class="alert alert-danger">
        Error
        <p>${showError}</p>
    </div>
    `);
}