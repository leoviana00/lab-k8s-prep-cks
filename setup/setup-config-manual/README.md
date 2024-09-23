## Preparação para Certificação CKS 

## Cluster Setup

0. Subir uma infraestrutura para praticar:

- [ ] Subir 2 vms 
    - [ ] 1 Controlplane (ubuntu)
    - [ ] 1 worker (ubuntu)

1. Passo 1: Primeiro ajuste a ser realizado no sistema operacional antes de qualquer coisa:

- [ ] Caregar 2 múlos de kernel
    - [ ] Overley [ `modeprobe overley` ]
    - [ ] br netfilter [ `modeprobe br_netfilter`]
- [ ] Fixar os dois modulos no sistema caso aconteça dele reiniciar
    - [ ] Criar o arquivo `k8s.conf` com os modulos a serem carregados [ `vim /etc/modules-load.d/k8s.conf` ]
- [ ] Mudar alguns parâmetros do s.o para habilitar o `ip forward` [ `vim /etc/sysctl.d/k8s.conf` ]
    - [ ] Habilitar 3 módulos:
        - [ ] modulo net.bridge.bridge-nf-call-iptables  = 1
        - [ ] modulo net.bridge.bridge-nf-call-ip6tables = 1
        - [ ] modulo net.ipv4.ip_forward = 1
    - [ ] Carregar as configurações [ `sysctl --system` ]

2. Passo 2: Runtime

- [ ] Add o Runtime [ Containerd ] 
    - [ ] Update Sistema Operacional
    - [ ] Instalação do containerd [ `apt install containerd` ]
- [ ] Configuração do containerd
    - [ ] Criar diretorio onde fica a `config` do containerd [ `mkdir -p /etc/containerd ` ]
    - [ ] Gerar arquivo de configuração e jogar para o diretório [ `containerd config default > /etc/containerd/config.toml` ]
    - [ ] Verificar `status` do containerd [ `systemctl status containerd.service` ]
    - [ ] Restart do serviço para aplicar as configurações [ `systemctl restart containerd.service` ]


# First diasbale swap
sudo swapoff -a

# And then to disable swap on startup in /etc/fstab
sudo sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab