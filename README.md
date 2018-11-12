# vue-sandbox

## Complete minimalist app
- add PartsView and render lookup result from store
- store Lookup result to store
- add Lookup to router define lookup form submit and log response
- add navigation bar in App.vue
## add axios 0.18.0
- vuesandbox>npm install --save axios@0.18.0 
## add lookup form
 

## add static Bootstrap and jQuery to public folder
- vuesandbox>npm install --save jquery@3.3.1  
- vuesandbox>npm install bootstrap@4.1.3 --save
- Clean `src/components/HelloWorld.vue`

## install dev json-server 
- Run `npm install -g json-server` and! `npm install -save-dev json-server`
- add server script to package.json

```
"scripts":{
    "server": "json-server -p 3001 db.json --watch",
    "json": "json-server -p 3001 db.json --watch"
}
```

now it's possible to run app and json server in two terminals

> npm run json
> npm run serve



## Commit History
- add history mode to router
- install dev json-server

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Removed Links

#### Installed CLI Plugins
- [babel](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel)
    
#### Essential Links
- [Core Docs](https://vuejs.org) 
- [Forum](https://forum.vuejs.org) 
- [Community Chat](https://chat.vuejs.org) 
- [Twitter](https://twitter.com/vuejs) 
- [News](https://news.vuejs.org) 
#### Ecosystem
- [vue-router](https://router.vuejs.org) 
- [vuex](https://vuex.vuejs.org) 
- [vue-devtools](https://github.com/vuejs/vue-devtools#vue-devtools) 
- [vue-loader](https://vue-loader.vuejs.org) 
- [awesome-vue](https://github.com/vuejs/awesome-vue) 
