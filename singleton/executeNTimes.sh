#!/bin/bash

# Check if the number of times to execute is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <number_of_times>"
    exit 1
fi

# Get the number of times to execute
n=$1

# Loop to execute "npm start" n times
for ((i=1; i<=n; i++)); do
    echo "Execution $i:"
    npm start
done