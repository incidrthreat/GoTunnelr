function myonload() {
    }

function getInputs() {

    var sshuser = document.querySelector('input[name="sshuser"]');
    var sshserverip = document.querySelector('input[name="sshserverip"]');
    var sshserverport = document.querySelector('input[name="sshserverport"]');
    var remotehostip = document.querySelector('input[name="remotehostip"]');
    var localport = document.querySelector('input[name="localport');
    var remotehostport = document.querySelector('input[name="remotehostport');
    var radios = document.querySelectorAll('[name="tuntype"]');
    var resultsTag = document.getElementById("ssh-results");

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
