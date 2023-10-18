using Firsttutorials.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Firsttutorials.ViewModel
{
    public class testtablesviewmodel
    {
        public List<testtablesmodel> Listtesttable { get; set; }
        public List<SelectListItem> dropdown { get; set; }

        public List<familytablemodel> familytable { get; set; }

        public testtablesmodel testtable { get; set; }

        //insertviewfamilydata list
        public List<insertviewfamilydatamodel> Listinsertviewfamilytable { get; set; }      
        public insertviewfamilydatamodel insertviewfamilytable { get; set; }
        //descriptiontabledata
        public List<descriptiontablemodel> Listdescriptiontable { get; set; }
        public descriptiontablemodel descriptiontable { get; set; }
        //combinetabledata

        public List<combinetablemodel> combinetabledata { get; set; }
    }

   
}
