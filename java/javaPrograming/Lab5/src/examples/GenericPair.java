package examples;

public class GenericPair<T> {
    private T first;
    private T second;

    public GenericPair(T one, T two) {
        first = one;
        second = two;
    }

    public T getFirstElement() {
        return first;
    }

    public T getSecondElement() {
        return second;
    }

    public void setFirstElement(T obj) {
        first = obj;
    }

    public void setSecondElement(T obj) {
        second = obj;
    }
}