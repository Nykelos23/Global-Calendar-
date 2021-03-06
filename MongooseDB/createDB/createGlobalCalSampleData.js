db = db.getSiblingDB('globalCalendar')
db.createCollection('users')
usersCollection = db.getCollection("users")
usersCollection.remove({})
usersCollection.insert(
    {
        userId: 1,
        name: "Nick",
        email: "Nick@gmail.com",
        password: "Nick!",
        timeZone: "USA/Chicago",
        desiredTimeZone: "USA/New_York",
        startDate: "2021-02-01",
        endDate: null,
        isActive: true
    }
)

usersCollection.insert(
    {
        userId: 2,
        name: "Emma",
        email: "Emma@gmail.com",
        password: "Emma!",
        timeZone: "Asia/Tokyo",
        desiredTimeZone: "USA/Los_Angeles",
        startDate: "2020-01-01",
        endDate: null,
        isActive: true
    }
)
usersCollection.insert(
    {
        userId: 3,
        name: "Alex",
        email: "Alex@gmail.com",
        password: "Alex!",
        timeZone: "USA/New_York",
        desiredTimeZone: "USA/Los_Angeles",
        startDate: "2020-01-04",
        endDate: null,
        isActive: true
    }
)

usersCollection.insert(
    {
        userId: 4,
        name: "Justin",
        email: "Justin@gmail.com",
        password: "Justin!",
        timeZone: "USA/Los_Angeles",
        desiredTimeZone: "Asia/Tokyo",
        startDate: "2021-02-11",
        endDate: null,
        isActive: true
    }
)
usersCollection.insert(
    {
        userId: 5,
        name: "Dr. H",
        email: "Dr. H@gmail.com",
        password: "Dr. H!",
        timeZone: "USA/Los_Angeles",
        desiredTimeZone: "Asia/Tokyo",
        startDate: "2020-01-01",
        endDate: "2021-01-31",
        isActive: false
    }
)

usersCollection.insert(
    {
        userId: 108011549399120388578,
        name: "Nick Benyo",
        email: "nicholasbenyo@gmail.com",
        password: "MyTest",
        timeZone: "USA/Los_Angeles",
        desiredTimeZone: "USA/New_York",
        startDate: "2020-01-01",
        endDate: "2021-01-31",
        isActive: false
    }
)

db.createCollection('calendars')
calendarsCollection = db.getCollection("calendars")
calendarsCollection.remove({})
calendarsCollection.insert(
    {
        calendarId: 1,
        userId: 1,
        name: "Nick's Seattle U Classes",
        description: "For Seattle University Winter 2021 Quarter",
        events: [
            {
                eventId: 1
            },
            {
                eventId: 3
            },
            {
                eventId: 4
            },
            {
                eventId: 5
            },
            {
                eventId: 6
            },
            {
                eventId: 7
            },
            {
                eventId: 8
            },
            {
                eventId: 9
            },
            {
                eventId: 10
            },
            {
                eventId: 11
            },
            {
                eventId: 12
            },
            {
                eventId: 13
            },
            {
                eventId: 14
            },
            {
                eventId: 15
            },
            {
                eventId: 16
            }
        ]
    }
)
calendarsCollection.insert(
    {
        calendarId: 2,
        userId: 2,
        name: "Emma's Seattle U Classes",
        description: "For Seattle University Winter 2021 Quarter",
        events: [
            {
                eventId: 2
            },
            {
                eventId: 3
            }
        ]
    }
)
calendarsCollection.insert(
    {
        calendarId: 3,
        userId: 3,
        name: "Alex's Seattle U Classes",
        description: "For Seattle University Winter 2021 Quarter",
        events: [
            {
                eventId: 3
            },
            {
                eventId: 4
            }
        ]
    }
)
calendarsCollection.insert(
    {
        calendarId: 4,
        userId: 4,
        name: "Justin's Seattle U Classes",
        description: "For Seattle University Winter 2021 Quarter",
        events: [
            {
                eventId: 3
            },
            {
                eventId: 4
            }
        ]
    }
)

db.createCollection('events')
eventsCollection = db.getCollection("events")
eventsCollection.remove({})
eventsCollection.insert(
    {
        eventId: 1,
        title: "Rocket Science Zoom Meeting",
        category: "Classes",
        description: "To the moon!",
        startDate: "2021-02-13",
        endDate: "2021-02-13",
        startTime: "13:00",
        endTime: "14:30"
    }
)
eventsCollection.insert(
    {
        eventId: 2,
        title: "Capstone Zoom Meeting",
        category: "Classes",
        description: "",
        startDate: "2021-06-14",
        endDate: "2021-06-14",
        startTime: "11:00",
        endTime: "13:00"
    }
)
eventsCollection.insert(
    {
        eventId: 3,
        title: "SaaS Zoom Meeting",
        category: "Classes",
        description: "Backend presentations",
        startDate: "2021-02-17",
        endDate: "2021-02-17",
        startTime: "18:00",
        endTime: "20:00"
    }
)
eventsCollection.insert(
    {
        eventId: 4,
        title: "Group Project Meeting",
        category: "Classes",
        description: "Discuss backend via Discord",
        startDate: "2021-06-15",
        endDate: "2021-06-15",
        startTime: "14:00",
        endTime: "17:00"
    }
)

eventsCollection.insert(
    {
        eventId: 5,
        title: "Hank's Vet Appointment",
        category: "Personal Appointments",
        description: "Taking Hank to dermatologist",
        startDate: "2021-03-08",
        endDate: "2021-03-08",
        startTime: "12:00",
        endTime: "13:00"
    }
)
eventsCollection.insert(
    {
        eventId: 6,
        title: "Presentation Preparation",
        category: "Classes",
        description: "Meet to prepare for SaaS presentation",
        startDate: "2021-03-08",
        endDate: "2021-03-08",
        startTime: "16:00",
        endTime: "18:00"
    }
)
eventsCollection.insert(
    {
        eventId: 7,
        title: "Packers Game",
        category: "Personal",
        description: "Watch the Packers lose again",
        startDate: "2021-03-07",
        endDate: "2021-03-07",
        startTime: "14:00",
        endTime: "17:00"
    }
)

eventsCollection.insert(
    {
        eventId: 8,
        title: "Capstone Zoom Meeting",
        category: "Classes",
        description: "",
        startDate: "2021-03-07",
        endDate: "2021-03-07",
        startTime: "11:00",
        endTime: "13:00"
    }
)
eventsCollection.insert(
    {
        eventId: 9,
        title: "SaaS Zoom Meeting",
        category: "Classes",
        description: "Backend presentations",
        startDate: "2021-03-07",
        endDate: "2021-03-07",
        startTime: "18:00",
        endTime: "20:00"
    }
)
eventsCollection.insert(
    {
        eventId: 10,
        title: "Group Project Meeting",
        category: "Classes",
        description: "Discuss backend via Discord",
        startDate: "2021-03-07",
        endDate: "2021-03-07",
        startTime: "14:00",
        endTime: "17:00"
    }
)

eventsCollection.insert(
    {
        eventId: 11,
        title: "Capstone Zoom Meeting",
        category: "Classes",
        description: "",
        startDate: "2021-03-08",
        endDate: "2021-03-08",
        startTime: "11:00",
        endTime: "13:00"
    }
)
eventsCollection.insert(
    {
        eventId: 12,
        title: "SaaS Zoom Meeting",
        category: "Classes",
        description: "Backend presentations",
        startDate: "2021-03-08",
        endDate: "2021-03-08",
        startTime: "18:00",
        endTime: "20:00"
    }
)
eventsCollection.insert(
    {
        eventId: 13,
        title: "Group Project Meeting",
        category: "Classes",
        description: "Discuss backend via Discord",
        startDate: "2021-03-08",
        endDate: "2021-03-08",
        startTime: "14:00",
        endTime: "17:00"
    }
)

eventsCollection.insert(
    {
        eventId: 14,
        title: "Capstone Zoom Meeting",
        category: "Classes",
        description: "",
        startDate: "2021-03-09",
        endDate: "2021-03-09",
        startTime: "11:00",
        endTime: "13:00"
    }
)
eventsCollection.insert(
    {
        eventId: 15,
        title: "SaaS Zoom Meeting",
        category: "Classes",
        description: "Backend presentations",
        startDate: "2021-03-09",
        endDate: "2021-03-09",
        startTime: "18:00",
        endTime: "20:00"
    }
)
eventsCollection.insert(
    {
        eventId: 16,
        title: "Group Project Meeting",
        category: "Classes",
        description: "Discuss backend via Discord",
        startDate: "2021-03-09",
        endDate: "2021-03-09",
        startTime: "14:00",
        endTime: "17:00"
    }
)

