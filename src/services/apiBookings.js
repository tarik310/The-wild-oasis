import { getToday } from "../utils/helpers";
import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constants";
import { add } from "date-fns";
function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

const bookings = [
  {
    id: 36,
    created_at: fromToday(-20, true),
    startDate: fromToday(0),
    endDate: fromToday(7),
    numNights: 5,
    numGuests: 4,
    cabinPrice: 1500,
    extrasPrice: 300,
    totalPrice: 1800,
    status: "checked-out",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    guestId: 41,
    cabinId: 33,
    guests: {
      fullName: "Mohammed Ali",
      countryFlag: "https://flagcdn.com/eg.svg",
      nationality: "Egypt",
    },
  },
  {
    id: 50,
    created_at: fromToday(-33, true),
    startDate: fromToday(-23),
    endDate: fromToday(-13),
    numNights: 5,
    numGuests: 6,
    cabinPrice: 2500,
    extrasPrice: 450,
    totalPrice: 2950,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    guestId: 55,
    cabinId: 37,
    guests: {
      fullName: "Taro Tanaka",
      countryFlag: "https://flagcdn.com/jp.svg",
      nationality: "Japan",
    },
  },
  {
    id: 33,
    created_at: fromToday(-27, true),
    startDate: fromToday(12),
    endDate: fromToday(18),
    numNights: 16,
    numGuests: 2,
    cabinPrice: 5200,
    extrasPrice: 0,
    totalPrice: 5200,
    status: "checked-out",
    hasBreakfast: false,
    isPaid: true,
    observations: "",
    guestId: 38,
    cabinId: 32,
    guests: {
      fullName: "Jonas Anderson",
      countryFlag: "https://flagcdn.com/bo.svg",
      nationality: "Bolivia (Plurinational State of)",
    },
  },
  {
    id: 31,
    created_at: fromToday(-45, true),
    startDate: fromToday(-45),
    endDate: fromToday(-29),
    numNights: 10,
    numGuests: 2,
    cabinPrice: 2500,
    extrasPrice: 300,
    totalPrice: 2800,
    status: "checked-out",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    guestId: 36,
    cabinId: 31,
    guests: {
      fullName: "Jonatan Johansson",
      countryFlag: "https://flagcdn.com/fi.svg",
      nationality: "Finland",
    },
  },
  {
    id: 39,
    created_at: fromToday(-2, true),
    startDate: fromToday(15),
    endDate: fromToday(18),
    numNights: 12,
    numGuests: 4,
    cabinPrice: 5400,
    extrasPrice: 720,
    totalPrice: 6120,
    status: "checked-in",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    guestId: 44,
    cabinId: 34,
    guests: {
      fullName: "Khadija Ahmed",
      countryFlag: "https://flagcdn.com/sd.svg",
      nationality: "Sudan",
    },
  },
  {
    id: 32,
    created_at: fromToday(-5, true),
    startDate: fromToday(33),
    endDate: fromToday(48),
    numNights: 6,
    numGuests: 2,
    cabinPrice: 1500,
    extrasPrice: 0,
    totalPrice: 1500,
    status: "unconfirmed",
    hasBreakfast: false,
    isPaid: false,
    observations: "",
    guestId: 37,
    cabinId: 31,
    guests: {
      fullName: "Jonas Mueller",
      countryFlag: "https://flagcdn.com/de.svg",
      nationality: "Germany",
    },
  },
  {
    id: 30,
    created_at: fromToday(-65, true),
    startDate: fromToday(-25),
    endDate: fromToday(-20),
    numNights: 7,
    numGuests: 1,
    cabinPrice: 1750,
    extrasPrice: 105,
    totalPrice: 1855,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: false,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    guestId: 35,
    cabinId: 31,
    guests: {
      fullName: "Jonathan Smith",
      countryFlag: "https://flagcdn.com/gb.svg",
      nationality: "Great Britain",
    },
  },
  {
    id: 47,
    created_at: fromToday(-2, true),
    startDate: fromToday(-2),
    endDate: fromToday(0),
    numNights: 3,
    numGuests: 6,
    cabinPrice: 2100,
    extrasPrice: 270,
    totalPrice: 2370,
    status: "checked-out",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    guestId: 52,
    cabinId: 36,
    guests: {
      fullName: "Ramesh Patel",
      countryFlag: "https://flagcdn.com/in.svg",
      nationality: "India",
    },
  },
  {
    id: 46,
    created_at: fromToday(-14, true),
    startDate: fromToday(-14),
    endDate: fromToday(-11),
    numNights: 7,
    numGuests: 4,
    cabinPrice: 4900,
    extrasPrice: 420,
    totalPrice: 5320,
    status: "checked-out",
    hasBreakfast: true,
    isPaid: true,
    observations: "I will need a rollaway bed for one of the guests",
    guestId: 51,
    cabinId: 36,
    guests: {
      fullName: "Marie Dupont",
      countryFlag: "https://flagcdn.com/fr.svg",
      nationality: "France",
    },
  },
  {
    id: 38,
    created_at: fromToday(-30, true),
    startDate: fromToday(-4),
    endDate: fromToday(8),
    numNights: 3,
    numGuests: 4,
    cabinPrice: 900,
    extrasPrice: 180,
    totalPrice: 1080,
    status: "checked-out",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    guestId: 43,
    cabinId: 33,
    guests: {
      fullName: "Li Mei",
      countryFlag: "https://flagcdn.com/cn.svg",
      nationality: "China",
    },
  },
  {
    id: 53,
    created_at: fromToday(-1, true),
    startDate: fromToday(12),
    endDate: fromToday(17),
    numNights: 3,
    numGuests: 7,
    cabinPrice: 4200,
    extrasPrice: 0,
    totalPrice: 4200,
    status: "unconfirmed",
    hasBreakfast: false,
    isPaid: true,
    observations: "",
    guestId: 57,
    cabinId: 38,
    guests: {
      fullName: "Julie Nguyen",
      countryFlag: "https://flagcdn.com/vn.svg",
      nationality: "Vietnam",
    },
  },
  {
    id: 51,
    created_at: fromToday(-3, true),
    startDate: fromToday(18),
    endDate: fromToday(19),
    numNights: 5,
    numGuests: 9,
    cabinPrice: 7000,
    extrasPrice: 675,
    totalPrice: 7675,
    status: "checked-in",
    hasBreakfast: true,
    isPaid: true,
    observations:
      "My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible",
    guestId: 34,
    cabinId: 38,
    guests: {
      fullName: "Jonas Schmedtmann",
      countryFlag: "https://flagcdn.com/pt.svg",
      nationality: "Portugal",
    },
  },
  {
    id: 49,
    created_at: fromToday(0, true),
    startDate: fromToday(14),
    endDate: fromToday(21),
    numNights: 10,
    numGuests: 7,
    cabinPrice: 5000,
    extrasPrice: 1050,
    totalPrice: 6050,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    guestId: 54,
    cabinId: 37,
    guests: {
      fullName: "Nina Williams",
      countryFlag: "https://flagcdn.com/za.svg",
      nationality: "South Africa",
    },
  },
  {
    id: 43,
    created_at: fromToday(-6, true),
    startDate: fromToday(-6),
    endDate: fromToday(-4),
    numNights: 2,
    numGuests: 4,
    cabinPrice: 700,
    extrasPrice: 120,
    totalPrice: 820,
    status: "checked-out",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    guestId: 48,
    cabinId: 35,
    guests: {
      fullName: "John Doe",
      countryFlag: "https://flagcdn.com/us.svg",
      nationality: "United States",
    },
  },
  {
    id: 35,
    created_at: fromToday(-4, true),
    startDate: fromToday(-4),
    endDate: fromToday(-1),
    numNights: 15,
    numGuests: 2,
    cabinPrice: 4875,
    extrasPrice: 450,
    totalPrice: 5325,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: false,
    observations: "",
    guestId: 40,
    cabinId: 32,
    guests: {
      fullName: "Emma Watson",
      countryFlag: "https://flagcdn.com/gb.svg",
      nationality: "United Kingdom",
    },
  },
  {
    id: 44,
    created_at: fromToday(-3, true),
    startDate: fromToday(0),
    endDate: fromToday(11),
    numNights: 3,
    numGuests: 6,
    cabinPrice: 1050,
    extrasPrice: 0,
    totalPrice: 1050,
    status: "checked-out",
    hasBreakfast: false,
    isPaid: true,
    observations: "",
    guestId: 49,
    cabinId: 35,
    guests: {
      fullName: "Fatima Ahmed",
      countryFlag: "https://flagcdn.com/pk.svg",
      nationality: "Pakistan",
    },
  },
  {
    id: 45,
    created_at: fromToday(-16, true),
    startDate: fromToday(-16),
    endDate: fromToday(-9),
    numNights: 11,
    numGuests: 6,
    cabinPrice: 7700,
    extrasPrice: 0,
    totalPrice: 7700,
    status: "unconfirmed",
    hasBreakfast: false,
    isPaid: true,
    observations: "We will be checking in late, around midnight. Hope that's okay :)",
    guestId: 50,
    cabinId: 36,
    guests: {
      fullName: "David Smith",
      countryFlag: "https://flagcdn.com/au.svg",
      nationality: "Australia",
    },
  },
  {
    id: 41,
    created_at: fromToday(-18, true),
    startDate: fromToday(-4),
    endDate: fromToday(-1),
    numNights: 1,
    numGuests: 1,
    cabinPrice: 450,
    extrasPrice: 0,
    totalPrice: 450,
    status: "unconfirmed",
    hasBreakfast: false,
    isPaid: true,
    observations: "",
    guestId: 46,
    cabinId: 34,
    guests: {
      fullName: "Maria Gomez",
      countryFlag: "https://flagcdn.com/mx.svg",
      nationality: "Mexico",
    },
  },
  {
    id: 34,
    created_at: fromToday(-2, true),
    startDate: fromToday(17),
    endDate: fromToday(23),
    numNights: 3,
    numGuests: 2,
    cabinPrice: 975,
    extrasPrice: 90,
    totalPrice: 1065,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: true,
    observations: "",
    guestId: 39,
    cabinId: 32,
    guests: {
      fullName: "Jonathan Williams",
      countryFlag: "https://flagcdn.com/us.svg",
      nationality: "United States of America",
    },
  },
  {
    id: 37,
    created_at: fromToday(-7, true),
    startDate: fromToday(40),
    endDate: fromToday(50),
    numNights: 2,
    numGuests: 3,
    cabinPrice: 600,
    extrasPrice: 0,
    totalPrice: 600,
    status: "checked-in",
    hasBreakfast: false,
    isPaid: true,
    observations: "We will be bringing our small dog with us",
    guestId: 42,
    cabinId: 33,
    guests: {
      fullName: "Maria Rodriguez",
      countryFlag: "https://flagcdn.com/es.svg",
      nationality: "Spain",
    },
  },
  {
    id: 48,
    created_at: fromToday(-55, true),
    startDate: fromToday(32),
    endDate: fromToday(37),
    numNights: 6,
    numGuests: 8,
    cabinPrice: 3000,
    extrasPrice: 0,
    totalPrice: 3000,
    status: "unconfirmed",
    hasBreakfast: false,
    isPaid: false,
    observations: "",
    guestId: 53,
    cabinId: 37,
    guests: {
      fullName: "Fatimah Al-Sayed",
      countryFlag: "https://flagcdn.com/kw.svg",
      nationality: "Kuwait",
    },
  },
  {
    id: 40,
    created_at: fromToday(-8, true),
    startDate: fromToday(-5),
    endDate: fromToday(0),
    numNights: 5,
    numGuests: 4,
    cabinPrice: 2250,
    extrasPrice: 300,
    totalPrice: 2550,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: false,
    observations: "",
    guestId: 45,
    cabinId: 34,
    guests: {
      fullName: "Gabriel Silva",
      countryFlag: "https://flagcdn.com/br.svg",
      nationality: "Brazil",
    },
  },
  {
    id: 42,
    created_at: fromToday(0, true),
    startDate: fromToday(0),
    endDate: fromToday(5),
    numNights: 7,
    numGuests: 5,
    cabinPrice: 2450,
    extrasPrice: 525,
    totalPrice: 2975,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: false,
    observations: "",
    guestId: 47,
    cabinId: 35,
    guests: {
      fullName: "Ahmed Hassan",
      countryFlag: "https://flagcdn.com/eg.svg",
      nationality: "Egypt",
    },
  },
  {
    id: 52,
    created_at: fromToday(-10, true),
    startDate: fromToday(10),
    endDate: fromToday(13),
    numNights: 5,
    numGuests: 10,
    cabinPrice: 7000,
    extrasPrice: 750,
    totalPrice: 7750,
    status: "unconfirmed",
    hasBreakfast: true,
    isPaid: true,
    observations:
      "I am celebrating my anniversary, can you arrange for any special amenities or decorations?",
    guestId: 56,
    cabinId: 38,
    guests: {
      fullName: "Abdul Rahman",
      countryFlag: "https://flagcdn.com/sa.svg",
      nationality: "Saudi Arabia",
    },
  },
];
export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",
      { count: "exact" }
    );

  // FILTER
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // SORT
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return { data, count };
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
// date: ISOString
export async function getBookingsAfterDate(date) {
  const filteredData = bookings.filter(
    (item) => new Date(item.created_at) > new Date(date)
  );
  return filteredData;
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  // const { data, error } = await supabase
  //   .from("bookings")
  //   .select("*, guests(fullName)")
  //   .gte("startDate", date)
  //   .lte("startDate", getToday());

  const filteredData = bookings.filter(
    (item) =>
      new Date(item.startDate) > new Date(date) &&
      new Date(item.startDate) < new Date(getToday())
  );
  // if (error) {
  //   console.error(error);
  //   throw new Error("Bookings could not get loaded");
  // }

  return filteredData;
}

// Activity means that there is a check in or a check out today
// .or(
//   `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
// )

export async function getStaysTodayActivity() {
  // const { data, error } = await supabase
  //   .from("bookings")
  //   .select("*, guests(fullName, nationality, countryFlag)")
  //   .order("created_at");
  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  // const today = getToday().slice(0, -1);
  const filteredBookings = bookings.filter((stay) => {
    // Check if the status is 'unconfirmed' and start date is today
    const condition1 = stay.status === "unconfirmed";
    // Check if the status is 'checked-in' and end date is today
    const condition2 = stay.status === "checked-in";

    return condition1 || condition2;
  });
  // if (error) {
  //   console.error(error);
  //   throw new Error("Bookings could not get loaded");
  // }
  return filteredBookings;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function deleteBooking(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}
