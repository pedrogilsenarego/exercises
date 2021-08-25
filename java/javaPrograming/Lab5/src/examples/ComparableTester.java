package examples;

public class ComparableTester {
    public static void main(String[] args) {
        Point p1 = new Point(10, 20);
        Point p2 = new Point(15, 20);

        if (p1.compareTo(p2) < 0) {
            System.out.println(p1 + " is less than " + p2);
        }
        else if (p1.compareTo(p2) > 0) {
            System.out.println(p1 + " is greater than " + p2);
        }
        else {
            System.out.println(p1 + " is equal to " + p2);
        }
    }
}