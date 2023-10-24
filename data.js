const express = require("express");

const app = express();

app.listen(9000, () => {
  console.log("Server started successfully in local port : 9000");
});

// data needed
// Room data
// 1. Number of seats available
// 2. Amentities in room
// 3.Price for 1 hour
// 4. RoomNames
// Customer Data
// 4.customer Name
// 5.BookedDate
// 6.StartTime
// 7.End Time
// 8. Room name Booked
// 8.Room id allocated

// Task 1. List all rooms which was booked
// Task 2. List all the customers data who have booked the room
// Task 3. List how many times or how many rooms a respective customer has booked the room

const hallBooking = [
  {
    id: "1",
    numberOfSeatsAvailable: 150,
    amentities: ["AC", "BathTubs", "SwimmingPool", "TV", "Free Breakfast"],
    priceForHour: {
      "1BHK": 300,
      "2BHK": 350,
      "3BHK": 400,
      "4BHK": 450,
      "5BHK": 500,
      duplex: 550,
    },
    customerName: "Prakash",
    bookedDate: "2023-09-13",
    startTime: "09:00AM",
    endTime: "06:00PM",
    roomBooked: "duplex",
    roomNumber: "201",
    ifRoomBooked: "true",
  },
  {
    id: "2",
    numberOfSeatsAvailable: 150,
    amentities: ["AC", "BathTubs", "SwimmingPool", "TV", "Free Breakfast"],
    priceForHour: {
      "1BHK": 300,
      "2BHK": 350,
      "3BHK": 400,
      "4BHK": 450,
      "5BHK": 500,
      duplex: 550,
    },
    customerName: "Prakash",
    bookedDate: "2023-09-13",
    startTime: "09:00AM",
    endTime: "06:00PM",
    roomBooked: "1BHK",
    roomNumber: "202",
    ifRoomBooked: "true",
  },
  {
    id: "3",
    numberOfSeatsAvailable: 150,
    amentities: ["AC", "BathTubs", "SwimmingPool", "TV", "Free Breakfast"],
    priceForHour: {
      "1BHK": 300,
      "2BHK": 350,
      "3BHK": 400,
      "4BHK": 450,
      "5BHK": 500,
      duplex: 550,
    },
    customerName: "Prakash",
    bookedDate: "2023-09-13",
    startTime: "09:00AM",
    endTime: "06:00PM",
    roomBooked: "2BHK",
    roomNumber: "203",
    ifRoomBooked: "true",
  },
  {
    id: "4",
    numberOfSeatsAvailable: 150,
    amentities: ["AC", "BathTubs", "SwimmingPool", "TV", "Free Breakfast"],
    priceForHour: {
      "1BHK": 300,
      "2BHK": 350,
      "3BHK": 400,
      "4BHK": 450,
      "5BHK": 500,
      duplex: 550,
    },
    customerName: "Venkatesan",
    bookedDate: "2023-09-13",
    startTime: "09:00AM",
    endTime: "06:00PM",
    roomBooked: "3BHK",
    roomNumber: "204",
    ifRoomBooked: "true",
  },
  {
    id: "5",
    numberOfSeatsAvailable: 150,
    amentities: ["AC", "BathTubs", "SwimmingPool", "TV", "Free Breakfast"],
    priceForHour: {
      "1BHK": 300,
      "2BHK": 350,
      "3BHK": 400,
      "4BHK": 450,
      "5BHK": 500,
      duplex: 550,
    },
    customerName: "Sanjay",
    bookedDate: "2023-09-10",
    startTime: "06:00PM",
    endTime: "06:00AM",
    roomBooked: "3BHK",
    roomNumber: "205",
    ifRoomBooked: "true",
  },
  {
    id: "6",
    numberOfSeatsAvailable: 150,
    amentities: ["AC", "BathTubs", "SwimmingPool", "TV", "Free Breakfast"],
    priceForHour: {
      "1BHK": 300,
      "2BHK": 350,
      "3BHK": 400,
      "4BHK": 450,
      "5BHK": 500,
      duplex: 550,
    },
    customerName: "Jayakumar",
    bookedDate: "2023-09-10",
    startTime: "06:00PM",
    endTime: "06:00AM",
    roomBooked: "duplex",
    roomNumber: "206",
    ifRoomBooked: "true",
  },
  {
    id: "7",
    numberOfSeatsAvailable: 150,
    amentities: ["AC", "BathTubs", "SwimmingPool", "TV", "Free Breakfast"],
    priceForHour: {
      "1BHK": 300,
      "2BHK": 350,
      "3BHK": 400,
      "4BHK": 450,
      "5BHK": 500,
      duplex: 550,
    },
    customerName: "Shiva",
    bookedDate: "2023-09-10",
    startTime: "08:00AM",
    endTime: "10:00PM",
    roomBooked: "duplex",
    roomNumber: "206",
    ifRoomBooked: "true",
  },
  {
    id: "8",
    numberOfSeatsAvailable: 150,
    amentities: ["AC", "BathTubs", "SwimmingPool", "TV", "Free Breakfast"],
    priceForHour: {
      "1BHK": 300,
      "2BHK": 350,
      "3BHK": 400,
      "4BHK": 450,
      "5BHK": 500,
      duplex: 550,
    },
    customerName: "Lokesh",
    bookedDate: "2023-09-10",
    startTime: "08:00AM",
    endTime: "10:00PM",
    roomBooked: "duplex",
    roomNumber: "206",
    ifRoomBooked: "false",
  },
];

// 1. Gives all the data

app.get("", (req, resp) => {
  const allData = hallBooking;
  resp.json(allData);
});

// 2. List RoomName, BookedStatus, customerName, Date, startTime and end time for the Rooms booked

app.get("/bookedRooms", (req, resp) => {
  const bookedRoomsData = hallBooking.map((ele) => {
    if (ele.ifRoomBooked === "true") {
      return {
        roomName: ele.roomBooked,
        bookedStatus: ele.ifRoomBooked,
        customerName: ele.customerName,
        Date: ele.bookedDate,
        StartTime: ele.startTime,
        EndTime: ele.endTime,
      };
    }
  });

  resp.json({ bookedRoomsData: bookedRoomsData });
});

// 3. List CustomerName, RoomName, Date, startTime, EndTime

app.get("/CustomerBooked", (req, resp) => {
  const bookedCustomerData = hallBooking.map((ele) => {
    if (ele.ifRoomBooked === "true") {
      return {
        customerName: ele.customerName,
        roomName: ele.roomBooked,
        Date: ele.bookedDate,
        StartTime: ele.startTime,
        EndTime: ele.endTime,
      };
    }
  });

  resp.json({ bookedCustomerData: bookedCustomerData });
});

app.get("/customer", (req, resp) => {
  let { customerName } = req.query;
  let customerBookedTimes = hallBooking.map((ele) => {
    return {
      customerName: ele.customerName,
      roomName: ele.roomBooked,
      Date: ele.bookedDate,
      StartTime: ele.startTime,
      EndTime: ele.endTime,
      bookingID: ele.id,
      bookingDate: ele.bookedDate,
      bookingStatus: ele.ifRoomBooked,
    };
  });

  if (req.query) {
    if (customerName) {
      customerBookedTimes = customerBookedTimes.filter((ele) => {
        return ele.customerName === customerName;
      });
    }
  }
  resp.json({
    customerBooked: customerBookedTimes,
    BookedTimes: customerBookedTimes.length.toString(),
  });
});

app.post("/rooms/add", (req, resp) => {
  let newRoom = {
    id: "9",
    numberOfSeatsAvailable: 150,
    amentities: ["AC", "BathTubs", "SwimmingPool", "TV", "Free Breakfast"],
    priceForHour: {
      "1BHK": 300,
      "2BHK": 350,
      "3BHK": 400,
      "4BHK": 450,
      "5BHK": 500,
      duplex: 550,
    },
    customerName: "Manikandan",
    bookedDate: "2023-09-10",
    startTime: "02:00AM",
    endTime: "03:00PM",
    roomBooked: "duplex",
    roomNumber: "206",
    ifRoomBooked: "false",
  };

  hallBooking.filter((ele) => {
    if (ele.ifRoomBooked == "false") {
      console.log("Sorry All are Rooms are booked");
    } else {
      hallBooking.push(newRoom);
      resp.json(hallBooking);
    }
  });
});
