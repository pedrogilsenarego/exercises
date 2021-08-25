package examples;

public class FluorescentLamp extends Light {
    @Override
    public void changeBulb() {
        System.out.println("Change tube in fluorescent lamp.");
        System.out.println("Dispose of old tube properly.");
    }
}