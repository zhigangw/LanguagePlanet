#!/bin/bash

sudo rm /etc/nginx/sites-enabled/flask_nginx_lingyuanyan.conf
sudo rm /etc/nginx/sites-available/flask_nginx_lingyuanyan.conf
sudo ln -s $PWD/flask_nginx.conf /etc/nginx/sites-available/flask_nginx_lingyuanyan.conf
sudo ln -s $PWD/flask_nginx.conf /etc/nginx/sites-enabled/flask_nginx_lingyuanyan.conf
sudo systemctl daemon-reload
sudo service nginx restart