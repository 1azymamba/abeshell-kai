build:
	docker image build -t abeshell-kai .

run:
	docker run -d -p 3000:3000 -p 3001:3001 abeshell-kai

stop:
	docker stop $$(docker ps -q --filter ancestor=myapp)

logs:
	docker logs $$(docker ps -q --filter ancestor=myapp)