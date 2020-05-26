FROM golang:1.14.1-alpine3.11 as bin

RUN apk add --no-cache git

WORKDIR /src

COPY go.mod .
COPY go.sum .

RUN go mod download

COPY cmd/server cmd/server
COPY api api

RUN go install ./cmd/server

FROM alpine:3.11

COPY --from=bin /go/bin/server /usr/local/bin/server

ENTRYPOINT [ "server" ]
