#!/bin/sh


BIN_DIR=`dirname $0`
. "${BIN_DIR}/common.sh"
setup


echo "Frontend"
echo "========"
cd "${PROJECT_ROOT}"
rm -rf build

if [ ! -z "${NPM}" ]; then
  export PACKAGE_MANAGER="${NPM} run-script"
else
  export PACKAGE_MANAGER="${YARN}"
fi

${PACKAGE_MANAGER} build
