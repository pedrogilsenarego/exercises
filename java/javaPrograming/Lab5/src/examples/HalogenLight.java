package examples;

public class HalogenLight extends Light {
    @Override
    public void changeBulb() {
        System.out.println("Change bulb in halogen light");
        System.out.println("Don't touch the bulb with your bare hands");
    }
}