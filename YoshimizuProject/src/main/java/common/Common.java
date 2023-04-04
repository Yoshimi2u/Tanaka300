package common;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletResponse;

public class Common {
	public static String sanitizing(String str) {

		if (null == str || "".equals(str)) {
			return str;
		}
		str = str.replaceAll("&", "&amp;");
		str = str.replaceAll("<", "&lt;");
		str = str.replaceAll(">", "&gt;");
		str = str.replaceAll("\"", "&quot;");
		str = str.replaceAll("'", "&#39;");

		return str;
	}

	public static boolean isNullOrEmpty(String str) {
		return (null == str || "".equals(str));
	}

	public static boolean hasValue(String str) {
		return !(null == str || "".equals(str));
	}
	
    /**Integer->String 変換
    *
    * @param number 変換する値
    * @return String nullの場合ブランク("")を返す。
    */
   public static String toString(Integer number) {
       return number == null ? "" : number.toString();
   }

	/**mapList->Json 変換
	*
	* @param response HttpServletResponse response
	* @param result ArrayList&lt;LinkedHashMap&lt;String, String&gt;&gt;
	* @throws ServletException
	* @throws IOException
	*/
	public static void mapListToJson(HttpServletResponse response,
			ArrayList<LinkedHashMap<String, String>> result)
			throws ServletException, IOException {
		// MapからJSONに変換
		ObjectMapper mapper = new ObjectMapper();
		String jsonResult = mapper.writeValueAsString(result);

		response.setContentType("application/json;charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.print(jsonResult);
		pw.close();
	}

	/**map->Json 変換
	*
	* @param response HttpServletResponse response
	* @param result LinkedHashMap&lt;String, String&gt;
	* @throws ServletException
	* @throws IOException
	*/
	public static void mapListToJson(HttpServletResponse response,
			LinkedHashMap<String, String> result)
			throws ServletException, IOException {
		// MapからJSONに変換
		ObjectMapper mapper = new ObjectMapper();
		String jsonResult = mapper.writeValueAsString(result);

		response.setContentType("application/json;charset=UTF-8");
		PrintWriter pw = response.getWriter();
		pw.print(jsonResult);
		pw.close();
	}

	/**処理を行った時間の取得
	*
	* @param workName 作業名 例（insert開始）
	*/
	public static void printNowDate(String workName) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss:SSS");
		System.out.println("[" + sdf.format(new Date()) + "]" + workName);
	}
}
