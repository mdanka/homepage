#!/usr/bin/env bash

# Make sure to install imagemagick first!

set -eux

FOLDER="./src/assets/boxImagesOriginal"
FOLDER2="../boxImages"

# fill size
WIDTH=280
HEIGHT=280

pushd $FOLDER

find . -exec convert \{} -verbose -resize ${WIDTH}x${HEIGHT}\^ ${FOLDER2}/\{} \;

popd

