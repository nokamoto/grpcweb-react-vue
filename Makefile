
build-api:
	docker run -v $(PWD)/api:/work -it --rm uber/prototool:1.9.0 prototool format -d . || docker run -v $(PWD)/api:/work -it --rm uber/prototool:1.9.0 prototool format -w .
	docker build -t local/protoc -f api/Dockerfile ./api
	docker run -v $(PWD):/work -w /work -it --rm local/protoc protoc --go_out=plugins=grpc,paths=source_relative:. -I . api/*.proto
	docker run -v $(PWD):/work -w /work -it --rm local/protoc protoc -I=. api/*.proto \
		--js_out=import_style=commonjs,binary:react-app/src/library \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:react-app/src/library

start-react-app:
	# docker run -v $(PWD)/react-app:/app -w /app --rm -it -t node:12.16.3-alpine3.11 yarn add react-router react-router-dom @types/react-router @types/react-router-dom
	# docker run -v $(PWD)/react-app:/app -w /app --rm -it -t node:12.16.3-alpine3.11 yarn add google-protobuf
	# docker run -v $(PWD)/react-app:/app -w /app --rm -it -t node:12.16.3-alpine3.11 yarn add grpc-web@1.0.7 --exact
	docker run -v $(PWD)/react-app:/app -w /app -p 3000:3000 --rm -it -t node:12.16.3-alpine3.11 npm start

react-app:
	docker run -v $(PWD):/app -w /app --rm -it -t node:12.16.3-alpine3.11 npx create-react-app react-app --typescript
	mkdir -p react-app/src/library

build:
	docker run -v $(PWD)/react-app:/app -w /app --rm -it -t node:12.16.3-alpine3.11 npm run build
	skaffold dev --port-forward
