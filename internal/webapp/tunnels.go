package webapp

import (
	"net/http"
)

// GetSSHTunnel ...
func (app *App) GetSSHTunnel(w http.ResponseWriter, r *http.Request) {
	app.RenderHTML(w, r, "ssh.html", nil)
}

// GetNetshTunnel ...
func (app *App) GetNetshTunnel(w http.ResponseWriter, r *http.Request) {
	app.RenderHTML(w, r, "netsh.html", nil)
}

func (app *App) GetSSHSockets(w http.ResponseWriter, r *http.Request) {
	app.RenderHTML(w, r, "sockets.html", nil)
}

func (app *App) GetSSHifconifg(w http.ResponseWriter, r *http.Request) {
	app.RenderHTML(w, r, "ifconfig.html", nil)
}
func (app *App) GetSSHNetstat(w http.ResponseWriter, r *http.Request) {
	app.RenderHTML(w, r, "netstat.html", nil)
}
func (app *App) GetSSHiptables(w http.ResponseWriter, r *http.Request) {
	app.RenderHTML(w, r, "iptables.html", nil)
}
func (app *App) GetSSHIntro(w http.ResponseWriter, r *http.Request) {
	app.RenderHTML(w, r, "sshintro.html", nil)
}
func (app *App) GetSSHSyntax(w http.ResponseWriter, r *http.Request) {
	app.RenderHTML(w, r, "sshsyntax.html", nil)
}
func (app *App) GetSSHCLIOptions(w http.ResponseWriter, r *http.Request) {
	app.RenderHTML(w, r, "sshclioptions.html", nil)
}