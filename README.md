# CloudFlare-General-Assignment
This assignment was created with the help of a tutorial series from [Joel Thoms](https://joel.net/key-value-storage-with-cloudflare-workers-kv-lesson-4). It is incomplete as the tests for getting raw JSON from the free [Star Wars API](https://swapi.dev/) have not been verified to be working as intended due to a 500 Internal Server error. 

Packages used: 
* [html-loader 1.0.0-alpha.0](https://www.npmjs.com/package/html-loader)
* [Prettier 1.18.2](https://prettier.io/docs/en/install.html)
* [webpack 4.36.0](https://www.npmjs.com/package/webpack)
* [eslint 8.1.0](https://www.npmjs.com/package/eslint)
* [eslint-config-prettier 8.3.0](https://www.npmjs.com/package/eslint-config-prettier)
* [marked 4.0.0](https://www.npmjs.com/package/marked)

## Notes
* Despite the package.json stating otherwise on the webpack version, I had to force the system to downgrade to 4.36.0 to get it working with the html-loader. The latest html-loader has issues with the latest webpack version, so downgrading was a necessary step in getting the preview to work.

* I'm not sure what's causing the 500 IS Error, but it possibly could be some sort of issue with Google Chrome itself as there's always an Uncaught ReferenceError that appears hand-in-hand when attempting to load any page.
![Error in chrome console](https://i.imgur.com/EaBfZoD.png)
