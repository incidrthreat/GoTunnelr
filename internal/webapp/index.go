package webapp

import (
	"net/http"
)

//Index ...
func (app *App) Index(w http.ResponseWriter, r *http.Request) {
	//test := "test"
	app.RenderHTML(w, r, "index.html", nil) //&HTMLData{
	//Data: test,
	//}) // Use the app.RenderHTML() helper.
}
