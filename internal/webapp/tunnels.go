package webapp

import (
	"net/http"
)

// GetSSHTunnel ...
func (app *App) GetSSHTunnel(w http.ResponseWriter, r *http.Request) {
	app.RenderHTML(w, r, "ssh.html", nil)
}
