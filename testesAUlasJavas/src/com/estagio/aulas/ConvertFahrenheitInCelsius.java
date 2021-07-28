package com.estagio.aulas;

import java.util.Scanner;

public class ConvertFahrenheitInCelsius {
    public static void main(String[] args) {
        String tempF = acceptF();
        float tempF1 = convert(tempF);
        String strFormat = String.format("%.1f", tempF1);
        System.out.println(strFormat + "º em na escala Célsius");
    }
    static String acceptF() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Introduza a temperatura em º Fahrenheit");
        String temperature = scanner.nextLine();
        System.out.print(temperature + "º na escala Fahrenheit são ");
        scanner.close();
        return temperature;
        //teste
    }
    private static float convert(String tempF) {
        Float floatOfVal = Float.valueOf(tempF).floatValue();
        float tempC = (floatOfVal - 32f) * (5f/9f) ;
        return tempC;
    }
}
