# https://github.com/golang/protobuf#installation
FROM golang:1.14.1 as protoc-gen-go

ENV GIT_TAG="v1.3.5"
RUN go get -d -u github.com/golang/protobuf/protoc-gen-go
RUN git -C "$(go env GOPATH)"/src/github.com/golang/protobuf checkout $GIT_TAG
RUN go install github.com/golang/protobuf/protoc-gen-go

# https://github.com/protocolbuffers/protobuf#protocol-compiler-installation
FROM debian:10.3-slim as protoc

RUN apt-get update && apt-get install -y curl unzip

RUN curl -LO https://github.com/protocolbuffers/protobuf/releases/download/v3.11.4/protoc-3.11.4-linux-x86_64.zip

RUN unzip protoc-3.11.4-linux-x86_64.zip

# https://github.com/grpc/grpc-web#code-generator-plugin
FROM debian:10.3-slim as protoc-gen-grpc-web

RUN apt-get update && apt-get install -y curl

RUN curl -LO https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-linux-x86_64

RUN mv protoc-gen-grpc-web-1.0.7-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web

# copy bin
FROM debian:10.3-slim

RUN apt-get update && apt-get install -y git

COPY --from=protoc-gen-go /go/bin/protoc-gen-go /usr/local/bin/protoc-gen-go
COPY --from=protoc-gen-grpc-web /usr/local/bin/protoc-gen-grpc-web /usr/local/bin/protoc-gen-grpc-web

COPY --from=protoc /include /usr/local/include
COPY --from=protoc /bin/protoc /usr/local/bin/protoc

RUN chmod +x /usr/local/bin/protoc
RUN chmod +x /usr/local/bin/protoc-gen-go
RUN chmod +x /usr/local/bin/protoc-gen-grpc-web

WORKDIR /protobuf
