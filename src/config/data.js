// data.js
export const clientAppointments = [
    {
      name: "Asit Kumar",
      date: "12 Oct 2024",
      time: "9:10pm",
      treatment: "Anxiety and panic attacks",
      image: "/man-potrait.jpeg", // Custom image
    },
    {
      name: "John Doe",
      date: "15 Nov 2024",
      time: "10:00am",
      treatment: "Depression and mood disorders",
      // No image provided
    },
    {
      name: "Jane Smith",
      date: "20 Oct 2024",
      time: "2:30pm",
      treatment: "Therapy session for depression",
    },
    {
      name: "Michael Johnson",
      date: "25 Oct 2024",
      time: "1:00pm",
      treatment: "Counseling for anxiety",
    },
    {
      name: "Emily Davis",
      date: "30 Oct 2024",
      time: "11:15am",
      treatment: "Panic attack management",
    },
  ];
  

  // plansData.js
export const monthlyPlans = [
    {
      plan: "Beginner",
      price: "$29",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
      ],
    },
    {
      plan: "Pro",
      price: "$99",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "Dedicated support representative",
      ],
    },
    {
      plan: "Basic",
      price: "$9",
      features: [
        "Limited products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "Email support",
      ],
    },
  ];
  
  export const yearlyPlans = [
    {
      plan: "Beginner",
      price: "$290",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
      ],
    },
    {
      plan: "Pro",
      price: "$990",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "Dedicated support representative",
      ],
    },
    {
      plan: "Basic",
      price: "$90",
      features: [
        "Limited products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "Email support",
      ],
    },
  ];
  

// data.js
export const appointmentData = {
  upcoming: [
    {
      id: 101,
      name: "J. Abrams",
      age: 23,
      gender: "Male",
      date: "29 Nov 2024",
      time: "04:10 PM",
      duration: "45 mins",
      contact: "+91-7805560586",
      isUpcoming: true,
    },
    {
      id: 102,
      name: "K. Johansson",
      age: 28,
      gender: "Female",
      date: "30 Nov 2024",
      time: "10:00 AM",
      duration: "30 mins",
      contact: "+91-9905560586",
      isUpcoming: true,
    },
    {
      id: 103,
      name: "A. Patel",
      age: 34,
      gender: "Male",
      date: "5 Dec 2024",
      time: "12:00 PM",
      duration: "1 hour",
      contact: "+91-7801234567",
      isUpcoming: true,
    },
    {
      id: 104,
      name: "S. Williams",
      age: 40,
      gender: "Female",
      date: "7 Dec 2024",
      time: "09:30 AM",
      duration: "30 mins",
      contact: "+91-9987654321",
      isUpcoming: true,
    },
    {
      id: 105,
      name: "P. Dinesh",
      age: 22,
      gender: "Male",
      date: "10 Dec 2024",
      time: "03:00 PM",
      duration: "45 mins",
      contact: "+91-7775560889",
      isUpcoming: true,
    },
    {
      id: 106,
      name: "M. Johnson",
      age: 33,
      gender: "Female",
      date: "15 Dec 2024",
      time: "11:15 AM",
      duration: "1 hour",
      contact: "+91-7999912345",
      isUpcoming: true,
    },
  ],
  completed: [
    {
      id: 201,
      name: "L. Smith",
      age: 35,
      gender: "Male",
      date: "22 Nov 2024",
      time: "02:00 PM",
      duration: "1 hour",
      contact: "+91-7792560586",
      isUpcoming: false,
    },
    {
      id: 202,
      name: "E. Williams",
      age: 30,
      gender: "Female",
      date: "19 Nov 2024",
      time: "03:30 PM",
      duration: "30 mins",
      contact: "+91-7882345678",
      isUpcoming: false,
    },
    {
      id: 203,
      name: "A. Black",
      age: 40,
      gender: "Male",
      date: "18 Nov 2024",
      time: "11:00 AM",
      duration: "1 hour",
      contact: "+91-7776543210",
      isUpcoming: false,
    },
    {
      id: 204,
      name: "R. Kumar",
      age: 26,
      gender: "Female",
      date: "17 Nov 2024",
      time: "04:15 PM",
      duration: "45 mins",
      contact: "+91-7997654321",
      isUpcoming: false,
    },
    {
      id: 205,
      name: "N. Sharma",
      age: 50,
      gender: "Male",
      date: "16 Nov 2024",
      time: "01:30 PM",
      duration: "30 mins",
      contact: "+91-7834567890",
      isUpcoming: false,
    },
    {
      id: 206,
      name: "T. Singh",
      age: 29,
      gender: "Female",
      date: "15 Nov 2024",
      time: "10:45 AM",
      duration: "1 hour",
      contact: "+91-7998876543",
      isUpcoming: false,
    },
  ],
  cancelled: [
    {
      id: 301,
      name: "A. Clark",
      age: 40,
      gender: "Female",
      date: "20 Nov 2024",
      time: "11:30 AM",
      duration: "30 mins",
      contact: "+91-7008560586",
      isUpcoming: false,
    },
    {
      id: 302,
      name: "B. Thompson",
      age: 32,
      gender: "Male",
      date: "19 Nov 2024",
      time: "09:00 AM",
      duration: "1 hour",
      contact: "+91-7112345678",
      isUpcoming: false,
    },
    {
      id: 303,
      name: "C. Harris",
      age: 25,
      gender: "Female",
      date: "18 Nov 2024",
      time: "03:15 PM",
      duration: "45 mins",
      contact: "+91-7771234567",
      isUpcoming: false,
    },
    {
      id: 304,
      name: "D. James",
      age: 37,
      gender: "Male",
      date: "17 Nov 2024",
      time: "12:00 PM",
      duration: "30 mins",
      contact: "+91-7887654321",
      isUpcoming: false,
    },
    {
      id: 305,
      name: "F. Williams",
      age: 33,
      gender: "Female",
      date: "16 Nov 2024",
      time: "02:30 PM",
      duration: "1 hour",
      contact: "+91-7896543210",
      isUpcoming: false,
    },
    {
      id: 306,
      name: "G. Walker",
      age: 28,
      gender: "Male",
      date: "15 Nov 2024",
      time: "11:00 AM",
      duration: "30 mins",
      contact: "+91-7987654321",
      isUpcoming: false,
    },
  ],
};


export const professionalQuestions = [
  {
    id: 1,
    question: "What is your area of expertise?",
    options: ["Depression", "Anxiety", "Stress", "Trauma", "Other"],
  },
  {
    id: 2,
    question: "How many years of experience do you have?",
    options: ["1", "2", "3", "4", "5+ years"], // Added default options for the number input
  },
  {
    id: 3,
    question: "What type of practice do you have?",
    options: ["Private Practice", "Group Practice", "Hospital-based", "Other"],
  },
  {
    id: 4,
    question: "How many patients/clients do you typically see per month?",
    options: ["<10", "10-20", "20-30", "30+ clients"], // Default options for this field
  },
  {
    id: 5,
    question: "What is your preferred method for conducting sessions?",
    options: ["In-person", "Online", "Hybrid (In-person + Online)"],
  },
  {
    id: 6,
    question: "How do you currently manage appointment bookings?",
    options: ["Manually", "Online Booking Platforms", "Practice Management Software", "Other"],
  },
  {
    id: 7,
    question: "What types of mental health assessments do you typically use?",
    options: [
      "Self-Reported Questionnaires",
      "Structured Clinical Interviews",
      "Behavioral Assessments",
      "Cognitive Assessments",
      "Other",
    ],
  },
  {
    id: 8,
    question: "Which best describes your client base?",
    options: ["Adults", "Children", "Families", "Couples", "Other"],
  },
  {
    id: 9,
    question: "How do you handle emergencies or urgent cases?",
    options: ["Refer to Emergency Services", "On-call Availability", "Crisis Intervention Services", "Other"],
  },
  {
    id: 10,
    question: "What are your working hours?",
    options: ["9 AM - 5 PM", "8 AM - 4 PM", "Flexible", "Other"], // Default options for working hours
  },
  {
    id: 11,
    question: "What are your fees for a standard session?",
    options: ["$50", "$100", "$150", "$200"], // Default options for session fees
  },
];


