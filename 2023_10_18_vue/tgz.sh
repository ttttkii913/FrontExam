#!/bin/bash

alphabet=b
studentNo=202214033
time=`date +"%H%M"`

fileName=${alphabet}${studentNo}-${time}.tgz
tar cvzf ${fileName} --exclude="node_modules" --exclude="*.tgz" *
