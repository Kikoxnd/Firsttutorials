using System.Collections.Generic;
using System.Data;
using System.Text;
using Firsttutorials.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
//Firsttutorials
namespace Firsttutorials.Models
{
    public class homeDb
    {
        ClassFunction2 cf = new ClassFunction2();

        public testtablesmodel getData()
        {
            testtablesmodel model = new testtablesmodel();
            DataTable dt = new DataTable();
            string query = "SELECT * FROM testtable";

            dt = cf.getMySQLDT(query);
            if (dt.Rows.Count > 0)
            {
                model.firstName = dt.Rows[0][1].ToString();
            }
            return model;
        }
        public List<testtablesmodel> fetchData()
        {
           List<testtablesmodel> model123 = new List<testtablesmodel>();
            DataTable dt = new DataTable();
            string query = "SELECT * FROM testtable";

            dt = cf.getMySQLDT(query);
            if(dt.Rows.Count > 0)
            {
                for(int i = 0; i < dt.Rows.Count; i++)
                {
                   int f1 = Convert.ToInt16(dt.Rows[i][0].ToString());
                   string f2 = dt.Rows[i][1].ToString();
                   string f3 = dt.Rows[i][2].ToString();
                    model123.Add(new testtablesmodel {
                    iduser = f1,
                    firstName = f2,
                    secondName = f3
                    });
                    
                  }
               
            }
            return model123;
        }
        public List<familytablemodel> fetchfamilyData()
        {
           List<familytablemodel> model123 = new List<familytablemodel>();
            DataTable dt = new DataTable();
            string query = "SELECT * FROM familydata";

            dt = cf.getMySQLDT(query);
            if(dt.Rows.Count > 0)
            {
            
       
                for(int i = 0; i < dt.Rows.Count; i++)
                {
                   int f1 = Convert.ToInt16(dt.Rows[i][0].ToString());
                   int f2 = Convert.ToInt16(dt.Rows[i][1].ToString());
                   //string f2 = dt.Rows[i][1].ToString();
                   string f3 = dt.Rows[i][2].ToString();
                   string f4 = dt.Rows[i][3].ToString();
                    model123.Add(new familytablemodel
                    {
                    familyid = f1,
                    userid = f2,
                    fatherName = f3,
                    motherName = f4
                    });
                    
                  }
               
            }
            return model123;
        }
        public List<testtablesmodel> fetchsearchData(string firstname, string secondname)
        {
            List<testtablesmodel> model123 = new List<testtablesmodel>();
            DataTable dt = new DataTable();
            string query = "SELECT * FROM testtable WHERE id IS NOT NULL";
            StringBuilder sb = new StringBuilder();
            List<string> rule = new List<string>();

            //reference no
            if (!String.IsNullOrEmpty(firstname))
            {
                rule.Add("UPPER(firstName) LIKE UPPER('%" + firstname+ "%')");
            }
            if (!String.IsNullOrEmpty(secondname))
            {
                rule.Add("UPPER(secondName) LIKE UPPER('%" + secondname + "%')");
            }
            string condition = string.Join(" AND ", rule.ToArray());
            string newquery = sb.Append(query).Append(" AND " + condition).ToString();
            if (!string.IsNullOrEmpty(condition)){
            dt = cf.getMySQLDT(newquery);

            }
            else
            {
            dt = cf.getMySQLDT(query);

            }
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    int f1 = Convert.ToInt16(dt.Rows[i][0].ToString());
                    string f2 = dt.Rows[i][1].ToString();
                    string f3 = dt.Rows[i][2].ToString();
                    model123.Add(new testtablesmodel
                    {
                        iduser = f1,
                        firstName = f2,
                        secondName = f3
                    });

                }

            }
            return model123;
        }
        public List<SelectListItem> fetchDropData()
        {
            List<SelectListItem> model123 = new List<SelectListItem>();

            DataTable dt = new DataTable();
            string query = "SELECT secondName FROM testtable";

            dt = cf.getMySQLDT(query);
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    string iditem = dt.Rows[i][0].ToString();
                    string desc = dt.Rows[i][0].ToString();
                
                    model123.Add(new SelectListItem
                    {
                        Value = iditem,
                        Text = desc,

                    });

                }

            }
            return model123;
        }
        public bool insertData(testtablesmodel model)
        {

            bool success;
            //INSERT INTO tablename() VALUES();
            string query = "INSERT INTO testtable(firstName, secondName) VALUES('"+model.firstName+"','"+model.secondName + "')";

            success = cf.UpdateOrSaveItems(query);

            return success;
        }
        public bool insertDatamodal(testtablesmodel model)
        {

            bool success;
            //INSERT INTO tablename() VALUES();
            string query = "INSERT INTO testtable(firstName, secondName) VALUES('"+model.firstNamemodal+"','"+model.secondNamemodal + "')";

            success = cf.UpdateOrSaveItems(query);

            return success;
        }
        public bool updateData(testtablesmodel model)
        {
            bool success;
            //UPDATE TABLE SET WHAT = WHAT WHERE CONDITION
          
           string query = "UPDATE testtable SET firstName = '"+model.firstName+ "', secondName = '"+model.secondName+"' WHERE Id = '" + model.updatedName + "' ";
           // string query =  "UPDATE testtable SET Id= '[value-1]',firstName= '[value-2]',secondName= '[value-3]' WHERE 1";
           // string query = "INSERT INTO testtable(firstName, secondName) VALUES('hye ainkiko','bz ka????????')";

            //string query = "UPDATE testtable SET firstName = 'edittowhat' WHERE firstName = 'whattoedit'";

            success = cf.OnlyUpdateitem(query);
            
            return success;
        }
        public bool deleteitemData(testtablesmodel model)
        {
            bool success;
            //DELETE FROM TABLE WHERE CONDITION
            //Basically update timeline ,more like softdelete
            string query = "DELETE FROM testtable WHERE firstName = '"+model.firstName+ "' || secondName = '"+model.secondName+ "'";

            success = cf.DeleteItems(query);

            return success;
        }        
        //get usertable data
        public List<insertviewfamilydatamodel> fetchinsertviewfamilydata()
        {
             List<insertviewfamilydatamodel> fetchmodul = new List<insertviewfamilydatamodel>();

            DataTable dt = new DataTable();
            string query = "SELECT * FROM usertable";

            dt = cf.getMySQLDT(query);
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    int fetch_usertableid = Convert.ToInt16(dt.Rows[i][0].ToString());
                    string fetc_namefirst = dt.Rows[i][1].ToString();
                    string fetc_namesecond = dt.Rows[i][2].ToString();
                    string fetch_userage = dt.Rows[i][3].ToString();
                    string fetch_nationality = dt.Rows[i][4].ToString();

                    fetchmodul.Add(new insertviewfamilydatamodel
                    {
                       usertableid= fetch_usertableid,
                       nameFirst = fetc_namefirst,
                       nameSecond= fetc_namesecond,
                       userAge = fetch_userage,
                       nationality = fetch_nationality
                    });

                }

            }
            return fetchmodul;
        }
        public List<descriptiontablemodel> fetchdescriptiontabledata()
        {
            List<descriptiontablemodel> fetchmodul = new List<descriptiontablemodel>();

            DataTable dt = new DataTable();
            string query = "SELECT * FROM descriptiontable";

            dt = cf.getMySQLDT(query);
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    int fetch_descriptiontableid = Convert.ToInt16(dt.Rows[i][0].ToString());
                    int fetch_usertable_id = Convert.ToInt16(dt.Rows[i][1].ToString());
                    string fetch_telphone = dt.Rows[i][2].ToString();
                    string fetch_university = dt.Rows[i][3].ToString();
                    string fetch_cartype = dt.Rows[i][4].ToString();
                    string fetch_petname = dt.Rows[i][5].ToString();
                  
                    fetchmodul.Add(new descriptiontablemodel
                    {
                       
                        descriptiontableid = fetch_descriptiontableid,
                        usertable_id = fetch_usertable_id,
                        telPhone = fetch_telphone,
                        univ = fetch_university,
                        carType = fetch_cartype,
                        petName = fetch_petname
                        
                    });

                }

            }
            return fetchmodul;
        }

        //nasntiasjkfaskfjhaklfjhaslkfjhasdlkfjhsflkjhasflksjhfslkfjhsalfkjhasflkasjfhaslkfjashflkasjfhsalfkjhasflkjashfaslkjfhaslfkjhasflkjashflasjkfhaslfkjasflkjsahfsalkfjhsaflkasjfaslfkjhasflkasjfhlkfjhsflkjshfalskjfhasdkjfhasklfjhasdfkkjhsaklfjhaslfjhirouyeqwccwaudslilvmneryuaiawl;o encvrunoi;z,qwpOWZioxiqcybrfdukwjnyerkvnsgyfvhc
        public List<combinetablemodel> fetchcombinetabledata()
        {
            List<combinetablemodel> fetchmodul = new List<combinetablemodel>();

            DataTable dt = new DataTable();
            string query = "SELECT dt.*, ut.* " +
                   "FROM descriptiontable dt " +
                   "INNER JOIN usertable ut ON dt.usertable_id = ut.usertableid"; ;

            dt = cf.getMySQLDT(query);
            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    //int fetch_descriptiontableid = Convert.ToInt16(dt.Rows[i][0].ToString());
                    //int fetch_usertable_id = Convert.ToInt16(dt.Rows[i][1].ToString());
                    //string fetch_telphone = dt.Rows[i][1].ToString();
                    //string fetch_university = dt.Rows[i][2].ToString();
                    //string fetch_cartype = dt.Rows[i][3].ToString();
                    //string fetch_petname = dt.Rows[i][4].ToString();

                    //####################################################################################################
                    int fetch_descriptiontableid = Convert.ToInt16(dt.Rows[i]["descriptiontableid"]);
                    int fetch_descusertable_id = Convert.ToInt16(dt.Rows[i]["usertable_id"]);
                    string fetch_telphone = dt.Rows[i]["telPhone"].ToString();
                    string fetch_university = dt.Rows[i]["univ"].ToString();
                    string fetch_cartype = dt.Rows[i]["carType"].ToString();
                    string fetch_petname = dt.Rows[i]["petName"].ToString();

                    // Assuming columns from 'othertable' are named 'column1' and 'column2'
                    //string fetch_usertableid = dt.Rows[i]["usertableid"].ToString();
                    int fetch_usertableid = Convert.ToInt16(dt.Rows[i]["usertableid"]);
                    string fetch_nameFirst = dt.Rows[i]["nameFirst"].ToString();
                    string fetch_nameSecond = dt.Rows[i]["nameSecond"].ToString();
                    string fetch_userAge = dt.Rows[i]["userAge"].ToString();
                    string fetch_nationality = dt.Rows[i]["nationality"].ToString();

                    fetchmodul.Add(new combinetablemodel
                    {
                        usertableid = fetch_usertableid,
                        nameFirst = fetch_nameFirst,
                        nameSecond = fetch_nameSecond,
                        userAge = fetch_userAge,
                        nationality = fetch_nationality,
                        descriptiontableid = fetch_descriptiontableid,
                        usertable_id = fetch_descusertable_id,
                        telPhone = fetch_telphone,
                        univ = fetch_university,
                        carType = fetch_cartype,
                        petName = fetch_petname

                    });

                }

            }
            return fetchmodul;
        }

        public bool inserttocombinetable(combinetablemodel model)
        {
            bool success;
            //INSERT INTO tablename() VALUES();
            //string query = "INSERT INTO usertable(nameFirst, nameSecond, userAge, nationality) VALUES('" + model.nameFirst + "','" + model.nameSecond+ "','" + model.userAge + "','" + model.nationality + "')" + "INSERT INTO descriptiontable(telPhone, univ, carType, petName) VALUES('" + model.telPhone + "','" + model.univ + "','" + model.carType + "','" + model.petName + "')"; + "INSERT INTO descriptiontable(usertable_id, telPhone, univ, carType, petName) VALUES('"model.usertable_id"','" + model.telPhone + "','" + model.univ + "','" + model.carType + "','" + model.petName + "')"
            string query2 = "INSERT INTO descriptiontable(usertable_id, telPhone, univ, carType, petName) VALUES('" +model.usertable_id+"','" + model.telPhone + "','" + model.univ + "','" + model.carType + "','" + model.petName + "')";
            //string query2 = "INSERT INTO usertable(nameFirst, nameSecond, userAge, nationality) VALUES('" + model.nameFirst + "','" + model.nameSecond + "','" + model.userAge + "','" + model.nationality + "')" + "INSERT INTO descriptiontable(usertable_id, telPhone, univ, carType, petName) VALUES('" +model.usertable_id+"','" + model.telPhone + "','" + model.univ + "','" + model.carType + "','" + model.petName + "')";
            //"INSERT INTO usertable(nameFirst, nameSecond, userAge, nationality) VALUES('" + model.nameFirst + "','" + model.nameSecond + "','" + model.userAge + "','" + model.nationality + "')" +
            //string query1 = "INSERT INTO descriptiontable(usertable_id, telPhone, univ, carType,petName) VALUES('9', 'nama kedua', 23,'malaysia','faskfj')";
            success = cf.UpdateOrSaveItems(query2);

            return success;
        }public bool inserttocombinetable1(combinetablemodel model)
        {
            bool success;
            //INSERT INTO tablename() VALUES();
            //string query = "INSERT INTO usertable(nameFirst, nameSecond, userAge, nationality) VALUES('" + model.nameFirst + "','" + model.nameSecond+ "','" + model.userAge + "','" + model.nationality + "')" + "INSERT INTO descriptiontable(telPhone, univ, carType, petName) VALUES('" + model.telPhone + "','" + model.univ + "','" + model.carType + "','" + model.petName + "')"; + "INSERT INTO descriptiontable(usertable_id, telPhone, univ, carType, petName) VALUES('"model.usertable_id"','" + model.telPhone + "','" + model.univ + "','" + model.carType + "','" + model.petName + "')"
            string query2 = "INSERT INTO usertable(nameFirst, nameSecond, userAge, nationality) VALUES('" + model.nameFirst + "','" + model.nameSecond + "','" + model.userAge + "','" + model.nationality + "')";
            //"INSERT INTO usertable(nameFirst, nameSecond, userAge, nationality) VALUES('" + model.nameFirst + "','" + model.nameSecond + "','" + model.userAge + "','" + model.nationality + "')" +
           // string query1 = "INSERT INTO descriptiontable(usertable_id, telPhone, univ, carType,petName) VALUES('9', 'nama kedua', 23,'malaysia','faskfj')";
            success = cf.UpdateOrSaveItems(query2);

            return success;
        }

    }
}
