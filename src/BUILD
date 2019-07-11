
load("@io_bazel_rules_closure//closure:defs.bzl",
     "closure_css_library",
     "closure_js_library",
     "closure_js_template_library",
     "closure_js_binary",
     "closure_css_binary")

load("@com_google_j2cl//build_defs:rules.bzl",
     "j2cl_application")


closure_css_library(
  name = "sample-css",
  srcs = ["sample.css"],
)

closure_js_template_library(
  name = "sample-tpl",
  srcs = ["sample.soy"]
)

closure_css_binary(
  name = "sample-styles",
  deps = [":sample-css"],
)

closure_js_library(
  name = "sample-js",
  srcs = ["sample.js"],
  deps = [
    ":sample-tpl",
    ":sample-css",
    "@io_bazel_rules_closure//closure/library/soy:soy",
  ]
)

closure_js_binary(
    name = "sample-bin",
    debug = False,
    entry_points = ["sample"],
    deps = [":sample-js"],
    css = ":sample-styles",
    language = "ECMASCRIPT5",
    dependency_mode = "STRICT",
    defs = [
      "--language_in=ECMASCRIPT_2019",
      "--define=bloombox.SERVICE_MODE=binary",
      "--define=jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS=false",
      "--define=goog.net.XmlHttp.ASSUME_NATIVE_XHR=true",
      "--define=goog.json.USE_NATIVE_JSON=true",
      "--define=goog.TRUSTED_SITE=false",
      "--define=goog.ui.Component.ALLOW_DETACHED_DECORATION=true",
      "--define=goog.ASSUME_NATIVE_PROMISE=false",
      "--define=goog.userAgent.jscript.ASSUME_NO_JSCRIPT=true",
      "--define=goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST=true",
      "--define=goog.DEBUG=false",
      "--define=bloombox.DEBUG=false",
      "--define=goog.log.ENABLED=false",
      "--rewrite_polyfills",
      "--process_common_js_modules",
      "--charset=UTF-8",
      "--inject_libraries",
      "--module_resolution=BROWSER"
    ]
)

j2cl_application(
    name = "sample-app",
    entry_points = ["sample"],
    deps = [":sample-js"],
    css = ":sample-styles"
)
