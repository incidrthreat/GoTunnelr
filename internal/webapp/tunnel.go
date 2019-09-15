package webapp

import (
	"net/http"
)

// NewTunnel ...
func (app *App) NewTunnel(w http.ResponseWriter, r *http.Request) {
	app.RenderHTML(w, r, "tunnel.html", nil)
}
