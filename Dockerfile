FROM golang:latest

LABEL maintainer="incidrthreat@gamail.com"

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o gotunnelr ./cmd/GoTunnelr/main.go

EXPOSE 8080

CMD ["./gotunnelr"]