# MessengerAngular8App

### AWS Static Site Hosting and Code Pipeline

* [Access AWS URL](http://messenger-angular8-app.s3-website-us-east-1.amazonaws.com/){:target="_blank"}
* AWS Code Pipeline : messenger-app-continuous-deployment-pipeline
* AWS S3 Bucket : messenger-angular8-app
* [Build Specs for AWS](https://github.com/nitinkc/messages-app-angular8/blob/master/buildspec.yml)

Just push the changes into the `master` branch and AWS Code Pipeline will pick up the changes and run the build.

## Build woth multiple profile

Use `ng build --configuration dev` to use dev profile

angular.json is updated to have profiles of dev and qa. Dev has spring app port of 5000 to access the server.


## Development server
Run `npm install` to install the project dependencies

Run `ng build` or `ng serve`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.