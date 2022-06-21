'use strict';

global.config = require('config');
global.fse = require('fs-extra');
global.fs = require('fs');
global.path = require('path');
global.errorHandler = require('./middleware/errorHandler').errorHandler;
// global.utils = require('./tools/utils');

global.mainlogger = require('./logger/logger').mainlogger;
global.weblogger = require('./logger/logger').weblogger;

global.strCache = require('./cache').caches.strCache;

global.hashCache = require('./cache').caches.hashCache;
global.helper = require('./controller/helper');

global.requests = require('./tools/request');




