// Contact model for Contacts and Contact Details screens.
export type Contact = {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  office: string;
};

// DaySchedule model for weekly timetable screen.
export type DaySchedule = {
  day: string;
  classes: Array<{
    time: string;
    course: string;
    room: string;
  }>;
};

// Notice model for Notice Board screen.
export type Notice = {
  id: string;
  title: string;
  message: string;
  date: string;
  tag: "General" | "Academic" | "Event";
};

// Sample contact data shown in FlatList.
export const contacts: Contact[] = [
  {
    id: "it-helpdesk",
    name: "IT Helpdesk",
    role: "Technical Support",
    phone: "+975 2 123456",
    email: "helpdesk@rub.edu.bt",
    office: "IT Block, Room 101",
  },
  {
    id: "student-services",
    name: "Student Services",
    role: "Enrollment and Welfare",
    phone: "+975 2 998877",
    email: "services@rub.edu.bt",
    office: "Admin Block, Room 3",
  },
  {
    id: "library-desk",
    name: "Library Desk",
    role: "Books and Study Rooms",
    phone: "+975 2 112233",
    email: "library@rub.edu.bt",
    office: "Library Ground Floor",
  },
  {
    id: "emergency",
    name: "Campus Security",
    role: "Emergency Response",
    phone: "+975 17171717",
    email: "security@rub.edu.bt",
    office: "Gate Office",
  },
];

// Sample weekly class data grouped by day.
export const weeklySchedule: DaySchedule[] = [
  {
    day: "Monday",
    classes: [
      {
        time: "09:00 - 10:30",
        course: "System Design & Solution Architecture",
        room: "IT-06",
      },
      { time: "11:00 - 12:00", course: "Operating Systems", room: "Lab-1" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "08:30 - 10:00", course: "Database Systems", room: "LT-1" },
      {
        time: "13:00 - 14:30",
        course: "Cross Platform Development",
        room: "IT-07",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "09:00 - 10:30", course: "Cryptology", room: "Lab-02" },
      {
        time: "14:00 - 15:00",
        course: "Project Meeting",
        room: "Seminar Hall",
      },
    ],
  },
  {
    day: "Thursday",
    classes: [
      {
        time: "10:00 - 11:30",
        course: "Discrete Mathematics",
        room: "CR-09",
      },
      { time: "12:00 - 13:00", course: "Academic Skills", room: "CR-05" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "09:30 - 11:00", course: "Cryptology", room: "Lab-02" },
      { time: "11:30 - 12:30", course: "Operating Systems", room: "IT-04" },
    ],
  },
];

// Sample announcements for Notice Board.
export const notices: Notice[] = [
  {
    id: "notice-1",
    title: "Mid-Semester Exam Week",
    message:
      "Exams start coming Friday. Check your subject classroom list in the mail.",
    date: "2026-04-10",
    tag: "Academic",
  },
  {
    id: "notice-2",
    title: "Library Extended Hours",
    message:
      "The library will stay open until 12:00 AM during exam preparation week.",
    date: "2026-04-16",
    tag: "General",
  },
  {
    id: "notice-3",
    title: "Coding Club Meetup",
    message:
      "Join the weekly coding club meetup at Seminar Hall from 4:30 PM to 5:30 PM.",
    date: "2026-04-18",
    tag: "Event",
  },
];
