public class Cachorro {
	private String nome;	
	
	public Cachorro (String nome) {
		this.nome = nome;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	//Sobrepondo o método da nativo da classe Object
	@Override
	public boolean equals(Object obj) {
		/* "super" é uma palavra reservada,
			 quando usada significa que está chamando o método da classe pai,
			 no caso não altera nada da classe original. 
		return super.equals(obj); */
		
		//Casting do objeto genérico para o tipo cachorro
		Cachorro outroCachorro = (Cachorro) obj;
		return this.nome.equals(outroCachorro .getNome());
	}
	
	@Override
	public String toString() {
		//return super.toString();
		return this.nome;
	}
}