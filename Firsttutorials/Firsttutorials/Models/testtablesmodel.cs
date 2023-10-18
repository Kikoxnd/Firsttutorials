namespace Firsttutorials.Models
{
    public class testtablesmodel                                                       
    {
        public int iduser { get; set; }
        public string firstName { get; set; }
        public string secondName { get; set; }
        public string updatedName { get; set; }

        public string firstNamemodal { get; set; }
        public string secondNamemodal { get; set; }
    }

    public class dropdown {
        
        public string iditem { get; set;}
        public string description { get; set; }
    }

    public class familytablemodel {

        public int familyid { get; set; }
        public int userid { get; set; }

        public string fatherName { get; set; }

        public string motherName { get; set; }
    }
    
    public class insertviewfamilydatamodel
    {
        public int usertableid { get; set;}
        public string nameFirst { get; set; }

        public string nameSecond{ get; set; }

        public string userAge { get; set; }

        public string nationality { get; set; }
    }

    public class descriptiontablemodel
    {
        public int descriptiontableid { get; set; }
        public int usertable_id { get; set; }
        public string telPhone { get; set; }
        public string univ { get; set; }
        public string carType { get; set; }
        public string petName { get; set; }

    }
    public class combinetablemodel
    {
        public int usertableid { get; set; }
        public string nameFirst { get; set; }
        public string nameSecond { get; set; }
        public string userAge { get; set; }
        public string nationality { get; set; }
        public int descriptiontableid { get; set; }
        public int usertable_id { get; set; }
        public string telPhone { get; set; }
        public string univ { get; set; }
        public string carType { get; set; }
        public string petName { get; set; }

    }
}

    //public class 
    //public List<testtablesmodel> Listtesttable { get; set; }