#
# Dockerfile for dooh
# (c) 2014 Optimal Bits Sweden AB.
#

# FROM    ubuntu:14.04
FROM optimalbits/nodejs:0.12.9

ENV HOME /root

# Build tools
RUN apt-get -y update
RUN apt-get install -y -q git sed

#
# Add files
# It may be better to actually clone the repo for faster deployments...
# ADD . /root/dooh

#
# Temporally add SSH deploy keys
#
#ADD ./deploy/.ssh /root/.ssh
#RUN echo "IdentityFile /root/.ssh/id_rsa" >> /etc/ssh/ssh_config
#RUN ssh -o StrictHostKeyChecking=no git@github.com | :

#
# Clone the release branch
#
RUN git clone https://github.com/OptimalBits/adleria.com.git -b master --depth 1 --single-branch /adleria.com

#
# Add Shrinkwrapper
#
#ADD ./npm-shrinkwrap.json ./adleria.com/npm-shrinkwrap.json

#
# Install dependencies (we cannot install as production since we need to build)
#
#RUN cd /root/dooh; npm install --production
RUN cd /adleria.com; npm install

#
# Remove SSH keys.
#
#RUN rm /root/.ssh/id_rsa*

#
# Remove reference to the deploy key
#
#RUN sed -i '$ d' /etc/ssh/ssh_config

#
# Build production files
#
RUN cd /adleria.com; node build.js

#
# Clean APT
#
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

