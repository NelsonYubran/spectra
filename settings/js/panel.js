$(document).ready(function () {
    // Panel Optionss
    $(".NP-Opt").click(function () {
        $(".items").css({"color":"rgba(0, 0, 0, 0.4)"});
        $(".options").css({"border-left":"none"});
        $(".NP").css({"color":"#00aced"});
        $(".NP-Opt").css({"border-left":"4px solid #00aced"});
        $(".Forms").css({"background-image":"url('img/BG-Options/NPBG.jpg')"});
        $(".EmailForm").hide(0);
        $(".PassForm").hide(0);
        $(".UsernameForm").hide(0);
        $(".PIForm").show(0);
    });
    $(".NU-Opt").click(function () {
        $(".items").css({"color":"rgba(0, 0, 0, 0.4)"});
        $(".options").css({"border-left":"none"});
        $(".NU").css({"color":"#00aced"});
        $(".NU-Opt").css({"border-left":"4px solid #00aced"});
        $(".Forms").css({"background-image":"url('img/BG-Options/UsernameBG.jpg')"});
        $(".EmailForm").hide(0);
        $(".PassForm").hide(0);
        $(".PIForm").hide(0);
        $(".UsernameForm").show(0);
    });
    $(".CE-Opt").click(function () {
        $(".items").css({"color":"rgba(0, 0, 0, 0.4)"});
        $(".options").css({"border-left":"none"});
        $(".CE").css({"color":"#00aced"});
        $(".CE-Opt").css({"border-left":"4px solid #00aced"});
        $(".Forms").css({"background-image":"url('img/BG-Options/EmailBG.jpg')"});
        $(".EmailForm").show(0);
        $(".PassForm").hide(0);
        $(".PIForm").hide(0);
        $(".UsernameForm").hide(0);
    });
    $(".CS-Opt").click(function () {
        $(".items").css({"color":"rgba(0, 0, 0, 0.4)"});
        $(".options").css({"border-left":"none"});
        $(".CS").css({"color":"#00aced"});
        $(".CS-Opt").css({"border-left":"4px solid #00aced"});
        $(".Forms").css({"background-image":"url('img/BG-Options/PASSBG.jpg')"});
        $(".PassForm").show(0);
        $(".EmailForm").hide(0);
        $(".PIForm").hide(0);
        $(".UsernameForm").hide(0);
    });

    // Form Options - PI
    // Name
    $(".rename").click(function () {
        $(".initial-name").hide(500);
        $(".rename").hide(500);
        $(".NPRename").show(500);
        $( '.img-caption').each(function () {
            this.style.setProperty( 'display', 'none', 'important');
        });
        $(".bio-caption").hide(500);
        $(".website-caption").hide(500);
    });
    $("#cancel-rename").click(function (){
        $(".initial-name").show(500);
        $(".rename").show(500);
        $(".img-caption").show(500);
        $(".NPRename").hide(500);
        $(".NewName").val("");
        $(".bio-caption").show(500);
        $(".website-caption").show(500);
    });
    // IMG-PROFILE MOBILE VERSION
    $(".img-caption").click(function () {
        $( '.img-profile-m').each(function () {
            this.style.setProperty( 'display', 'flex', 'important');
            this.style.setProperty( 'justify-content', 'center', 'important');
        });
        $( '.change-img').each(function () {
            this.style.setProperty( 'display', 'block', 'important');
        });
        $( '.img-form').each(function () {
            this.style.setProperty( 'display', 'flex', 'important');
            this.style.setProperty( 'justify-content', 'center', 'important');
        });
        $(".initial-name").hide(500);
        $(".rename").hide(500);
        $(".bio-caption").hide(500);
        $(".website-caption").hide(500);
    });
    $("#cancel-img").click(function (){
        $(".img-caption").show(500);
        $(".initial-name").show(500);
        $(".rename").show(500);
        $(".bio-caption").show(500);
        $(".website-caption").show(500);
        $(".img-profile-m").hide(500);
        $(".change-img-m").hide(500);
        $(".img-form").hide(500);
    });
    // Bio
    $(".bio-caption").click(function () {
        $(".BioForm").show(500);
        $(".initial-name").hide(500);
        $(".rename").hide(500);
        $( '.img-caption').each(function () {
            this.style.setProperty( 'display', 'none', 'important');
        });
        $(".website-caption").hide(500);
        $( '.PIForm').each(function () {
            this.style.setProperty( 'padding-top', '50px', 'important');
        });
    });
    $("#cancel-bio").click(function (){
        $(".initial-name").show(500);
        $(".rename").show(500);
        $(".img-caption").show(500);
        $(".website-caption").show(500);
        $(".BioForm").hide(500);
        $(".PIForm").css('padding-top', '100px');
    });

    // Website
    $(".website-caption").click(function () {
        $(".WebsiteForm").show(500);
        $(".initial-name").hide(500);
        $(".rename").hide(500);
        $( '.img-caption').each(function () {
            this.style.setProperty( 'display', 'none', 'important');
        });
        $(".bio-caption").hide(500);
    });
    $("#cancel-website").click(function (){
        $(".initial-name").show(500);
        $(".rename").show(500);
        $(".img-caption").show(500);
        $(".bio-caption").show(500);
        $(".WebsiteForm").hide(500);
    });

    // Form Options - Username
    $(".change-username").click(function () {
        $(".UsernameFormCont").show(500);
        $(".initial-username").hide(500);
        $(".change-username").hide(500);
    });
    $("#cancel-username").click(function (){
        $(".UsernameFormCont").hide(500);
        $(".NewUsername").val("");
        $(".initial-username").show(500);
        $(".change-username").show(500);
    });

    // Form Options - Email
    $(".change-email").click(function () {
        $(".EmailFormCont").show(500);
        $(".initial-email").hide(500);
        $(".change-email").hide(500);
    });
    $("#cancel-email").click(function (){
        $(".EmailFormCont").hide(500);
        $(".NewEmail").val("");
        $(".initial-email").show(500);
        $(".change-email").show(500);
    });

    // Form Options - Password
    $(".change-password").click(function () {
        $(".PassFormCont").show(500);
        $(".initial-password").hide(500);
        $(".change-password").hide(500);
    });
    $("#cancel-pass").click(function (){
        $(".PassFormCont").hide(500);
        $(".NewEmail").val("");
        $(".initial-password").show(500);
        $(".change-password").show(500);
        $(".NewPass").val("");
    });

    // Uploader
    $("#img-uploader").change(function(){
        var file = event.target.files[0];
        if(!file.type.match('image/*')) {
            alert("Sólo se permiten imágenes. Inténtelo nuevamente.");
            $(".img-uploader-form").get(0).reset();
            return;
        }
    });
});