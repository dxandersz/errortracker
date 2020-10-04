> errortracker@1.0.0 start /home/david/Desktop/General_Assembly/errortracker
> node server.js

/home/david/Desktop/General_Assembly/errortracker/node_modules/express/lib/router/index.js:458
      throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))
      ^

TypeError: Router.use() requires a middleware function but got a Object
    at Function.use (/home/david/Desktop/General_Assembly/errortracker/node_modules/express/lib/router/index.js:458:13)
    at Function.<anonymous> (/home/david/Desktop/General_Assembly/errortracker/node_modules/express/lib/application.js:220:21)
    at Array.forEach (<anonymous>)
    at Function.use (/home/david/Desktop/General_Assembly/errortracker/node_modules/express/lib/application.js:217:7)
    at Object.<anonymous> (/home/david/Desktop/General_Assembly/errortracker/server.js:48:5)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! errortracker@1.0.0 start: `node server.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the errortracker@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/david/.npm/_logs/2020-10-04T04_36_57_193Z-debug.log



######

> errortracker@1.0.0 start /home/david/Desktop/General_Assembly/errortracker
> node server.js

/home/david/Desktop/General_Assembly/errortracker/node_modules/path-to-regexp/index.js:128
  return new RegExp(path, flags);
         ^

SyntaxError: Invalid regular expression: /^\/(?:([^\/]+?))[0-9]+)\/?$/: Unmatched ')'
    at new RegExp (<anonymous>)
    at pathtoRegexp (/home/david/Desktop/General_Assembly/errortracker/node_modules/path-to-regexp/index.js:128:10)
    at new Layer (/home/david/Desktop/General_Assembly/errortracker/node_modules/express/lib/router/layer.js:45:17)
    at Function.route (/home/david/Desktop/General_Assembly/errortracker/node_modules/express/lib/router/index.js:494:15)
    at Function.proto.(anonymous function) [as get] (/home/david/Desktop/General_Assembly/errortracker/node_modules/express/lib/router/index.js:509:22)
    at Object.<anonymous> (/home/david/Desktop/General_Assembly/errortracker/routes/user-router.js:8:12)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! errortracker@1.0.0 start: `node server.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the errortracker@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/david/.npm/_logs/2020-10-04T05_33_40_517Z-debug.log
