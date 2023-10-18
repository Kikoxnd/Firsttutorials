using System;
using System.Data;
using System.IO;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MySqlConnector;

namespace Firsttutorials.Models
{
    public class ClassFunction2
    {
        private readonly string asd = "";
        private readonly MySqlConnection conn;

        public ClassFunction2()
        {
            var configuration = GetConfiguration();
            //connection to the database
            conn = new MySqlConnection(configuration.GetSection("ConnectionStrings").GetSection("DbConnection2").Value);
            asd = conn.ConnectionString;
        }
        public IConfigurationRoot GetConfiguration()
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", true, false);
            return builder.Build();
        }
        //get the data and basically save it in {dt}
        public DataTable getMySQLDT(string SQLSTMT)
        {
            var dt = new DataTable();
            var da = new MySqlDataAdapter();

            try
            {
                using (var con = new MySqlConnection(asd))
                {
                    con.Open();
                    using (da = new MySqlDataAdapter(SQLSTMT, con))
                    {
                        da.Fill(dt);
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return dt;
        }
        //update or save item
        public bool UpdateOrSaveItems(String SQLSTMT)
        {
            bool success;

            try
            {
                using (MySqlConnection con = new MySqlConnection(asd))
                {

                    MySqlCommand cmd = new MySqlCommand(SQLSTMT, con);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                    success = true;
                }

            }
            catch (Exception ex)
            {
                throw ex;

            }

            return success;
        }
        //delete item in the database (return success)
        public bool DeleteItems(String SQLSTMT)
        {
            bool success;

            try
            {
                using (MySqlConnection con = new MySqlConnection(asd))
                {

                    MySqlCommand cmd = new MySqlCommand(SQLSTMT, con);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                    success = true;
                }

            }
            catch (Exception ex)
            {
                throw ex;

            }

            return success;
        }

        public bool OnlyUpdateitem (String SQLSTMT)
        {
            bool success;

            try
            {
                using (MySqlConnection con = new MySqlConnection(asd))
                {

                    MySqlCommand cmd = new MySqlCommand(SQLSTMT, con);
                    con.Open();
                    cmd.ExecuteNonQuery();
                    con.Close();
                    success = true;
                }

            }
            catch (Exception ex)
            {
                throw ex;

            }

            return success;
        }
    }
}
