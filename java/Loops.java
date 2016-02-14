public class Loops {
  public static void main(String[] args) {
    int i=0,j=0,d=0;
    int N = 100_000;
    while (i < N) {
      j = i;
      while (j < N) {
        d=d+j+i;
        j++;
      }
      i++;
    }
    System.out.println(i + " - " + j + " - " + d);
    // System.out.println(j);
    // System.out.println(d);
  }
}