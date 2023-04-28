class Main {
  public static void main(String[] args) throws Exception {
    // Tornar objeto Runnable
    AnimalRunnable anr = new AnimalRunnable();

    Thread Gato = new Thread(anr);
    Gato.setName("Gato");
    Thread Cachorro = new Thread(anr);
    Thread Vaca = new Thread(anr);
    Vaca.setName("Vaca");
    System.out.println("Estado da thread Gato antes de iniciar:  " + Gato.getState());
    Gato.start();
    Cachorro.start();
    Vaca.start();

    System.out.println("Estado da thread Gato no método principal antes de dormir: " + Gato.getState());
    System.out.println("Estado da thread Cachorro no método principal antes de dormir: " + Cachorro.getState());
    System.out.println("Estado da thread Vaca no método principal antes de dormir: " + Vaca.getState());
    Thread.sleep(10000);
    System.out.println("Estado da thread Gato no método principal antes de dormir: " + Gato.getState());
    System.out.println("Estado da thread Cachorro no método principal antes de dormir: " + Cachorro.getState());
    System.out.println("Estado da thread Vaca no método principal antes de dormir: " + Vaca.getState());
  }
}