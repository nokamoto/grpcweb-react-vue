package main

import (
	"context"
	"fmt"
	"github.com/nokamoto/grpcweb-react-vue/api"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"log"
	"net"
	"os"
	"strconv"
)

var (
	GrpcServerPort = "GRPC_SERVER_PORT"
)

type Server struct {
	books []*api.Book
}

func (s *Server) CreateBook(_ context.Context, req *api.CreateBookRequest) (*api.Book, error) {
	log.Printf("CreateBook(%s)", req)

	book := req.GetBook()
	book.Name = fmt.Sprintf("books/%d", len(s.books))

	s.books = append(s.books, book)

	return book, nil
}

func (s *Server) ListBook(_ context.Context, req *api.ListBookRequest) (*api.ListBookResponse, error) {
	log.Printf("ListBook(%s)", req)

	res := api.ListBookResponse{
		Books: s.books,
	}

	return &res, nil
}

func main() {
	port, err := strconv.Atoi(os.Getenv(GrpcServerPort))
	if err != nil {
		log.Fatal(err)
	}

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		log.Fatalf("listen tcp port: port=%d err=%s", port, err)
	}

	var opts []grpc.ServerOption
	server := grpc.NewServer(opts...)

	api.RegisterLibraryServer(server, &Server{})

	reflection.Register(server)

	log.Printf("ready to serve: port=%d", port)

	err = server.Serve(lis)
	if err != nil {
		log.Fatalf("serve: err=%s", err)
	}
}
