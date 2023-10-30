export default class Cliente {
  readonly #id: string | null;
  readonly #nome: string;
  readonly #idade: number;

  constructor(nome: string, idade: number, id: string | null = null) {
    this.#id = id;
    this.#nome = nome;
    this.#idade = idade;
  }

  static vazio() {
    return new Cliente("", 0);
  }

  get id() {
    return this.#id;
  }

  get nome() {
    return this.#nome;
  }

  get idade() {
    return this.#idade;
  }
}
