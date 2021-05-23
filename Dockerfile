FROM raspbian/stretch

RUN apt-get -y update

RUN apt-get -y install --no-install-recommends \
    linux-image-rpi

RUN apt-get -y install --no-install-recommends \
    systemd-sysv

