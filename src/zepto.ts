// Source  : https://www.npmjs.com/package/zeptomail
// License : MIT
// @ts-nocheck <- There are some things even I refuse to do

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Client = /*#__PURE__*/function () {
  function Client() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : obj,
        token = _ref.token,
        _ref$url = _ref.url,
        url = _ref$url === void 0 ? "" : _ref$url,
        debug = _ref.debug,
        _ref$domain = _ref.domain,
        domain = _ref$domain === void 0 ? "" : _ref$domain;

    _classCallCheck(this, Client);

    this.debug = debug;
    this.commonURL = "api.zeptomail.".concat(domain || "com", "/");
    this.errorText = "";

    if (!token) {
      this.errorText = "Send Mail token cannot be empty";
    } else if (!url && !domain) {
      this.errorText = "Provide a valid URL or a domain.";
    }
  } // to get the appropriate correct URL


  _createClass(Client, [{
    key: "getUrl",
    value: function getUrl(url) {
      var scheme = this.clientOption.useHttps ? "" : "https://";
      var host = this.isUrl ? this.clientOption.host : "".concat(this.clientOption.isUrlAPI ? this.clientOption.host : this.commonURL).concat(url);
      return "".concat(scheme).concat(host);
    } // to get header to request

  }, {
    key: "getHeader",
    value: function getHeader() {
      return {
        Authorization: this.token
      };
    } // check whether is it success or not

  }, {
    key: "status",
    value: function status(resp) {
      if (resp.ok) {
        return Promise.resolve(resp);
      }

      throw resp;
    } // convert Response to JSON

  }, {
    key: "toJSON",
    value: function toJSON(resp) {
      console.log("json", resp);
      return resp.json();
    }
  }, {
    key: "validate",
    value: function validate() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : query,
          options = _ref2.options,
          isTemplate = _ref2.isTemplate;

      var valid = true;

      if (!options.to) {
        this.errorText = "To address cannot be empty.";
        valid = false;
      } else if (!options.from) {
        this.errorText = "From address cannot be empty.";
        valid = false;
      } else if (!options.bounce_address) {
        this.errorText = "Bounce address cannot be empty.";
        valid = false;
      } else if (!isTemplate && !options.subject) {
        this.errorText = "Subject cannot be empty.";
        valid = false;
      } else if (isTemplate && !options.mail_template_key) {
        this.errorText = "Provide a valid template key.";
        valid = false;
      }

      return valid;
    }
  }, {
    key: "resultWithBody",
    value: function resultWithBody(method, query, url) {
      var options = query.options,
          resolve,
          reject,
          instance = this;
      var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
      });

      if (!instance.errorText && this.validate(query)) {
        this.httpRequest(fetch(instance.getUrl(url), {
          body: JSON.stringify(options),
          method: method,
          headers: this.getHeader()
        })).then(function (respose) {
          resolve(respose);
        })["catch"](function (e) {
          reject(e);
        });
      } else {
        reject(instance.errorText);
      }

      return promise;
    }
  }, {
    key: "httpRequest",
    value: function httpRequest(fetched) {
      var resolve,
          reject,
          instance = this;
      var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
      });
      fetched.then(instance.status).then(instance.toJSON).then(function (json) {
        /* to debug */
        if (instance.debug) {
          console.log(JSON.stringify("success"));
        }

        resolve(json);
      })["catch"](function (error) {
        if (instance.debug) {
          console.log(JSON.stringify("error"));
        }

        instance.toJSON(error).then(function (error) {
          return reject(error);
        });
      });
      return promise;
    }
  }]);

  return Client;
}();

var SendMailClient = /*#__PURE__*/function (_Client) {
  _inherits(SendMailClient, _Client);

  var _super = _createSuper(SendMailClient);

  function SendMailClient(options) {
    var _this;

    var clientOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SendMailClient);

    _this = _super.call(this, options, clientOption);
    var token = options.token,
        _options$url = options.url,
        url = _options$url === void 0 ? "" : _options$url,
        debug = options.debug;
    _this.token = token;
    _this.debug = debug;
    _this.isUrl = url && url.indexOf("/v1.1") > -1;
    _this.defaultOption = {
      host: url,
      isUrlAPI: url && url.indexOf("/v1.1") === -1,
      useHttps: url.includes("https://"),
      authHeader: "Zoho-enczapikey"
    };
    _this.clientOption = _objectSpread2(_objectSpread2({}, _this.defaultOption), clientOption);
    return _this;
  } // to send mail


  _createClass(SendMailClient, [{
    key: "sendMail",
    value: function sendMail(options) {
      /* to debug */
      if (this.debug) {
        console.log("send mail", this.token);
      }

      return this.resultWithBody("POST", {
        options: options
      }, "v1.1/email");
    } // to send mail with template

  }, {
    key: "sendMailWithTemplate",
    value: function sendMailWithTemplate(options) {
      var query = {
        options: options,
        isTemplate: true
      };
      return this.resultWithBody("POST", query, "v1.1/email/template");
    }
  }, {
    key: "MailBatchWithTemplate",
    value: function MailBatchWithTemplate(options) {
      var query = {
        options: options,
        isTemplate: true
      };
      return this.resultWithBody("POST", query, "v1.1/email/template/batch");
    }
  }]);

  return SendMailClient;
}(Client);

export { SendMailClient };
