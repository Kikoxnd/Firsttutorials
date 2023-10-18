using Microsoft.AspNetCore.Mvc;

namespace Firsttutorials.Controllers
{
    public class adibController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
