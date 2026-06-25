import jsPDF from "jspdf";

export const downloadItineraryPDF = (itinerary) => {
  const doc = new jsPDF();
  doc.setFontSize(20);
  doc.text(itinerary.destination || "Travel Itinerary", 20, 20);
  doc.setFontSize(12);
  doc.text(`Trip: ${itinerary.startDate} - ${itinerary.endDate}`, 20, 35);

  let y = 50;

  itinerary.days?.forEach(
    (day, index) => {
      doc.setFontSize(14);
      doc.text(`Day ${index + 1}: ${day.title}`, 20, y);
      y += 10;

      day.activities?.forEach(
        (activity) => {
          doc.setFontSize(10);
          doc.text(`• ${activity}`, 25, y);
          y += 8;
        });
      y += 10;
    }
  );

  doc.save("itinerary.pdf");
};