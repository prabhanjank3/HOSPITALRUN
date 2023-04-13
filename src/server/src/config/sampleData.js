const userData = [
  {
    id: "USR09111",
    firstname: "Vikram",
    lastname: "Mohite",
    email: "prabhanjank3@gmail.com",
    phone: "8446274825",
    dob: "1996-09-11"
  },
  {
    id: "USR09937",
    firstname: "Vijay",
    lastname: "Pradhan",
    email: "anuja641997@gmail.com",
    phone: "9421363029",
    dob: "1992-11-11"
  },
  {
    id: "USR09112",
    firstname: "Rishikesh",
    lastname: "Singhania",
    email: "anujk3@gmail.com",
    phone: "8446274827",
    dob: "1997-04-06"
  },
  {
    id: "USR09113",
    firstname: "Asha",
    lastname: "Sabnis",
    email: "vinayd@gmail.com",
    phone: "8446274826",
    dob: "1974-04-06"
  }
];

const doctorData = [
  { id: "DA26384", userid: "USR09112" },
  { id: "DA26385", userid: "USR09937" }
];

const opdData = [
  {
    id: "OPD72634",
    name: "Hematology",
    doctorid: "DA26384",
    timing: [
      { from: "09:00", to: "11:00" },
      { from: "16:00", to: "20:00" }
    ]
  },
  {
    id: "OPD72283",
    name: "Nephrology",
    doctorid: "DA26385",
    timing: [
      { from: "11:00", to: "13:00" },
      { from: "16:00", to: "18:00" }
    ]
  }
];

const appointmentData = [
  {
    id: "AP02374",
    patientid: "PA26385",
    opdid: "OPD72283",
    date: "2023-03-24",
    slot: 1,
    completed: true,
    time: "09:00-09:15",
    reason: "Fever"
  },
  {
    id: "AP02375",
    patientid: "PA26386",
    opdid: "OPD72283",
    date: "2023-03-17",
    slot: 2,
    completed: false,
    time: "09:15-09:30",
    reason: "Vomitings"
  }
];

const patientData = [
  { id: "PA26385", userid: "USR09111" },
  { id: "PA26386", userid: "USR09113" }
];

const prescriptionData = [
  {
    id: "PRS19247",
    appointmentid: "AP02374",
    comments: "NA",
    diagnosis: "Fever",
    medicines: [
      {
        medicine: "Paracetamol",
        dose: "1-0-1",
        frequency: "Daily",
        duration: "3 Months",
        qty: "90",
        comments: "-"
      }
    ]
  }
];
const documents = [
  {
    id: "ATT62936",
    name: "Endoscopy Report",
    url: "./uploads"
  }
];
module.exports = {
  userData,
  doctorData,
  opdData,
  patientData,
  appointmentData,
  prescriptionData,
  documents
};
