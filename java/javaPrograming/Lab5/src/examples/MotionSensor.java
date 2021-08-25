package examples;

public class MotionSensor {
    private Switchable[] items;
    private int count = 0;

    public MotionSensor(int numItems) {
        items = new Switchable[numItems];
    }
    public void add(Switchable s) {
        if (count < items.length)
            items[count++] = s;
        // else throw exception
    }
    public void motionDetected() {
        System.out.println("Motion Detected");
        for (Switchable item : items) {
            if (item != null)
                item.turnOn();
        }
    }
    public void timeout() {
        // Need to add code to determine if enough time has elapsed
        System.out.println("Timeout occurred");
        for (Switchable item : items) {
            if (item != null)
                item.turnOff();
        }
    }
    public String toString() {
        StringBuilder builder = new StringBuilder();
        for (Switchable item : items) {
            if (item != null)
                builder.append(item.toString() + "\n");
        }
        return builder.toString();
    }
    public static void main(String[] args) {
        MotionSensor sensor = new MotionSensor(4);
        sensor.add(new FluorescentLamp());
        sensor.add(new HalogenLight());
        sensor.add(new GasFireplace());
        sensor.add(new Fan());
        // sensor.add(new Light());

        sensor.motionDetected();
        System.out.println(sensor);
        sensor.timeout();
        System.out.println(sensor);
    }
}