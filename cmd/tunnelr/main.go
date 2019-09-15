package main

import (
	"log"
	"net/http"

	"github.com/incidrthreat/tunnelr/config"
	"github.com/incidrthreat/tunnelr/internal/webapp"
)

func main() {

	htmlDir := "./ui/templates"
	staticDir := "./ui/static"

	log.Println("Starting Server...")

	config, err := config.ConfigurationFromFile("config.json")
	if err != nil {
		panic(err)
	}

	app := &webapp.App{
		HTMLDir:   htmlDir,
		StaticDir: staticDir,
	}

	log.Printf("Starting server on %s", config.ListenInterface)
	err = http.ListenAndServe(config.ListenInterface, app.Routes())
	log.Fatal(err)

}
