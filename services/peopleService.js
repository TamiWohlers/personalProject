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
      for (var i = 0; i < this.patientData.length; i++) {
        if(patientName == this.patientData[i]) {
          return patientName;
        }
        else {
          return 'Patient not found'
        }
    }
   } 
});

    
