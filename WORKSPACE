workspace(name = "rewriting_bug")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "bazel_skylib",
    strip_prefix = "bazel-skylib-0.7.0",
    url = "https://github.com/bazelbuild/bazel-skylib/archive/0.7.0.zip",
    sha256 = "bce240a0749dfc52fab20dce400b4d5cf7c28b239d64f8fd1762b3c9470121d8",
)

http_archive(
    name = "com_google_javascript_incremental_dom",
    strip_prefix = "incremental-dom-8866a9e57a216eaa6f3dac94240f437a573842ab",
    url = "https://github.com/bloombox/incremental-dom/archive/8866a9e57a216eaa6f3dac94240f437a573842ab.tar.gz",
    sha256 = "82c041a1a81368b6cac5ebab3cde4da212364674b2d74d4cb0931f7068f7636e",
    build_file = "idom.bzl",
)

http_archive(
    name = "build_bazel_rules_proto",
    strip_prefix = "rules_proto-c5e0081628a2cbaf6855152ffa6a1984c2ff10a5",
    url = "https://github.com/bloombox/rules_proto/archive/c5e0081628a2cbaf6855152ffa6a1984c2ff10a5.tar.gz",
    sha256 = "b851e971f5b8ab82e19ac0ac6a80605a50c476400253b751b7828b3b03134589",
)

local_repository(
    name = "io_bazel_rules_closure",
    path = "/workspace/rules_closure",
)

# load("@io_bazel_rules_closure//closure:defs.bzl", "closure_repositories")

# closure_repositories()

# Load j2cl repository
http_archive(
    name = "com_google_j2cl",
    strip_prefix = "j2cl-56857ec2322ee557652fdba1b75f8d00178f6739",
    url = "https://github.com/bloombox/j2cl/archive/56857ec2322ee557652fdba1b75f8d00178f6739.zip",
    sha256 = "b0f9ce6a06486eaf1593354abac972f6f95e06a93da72a8dd37158ea285cc787",
)

load("@com_google_j2cl//build_defs:rules.bzl", "setup_j2cl_workspace")
setup_j2cl_workspace()
