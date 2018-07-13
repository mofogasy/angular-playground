# Pwa
PWA demo project

## Build and serve
* ng build --prod
* http-server dist/pwa -p 8001

### Https to connect from other devices
* Generation of certificate (only necessary once): openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
  (https://stackoverflow.com/questions/12871565/how-to-create-pem-files-for-https-web-server)
* http-server dist/pwa -p 8001 --ssl

## Update application
1) Build application and start web server as described above.
2) Open localhost:8001
3) Kill http-server
4) Make a change, eg. in app.component.html
5) Build application and start web server as described above.

### Manual Refresh
* Refresh the page (F5) or close the tab containing the application and open a new one. 
* It will be logged that a new version is available. 
* Refresh a second time and the new version will be displayed.

### CheckForUpdate and ActivateUpdate buttons
1) Click the CheckForUpdate button. It will be logged that a new version is available.
2) Click the ActivateUpdate button. It will be logged that the new version is used.
3) Refresh page or open new tab -> the new version is used
