import java.util.TreeSet;

class Main {
  public static void main(String[] args) {
    TreeSet<String> playerSet = new TreeSet<String>();

    playerSet.add("Sonia");
    playerSet.add("Zelia");
    playerSet.add("Pedro");
    playerSet.add("Vanessa");
    playerSet.add("Sonia");

    System.out.println("Set Original: " + playerSet);
    System.out.println("Primeiro Nome: " + playerSet.first());
    System.out.println("Último Nome: " + playerSet.last());
    TreeSet<String> newPlySet = (TreeSet<String>) playerSet.subSet("Marcos", "Vanessa");
    System.out.println("Sub set " + newPlySet);
  }
}