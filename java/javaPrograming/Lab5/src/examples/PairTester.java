package examples;

public class PairTester {
    public static void main(String[] args) {
        Point p1 = new Point(10, 20);
        Point p2 = new Point(15, 20);

        Pair points = new Pair(p1, p2);

        Point one = (Point) points.getFirstElement();
        System.out.println("X Coordinate: " + one.getXCoordinate());
        System.out.println("Y Coordinate: " + one.getYCoordinate());

        Point two = (Point) points.getSecondElement();
        System.out.println("X Coordinate: " + two.getXCoordinate());
        System.out.println("Y Coordinate: " + two.getYCoordinate());
    }
}