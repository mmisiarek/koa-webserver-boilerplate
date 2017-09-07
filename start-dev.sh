#!/usr/bin/env bash
trap ctrl_c 2
function ctrl_c() {
  echo "CTRL-C trapped"
  docker-compose down
}

docker-compose down && docker-compose build && docker-compose up
