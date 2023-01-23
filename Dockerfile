
FROM node:16.17.0-buster-slim as builder
RUN mkdir adifect-frontend && chown -R node:node adifect-frontend
WORKDIR /fightfinder-frontend
ADD . /fightfinder-frontend

RUN npm install

RUN npm i @material-ui/lab --force
RUN npm i @material-ui/core --force
#RUN npm install react-languages-select --force
#RUN npm install react-use-websocket --force

# ARG BUILD=build
# ARG REACT_APP_BACKEND_API_URL=dev-api.adifect.com
# ARG REACT_APP_FRONTEND_URL=dev.adifect.com

# ENV REACT_APP_BACKEND_API_URL=$REACT_APP_BACKEND_API_URL
# ENV REACT_APP_FRONTEND_URL=$REACT_APP_FRONTEND_URL

# ENV ENVIRONMENT_NAME=$BUILD
# RUN echo "$ENVIRONMENT_NAME $REACT_APP_BACKEND_API_URL $REACT_APP_FRONTEND_URL "

# RUN npm run $ENVIRONMENT_NAME --output-path=build

# FROM nginx:latest

# COPY nginx/nginx-custom.conf /etc/nginx/conf.d/default.conf
# RUN rm -rf /usr/share/nginx/html/*

# COPY --from=builder /fightfinder-frontend/build /usr/share/nginx/html
EXPOSE 3000

#CMD ["nginx", "-g", "daemon off;"]

CMD [ "npm", "start" ]

