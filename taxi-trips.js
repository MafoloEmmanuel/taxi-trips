module.exports = function TaxiTrips(pool){

    let totalTripCount=async()=>{
var result = await pool.query('select trips_no, sum(trips_no) total from taxi group by trips_no');
return result.rows
    };

    let findAllRegions=async()=>{
var result = await pool.query('select region_name from region')
   return result.rows
};


    return {
        totalTripCount,
        findAllRegions
    }
}