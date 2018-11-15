$(document).ready(function() {
    $("#form").on("submit", function(e) {
        e.preventDefault();
        let p1 = $("#Password1").val();
        let p2 = $("#Password2").val();
        if (p1 == p2) {
            $.ajax({
                type: "POST",
                url: "/signup",
                data: $(this).serialize(),
                beforeSend: function(xhr) { //Include the bearer token in header
                    xhr.setRequestHeader("Authorization", 'Bearer ' + "jwt");
                },
                success: (data) => { console.log(data); },
                error: (err) => { console.log(err.responseJSON); }
            });
        } else {
            e.preventDefault();
            alert("düzgün şifre gir !!!!!!!!!!!!");
        }
        return false;
    });
});