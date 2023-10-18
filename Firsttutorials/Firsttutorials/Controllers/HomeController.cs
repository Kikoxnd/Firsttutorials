using Firsttutorials.Models;
using Firsttutorials.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using System.Diagnostics;

namespace Firsttutorials.Controllers
{

    public class HomeController : Controller
    {
        homeDb hDb = new homeDb();
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            testtablesmodel model = new testtablesmodel();
            model = hDb.getData();
            //view page
            return View("Index",model);
        } 
        public IActionResult Index3()
        {
            testtablesviewmodel vm = new testtablesviewmodel
            {
                Listtesttable = new List<testtablesmodel>(),
                Listinsertviewfamilytable = new List<insertviewfamilydatamodel>(),
                Listdescriptiontable = new List<descriptiontablemodel>(),
                familytable = new List<familytablemodel>(),
                dropdown = new List<SelectListItem>()
            };
        
            vm.dropdown = hDb.fetchDropData();          
            
            return View("Privacy", vm);
        }
        public bool postData(testtablesmodel model) //retrieve from JS
        {
            bool success = false;

            success = hDb.insertData(model);

            //return data
            return success;
        }
        public bool postDatamodal(testtablesmodel model) //retrieve from JS
        {
            bool success = false;

            success = hDb.insertDatamodal(model);

            //return data
            return success;
        }
        public bool DeleteData(testtablesmodel model) //retrieve from JS
        {
            bool success = false;

            success = hDb.deleteitemData(model);
            //return data
            return success;
        }
        public bool upDate(testtablesmodel model) //retrieve from JS
        {
            bool success = false;

            success = hDb.updateData(model);
            //return data
            return success;
        }
        public JsonResult Index2()
        {
            testtablesmodel model = new testtablesmodel();
            model = hDb.getData();
            //return data
            return Json(model);
        }
        public JsonResult loadTable()
        {

            List<testtablesmodel> model = new List<testtablesmodel>();
            model = hDb.fetchData();
            return Json(new {data = model});
        }
        public JsonResult loadTable2()
        {

            List<testtablesmodel> model = new List<testtablesmodel>();
            model = hDb.fetchData();
            return Json(new {data = model});
        }
        public JsonResult loadFamilyTable()
        {

            List<familytablemodel> model = new List<familytablemodel>();
            model = hDb.fetchfamilyData();
            return Json(new { data = model });
        }
        //search data
        public JsonResult searchTable(string firstname, string secondname)
        {

            List<testtablesmodel> model = new List<testtablesmodel>();
            model = hDb.fetchsearchData(firstname, secondname);
            return Json(new { data = model });
        }
        public JsonResult insertviewfamilydata()
        {

            List<insertviewfamilydatamodel> model = new List<insertviewfamilydatamodel>();
            model = hDb.fetchinsertviewfamilydata();
            return Json(new { data = model });
        }
        public JsonResult descriptiontabledata()
        {

            List<descriptiontablemodel> model = new List<descriptiontablemodel>();
            model = hDb.fetchdescriptiontabledata();
            return Json(new { data = model });
        } 
        public JsonResult combinetable()
        {

            List<combinetablemodel> model = new List<combinetablemodel>();
            model = hDb.fetchcombinetabledata();
            return Json(new { data = model });
        }
        public bool insertcombinetabledata(combinetablemodel model) //retrieve from JS
        {
            bool success = false;


            success = hDb.inserttocombinetable(model);
            success = hDb.inserttocombinetable1(model);

            //return data
            return success;
        }
        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult Testcontroller()
        {
            return View();
        }
        public IActionResult insertviewfamilytabledata()
        {
            //testtablesviewmodel vm = new testtablesviewmodel
            //{       
            //    Listinsertviewfamilytable = new List<insertviewfamilydatamodel>(),              
            //};
            return View();
            //return View("insertviewfamilytabledata", vm);
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public bool delItemFromDataTable(string firstname, string secondname) //get the data from the Js, 
        {
            bool success = false;

            testtablesmodel model = new testtablesmodel();
            model.firstName = firstname;
            model.secondName = secondname;
            success = hDb.deleteitemData(model);
            //return data
            return success;
        }

    }
}