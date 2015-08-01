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
    },
    {
      person: 'Harry Buck',
      diagnosis: 'brain cancer'
    },
    {
      person: 'Leonard Fault',
      diagnosis: 'CHF'
    }
    ];

    this.mileageCalc = function(numMiles) {
      var reimbursement = numMiles * .50;
      return reimbursement;
    }

    this.isOnVisitList = function(patientName) {
      //console.log(this.patientData.length);
      for (var i = 0; i < this.patientData.length; i++) {
        //console.log(this.patientData[i].person)
        if(patientName === this.patientData[i].person) {
          return this.patientData[i].person;
          console.log(patientData[i].person);
        }
        else {
          //console.log(patientName);
          patientFound = false;
        }
    }
    if(!patientFound) {
      return('Patient not found.')
    }
   }
  }); 

    
