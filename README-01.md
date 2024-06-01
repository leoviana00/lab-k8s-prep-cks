# Labóratorio de validação do playbook Kubespray

## Objetivo do laboratório e validação do playbook Kubespray e suas funcionalidades.

## Pré-requisitos para execução do laboratório
    . Vagrant
    . VirtualBox
    . Ansible 2.16.6
    . Kubespray 2.24.1

obs: Versões do kubernetes 1.27.0

## Execução do laboratório



### 1. Subir as máquinas virtuais com o Vagra

<a href="./vms/README.md">README.md</a>

### 2. Clonar o repositório do Kubespray

```bash

git clone

```

### 2.Configura o arquivo de inventário
 
 * Pra esse configuração vamos seguir a documentação do README.md do Kubespray começando na linha 24.
 <a href="./kubespray-playbook/README.md">README.md</a>

* Nessa validação estamos utilizando como cni o calico, containerd como runtime e o kubernetes na versão 1.27.0.

* Depois da configuração feita vamos para parte de execução do playbook.

OBS: Para esse laboratório estamos utilizando o usuário vagrant para acesso ssh nas máquinas virtuais.

### 3. Executar o playbook do Kubespray
    
```bash

 ansible-playbook -i inventory/mycluster/hosts.yaml -u vagrant  --become --become-user=root cluster.yml

```

# Adicionar um novo nó no cluster

* Referencia:
    * https://kubespray.io/#/docs/operations/nodes?id=addingreplacing-a-worker-node

### 1. Adicionar um novo nó no cluster

```bash
ansible-playbook -i inventory/mycluster/hosts.yaml -u vagrant  --become --become-user=root scale.yml --limit=k8s-n02
```


### 2. Adicionar um nove control plane no cluster

```bash
ansible-playbook -i inventory/mycluster/hosts.yaml -u vagrant  --become --become-user=root cluster.yml --limit=k8s-m02
```
* Para adicionar mais de um control plane no cluster, basta adicionar o comando --limit=k8s-m02,k8s-m03

### 3. Configurando um service mesh no cluster (ISTIO)
  * Nesse exemplo vamos insta utilizando o istio como service mesh na versão 1.22.0
    * Referencia:
        * https://istio.io/latest/docs/setup/getting-started/

```bash
    cd /tmp
    curl -L https://istio.io/downloadIstio | sh -
    export PATH="$PATH:/tmp/istio-1.22.0/bin"
    istioctl install --set profile=default -y
```