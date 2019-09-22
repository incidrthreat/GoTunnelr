function init() {
    var radios = document.getElementsByClassName('tuntype');

    for (var i = 0; i < radios.length; i++) {
        radios[i].onclick = function() {  // function runs when radio button is clicked
            if (this.value == "dynamic") {  // turn off input fields that make no sense
                // parent selected to get the containing <div> element
                document.getElementById("remote-host-container").setAttribute('hidden', true);
                document.getElementById("remote-host-port-container").setAttribute('hidden', true);
            }
            else if (this.value == "local" || this.value == "remote") {
                document.getElementById("remote-host-container").removeAttribute('hidden');
                document.getElementById("remote-host-port-container").removeAttribute('hidden');
            }
        }
    }
}


function getSSHInputs() {
    
    var radios = document.getElementsByClassName('tuntype');

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            var tuntype = radios[i].value;
        }
    }
    
    var sshuser = document.getElementById("ssh-user").value;
    var resultsTag = document.getElementById("tunnel-results");
    var localport = document.getElementById("local-port").value;
    var sshserverip = document.getElementById("ssh-server").value;
    var remotehostip = document.getElementById("remote-host").value;
    var sshserverport = document.getElementById("ssh-server-port").value;
    var remotehostport = document.getElementById("remote-host-port").value;

    // dynamic tunnel syntax
    if (tuntype == "dynamic") {
        var resultsString = `ssh -p ${sshserverport} -NfD ${localport} ${sshuser}@${sshserverip}`;
    // remote/local tunnel syntax
    } else if (tuntype == "remote" || tuntype == "local") {
        var resultsString = `ssh -p ${sshserverport} -Nf${tuntype == "remote" ? "R" : "L"} ${localport}:${remotehostip}:${remotehostport} ${sshuser}@${sshserverip}`
    }

    var para = document.createElement("p");
    var node = document.createTextNode(resultsString);
    para.appendChild(node);

    var resultsElement = document.getElementById("generated-results");

    if (resultsElement) {
        resultsElement.innerHTML = ''; 
        resultsElement.appendChild(para);
    } else {
        resultsElement = document.createElement("pre");
        resultsElement.setAttribute("id", "generated-results");
        resultsElement.appendChild(para);
        resultsTag.appendChild(resultsElement);
    }
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
