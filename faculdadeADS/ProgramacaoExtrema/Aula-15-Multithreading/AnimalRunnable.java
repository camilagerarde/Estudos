class AnimalRunnable implements Runnable {
  @Override
  public void run() {
    for (int x = 1; x < 4; x++) {
      System.out.println("Executado por " + Thread.currentThread().getName());
      try {
        Thread.sleep(1000);
      } catch (InterruptedException ex) {
        ex.printStackTrace();
      }
    }

    System.out.println("Estado da thread: " + Thread.currentThread().getName() + " - " + Thread.currentThread().getState());

    System.out.println("Saída de Thread: " + Thread.currentThread().getName());
  }
}