function myonload() {
    }

function getInputs() {

    var user = document.querySelector('input[name="user"]');
    var orgIP = document.querySelector('input[name="orgIP"]');
    var destIP = document.querySelector('input[name="destIP"]');
    var radios = document.querySelectorAll('[name="tuntype"]');
    var resultsTag = document.getElementById("ssh-results");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            var tuntype = radios[i].value;
        }
    }

    if (tuntype == "dynamic") {
        var resultsString = `ssh -p 22 -NfD ${user.value}@${destIP.value}`;
    } else if (tuntype == "remote") {
        var resultsString = `ssh -p 22 -NfR 9000:localhost:9000 ${user.value}@${destIP.value}`
    } else if (tuntype == "local") {
        var resultsString = `ssh -p 22 -NfL 9000:localhost:9000 ${user.value}@${destIP.value}`
    }
    var preArea = document.createElement("pre");
    preArea.innerHTML = resultsString;
    resultsTag.innerHTML = preArea.innerHTML;
}
