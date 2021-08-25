package examples;

public class TestEnum {
    public static void main(String[] args) {
        CellPhone android = new CellPhone("Galaxy 4S", "303-555-5250",
                HW.SAMSUNG, OS.ANDROID);
        CellPhone iPhone = new CellPhone("iPhone 5", "303-555-5280",
                HW.APPLE, OS.IOS);

        System.out.println(android);
        System.out.println(iPhone);
    }
}
