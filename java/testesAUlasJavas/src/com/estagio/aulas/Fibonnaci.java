package com.estagio.aulas;

public class Fibonnaci {
    public static void main(String[] args) {

        int a=0;
        int b=1;

        String string = String.format("%d %d ", a, b);
        System.out.print(string);

        for (int i=2; i<=20; ++i){
            int result = a+b;
            System.out.print(result + " ");
            a = b;
            b = result;

        }
    }
}
