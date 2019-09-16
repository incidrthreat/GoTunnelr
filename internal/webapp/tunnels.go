package webapp

import (
	"fmt"
	"net/http"
)

// GetSSHTunnel ...
func (app *App) GetSSHTunnel(w http.ResponseWriter, r *http.Request) {
	app.RenderHTML(w, r, "ssh.html", nil)
}

// CreateSSHTunnel ...
func (app *App) CreateSSHTunnel(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()

	if err != nil {
		app.ClientError(w, http.StatusBadRequest)
		return
	}

	form := &FormData{
		User:    r.PostForm.Get("user"),
		OrgIP:   r.PostForm.Get("orgIP"),
		DestIP:  r.PostForm.Get("destIP"),
		TunType: r.PostForm.Get("tuntype"),
	}

	syntax := ""
	if form.TunType == "dynamic" {
		syntax = fmt.Sprintf("ssh -p %s -NfD %s %s@%s", "22", "9000", form.User, form.DestIP)
	} else if form.TunType == "remote" {
		syntax = fmt.Sprintf("ssh -p %s -NfR %s:%s:%s %s@%s", "22", "9000", "localhost", "9000", form.User, form.DestIP)
	} else if form.TunType == "local" {
		syntax = fmt.Sprintf("ssh -p %s -NfL %s:%s:%s %s@%s", "22", "9000", "localhost", "9000", form.User, form.DestIP)
	}

	if !form.Valid() {
		println(w, form.Failures)
		return
	}

	app.RenderHTML(w, r, "ssh.html", &HTMLData{
		Data: syntax,
	})
}
