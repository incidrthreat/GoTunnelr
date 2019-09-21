function getInputs() {

    var sshuser = document.querySelector('input[name="sshuser"]');
    sshserverip = document.querySelector('input[name="sshserverip"]'),
    sshserverport = document.querySelector('input[name="sshserverport"]'),
    remotehostip = document.querySelector('input[name="remotehostip"]'),
    localport = document.querySelector('input[name="localport'),
    remotehostport = document.querySelector('input[name="remotehostport'),
    radios = document.querySelectorAll('[name="tuntype"]'),
    resultsTag = document.getElementById("ssh-results");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            var tuntype = radios[i].value;
        }
    }

    // dynamic tunnel syntax
    if (tuntype == "dynamic") {
        if (sshserverport.value == "") {
            var resultsString = `ssh -p 22 -NfD ${localport.value} ${sshuser.value}@${sshserverip.value}`;
        } else {
            var resultsString = `ssh -p ${sshserverport.value} -NfD ${localport.value} ${sshuser.value}@${sshserverip.value}`;
        }
    // remote tunnel syntax
    } else if (tuntype == "remote") {
        if (sshserverport.value == "") {
            var resultsString = `ssh -p 22 -NfR ${localport.value}:${remotehostip.value}:${remotehostport.value} ${sshuser.value}@${sshserverip.value}`
        } else {
            var resultsString = `ssh -p ${sshserverport.value} -NfR ${localport.value}:${remotehostip.value}:${remotehostport.value} ${sshuser.value}@${sshserverip.value}`
        }
    // local tunnel syntax
    } else if (tuntype == "local") {
        if (sshserverport.value == "") {
            var resultsString = `ssh -p 22 -NfL ${localport.value}:${remotehostip.value}:${remotehostport.value} ${sshuser.value}@${sshserverip.value}`
        } else {
            var resultsString = `ssh -p ${sshserverport.value} -NfL ${localport.value}:${remotehostip.value}:${remotehostport.value} ${sshuser.value}@${sshserverip.value}`
        }
    }
    var preArea = document.createElement("pre");
    preArea.innerHTML = resultsString;
    resultsTag.innerHTML = preArea.innerHTML;
}
