package webapp

import (
	"strings"      // New import
	"unicode/utf8" // New import
)

// FormData ...
type FormData struct {
	User     string
	OrgIP    string
	DestIP   string
	TunType  string
	Failures map[string]string
}

// Valid ...
func (f *FormData) Valid() bool {
	f.Failures = make(map[string]string)

	if strings.TrimSpace(f.User) == "" {
		f.Failures["User"] = "Must have a user name"
	} else if utf8.RuneCountInString(f.User) > 50 {
		f.Failures["User"] = "C'mon a User with more than 50 chars?"
	}

	if strings.TrimSpace(f.OrgIP) == "" {
		f.Failures["orgIP"] = "Must have a user name"
	} else if utf8.RuneCountInString(f.OrgIP) > 50 {
		f.Failures["orgIP"] = "C'mon a User with more than 50 chars?"
	}

	if strings.TrimSpace(f.DestIP) == "" {
		f.Failures["destIP"] = "Must have a user name"
	} else if utf8.RuneCountInString(f.DestIP) > 50 {
		f.Failures["destIP"] = "C'mon a User with more than 50 chars?"
	}

	permitted := map[string]bool{"dynamic": true, "local": true, "remote": true}
	if strings.TrimSpace(f.TunType) == "" {
		f.Failures["TunType"] = "Must select a tunnel type"
	} else if !permitted[f.TunType] {
		f.Failures["TunType"] = "Tunnel type must be Dynamic, Local, or Remote"
	}

	return len(f.Failures) == 0

}
