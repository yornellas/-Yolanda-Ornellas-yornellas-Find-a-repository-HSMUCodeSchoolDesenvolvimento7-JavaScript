class Aluno {
    constructor(matricula, nome, cpf, dataNasc, sexo, nomeMae, endereco){
        this.matricula = matricula
        this.nome = nome
        this.cpf = cpf
        this.dataNasc = dataNasc
        this.sexo = sexo
        this.nomeMae = nomeMae
        this.endereco = endereco
    }

    adicionarDados(nomePai, email, tel){
        this.nomePai = nomePai
        this.email = email
        this.tel = tel
    }
}

let alunos = []

class Turma {
    constructor(codigo, nome, descricao, turno){
        this.codigo = codigo
        this.nome = nome
        this.descricao = descricao
        this.turno = turno
    }

    adicionarAluno(){
        let newAluno = criarAluno()
        alunos.push(newAluno)
    }

    removerAluno(){
        let removeAluno = removeAluno(matricula)
        alunos.splice(removeAluno, 0)
    }

    listaALunos(){
        let mostrarLista = ""
        alunos.forEach((alunos) => {
            mostrarLista += alunos.nome +" | "
        })
        alert(mostrarLista)

    }
}

function criarAluno(){
    let matricula = prompt("Digite o número de matrícula")
    let nome = prompt("Digite o nome do aluno")
    let cpf = prompt("Digite o CPF")
    let dataNasc = prompt("Digite a data de nascimento")
    let sexo = prompt("Digite o sexo")
    let nomeMae = prompt("Digite o nome da mãe")
    let endereco = prompt("Digite o endereço")
    
    let aluno = new Aluno(matricula, nome, cpf, dataNasc, sexo, nomeMae, endereco)
    return aluno
}

function removeAluno(matricula){
    let matricula = ("Digite a matrícula do aluno a ser removido")
    let index = alunos.indexOf(matricula)
    return index
}