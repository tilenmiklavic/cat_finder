# cat_finder 🐈

## Setup for dev and preview

Make sure npm is installed on your system. 

Git clone the project on a location on your computer and move to cloned folder 

```sh
cd cat_finder
```

Then install all the necessary packages and dependencies

```sh
npm install
```

Run the preview

```sh
npm run dev
```

## Project summary 

This is a technical assignment project, for interview purposes. 

## API usage

The app is using [The Cat API](https://thecatapi.com/) with free tier option. 

It is using two endpoints:
- Breed list endpoint on https://api.thecatapi.com/v1/breeds
- Image search endpoint on https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}

## Project Setup ⚠️

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
