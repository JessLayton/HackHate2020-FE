# Data Collator


The Data Collator provides a unified way for all DDPOs to submit the records that they have collected on victims of hate crimes. Analysis of this data (viewable through the dashboard) will help us gain better understanding of the reporting and impact of these hate crimes.

It is a react application with a python flask back-end and plotly-dash dashboard.

See the backend repository: https://github.com/JessLayton/HackHate2020-BE

See the dashboard repository: https://github.com/JessLayton/HackHate2020-Dashboard

![Settings drawer](./images/data-collator-logo.png =200x200)

## Installation

### For development

* Clone this repository

* Node.js must be installed.

* Add a folder called 'local' under src with a file called 'location.js' containing the following:

```javascript
const location = 'http://[YOUR_BACKEND_LOCATION]'

export default location;
```

To run use:

```bash
npm install

npm start
```

### For deployment

* Clone this repository

* Add a folder called 'local' under src with a file called 'location.js' containing the following:

```javascript
const location = ''

export default location;
```

* Add a folder called 'nginx' under src with a file called 'nginx.conf' containing the following:

```
server {

  listen 80;

  include /etc/nginx/mime.types;

  location / {
    root   /usr/share/nginx/html;
    index  index.html index.htm;
    try_files $uri $uri/ /index.html;
  }

  location /api {
    proxy_pass http://[YOUR_BACKEND_LOCATION]/;
  }

  error_page   500 502 503 504  /50x.html;

  location = /50x.html {
    root   /usr/share/nginx/html;
  }

}
```
* Run the following commands in the hack-hate-inclusion-london directory:

```bash
docker build -t front-end:main .
docker run --restart always -d --name front-end -p 5000:80 front-end:main
```

This will run the application on port 5000

## Themes

Themes under theme.js can be altered / added to suit different design or accessibility requirements.

The themes can be altered in via the settings drawer in the application:

![Settings drawer](/images/themes-drawer.png)


## License
[MIT](https://choosealicense.com/licenses/mit/)