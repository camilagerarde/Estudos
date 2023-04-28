import java.util.*;

public class Main {
  public static void main(String[] args) {
    Conta contal = new Conta("Eduardo", 5555);
    Conta conta2 = new Conta("Vinicius", 3333);
    Conta conta3 = new Conta("Luíza", 6666);

    List<Conta> contas = new ArrayList<Conta>();
    contas.add(contal);
    contas.add(conta2);
    contas.add(conta3);

    contas.sort(new Comparator<Conta>() {
      @Override
      public int compare(Conta um, Conta dois) {
        if (um.getSaldo() > dois.getSaldo())
          return -1;
        else
          return 1;
      }
    });

    Iterator<Conta> iterator = contas.iterator();
    while (iterator.hasNext()) {
      Conta conta = iterator.next();
      System.out.println(conta);
    }
  }
}