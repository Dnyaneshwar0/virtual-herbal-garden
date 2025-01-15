import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;

public class VirtGardControl {
    public static void main(String[] args) throws FileNotFoundException
    {
        Scanner k=new Scanner(new File("cleanedData.txt"));
        // Replace with your database credentials
        String jdbcUrl = "jdbc:mysql://sql.freedb.tech:3306/freedb_Plants";
        String username = "freedb_PG001";
        String password = "mNqwqKF&3HS$#QD";

        String sql = "INSERT INTO PlantDet (PlantNo, sName, family, cName) VALUES (?, ?, ?, ?)";

        try (Connection connection = DriverManager.getConnection(jdbcUrl, username, password);
             PreparedStatement statement = connection.prepareStatement(sql)) 
            {
                System.out.println("Conn succeful");

            int rowsInserted=0;
            // Set the values for the prepared statement
            for(int i=0;k.hasNextLine();i++)
            {
                String ln=k.nextLine();
                String sName=ln.substring(ln.indexOf("Sname: ")+7, ln.indexOf("Family:")).trim();
                String fam=ln.substring(ln.indexOf("Family: ")+8, ln.indexOf("Cname:")).trim();
                String cName=ln.substring(ln.indexOf("Cname: ")+7).trim();
                // System.out.println(ln+"\n"+sName+"\n"+fam+"\n"+cName+"\n\n");

                statement.setInt(1, i+1);
                statement.setString(2,sName);
                statement.setString(3,fam);
                statement.setString(4,cName);
                rowsInserted = statement.executeUpdate();
            }
            // Execute the insert
            System.out.println("Inserted "+rowsInserted+" rows.");
        } catch (SQLException e) {
            System.out.println("Conn fail");
            e.printStackTrace();
        }
    }
}
