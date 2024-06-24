
# Blog post: https://www.aquasec.com/blog/announcing-kube-bench-an-open-source-tool-for-running-kubernetes-cis-benchmark-tests/
# Github: https://github.com/aquasecurity/kube-bench?tab=readme-ov-file
# CIS Downloads: https://downloads.cisecurity.org/#/
curl -L https://github.com/aquasecurity/kube-bench/releases/download/v0.6.14/kube-bench_0.6.14_linux_amd64.deb \-o  kube-bench_0.6.14_linux_amd64.deb
sudo apt install ./kube-bench_0.6.14_linux_amd64.deb
sudo kube-bench