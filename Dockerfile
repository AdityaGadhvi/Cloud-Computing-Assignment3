FROM node:10.15.0
RUN npm install sails -g
ENV NODE_ENV development
WORKDIR C:/Users/adity/Desktop/A3Cloud/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
EXPOSE 1338
CMD sails lift --port 1338