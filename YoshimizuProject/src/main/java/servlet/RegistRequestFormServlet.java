package servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.LinkedHashMap;

import common.Common;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.dao.ConnectionManager;

/**
 * Servlet implementation class RegistRequestFormServlet
 */
@WebServlet(asyncSupported = true, urlPatterns = { "/regist-request-form-servlet" })
public class RegistRequestFormServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public RegistRequestFormServlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		String name = Common.sanitizing(request.getParameter("name"));
		String requestOptionName = Common.sanitizing(request.getParameter("requestOptionName"));
		String detailForm = Common.sanitizing(request.getParameter("detailForm"));
		int paramaterIndex = 1;
		int processingNumber = 0;
		String sql = "INSERT INTO ynnitd01.request_option_tbl"
				+ " (requested_by, requested_option_name, requested_option_detail)"
				+ " VALUES (?,?,?)";
		try(Connection con = ConnectionManager.getConnection();){
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(paramaterIndex, name);
			paramaterIndex++;
			pstmt.setString(paramaterIndex, requestOptionName);
			paramaterIndex++;
			pstmt.setString(paramaterIndex, detailForm);
			paramaterIndex++;
			processingNumber = pstmt.executeUpdate();
		} catch (Exception e) {
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
		}
		LinkedHashMap<String,String> result = new LinkedHashMap<String, String>();
		result.put("processingNumber", Common.toString(processingNumber));
		Common.mapListToJson(response, result);
		return;
	}

}
