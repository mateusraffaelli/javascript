// **a) O tipo `Sala`** (documentado via JSDoc), que representa o formato comum de sala utilizado pelas duas questões:
// - Propriedades:
//   - `id` (number);
//   - `nome` (string);
//   - `categoria` (`"individual" | "grupo" | "laboratorio"`);
//   - `preco` (number);
//   - `quantidade` (number);
//   - `disponivel` (boolean).
// - Esse formato deve representar exatamente o mesmo objeto manipulado pelas funções da primeira questão.

class Sala {
    constructor(id, nome, categoria, preco, quantidade, disponivel){
        this.id = id; 
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.quantidade = quantidade;
        this.disponivel = disponivel
    }
}

// **b) Uma classe "abstrata" `SalaReservavel`** (simule a abstração impedindo a instanciação direta, por exemplo verificando `new.target` no construtor):
// - Propriedades (protegidas — por convenção, sem `#`, já que JS não tem `protected` nativo):
//   - `id` (number): identificador da sala;
//   - `nome` (string): nome da sala;
//   - `categoria` (`"individual" | "grupo" | "laboratorio"`): categoria da sala;
//   - `preco` (number): valor por hora da reserva;
//   - `quantidade` (number): quantidade de horários disponíveis;
//   - `disponivel` (boolean): indica se a sala está liberada para reservas;
//   - `reservas` (lista de objetos `{ usuario: Usuario }`): registra as reservas atuais da sala.
// - Construtor: deve receber um objeto no formato `Sala` e inicializar as propriedades da classe.
// - Métodos:
//   - `descricao()`
//     - Parâmetros: nenhum;
//     - Retorno: `string`;
//     - Comportamento: retorna uma descrição da sala no formato: `"ID: [id], [nome] ([categoria]) - R$ [preco] por hora - horários disponíveis: [quantidade] - disponível: [sim/não]"`.
//   - `reservar(usuario)`
//     - Parâmetros: `usuario` (instância de `Usuario`);
//     - Retorno: `boolean` indicando se a operação foi bem-sucedida;
//     - Comportamento:
//       - permite reservar se a sala estiver disponível e houver horários disponíveis;
//       - decrementa o valor de `quantidade` em caso de sucesso;
//       - define `disponivel` como `false` se `quantidade` for igual a `0` após a reserva;
//       - registra a reserva com o usuário informado;
//       - um mesmo usuário não pode reservar a mesma sala mais de uma vez simultaneamente (não pode ter duas reservas abertas da mesma sala).
//   - `encerrarReserva(usuario)` (abstrato — lance um erro na classe base indicando que deve ser sobrescrito)
//     - Parâmetros: `usuario` (instância de `Usuario`);
//     - Retorno: `number`.
//   - `toSala()`
//     - Parâmetros: nenhum;
//     - Retorno: objeto no formato `Sala`;
//     - Comportamento: retorna um objeto no mesmo formato do tipo `Sala`, refletindo o estado atual da sala reservável, especialmente os valores atualizados de `quantidade` e `disponivel`.

class SalaReservavel {
    constructor(sala){
        this.id = sala.id; 
        this.nome = sala.nome;
        this.categoria = sala.categoria;
        this.preco = sala.preco;
        this.quantidade = sala.quantidade;
        this.disponivel = sala.disponivel
    }

    
}


// **c) A classe `SalaGrupo` que estende `SalaReservavel`:**
// - Propriedade (privada, use `#recursos`):
//   - `recursos` (lista de objetos do tipo `Recurso`).
// - Construtor: deve receber um objeto no formato `Sala` com `categoria` igual a `"grupo"` e inicializar as propriedades herdadas e a propriedade da classe.
// - Métodos:
//   - Implementar o método `encerrarReserva(usuario)`
//     - Retorno: `0` se a reserva for encerrada com sucesso ou `-1` para indicar erro;
//     - Comportamento: encerra a reserva aberta do usuário informado, remove essa reserva da lista de reservas da sala e incrementa o valor de `quantidade`;
//     - define `disponivel` como `true` se `quantidade` for maior que `0` após o encerramento da reserva;
//     - observação: caso o usuário não tenha reservado a sala de grupo, o método deve retornar `-1` para indicar erro. Não é necessário calcular multa nem consultar a hora atual neste método.
//   - Sobrescrever o método `descricao()`
//     - Retorno: `string`;
//     - Comportamento: adicionar ao final da descrição herdada, separado por vírgula, o texto: `"Recursos: [nome] [tipo] ([localizacao])"`;
//     - todos os recursos da lista `recursos` devem ser listados, separados por ponto e vírgula.

// **d) A classe `Usuario`**, que representa um usuário do sistema de reservas:
// - Propriedades (privadas, use `#nome`, `#codigo`, `#codigos`):
//   - `nome` (string): nome do usuário;
//   - `codigo` (number): código do usuário, que deve ser único;
//   - `codigos` (`number[]` — estática): lista de códigos já utilizados para garantir unicidade.
// - Construtor: deve inicializar as propriedades da classe, garantindo que `codigo` seja único.
// - Métodos:
//   - getters para `nome` e `codigo`;
//   - getter estático para `codigos`;
//   - `gerarCodigo()` (estático)
//     - Parâmetros: nenhum;
//     - Retorno: `number`;
//     - Comportamento: gera um código único para um novo usuário.

class Usuario{
    #nome
    #codigo
    static #codigos = []

    constructor(nome){
        this.#nome = nome
        this.#codigo = Usuario.gerarCodigo()
    }

    get nome(){
        return this.#nome
    }

    get codigo(){
        return this.#codigo
    }

    static get codigos(){
        return this.#codigos
    }

    static gerarCodigo(){
        let numeroAleatorio = Math.random()

        while(this.#codigos.include(numeroAleatorio)){
            numeroAleatorio = Math.random()
        }

        this.#codigos.push()
        return numeroAleatorio
    }
}

// **e) O tipo `Recurso`** (documentado via JSDoc), com as seguintes propriedades:
// - `nome` (string);
// - `tipo` (string);
// - `localizacao` (string).

class Recurso{
    constructor(nome, tipo, localizacao){
        this.nome = nome;
        this.tipo = tipo;
        this.localizacao = localizacao;
    }
}