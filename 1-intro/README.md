## How to setup electron

Initialize node project
```cmd
npm init -y
```

Install Electron
```cmd
npm install --save-dev electron 
```
```cmd
npm install --save-dev @types/electron 
```

Install Typescript
```cmd
npm install --save-dev typescript 
```

Initialize Typescript
```cmd
npx tsc --init
```

TS initialize create file name `tsconfig.json` that file have commented line `"outDir"` uncomment it and setup like this `"outDir": "./dist",` to output and save typescript compile files. 

After the setup, now reset `"main": "./dist/index.js"` that in `package.json` file.

Now difine scripts in `package.json` file
```json
"scripts": {
    "start": "npm run build && electron .",
    "build": "tsc"
},
```

Create `index.html` file in root path and create electron app inside `index.ts` file.