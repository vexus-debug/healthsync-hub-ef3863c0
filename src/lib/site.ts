export const SITE = {
  name: "Green Medical Diagnostics",
  fullName: "Green Medical Diagnostics and Services",
  tagline: "Accurate Results. Better Health.",
  phones: ["+234 706 767 6551", "+234 902 778 8925"],
  whatsapp: "2347067676551",
  address: "5 Elioprawo Road, opposite State Primary School, by Big Tree Junction, Port Harcourt, Rivers State, Nigeria",
  email: "greenlabs26@gmail.com",
  rcNumber: "8993592",
  tin: "33691306-0001",
  hours: [
    { day: "Monday", time: "12:00 AM – 9:30 PM" },
    { day: "Tuesday – Saturday", time: "8:00 AM – 9:00 PM" },
    { day: "Sunday", time: "5:00 PM – 12:00 AM" },
  ],
};

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
