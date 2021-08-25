package examples;

public abstract class Light implements Switchable {
    private Status status;

    public void turnOn() {
        status = Status.ON;
    }
    public void turnOff() {
        status = Status.OFF;
    }

    public abstract void changeBulb();

    @Override
    public String toString() {
        String className = this.getClass().getName();
        return "The " + className + " is turned "
                + status.toString().toLowerCase();
    }
}