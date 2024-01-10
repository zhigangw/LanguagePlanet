#!/bin/bash
pushd frontend
npm install
npm audit fix
npm run build
popd
