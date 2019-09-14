# SpringBootMVCWithReactCode
Project:
1. React application with webpack and babel config
2. Hot load plug-in included
3. Bundled React app using webpack and copied it to static folder of Spring Boot MVC.
4. React application have hashrouter to test routing functionality

Below is useful link to config babel and webpack
 https://blog.logrocket.com/versatile-webpack-configurations-for-your-react-application-e6ebf6615cc/
 
Getting Started :
  Prerequisites: node,jdk,maven,eclipse installed
  Below you will find some information on how to perform common tasks.
  
## Installation Scripts
After cloning/downloading project
- Open eclipse/sts and import maven project
- From command promt, Go to react app folder 
     example: C:\go\to\folder\SpringBootMVCWithReactRouter\src\main\resources\react-code
- run npm install. This will download all the required modules
- run npm run dev. This will run react app on port 8080
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- If we are calling any APIs in spring boot app then run spring boot app. It should be runnning in different port.
  we can configure port in application.properties file
- To bundle the react app, run `npm run prod` this will generate files in build folder.
- Copy these files into static folder under resources and restart spring boot app
- Open [http://localhost:8888](http://localhost:8888), it should open index.html by default.
- By default spring MVC looks for index.html, if html file name is different then you can have controller or view controller in config to forward request to respective html files

#Cheers!!
