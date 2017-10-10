### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:8-alpine as builder
# FROM centos:centos7 as builder

COPY package.json package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --prod --build-optimizer



# expose port 4200
# EXPOSE 4200 

# run ng serve on localhost
# CMD ["ng","serve", "--host", "0.0.0.0", "--disable-host-check"] 



### STAGE 2: Setup ###

FROM nginx:1.13.3-alpine

## Copy our default nginx config
# COPY nginx/default.conf /etc/nginx/conf.d/
COPY default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html

## Serve the app 
CMD ["nginx", "-g", "daemon off;"]


