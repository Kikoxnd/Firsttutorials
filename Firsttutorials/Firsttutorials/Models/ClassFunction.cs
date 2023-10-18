using System;
using System.Data;
using System.IO;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace MyExperimentProject.Models
{
    public class ClassFunction
    {
        private readonly string asd = "";
        private readonly NpgsqlConnection conn;

        public ClassFunction()
        {
            var configuration = GetConfiguration();
            conn = new NpgsqlConnection(configuration.GetSection("ConnectionStrings").GetSection("DbConnection").Value);
            asd = conn.ConnectionString;
        }
        public IConfigurationRoot GetConfiguration()
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", true, false);
            return builder.Build();
        }

        public DataTable getPostgresDT(string SQLSTMT)
        {
            var dt = new DataTable();
            var da = new NpgsqlDataAdapter();

            try
            {
                using (var con = new NpgsqlConnection(asd))
                {
                    con.Open();
                    using (da = new NpgsqlDataAdapter(SQLSTMT, con))
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
    }
}
