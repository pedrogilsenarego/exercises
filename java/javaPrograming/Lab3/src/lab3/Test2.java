package lab3;

public class Test2 {

    public static void main(String[] args) {

        //creating instance of the encapsulated class
        Employee2 e = new Employee2();

        System.out.println(e.getDepartment());//Compile Time Error, because there is no such method
        System.out.println(e.department);//Compile Time Error, because the department data member is private.
                                      //So, it can't be accessed from outside the class
    }
}