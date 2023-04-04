package servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashMap;

import common.Common;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.dao.ConnectionManager;

/**
 * Servlet implementation class searchPokemonTypeEffective
 */
@WebServlet(asyncSupported = true, urlPatterns = { "/searchPokemonTypeEffective" })
public class searchPokemonTypeEffective extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * Default constructor.
     */
    public searchPokemonTypeEffective() {
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // TODO Auto-generated method stub
        response.getWriter().append("Served at: ").append(request.getContextPath());
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // TODO Auto-generated method stub
        request.setCharacterEncoding("UTF-8");
        String type = request.getParameter("type");
        String type2 = request.getParameter("type2");
        ArrayList<LinkedHashMap<String, String>> result = new ArrayList<LinkedHashMap<String, String>>();
        if("attackType".equals(request.getParameter("option"))) {
            String attackType = request.getParameter("attackType");
            String sql = "SELECT type_name, "+ attackType
                    +" FROM pokemoninfo.type_mst"
                    + " ORDER BY system_id";
            LinkedHashMap<String, String> attackResult = new LinkedHashMap<String, String>();
            try (Connection con = ConnectionManager.getConnection();
                    PreparedStatement pstmt = con.prepareStatement(sql)) {
                ResultSet res = pstmt.executeQuery();
                while(res.next()) {
                    attackResult.put(res.getString("type_name"), res.getString(attackType));
                }
            } catch (ClassNotFoundException e) {
                // TODO 自動生成された catch ブロック
                e.printStackTrace();
            } catch (SQLException e) {
                // TODO 自動生成された catch ブロック
                e.printStackTrace();
            }
            Common.mapListToJson(response, attackResult);
            return;
        } else {
        try (Connection con = ConnectionManager.getConnection();) {
            result.add(searchPokemonEffective(con, type));
            if(Common.hasValue(type2)) {
                result.add(searchPokemonEffective(con, type2));
            }
        } catch (ClassNotFoundException e) {
            // TODO 自動生成された catch ブロック
            e.printStackTrace();
        } catch (SQLException e) {
            // TODO 自動生成された catch ブロック
            e.printStackTrace();
        }
        Common.mapListToJson(response, result);
        return;
        }
    }

    private LinkedHashMap<String, String> searchPokemonEffective(Connection con, String type) throws SQLException {
        String sql = createSearchPokemonEffectiveSql(type);
        LinkedHashMap<String, String> typeEffectiveList = new LinkedHashMap<String, String>();
        try (PreparedStatement pstmt = con.prepareStatement(sql);) {
            pstmt.setString(1, type);
            ResultSet res = pstmt.executeQuery();
            while (res.next()) {
                typeEffectiveList.put("regist_normal", res.getString("regist_normal"));
                typeEffectiveList.put("regist_fire", res.getString("regist_fire"));
                typeEffectiveList.put("regist_water", res.getString("regist_water"));
                typeEffectiveList.put("regist_grass", res.getString("regist_grass"));
                typeEffectiveList.put("regist_electric", res.getString("regist_electric"));
                typeEffectiveList.put("regist_ice", res.getString("regist_ice"));
                typeEffectiveList.put("regist_fighting", res.getString("regist_fighting"));
                typeEffectiveList.put("regist_poison", res.getString("regist_poison"));
                typeEffectiveList.put("regist_ground", res.getString("regist_ground"));
                typeEffectiveList.put("regist_flying", res.getString("regist_flying"));
                typeEffectiveList.put("regist_psychic", res.getString("regist_psychic"));
                typeEffectiveList.put("regist_bug", res.getString("regist_bug"));
                typeEffectiveList.put("regist_rock", res.getString("regist_rock"));
                typeEffectiveList.put("regist_ghost", res.getString("regist_ghost"));
                typeEffectiveList.put("regist_dragon", res.getString("regist_dragon"));
                typeEffectiveList.put("regist_dark", res.getString("regist_dark"));
                typeEffectiveList.put("regist_steel", res.getString("regist_steel"));
                typeEffectiveList.put("regist_fairy", res.getString("regist_fairy"));
            }
        }
        return typeEffectiveList;
    }

    private String createSearchPokemonEffectiveSql(String type) {
        StringBuilder sql = new StringBuilder();
        sql.append("SELECT *"
                + " FROM pokemoninfo.type_mst"
                + " WHERE type_name = ?");
        return sql.toString();
    }

}
