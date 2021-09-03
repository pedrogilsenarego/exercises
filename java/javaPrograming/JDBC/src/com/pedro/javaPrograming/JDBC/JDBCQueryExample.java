package com.pedro.javaPrograming.JDBC;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.*;

class A
{
    public static void main(String... ar)
    {
        try
        {

//First SQL SELECT Query
            String query1 =  "SELECT EMPLOYEE_ID, FIRST_NAME, LAST_NAME FROM C##PEDROGIL.EMPLOYEES";

//Second SQL SELECT Query
            String query2 =  "SELECT EMPLOYEE_ID, FIRST_NAME, LAST_NAME FROM C##PEDROGIL.EMPLOYEES WHERE EMPLOYEE_ID = 110 ";

//Third SQL SELECT Query
            String query3 =  "SELECT LAST_NAME, SALARY FROM C##PEDROGIL.EMPLOYEES WHERE FIRST_NAME = 'Steven' ";


            Class.forName("oracle.jdbc.driver.OracleDriver");

//Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","scott", "tiger");
            Connection con = DriverManager.getConnection("jdbc:oracle:thin:@34.91.139.103:1521:XE", "C##PEDROGIL", "teste123");
            Statement stmt = con.createStatement();


//Executing first SELECT query
            ResultSet rs = stmt.executeQuery(query1);

            System.out.println("Result of executing query1");
            System.out.println("ID " + "\t" + "First_Name" +  "\t" +  "Last_Name");

//looping through the number of row/rows retrieved after executing query2
            while(rs.next())
            {
                System.out.print(rs.getString("EMPLOYEE_ID") + "\t");
                System.out.print(rs.getString("First_Name") + "\t" + "\t");
                System.out.print(rs.getString("Last_Name")+ "\t" +  "\t");
            }



//Executing second SELECT query
            rs = stmt.executeQuery(query2);
            System.out.println("Result of executing query2");

//looping through the number of row/rows retrieved after executing query2
            while(rs.next())
            {
                System.out.print(rs.getString("EMPLOYEE_ID") + "\t");
                System.out.print(rs.getString("First_Name") + "\t" + "\t");
                System.out.print(rs.getString("Last_Name")+ "\t" +  "\t");
            }



//Executing third SELECT query
            rs = stmt.executeQuery(query3);
            System.out.println("Result of executing query3");
            while(rs.next())
            {
                System.out.println(rs.getString(1));
                System.out.println(rs.getString(2));
            }


        }
        catch(Exception e)
        {
            System.out.println(e);
        }

    }//main() method ends

}//class definition ends