app.service('peopleService', function(){
  this.patientData = [
    {
      person: 'Wanda Smith',
      diagnosis: 'lung cancer'
    },
    {
      person: 'Clyde Brothers',
      diagnosis: 'AIDS'
    },
    {
      person: 'Larry Olsen',
      diagnosis: 'liver failure'
    }
    ];

    this.mileageCalc = function(numMiles) {
      var reimbursement = numMiles * .50;
      return reimbursement;
    }

    this.isOnVisitList = function(patientName) {

      for (var i = 0; i < patientData.length; i++) {
        //console.log(patientData[i].person)
        if(patientName == patientData[i].person) {
          return patientName;
        }
        else {
          //console.log(patientName);
          var found = false;
          
        }
    }
    if(!found) {return "Patient not found"}
   } 
});