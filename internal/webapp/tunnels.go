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
