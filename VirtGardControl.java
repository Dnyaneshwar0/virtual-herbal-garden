import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class VirtGardControl {
    public static void main(String[] args) {
        // Replace with your database credentials
        String jdbcUrl = "jdbc:mysql://sql.freedb.tech:3306/freedb_Plants";
        String username = "freedb_PG001";
        String password = "mNqwqKF&3HS$#QD";

        String sql = "INSERT INTO PlantDet (PlantNo, ComName, Family, SciName) VALUES (?, ?, ?, ?)";

        try (Connection connection = DriverManager.getConnection(jdbcUrl, username, password);
             PreparedStatement statement = connection.prepareStatement(sql)) 
            {
                System.out.println("Conn succeful");

            // Set the values for the prepared statement
            // statement.setString(1, "John Doe");
            // statement.setInt(2, 25);

            // Execute the insert
            // int rowsInserted = statement.executeUpdate();
            // if (rowsInserted > 0) {
            //     System.out.println("A new row was inserted successfully!");
            // }
        } catch (SQLException e) {
            System.out.println("Conn fail");
            e.printStackTrace();
        }
    }
}
