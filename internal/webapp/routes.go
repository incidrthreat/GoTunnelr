package webapp

import (
	"net/http"

	"github.com/gorilla/mux"
)

// Routes ...
func (app *App) Routes() *mux.Router {
	r := mux.NewRouter().StrictSlash(true)

	r.HandleFunc("/", app.Index).Methods("GET")
	r.HandleFunc("/tunnel/ssh", app.GetSSHTunnel).Methods("GET")

	// static folder linking
	fs := http.FileServer(http.Dir(app.StaticDir))
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", fs))
	r.PathPrefix("/").HandlerFunc(app.DefaultHandler)

	return r
}
