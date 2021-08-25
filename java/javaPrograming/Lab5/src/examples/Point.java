package examples;

public class Point implements Comparable<Point> {
    private int xCoordinate;
    private int yCoordinate;

    public Point() {
        this(0, 0);
    }

    public Point(int x, int y) {
        xCoordinate = x;
        yCoordinate = y;
    }

    public int getXCoordinate() {
        return xCoordinate;
    }

    public void setXCoordinate(int xCoordinate) {
        this.xCoordinate = xCoordinate;
    }

    public int getYCoordinate() {
        return yCoordinate;
    }

    public void setYCoordinate(int yCoordinate) {
        this.yCoordinate = yCoordinate;
    }

    @Override
    public String toString() {
        return "Point [xCoordinate=" + xCoordinate + ", yCoordinate="
                + yCoordinate + "]";
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + xCoordinate;
        result = prime * result + yCoordinate;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Point other = (Point) obj;
        if (xCoordinate != other.xCoordinate)
            return false;
        if (yCoordinate != other.yCoordinate)
            return false;
        return true;
    }

    @Override
    public int compareTo(Point other) {
        if (this.xCoordinate < other.xCoordinate) {
            return -1;
        }
        else if (this.xCoordinate > other.xCoordinate) {
            return 1;
        }
        else if (this.yCoordinate < other.yCoordinate) {
            return -1;
        }
        else if (this.yCoordinate > other.yCoordinate) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
