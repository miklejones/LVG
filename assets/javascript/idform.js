function getAge() {
    var dateString = document.getElementById("date").value;
    if (dateString != "") {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        var da = today.getDate() - birthDate.getDate();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (m < 0) {
            m += 12;
        }
        if (da < 0) {
            da += 30;
        }

        if (age < 18 || age > 100) {
            alert("Age " + age + " is restrict");

        } else {

            alert("Age " + age + " is allowed");
        }
    } else {
        alert("please provide your date of birth");
    }
}


// btn.on('click', function() {
//    console.log(btn)
//   });
$(".btn").on("click", function () {
    var age = $('#age-input').val();
    if (age >= 21) {
        window.location.href = 'sexy.html';
    } else {
        window.location.href = 'index.html';
    }
});