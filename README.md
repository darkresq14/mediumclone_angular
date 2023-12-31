# [MediumcloneAngular](https://darkresq14.github.io/mediumclone_angular/)

Just another [realworld](https://www.realworld.how/) app implementation. Exemplary frontend Medium.com clone powered by Angular 16 and NgRx.
Github repo: https://github.com/gothinkster/realworld

Another Angular Solution [here](https://angular.realworld.io)

## Hosting

Using GitHub Pages to host the app. The app is hosted at https://darkresq14.github.io/mediumclone_angular/

## General information about the project

- Angular 16
  - Standalone Components
  - using signals in user-profile & add-to-favorites component
- NgRx
  - using `inject` in effects
  - @ngrx/router-store to clean state on navigate
- Style
  - CSS "borrowed" from [here](https://demo.productionready.io/main.css)
  - HTML & CSS Class Templates from [here](https://www.realworld.how//docs/specs/frontend-specs/templates) 
- Testing
  - Jest
  - components: `error-message.component.spec.ts`, `pagination.component.spec.ts`
  - service: `utils.service.spec.ts`
- Optimistic updates for favorite/unfavorite
- query-string lib for parsing query params

## Backend

- RealWorld API - https://www.realworld.how//docs/specs/backend-specs/endpoints
- Swagger - https://www.realworld.how//docs/specs/frontend-specs/swagger

## TODO
- [ ] Make tags as pills on edit form and remove them individually
- [ ] Add follow user functionality and button
- [ ] Add comments feature
- [ ] Add a one test file for each of component / service / redux
- [ ] Add automation to run `npm run build prod` before pushing to master
