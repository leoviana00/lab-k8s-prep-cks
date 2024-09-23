## Setup Cluster

- Desabilitar Swap

sudo swapoff -a
sudo sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab

- Carregar modulosm kernel

modprobe overley
modprobe br_netfilter

- Fixar os dois modulos no sistema caso aconteça dele reiniciar

cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

- Mudar alguns parâmetros do s.o para habilitar o `ip forward`

cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

- Carregar as configurações

sysctl --system

- Instalação do Runtime - Containerd

apt install -y containerd

- Configuração

mkdir -p /etc/containerd
containerd config default > /etc/containerd/config.toml
systemctl restart containerd.service

curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.28/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.28/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

apt update
apt install -y kubelet=1.28.0-1.1 kubeadm=1.28.0-1.1 kubectl=1.28.0-1.1

kubeadm token create --print-join-command

curl https://raw.githubusercontent.com/projectcalico/calico/v3.26.0/manifests/calico.yaml -O

export CONTAINER_RUNTIME_ENDPOINT=unix:///run/containerd/containerd.sock

- Documentação:

- Runtime: https://v1-28.docs.kubernetes.io/docs/setup/production-environment/container-runtimes/
- Kubeadm: https://v1-28.docs.kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/