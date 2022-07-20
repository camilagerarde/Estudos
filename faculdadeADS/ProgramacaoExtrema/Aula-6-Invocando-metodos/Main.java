public class Main {
	public static void main(String[] args) {
		Aluno aluno = new Aluno("Fulano", "Silva", 25);
		System.out.println(aluno.getNome());
		aluno.setNome("Beltrano");
		System.out.println(aluno.getNome());  
	}
}