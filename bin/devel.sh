#!/bin/sh


BIN_DIR=`dirname $0`
. "${BIN_DIR}/common.sh"
setup

echo "Frontend"
echo "========"
sudo env HOST=$(hostname) "${PACKAGE_MANAGER}" start
