function init() {
    var radios = document.querySelectorAll('[name="tuntype"]'); 

    for (var i = 0; i < radios.length; i++) {
        radios[i].onclick = function() {  // function runs when radio button is clicked
            if (this.value == "dynamic") {  // turn off input fields that make no sense
                // parent selected to get the containing <div> element
                document.querySelector('input[name="remotehostip"]').parentElement.setAttribute('hidden', true);  
                document.querySelector('input[name="remotehostport').parentElement.setAttribute('hidden', true);
            }
        }
    }
}


function getSSHInputs() {

    var sshuser = document.querySelector('input[name="sshuser"]'),
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
        var resultsString = `ssh -p ${sshserverport.value} -NfD ${localport.value} ${sshuser.value}@${sshserverip.value}`;
    // remote tunnel syntax
    } else if (tuntype == "remote") {
        var resultsString = `ssh -p ${sshserverport.value} -NfR ${localport.value}:${remotehostip.value}:${remotehostport.value} ${sshuser.value}@${sshserverip.value}`
    // local tunnel syntax
    } else if (tuntype == "local") {
        var resultsString = `ssh -p ${sshserverport.value} -NfL ${localport.value}:${remotehostip.value}:${remotehostport.value} ${sshuser.value}@${sshserverip.value}`
    }
    var preArea = document.createElement("pre");
    preArea.innerHTML = resultsString;
    resultsTag.innerHTML = preArea.innerHTML;
}

function getNetshInputs() {

    var localip = document.querySelector('input[name="localip'),
    localport = document.querySelector('input[name="localport'),
    remotehostip = document.querySelector('input[name="remotehostip'),
    remotehostport = document.querySelector('input[name="remotehostport'),
    resultsTag = document.getElementById("netsh-results");

    var resultsString = `netsh interface portproxy add v4tov4 listenaddress=${localip.value} listenport=${localport.value} connectaddress=${remotehostip.value} connectport=${remotehostport.value}`;
    var preArea = document.createElement("pre");
    preArea.innerHTML = resultsString;
    resultsTag.innerHTML = preArea.innerHTML;
}
