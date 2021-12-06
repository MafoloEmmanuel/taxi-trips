let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://emmanuel:201735469@localhost:5432/coderdb';

const pool = new Pool({
    connectionString
});

describe('Taxi Trips', function () {

     beforeEach(async function () {
    });

    it('should find how many trips all the taxis made', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepEqual([ {  count: '4' }], await taxiTrips.totalTripCount());
    

    });

    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepEqual([
            { region_name: 'Durban' },{ region_name: 'Cape Town' },{ region_name: 'Gauteng' }], await taxiTrips.findAllRegions());

    });
    it('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);

        assert.deepEqual([
            { reg_number: 'ND 23451' },
            { reg_number: 'ND 22074' },
            { reg_number: 'ND 21559' }
          ], await taxiTrips.findTaxisForRegion('Durban'));
        assert.deepStrictEqual([
            { reg_number: 'CA 25874' },
            { reg_number: 'CA 22778' },
            { reg_number: 'CA 20112' }
          ], await taxiTrips.findTaxisForRegion('Cape Town'));
        assert.deepStrictEqual([
            { reg_number: 'BGf 789 GP' },
            { reg_number: 'TYI 569 GP' },
            { reg_number: 'FGP 320 GP' }
          ], await taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        
        assert.deepStrictEqual( [
            {
               reg_number: 'ND 23451',
               trips_no: 7
              }
            ], await taxiTrips.findTripsByRegNumber('ND 23451'));
        assert.deepStrictEqual([
            {
               reg_number: 'BGf 789 GP',
               trips_no: 9
              }
            ], await taxiTrips.findTripsByRegNumber('BGf 789 GP'));

    });

    it('should find the total number of trips by region', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual(3,await taxiTrips.findTripsByRegion('Cape Town'));
        assert.deepStrictEqual(3,await taxiTrips.findTripsByRegion('Gauteng'));
        assert.deepStrictEqual(3,await taxiTrips.findTripsByRegion('Durban'));

    });

    it('find the total income for a given reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([{income:'105.00'}], await taxiTrips.findIncomeByRegNumber('ND 23451'));
        assert.deepStrictEqual([{income:'162.00'}],await taxiTrips.findIncomeByRegNumber('BGf 789 GP'));

    });

    it('find the total income for each taxi', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([
            { reg_number: 'CA 25874', income: '225.00' },
            { reg_number: 'BGf 789 GP', income: '162.00' },
            { reg_number: 'FGP 320 GP', income: '300.00' },
            { reg_number: 'ND 23451', income: '105.00' }
          ], await taxiTrips.findTotalIncomePerTaxi());

    });

    it('find the total income for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([ { total_income: '792.00' } ],await taxiTrips.findTotalIncome());
    });
it('find the total income by region' ,async function(){
    const taxiTrips = TaxiTrips(pool);
assert.deepStrictEqual([ { reg_number: 'ND 23451', income: '105.00' } ], await taxiTrips.findTotalIncomeByRegion('Durban'))
assert.deepStrictEqual([ { reg_number: 'CA 25874', income: '225.00' } ], await taxiTrips.findTotalIncomeByRegion('Cape Town'))
assert.deepStrictEqual([
    { reg_number: 'BGf 789 GP', income: '162.00' },
    { reg_number: 'FGP 320 GP', income: '300.00' }
  ], await taxiTrips.findTotalIncomeByRegion('Gauteng'))

})
    after(function () {
        pool.end();
    });

});