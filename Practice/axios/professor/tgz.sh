#!/bin/bash

alphabet=b
studentNo=201514099
time=`date +"%H%M"`

fileName=${alphabet}${studentNo}-${time}.tgz
tar cvzf ${fileName} --exclude="node_modules" --exclude="*.tgz" *
