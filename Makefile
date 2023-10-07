USER ?= ouerfman
NS ?= ouerfman
TAG ?= 141022
TEST = ouerfman
PROD = ouerfman
VERSION ?= $(TAG)
IMG_NAME ?= ucmeteor
DOCKER_NAME=$(IMG_NAME)

build:
    #meteor build --directory $APP_BUNDLE_FOLDER --settings settings.json --server-only --architecture os.linux.x86_64
	docker build -t $(TEST)/$(DOCKER_NAME):$(VERSION) -f Dockerfile.prod .

push:	
	docker push $(NS)/$(IMG_NAME):$(VERSION)

docker:
	docker build -t $(TEST)/$(DOCKER_NAME):$(VERSION) -f Dockerfile.prod .
	docker push $(NS)/$(IMG_NAME):$(VERSION)