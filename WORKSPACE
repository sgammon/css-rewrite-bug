workspace(name = "rewriting_bug")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# http_archive(
#     name = "io_bazel_rules_closure",
#     strip_prefix = "rules_closure-29ec97e7c85d607ba9e41cab3993fbb13f812c4b",
#     url = "https://github.com/bazelbuild/rules_closure/archive/29ec97e7c85d607ba9e41cab3993fbb13f812c4b.tar.gz",
# )

# load("@io_bazel_rules_closure//closure:defs.bzl", "closure_repositories")

# closure_repositories()

# Load j2cl repository
http_archive(
    name = "com_google_j2cl",
    strip_prefix = "j2cl-77adb6c226d334850946eaaa2d37eeac6c5e99a5",
    url = "https://github.com/bloombox/j2cl/archive/77adb6c226d334850946eaaa2d37eeac6c5e99a5.zip",
)

load("@com_google_j2cl//build_defs:repository.bzl", "load_j2cl_repo_deps")
load_j2cl_repo_deps()

load("@com_google_j2cl//build_defs:rules.bzl", "setup_j2cl_workspace")
setup_j2cl_workspace()
