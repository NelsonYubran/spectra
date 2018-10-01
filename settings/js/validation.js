function NameVal() {
    var NameVal = document.getElementById('NewName').value;

    if (NameVal == null || NameVal.length == 0 || /^\s+$/.test(NameVal)) {
        swal({
            type: 'error',
            title: 'ERROR',
            text: 'Ingresa un nombre',
        });
        return false;
    }

    var PatronNombre = /^([a-z ñáéíóú]{2,60})$/i;
    if (!PatronNombre.test(NameVal)) {
        swal({
            type: 'error',
            title: 'ERROR',
            text: 'No se permiten números o carácteres especiales en el nombre',
        });
        return false;
    }
}
function BioVal(){
    var Bio = document.getElementById('biography').value;
    if (Bio == null || Bio.length == 0 || /^\s+$/.test(Bio)) {
        swal({
            type: 'error',
            title: 'ERROR',
            text: 'Ingresa una Biografía',
        });
        return false;
    }
}
function WebVal(){
    var Website = document.getElementById('Website').value;
    if (Website == null || Website.length == 0 || /^\s+$/.test(Website)) {
        swal({
            type: 'error',
            title: 'ERROR',
            text: 'Ingresa un Sitio Web',
        });
        return false;
    }
    Patron1 = "www..com";
    if (Website.search(Patron1)){
        swal({
            type: 'error',
            title: 'ERROR',
            text: 'Ingresa un Sitio Web correcto',
        });
        return false; 
    }
}
function UserVal(){
    var UsernameVal = document.getElementById('NewUsername').value;
    if (UsernameVal == null || UsernameVal.length == 0 || /^\s+$/.test(UsernameVal)) {
        swal({
            type: 'error',
            title: 'ERROR',
            text: 'Ingresa un Nombre de Usuario',
        });
        return false;
    }

    var PatronUserNameR = /^[0-9a-zA-Z]+$/i;
    if (!PatronUserNameR.test(UsernameVal)) {
        swal({
            type: 'error',
            title: 'ERROR',
            text: 'No se permiten carácteres especiales en Nombre de Usuario, sólo letras y números',
        });
        return false;
    }
}

function EmailVal(){
    var EmailVal = document.getElementById('NewEmail').value;
    if (EmailVal == null || EmailVal.length == 0 || /^\s+$/.test(EmailVal)) {
        swal({
            type: 'error',
            title: 'ERROR',
            text: 'Ingresa un correo',
        });
        return false;
    }

    var Patron = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (EmailVal.search(Patron) == 0) {} else {
        swal({
            type: 'error',
            title: 'ERROR',
            text: 'Ingresa un correo válido',
        });
        return false;
    }
}

function PassVal(){
    var Pass1Val = document.getElementById('NewPass1').value;
    var Pass2Val = document.getElementById('NewPass2').value;
    if (Pass1Val == null || Pass2Val == null && Pass1Val.length == 0 || Pass2Val.length == 0) {
        swal({
            type: 'error',
            title: 'ERROR',
            text: 'Completa los campos',
        });
        return false;
    }
    if (Pass1Val.value != Pass2Val){
        swal({
            type: 'error',
            title: 'ERROR',
            text: 'Las contraseñas deben coincidir',
        });
        return false;
    }
}