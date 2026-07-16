# Base Image
FROM        node

# Exposed port - same port is defined in server.js
EXPOSE      5001

# The "configuration" which we pass in runtime
# The server will "read" those variables at run time and will print them out
ENV         LANGUAGE    Hebrew
ENV         TOKEN       Hard-To-Guess

# Copy the server to the container
COPY        server.js .

# Start the server
ENTRYPOINT  node server.js