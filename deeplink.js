/**
 * @name deeplink.js
 * @author Kei Funagayama <kei.topaz@gmail.com>
 * @overview Redirect mobile website users to your native iOS and Android (browser only)
 * @license MIT
 */

(function (global) {
  'use strict';

  /**
   * @name deeplink
   * @namespace deeplink
   */
  var deeplink = {VERSION: '0.4.1'};

  /**
   * Global Settings
   */
  deeplink.settings = {
    wait: 500, // Latency of the URL Scheme.
  };

  /**
   * launch iOS
   *
   * @memberof deeplink
   * @method
   *
   * @example
   * options : {
   *   storeLink: "https://itunes.apple.com/jp/app/twitter/id333903271?mt=8",
   *   urlScheme: "twitter://timeline",
   *   iframe: false
   * }
   */
  deeplink.launchiOS = function (options) {
    if (!!options.iframe) {
      return this._launchiFrame(options)
    }

    var wait = options.wait || deeplink.settings.wait;

    var now = Date.now();

    setTimeout(function () {
      if (Date.now() - now > wait) {
        return;
      }

      window.location = options.storeLink;
    }, 100);

    window.location = options.urlScheme;
  };

  /**
   * launch Android
   *
   * @memberof deeplink
   * @method
   *
   * @example
   * options : {
   *   storeLink: "https://play.google.com/store/apps/details?id=com.twitter.android",
   *   urlScheme: "twitter://timeline"
   * }
   */
  deeplink.launchAndroid = function (options) {
    var wait = options.wait || deeplink.settings.wait;
    if(navigator.userAgent.match(/Chrome/)) {
      location.replace(options.urlScheme);
      setTimeout(function() {
        location.replace(options.storeLink);
      }, wait);

      return;
    }

    deeplink._launchiFrame(options);

  };

  /**
   * launch use iframe
   */
  deeplink._launchiFrame = function (options) {
    var iframe = document.createElement("iframe");
    iframe.src = options.urlScheme;
    iframe.style.border = "none";
    iframe.style.display = 'none';
    iframe.style.width = "1px";
    iframe.style.height = "1px";
    iframe.onload = function() {
      if (!!options.storeLink) {
        window.location = options.storeLink;
      }
    };

    document.body.appendChild(iframe);

  };

  // main

  if (!global.deeplink) {
    // browser
    global.deeplink = {};
    global.deeplink = deeplink;
  }

})(this);
