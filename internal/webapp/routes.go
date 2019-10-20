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
	r.HandleFunc("/tunnel/netsh", app.GetNetshTunnel).Methods("GET")
	r.HandleFunc("/tunnel/sockets", app.GetSSHSockets).Methods("GET")
	r.HandleFunc("/tunnel/ifconfig", app.GetSSHifconifg).Methods("GET")
	r.HandleFunc("/tunnel/netstat", app.GetSSHNetstat).Methods("GET")
	r.HandleFunc("/tunnel/iptables", app.GetSSHiptables).Methods("GET")
	r.HandleFunc("/tunnel/sshintro", app.GetSSHIntro).Methods("GET")
	r.HandleFunc("/tunnel/sshsyntax", app.GetSSHSyntax).Methods("GET")
	r.HandleFunc("/tunnel/sshclioptions", app.GetSSHCLIOptions).Methods("GET")
	

	// static folder linking
	fs := http.FileServer(http.Dir(app.StaticDir))
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", fs))
	r.PathPrefix("/").HandlerFunc(app.DefaultHandler)

	return r
}
