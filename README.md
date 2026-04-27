# EnsetApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.8.

## The composont of a project Angular

### package.json: 
`package.json`: has the list of the libraries of the project.
```bat
run npm install
```
to install the list of the libraries you have in the file.

```bat
run npm install bootstrap
```
to install only bootstrap and add it to the `package.json`

### node_modules:
`node_modules`: has all the libraries of the project. <br>
note : no need to push it to github, only `package.json` is enough.

### angular.json:
`angular.json`: has the setting of the project like the style and other settings.
you can add setting like this on it to use bootstrap.
```json
"styles": [
    "src/styles.css",
    "node_module/bootstrap/dist/css/bootstrap.min.css"
]
```
## src/:
`src/` containes the project it self, it is a single page application (meaning one index that gonna render at the begining).

## src/main.ts:
`main.ts` is the first file gonna execute after index.html and charge the application, it charges the module app.module.ts, and this shows the app component.
<br>
the view is app.html, and the model that has variables is app.ts.<br>
you declare variables here:
```ts
export class App {
  protected readonly title = signal('enset-app');
  email: string = "emailVariable@test.com"
}
```
## app.ts
in `app.ts` it has to parts :
```ts
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
```
`@Component` is a decorator, just like anotation in springboot.<br>
`selector` : is the name you going to use to call it in the view `app.html`.
```html
<app-root></app-root>
```
`templatetUrl`: is where the view part, app.html.<br>
`styleUrl`: path of the css of that component.<br>
<br>
second part : 
```ts
export class App {
  protected readonly title = signal('enset-app');
  email: string = "emailVariable@test.com"
}
```
where we declare the variables.
<br> to show the variables like email in app.html
```html
<h1>{{email}}</h1>
```
![1](pics/1.png)
`app.spec.ts`: for tests unitaires.<br>
by using
```bash
ng test
```
# Craetion of a web component
run : 
```bash
ng g c home
```
`g` : generate<br>
`c` : component<br>
`home` : name of the component.<br>
it gonna create home folder on app folder that has
```bash
CREATE src/app/home/home.spec.ts (540 bytes)
CREATE src/app/home/home.ts (189 bytes)
CREATE src/app/home/home.css (0 bytes)
CREATE src/app/home/home.html (20 bytes)
```

to work with bootstrap there is two ways the first one is the one that mentioned before 
```json
"styles": [
    "src/styles.css",
    "node_module/bootstrap/dist/css/bootstrap.min.css"
]
```
or go to `style.css` next to `index.html` and add
```css
@import "bootstrap/dist/css/bootstrap.min.css";
``` 
after that we add edit app.html
```html
<div class="p-3">
    <nav>
        <button class="btn btn-outline-primary">Home</button>
        <button class="ms-1 btn btn-outline-primary">Products</button>
    </nav>
</div>
```
after we add that we need a routing system. and here where the file `app.routes.ts` comes.
```ts
export const routes: Routes = [
    {path : "home", component : Home},
    {path : "products", component : Products}
];
```
`path` is the route.<br>
`component` is the component that gonna load at that root.<br>
after you can use the routing by in the html :
```html
<nav>
    <button routerLink="/home" class="btn btn-outline-primary">Home</button>
    <button routerLink="/products" class="ms-1 btn btn-outline-primary">Products</button>
</nav>
<router-outlet></router-outlet>
```
`routerLink` you define on it the routing and also you have to add it `app.ts` in the imports
```ts
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
```
`router-outlet` is like the screen where the component gonna be displayed.
![2](pics/2.png)
![3](pics/3.png)

time :
```time
01:01:00
```