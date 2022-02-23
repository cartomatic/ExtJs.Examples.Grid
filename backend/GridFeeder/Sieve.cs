using Microsoft.Extensions.Options;
using Sieve.Models;
using Sieve.Services;

namespace GridFeeder
{
    public class ApplicationSieveProcessor : SieveProcessor
    {
        /// <inheritdoc />
        public ApplicationSieveProcessor(IOptions<SieveOptions> options) : base(options)
        {
        }

        /// <inheritdoc />
        public ApplicationSieveProcessor(IOptions<SieveOptions> options, ISieveCustomSortMethods customSortMethods) : base(options, customSortMethods)
        {
        }

        /// <inheritdoc />
        public ApplicationSieveProcessor(IOptions<SieveOptions> options, ISieveCustomFilterMethods customFilterMethods) : base(options, customFilterMethods)
        {
        }

        /// <inheritdoc />
        public ApplicationSieveProcessor(IOptions<SieveOptions> options, ISieveCustomSortMethods customSortMethods, ISieveCustomFilterMethods customFilterMethods) : base(options, customSortMethods, customFilterMethods)
        {
        }

        /// <inheritdoc />
        protected override SievePropertyMapper MapProperties(SievePropertyMapper mapper)
        {
            mapper.Property<TestModel>(_ => _.Txt)
                .CanFilter()
                .CanSort();

            mapper.Property<TestModel>(_ => _.Int)
                .CanSort();

            mapper.Property<TestModel>(_ => _.Number)
                .CanSort();

            mapper.Property<TestModel>(_ => _.Bool)
                .CanSort();

            mapper.Property<TestModel>(_ => _.Date)
                .CanSort();

            return mapper;
        }
    }
}
