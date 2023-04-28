import java.util.*;

class Main {
  public static void main(String[] args) {

    Map<String, Integer> funcSal = new HashMap<String, Integer>(10);

    // Adicionando nome do funcionário e salário ao map
    funcSal.put("Rita", 10000);
    funcSal.put("Samuel", 20000);
    funcSal.put("Maria", 30000);
    funcSal.put("Raquel", 10000); // Valor duplicado também permitido, mas as chaves não devem ser duplicadas
    funcSal.put("Nicolas", null); // O valor também pode ser nulo

    System.out.println("Original Map: " + funcSal);
    // Mostrando Map completo

    // Adicionando novo funcionário ao Mapa para ver a ordem das alterações nos objetos
    funcSal.put("Renato", 23000);
    
    // Removing one key-value pair
    funcSal.remove("Nicolas");
    System.out.println("Updated Map: " + funcSal);
    // Mostrando Map completo
    
    // lmprimir todas as chaves
    System.out.println(funcSal.keySet());
    
    // lmprimindo todos os valores
    System.out.println(funcSal.values());
  }
}