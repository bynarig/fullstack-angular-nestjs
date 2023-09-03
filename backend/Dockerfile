# --watch for files doesn`t work (
# NODE version
FROM node:18.17.1

#ports
EXPOSE 3000/tcp
EXPOSE 3000/udp

WORKDIR ./

COPY package.json ./

# Install pnpm
SHELL ["/bin/bash", "-c"]
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy app files
COPY . .

# Build
RUN exec sh && pnpm run build

# run command
CMD pnpm run start

# docker build . -t 'node-backend'
# docker run --name node-backend -v $(pwd):./ -p 3000:3000 node:18.17.1