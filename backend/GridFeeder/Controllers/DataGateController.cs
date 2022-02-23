using Cartomatic.Utils.Filtering;
using Cartomatic.Utils.Sorting;
using Microsoft.AspNetCore.Mvc;
using Sieve.Models;
using Sieve.Services;

namespace GridFeeder.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataGateController : ControllerBase
    {
        private readonly ILogger<DataGateController> _logger;

        private static IEnumerable<TestModel> _data;
        private static IQueryable<TestModel> _dataQueryable;

        private readonly ISieveProcessor _sieveProcessor;

        static DataGateController()
        {
            var range = 100000;
            var data = new List<TestModel>(100000);

            var rnd = new Random();

            for (var i = 1; i <= 100000; i++)
            {
                data.Add(new TestModel
                {
                    Id = i,
                    Txt = $"txt_{i}",
                    Date = new DateTime().AddHours(i/100),
                    Bool = i%2 == 0,
                    Int = i,
                    Number = rnd.NextSingle() * range
                });
            }

            _data = data;
            _dataQueryable = data.AsQueryable();
        }

        public DataGateController(ILogger<DataGateController> logger, ISieveProcessor sieveProcessor)
        {
            _logger = logger;
            _sieveProcessor = sieveProcessor;
        }

        class Ouput
        {
            public IEnumerable<TestModel> Data { get; set; }
            public int Total { get; set; }
        }


        [HttpGet]
        public IActionResult GetWithExtjsOutout([FromQuery] int start = 0, [FromQuery] int limit = 25)
        {
            var data = _data.Skip(start).Take(limit).ToArray();
            return Ok(new Ouput
            {
                Data = data,
                Total = _data.Count()
            });
        }

        [Route("custom")]
        [HttpGet]
        public IActionResult GetWithCustomOutout([FromQuery] int start = 0, [FromQuery] int limit = 25)
        {
            var data = _data.Skip(start).Take(limit).ToArray();

            //custom header
            HttpContext.Response.Headers.Append("total", $"{_data.Count()}");

            //expose custom header
            HttpContext.Response.Headers.Append("Access-Control-Expose-Headers", "total");

            return Ok(data);
        }

        [Route("filterable")]
        [HttpGet]
        public IActionResult GetFilterable([FromQuery] string? sort = null, [FromQuery] string? filter = null, [FromQuery] int start = 0, [FromQuery] int limit = 25)
        {
            var data = _dataQueryable.ApplyReadFilters(filter?.ExtJsJsonFiltersToReadFilters()).ApplyReadSorters(sort?.ExtJsJsonSortersToReadSorters()).Skip(start).Take(limit).ToArray();

            //custom header
            HttpContext.Response.Headers.Append("total", $"{_data.Count()}");

            //expose custom header
            HttpContext.Response.Headers.Append("Access-Control-Expose-Headers", "total");

            return Ok(data);
        }

        [Route("sieve")]
        [HttpGet]
        public IActionResult GetFilterableViaSieve([FromQuery] SieveModel sieveModel)
        {
            var data = _sieveProcessor.Apply(sieveModel, _dataQueryable).ToArray();

            sieveModel.PageSize = null;
            sieveModel.Page = null;

            var count = _sieveProcessor.Apply(sieveModel, _dataQueryable).Count();

            //custom header
            HttpContext.Response.Headers.Append("total", $"{count}");

            //expose custom header
            HttpContext.Response.Headers.Append("Access-Control-Expose-Headers", "total");

            return Ok(data);
        }
        
    }
}