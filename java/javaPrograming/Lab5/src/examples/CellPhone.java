package examples;

public class CellPhone {
    private String name;
    private String phoneNumber;
    private HW hardwareManufacturer;
    private OS operatingSystem;

    public CellPhone(String nm, String number, HW hw, OS os) {
        name = nm;
        phoneNumber = number;
        hardwareManufacturer = hw;
        operatingSystem = os;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public HW getHardwareManufacturer() {
        return hardwareManufacturer;
    }

    public void setHardwareManufacturer(HW hardwareManufacturer) {
        this.hardwareManufacturer = hardwareManufacturer;
    }

    public OS getOperatingSystem() {
        return operatingSystem;
    }

    public void setOperatingSystem(OS operatingSystem) {
        this.operatingSystem = operatingSystem;
    }

    @Override
    public String toString() {
        return "CellPhone [name=" + name + ", phoneNumber="
                + phoneNumber + ", hardwareManufacturer="
                + hardwareManufacturer + ", operatingSystem="
                + operatingSystem + "]";
    }
}
