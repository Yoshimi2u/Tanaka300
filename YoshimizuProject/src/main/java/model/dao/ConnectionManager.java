package model.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionManager {
	   // データベースへの接続に必要なURL,USER,PASSWORDのフィールドを設定
    //PostgreSQL
    private final static String URL = "jdbc:postgresql://localhost:5432/testdb";
//    private final static String URL = "jdbc:postgresql://219.94.252.54:5432/testdb";    
    private final static String USER = "postgres";
    private final static String PASSWORD = "postgrepost";


    /**
     * このメソッドが呼ばれたらデータベースへの接続を返します。
     * @return 要求されたら接続を返す
     * @throws ClassNotFoundException
     * @throws SQLException
     */
    public static Connection getConnection() throws ClassNotFoundException,SQLException{
        // JDBCドライバの読み込み
        Class.forName("org.postgresql.Driver");
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}
