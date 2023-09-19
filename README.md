# MediumcloneAngular

Just another [realworld](https://github.com/gothinkster/realworld) app implementation. Exemplary frontend Medium.com clone powered by Angular 16 and NgRx.

## General information about the project

- Angular 16
  - Standalone Components
  - using signals in user-profile & add-to-favorites component
- NgRx
  - using `inject` in effects
  - @ngrx/router-store to clean state on navigate
- Optimistic updates for favorite/unfavorite
- Style
  - CSS "borrowed" from [here](https://demo.productionready.io/main.css)
  - HTML & CSS classes like [here](https://angular.realworld.io) 
- query-string lib for parsing query params

## Backend

- RealWorld API - https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints
- Swagger - https://realworld-docs.netlify.app/docs/specs/frontend-specs/swagger

## TODO
[ ] - Make tags as pills on edit form and remove them individually
