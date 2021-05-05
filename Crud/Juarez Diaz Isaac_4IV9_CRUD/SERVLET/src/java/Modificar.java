/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Ulises
 */
public class Modificar extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    //variables globales
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //constructor 
    public void init(ServletConfig cfg) throws ServletException{
    
        //como se va a conectar a la bd
        String url = "jdbc:mysql:3306//localhost/registro4iv9";
                    //tipodriver:gestorbd:puerto//IP/nombrebd
                    
        String userName = "root";
        String password = "ringorivera28";
        
        try{
            
            Class.forName("com.mysql.jdbc.Driver");
            /*
            A veces el tipo de driver ya tiene incluido el puerto de comunicacion, 
            es por ello que nos arroja un error de conexion, para resolver este error
            simplemente hacemos lo siguiente:
            url = "jdbc:mysql://localhost/registro4iv9";
            */
            url = "jdbc:mysql://localhost/registro4iv9";
            con = DriverManager.getConnection(url, userName, password);
            set = con.createStatement();
            
            System.out.println("Conexion exitosa");
        
        }catch(Exception e){
            System.out.println("Conexion no exitosa");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        
        }
    }
    
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Modificar</title>");            
            out.println("</head>");
            out.println("<link rel='stylesheet' href='css/style.css'>");
            out.println("<script src='js/validar.js'></script>");
            out.println("</head>");
            out.println("<body class='body2'>");
             out.println("<h1>Tabla del Registro de Usuarios</h1>"
                    + "<table border='2'>"
                    + "<thead>"
                        + "<tr>"
                        + "<th>ID</th>"
                        + "<th>Nombre Completo</th>"
                        + "<th>Edad</th>"
                        + "<th>Correo</th>"
                        + "</tr>"
                    + "<thead>"
                    + "<tbody>");
            
            
            String nom, appat, apmat, correo, q, qq;
            int edad, id;
            id = Integer.parseInt(request.getParameter("idmodificar"));
            q = "select * from mregistro where id_usu = "+id;
           
            
             try{
                set = con.createStatement();
                rs = set.executeQuery(q);
                while(rs.next()){
                    id = rs.getInt("id_usu");
                    nom = rs.getString("nom_usu");
                    appat = rs.getString("appat_usu");
                    apmat = rs.getString("apmat_usu");
                    edad = rs.getInt("edad_usu");
                    correo = rs.getString("email_usu");
                    out.println("<tr>"
                                + "<td>"+id+"</td>"
                                + "<td>"+nom+" "+appat+" "+apmat+"</td>"
                                + "<td>"+edad+"</td>"
                                + "<td>"+correo+"</td>"
                            + "</tr>"
                            +"<br>");
                    out.println("</tbody>"
                    + "</table>"
                    + "<br>"
                            +"<form name='formularioModificar' method='post' action='Modificar2'>"
                            +"<h2>Modifique los datos</h2>"
                            +"<h2>ID</h2>"
                     +"<input type='text' value='"+id+"' name ='id_modificar' >"
                             +"<br>"
                            +"<h2>Nombre</h2>"
                     +"<input type='text' value='"+nom+"' name ='nom_modificar' onkeypress='return validarabc(event)'>"
                             +"<br>"
                              +"<h2>Apellido Paterno</h2>"
                     +"<input type='text' value='"+appat+"' name ='appat_modificar' onkeypress='return validarabc(event)'>"
                             +"<br>"
                              +"<h2>Apellido Materno</h2>"
                     +"<input type='text' value='"+apmat+"' name ='apmat_modificar' onkeypress='return validarabc(event)'>"
                             +"<br>"
                              +"<h2>Edad</h2>"
                     +"<input type='number' value='"+edad+"' name ='edad_modificar' onkeypress='return validarn(event)>"
                             +"<br>"
                              +"<h2>Correo</h2>"
                     +"<input type='email' value='"+correo+"' name ='correo_modificar'>"
                             +"<br>"
                             +"<br>"
                             +"<input type='submit' value='Modificar Registro'>"
                             +"<br>"
                             +"</form>"
                    + "<a href='index.html' >Regresar al Menu Principal</a>"
                    + "<br>");
                    
                }
                System.out.println("Modificacion exitosa");
                rs.close();
                set.close();
            
            }catch(Exception e){
                System.out.println("Error al realizar la modificacion");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
            
            
            }
             
                   
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    
    public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }    
    
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}