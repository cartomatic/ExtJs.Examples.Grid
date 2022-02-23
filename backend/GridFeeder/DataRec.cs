namespace GridFeeder
{
    public class TestModel
    {
        public int Id { get; set; }
        public string Txt { get; set; }
        public DateTime Date { get; set; }
        public int Int { get; set; }
        public float Number { get; set; }
        public bool Bool { get; set; }

        //not used but a hack, so the custom sorting tool works
        public DateTime? CreateDateUtc { get; set; }
    }
}