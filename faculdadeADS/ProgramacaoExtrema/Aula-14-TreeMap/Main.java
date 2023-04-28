import java.util.TreeMap;

class Main {
  public static void main(String[] args) {
    TreeMap<Integer, String> tmap = new TreeMap<Integer, String>();
    
    /* Adicionando elementos */
    tmap.put(1, "João");
    tmap.put(23, "Maria");
    tmap.put(70, "Jorge");
    tmap.put(4, "Eduardo");
    tmap.put(2, "Valentina");
    
    /* Mostrando os valores sendo organizados automaticamente */
    System.out.println(tmap);
  }
}