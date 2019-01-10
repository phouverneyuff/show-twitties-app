#!/bin/bash

npm run build

docker build -t phob/nginx-twitter -f Dockerfile-nginx .

docker push phob/nginx-twitter:latest