#!usr/bin/env bash
cp env .env
php spark migrate --all
