#/bin/sh
docker build --no-cache -t adleriacom_adleria .
docker-compose -f docker-compose.yml up -d
