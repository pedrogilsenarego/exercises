package examples;

public class GasFireplace implements Switchable {
    private Status status;

    public void turnOn() {
        status = Status.ON;
        // turn on the gas, ignite the flame
    }
    public void turnOff() {
        status = Status.OFF;
        // turn off the gas
    }
    @Override
    public String toString() {
        String className = this.getClass().getName();
        return "The " + className + " is turned "
                + status.toString().toLowerCase();
    }
}