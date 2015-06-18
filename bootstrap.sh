#!/usr/bin/env bash

apt-get update
apt-get install -y apache2
apt-get install -y vim
apt-get install -y emacs
apt-get install -y curl

## Optional installs - uncomment as desired
#apt-get install -y default-jre
#apt-get install -y default-jdk
#apt-get install -y tomcat7 tomcat7-docs tomcat7-examples tomcat7-admin

# apt-get install -y nodejs
# apt-get install -y npm

# curl -L https://get.rvm.io  | bash -s 
# source /home/vagrant/.rvm/scripts/rvm
# rvm install ruby
# gem install rails

# Linking /vagrant to /var/www allowing changes to html file in shared directory
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
  echo "<html><body><h1>Hello World</h1></body></html>" > /var/www/index.html
fi

