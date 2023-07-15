FROM ubuntu:22.04
RUN apt update
RUN apt install -yq openjdk-8-jdk
RUN apt install -yq maven 
WORKDIR  /home/springboot-elasticsearch
CMD mvn spring-boot:run  