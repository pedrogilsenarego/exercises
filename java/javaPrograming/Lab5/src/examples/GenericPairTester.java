package examples;

public class GenericPairTester {
    public static void main(String[] args) {
        // Create a pair of Points
        GenericPair<Point> points = new GenericPair<>(
                new Point(10, 20), new Point(15, 20));

        Point one = points.getFirstElement();
        System.out.println("X Coordinate: " + one.getXCoordinate());
        System.out.println("Y Coordinate: " + one.getYCoordinate());

        // create a pair of Strings
        GenericPair<String> strings = new GenericPair<>("A", "B");

        String s = strings.getSecondElement();
        System.out.println("Second String: " + s);
    }
}