
load("@io_bazel_rules_closure//closure:defs.bzl",
     "closure_css_library",
     "closure_js_library",
     "closure_js_template_library",
     "closure_template_library",
     "closure_js_binary",
     "closure_css_binary",
     "web_library")

load("@com_google_j2cl//build_defs:rules.bzl",
     "j2cl_application")


closure_css_library(
  name = "sample-css",
  srcs = ["sample.css"],
)

closure_js_library(
  name = "xid-js",
  srcs = ["xid.js"],
)

closure_template_library(
  name = "dep-tpl",
  srcs = ["dep.soy"],
)

closure_js_template_library(
  name = "dep-js-tpl",
  srcs = ["dep.soy"],
  js_deps = [":xid-js"],
  incremental_dom = True,
)

closure_template_library(
  name = "sample-tpl",
  srcs = ["sample.soy"],
  deps = [":dep-tpl"],
)

closure_js_template_library(
  name = "sample-js-tpl",
  srcs = ["sample.soy"],
  deps = [
    ":dep-tpl"
  ],
  js_deps = [
    ":xid-js",
    ":dep-js-tpl",
  ],
  incremental_dom = True,
)

closure_css_binary(
  name = "sample-styles",
  deps = [":sample-css"],
  renaming = True,
)

closure_js_library(
  name = "sample-js",
  srcs = ["sample.js"],
  deps = [
    ":xid-js",
    ":sample-js-tpl",
    ":sample-css",
    "@com_google_javascript_incremental_dom//:idom-js",
    "@io_bazel_rules_closure//closure/templates:soy_jssrc_idom",
    "@io_bazel_rules_closure//closure/library/soy:soy",
  ]
)

web_library(
  name = "sample-html",
  srcs = ["sample.html"],
  path = "/"
)

closure_js_binary(
    name = "sample-bin",
    debug = True,
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
    debug = False,
    # formatting = "PRETTY_PRINT",
    entry_points = ["sample"],
    deps = [":sample-js"],
    css = ":sample-styles",
    language = "ECMASCRIPT_2017",
    extra_dev_resources = [
      "sample.html",
      "sample-styles.css",
      "sample-app.js"
    ]
)
