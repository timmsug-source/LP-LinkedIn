'use client'
import React, { useState } from "react";
import { Calendar, Clock, CheckCircle, Shield, AlertCircle, Sparkles, Send } from "lucide-react";
import { THERAPIES } from "../data";

interface BookingFormProps {
  initialTherapyId?: string;
  onClose?: () => void;
  inline?: boolean;
}

export default function BookingForm({ initialTherapyId = "", onClose, inline = false }: BookingFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    therapyId: initialTherapyId,
    preferredDate: "",
    preferredTime: "vormittags",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Bitte fülle alle Pflichtfelder (Name, E-Mail, Telefon) aus.");
      return;
    }

    setIsSubmitting(true);

    // Simulate server request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const chosenTherapyName = THERAPIES.find((t) => t.id === formData.therapyId)?.title || "Allgemeines Erstgespräch";
      setBookingDetails({
        ...formData,
        id: "T-" + Math.floor(1000 + Math.random() * 9000),
        therapyName: chosenTherapyName,
      });

      // Save to localStorage
      const existing = JSON.parse(localStorage.getItem("brenscheidt_bookings") || "[]");
      existing.push({
        ...formData,
        id: "T-" + Math.floor(1000 + Math.random() * 9000),
        therapyName: chosenTherapyName,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem("brenscheidt_bookings", JSON.stringify(existing));
    }, 1200);
  };

  const selectedTherapyObj = THERAPIES.find((t) => t.id === formData.therapyId);

  return (
    <div className={`bg-white rounded-2xl ${inline ? "" : "shadow-xl border border-brand-sage-pale p-6 sm:p-8"} relative`} id="booking-form-wrapper">
      {isSuccess && bookingDetails ? (
        <div className="text-center py-8 px-4" id="booking-success-screen">
          <div className="w-16 h-16 bg-brand-sage-pale text-brand-sage rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-brand-sage mb-2">
            Anfrage erfolgreich gesendet!
          </h3>
          <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
            Liebe(r) <strong>{bookingDetails.fullName}</strong>, wir haben deine Terminanfrage für ein <strong>{bookingDetails.therapyName}</strong> erhalten. Wir melden uns zeitnah telefonisch oder per E-Mail bei dir.
          </p>

          <div className="bg-brand-beige border border-brand-sage-pale rounded-xl p-4 text-left max-w-sm mx-auto mb-8 text-sm">
            <h4 className="font-semibold text-brand-sage mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-terracotta" />
              Deine Daten im Überblick:
            </h4>
            <p className="text-gray-700"><span className="text-gray-400">Anfragenummer:</span> {bookingDetails.id}</p>
            <p className="text-gray-700"><span className="text-gray-400">Behandlung:</span> {bookingDetails.therapyName}</p>
            <p className="text-gray-700">
              <span className="text-gray-400">Bevorzugter Tag:</span> {bookingDetails.preferredDate ? new Date(bookingDetails.preferredDate).toLocaleDateString("de-DE", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : "Nächster freier Termin"}
            </p>
            <p className="text-gray-700 capitalize"><span className="text-gray-400">Tageszeit:</span> {bookingDetails.preferredTime}</p>
            <p className="text-gray-700"><span className="text-gray-400">Deine Nummer:</span> {bookingDetails.phone}</p>
          </div>

          <div className="flex justify-center space-x-3">
            <button
              onClick={() => {
                setIsSuccess(false);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  therapyId: "",
                  preferredDate: "",
                  preferredTime: "vormittags",
                  message: "",
                });
              }}
              className="px-4 py-2 border border-brand-sage text-brand-sage rounded-lg text-sm font-semibold hover:bg-brand-sage-pale transition-colors cursor-pointer"
              id="reset-booking-btn"
            >
              Neue Anfrage senden
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="px-4 py-2 bg-brand-sage text-brand-beige rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
                id="close-success-btn"
              >
                Fenster schließen
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-brand-sage mb-1">
              Erstanfrage für deine Therapie
            </h2>
            <p className="text-xs text-brand-sage-light leading-relaxed">
              Lass uns in einem kostenfreien Erstgespräch klären, wie wir dich optimal begleiten können. Trage dich einfach ein:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5" htmlFor="fullName">
                Dein Name *
              </label>
              <input
                type="text"
                id="fullName"
                required
                placeholder="z.B. Maria Müller"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-brand-cream border border-brand-sage-pale rounded-lg text-sm focus:outline-none focus:border-brand-sage transition-all text-brand-charcoal"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5" htmlFor="phone">
                Telefonnummer *
              </label>
              <input
                type="tel"
                id="phone"
                required
                placeholder="z.B. 0176 / 12345678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-brand-cream border border-brand-sage-pale rounded-lg text-sm focus:outline-none focus:border-brand-sage transition-all text-brand-charcoal"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5" htmlFor="email">
              E-Mail-Adresse *
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="z.B. maria.mueller@beispiel.de"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-brand-cream border border-brand-sage-pale rounded-lg text-sm focus:outline-none focus:border-brand-sage transition-all text-brand-charcoal"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5" htmlFor="therapyId">
                Behandlungsschwerpunkt
              </label>
              <select
                id="therapyId"
                value={formData.therapyId}
                onChange={(e) => setFormData({ ...formData, therapyId: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-brand-cream border border-brand-sage-pale rounded-lg text-sm focus:outline-none focus:border-brand-sage transition-all text-brand-charcoal appearance-none cursor-pointer"
              >
                <option value="">-- Allgemeines Erstgespräch --</option>
                {THERAPIES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5" htmlFor="preferredDate">
                Bevorzugtes Datum (optional)
              </label>
              <input
                type="date"
                id="preferredDate"
                value={formData.preferredDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-brand-cream border border-brand-sage-pale rounded-lg text-sm focus:outline-none focus:border-brand-sage transition-all text-brand-charcoal cursor-pointer"
              />
            </div>
          </div>

          {selectedTherapyObj && (
            <div className="bg-brand-sage-pale/60 border-l-4 border-brand-sage p-3.5 rounded-r-xl text-xs space-y-1">
              <span className="font-semibold text-brand-sage text-xs">Schwerpunkt-Info:</span>
              <p className="text-gray-700">{selectedTherapyObj.shortDesc}</p>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5">
              Bevorzugte Tageszeit
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {["vormittags", "nachmittags", "abends"].map((timeSlot) => (
                <button
                  type="button"
                  key={timeSlot}
                  onClick={() => setFormData({ ...formData, preferredTime: timeSlot })}
                  className={`py-2 rounded-lg text-xs font-semibold tracking-wide border cursor-pointer transition-all ${
                    formData.preferredTime === timeSlot
                      ? "bg-brand-sage border-brand-sage text-brand-cream shadow-sm"
                      : "bg-brand-cream border-brand-sage-pale text-brand-charcoal hover:bg-brand-sage-pale/40"
                  }`}
                  id={`time-pref-${timeSlot}`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span className="capitalize">{timeSlot}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-1.5" htmlFor="message">
              Deine Nachricht oder Symptome (optional)
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Schildere uns kurz dein Anliegen (z.B. Art der Sehbeschwerden, Stressbelastung oder Rückenschmerzen)."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-brand-cream border border-brand-sage-pale rounded-lg text-sm focus:outline-none focus:border-brand-sage transition-all text-brand-charcoal"
            />
          </div>

          {/* Privacy note */}
          <div className="flex items-start gap-2 text-xs text-gray-500 bg-brand-beige/60 p-3 rounded-lg border border-brand-sage-pale/50">
            <Shield className="w-4 h-4 text-brand-sage mt-0.5 shrink-0" />
            <p>
              <strong>Datenschutzhinterlegung:</strong> Mit dem Absenden erklärst du dich einverstanden, dass wir deine Daten zur Beantwortung deiner Terminanfrage speichern und verwenden dürfen (gemäß DSGVO).
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 pt-2">
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                id="cancel-booking-btn"
              >
                Abbrechen
              </button>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 bg-brand-sage text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-brand-sage-light transition-all duration-300 cursor-pointer ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
              id="submit-booking-btn"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-brand-cream border-t-transparent" />
                  <span>Wird gesendet...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kostenfreies Erstgespräch anfragen</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
