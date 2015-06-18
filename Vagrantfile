Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/precise32"
  config.vm.provision :shell, path: "bootstrap.sh"
  # apache on virtual host port 80, localhost:8080
  config.vm.network :forwarded_port, host: 8080, guest: 80
  # tomcat on virtual host port 8080, localhost:9090
  config.vm.network :forwarded_port, host: 9090, guest: 8080
end
