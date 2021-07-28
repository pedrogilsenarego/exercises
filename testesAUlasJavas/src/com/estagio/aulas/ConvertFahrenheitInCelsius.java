package com.estagio.aulas;

import java.util.Scanner;

public class ConvertFahrenheitInCelsius {
    public static void main(String[] args) {
        String tempF = acceptF();
        float tempF1 = convert(tempF);
        String strFormat = String.format("%.1f", tempF1);
        System.out.println(strFormat + "ºCelsius");
    }
    static String acceptF() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Introduce the temperature in ºFahrenheit");
        String temperature = scanner.nextLine();
        System.out.print(temperature + "ºFahrenheit are ");
        scanner.close();
        return temperature;
    }
    private static float convert(String tempF) {
        float finalVal = Float.parseFloat(tempF);
        return (finalVal - 32f) * (5f/9f);
    }
}
