module.exports = function(pool){

    let totalTripCount=async()=>{
var result = await pool.query('select count(*) from trip');

return result.rows
    };

    let findAllRegions=async()=>{
var result = await pool.query('select region_name from region');
   return result.rows                
};

let findTaxisForRegion =async(region_name)=>{
    var result = await pool.query('select reg_number from taxi join region on taxi.region_id=region.id where region_name=$1',[region_name])
  return result.rows
}

let findTripsByRegNumber =async(reg_number)=>{
    var result = await pool.query('select reg_number,trips_no from taxi join trip on taxi.id=trip.taxi_id  where reg_number=$1',[reg_number]);
    return result.rows
}

let findTripsByRegion =async(region_name)=>{
    var result = await pool.query('select  region.region_name,taxi.reg_number from region join taxi on region.id=taxi.region_id where region.region_name=$1',[region_name]);
    return result.rowCount
}
let findIncomeByRegNumber =async(reg_number)=>{
    var result = await pool.query('select sum(routes.fare*taxi.trips_no) as income from routes join trip on routes.id=trip.routes_id join taxi on taxi.id=trip.taxi_id where taxi.reg_number=$1',[reg_number]);

    return result.rows
}
let findTotalIncomePerTaxi =async()=>{
    var result = await pool.query('select reg_number, sum(routes.fare*taxi.trips_no) as income from routes join trip on routes.id=trip.routes_id join taxi on taxi.id=trip.taxi_id group by reg_number');
//console.log(result.rows)
    return result.rows
}

let findTotalIncome =async()=>{
  //create a virtual table

  var result = await pool.query('select sum(income) as total_income from saveTotalIncome ')
 
  return result.rows

}
let findTotalIncomeByRegion =async(region_name)=>{
    var result = await pool.query('select reg_number,sum(routes.fare*taxi.trips_no) as income from routes join trip on routes.id=trip.routes_id join taxi on taxi.id=trip.taxi_id join region on taxi.region_id=region.id where region_name=$1 group by reg_number',[region_name]);
    return result.rows
}

    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion
    }
}