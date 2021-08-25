package examples;

public class Fan implements Switchable {
    private Status status;

    public void turnOn() {
        status = Status.ON;
        // begin fan rotation
    }
    public void turnOff() {
        status = Status.OFF;
        // stop fan rotation
    }
    @Override
    public String toString() {
        String className = this.getClass().getName();
        return "The " + className + " is turned "
                + status.toString().toLowerCase();
    }
}