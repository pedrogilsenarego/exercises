package examples;

public class Pair {
    private Object first;
    private Object second;

    public Pair(Object one, Object two) {
        first = one;
        second = two;
    }

    public Object getFirstElement() {
        return first;
    }

    public Object getSecondElement() {
        return second;
    }

    public void setFirstElement(Object obj) {
        first = obj;
    }

    public void setSecondElement(Object obj) {
        second = obj;
    }
}