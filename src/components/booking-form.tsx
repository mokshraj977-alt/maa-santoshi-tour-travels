"use client";

import { ArrowRight, CalendarDays, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

type FieldName =
  | "name"
  | "phone"
  | "pickup"
  | "destination"
  | "date"
  | "tripType"
  | "passengers"
  | "message";

type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  pickup: "",
  destination: "",
  date: "",
  tripType: "One-way",
  passengers: "1",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  const mobileDigits = values.phone.replace(/\D/g, "");
  const tenDigitMobile = mobileDigits.length === 12 && mobileDigits.startsWith("91")
    ? mobileDigits.slice(2)
    : mobileDigits;
  if (!/^[6-9]\d{9}$/.test(tenDigitMobile)) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }
  if (!values.pickup.trim()) errors.pickup = "Please enter your pickup location.";
  if (!values.destination.trim()) errors.destination = "Please enter your destination.";
  if (!values.date) {
    errors.date = "Please choose a travel date.";
  } else {
    const selectedDate = new Date(`${values.date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(selectedDate.getTime()) || selectedDate < today) {
      errors.date = "Please choose today or a future date.";
    }
  }
  const passengers = Number(values.passengers);
  if (!Number.isInteger(passengers) || passengers < 1 || passengers > 99) {
    errors.passengers = "Enter a passenger count from 1 to 99.";
  }
  return errors;
}

function localDate(dateValue: string) {
  if (!dateValue) return "Not provided";
  const [year, month, day] = dateValue.split("-");
  return `${day}/${month}/${year}`;
}

export default function BookingForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");

  function updateField(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitError("");
    if (Object.keys(nextErrors).length > 0) {
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    const whatsappMessage = [
      "Hello, I would like to enquire about a trip.",
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Pickup: ${values.pickup.trim()}`,
      `Destination: ${values.destination.trim()}`,
      `Travel date: ${localDate(values.date)}`,
      `Trip type: ${values.tripType}`,
      `Passengers: ${values.passengers}`,
      values.message.trim() ? `Additional details: ${values.message.trim()}` : "",
      "",
      "Please confirm availability and details. I understand this is an enquiry, not a confirmed booking.",
    ]
      .filter(Boolean)
      .join("\n");
    const whatsappUrl = `https://wa.me/918770972173?text=${encodeURIComponent(whatsappMessage)}`;
    const openedWindow = window.open(whatsappUrl, "_blank");

    if (openedWindow) {
      openedWindow.opener = null;
    } else {
      setSubmitError(
        "WhatsApp could not be opened automatically. Please call +91 87709 72173 or use the link below to continue your enquiry.",
      );
    }
  }

  const today = new Date();
  const minimumDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Your name <span>*</span></label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="e.g. Priya Sharma"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name ? <span className="field-error" id="name-error">{errors.name}</span> : null}
        </div>
        <div className="form-field">
          <label htmlFor="phone">Mobile number <span>*</span></label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="+91 98765 43210"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            required
          />
          {errors.phone ? <span className="field-error" id="phone-error">{errors.phone}</span> : null}
        </div>
        <div className="form-field">
          <label htmlFor="pickup">Pickup location <span>*</span></label>
          <input
            id="pickup"
            name="pickup"
            autoComplete="street-address"
            placeholder="Where should we pick you up?"
            value={values.pickup}
            onChange={(event) => updateField("pickup", event.target.value)}
            aria-invalid={Boolean(errors.pickup)}
            aria-describedby={errors.pickup ? "pickup-error" : undefined}
            required
          />
          {errors.pickup ? <span className="field-error" id="pickup-error">{errors.pickup}</span> : null}
        </div>
        <div className="form-field">
          <label htmlFor="destination">Destination <span>*</span></label>
          <input
            id="destination"
            name="destination"
            placeholder="Where would you like to go?"
            value={values.destination}
            onChange={(event) => updateField("destination", event.target.value)}
            aria-invalid={Boolean(errors.destination)}
            aria-describedby={errors.destination ? "destination-error" : undefined}
            required
          />
          {errors.destination ? <span className="field-error" id="destination-error">{errors.destination}</span> : null}
        </div>
        <div className="form-field">
          <label htmlFor="date">Travel date <span>*</span></label>
          <div className="input-with-icon">
            <input
              id="date"
              name="date"
              type="date"
              min={minimumDate}
              value={values.date}
              onChange={(event) => updateField("date", event.target.value)}
              aria-invalid={Boolean(errors.date)}
              aria-describedby={errors.date ? "date-error" : undefined}
              required
            />
            <CalendarDays size={17} aria-hidden="true" />
          </div>
          {errors.date ? <span className="field-error" id="date-error">{errors.date}</span> : null}
        </div>
        <div className="form-field">
          <label htmlFor="tripType">Trip type <span>*</span></label>
          <select
            id="tripType"
            name="tripType"
            value={values.tripType}
            onChange={(event) => updateField("tripType", event.target.value)}
          >
            <option>One-way</option>
            <option>Round-trip</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="passengers">Number of passengers <span>*</span></label>
          <input
            id="passengers"
            name="passengers"
            type="number"
            min="1"
            max="99"
            step="1"
            inputMode="numeric"
            value={values.passengers}
            onChange={(event) => updateField("passengers", event.target.value)}
            aria-invalid={Boolean(errors.passengers)}
            aria-describedby={errors.passengers ? "passengers-error" : undefined}
            required
          />
          {errors.passengers ? <span className="field-error" id="passengers-error">{errors.passengers}</span> : null}
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="message">Additional message <span className="optional-label">(optional)</span></label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Anything else we should know about your trip?"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
          />
        </div>
      </div>
      {submitError ? (
        <div className="submit-error" role="alert">
          <p>{submitError}</p>
          <a href="tel:+918770972173">Call +91 87709 72173</a>
          <span> · </span>
          <a
            href={`https://wa.me/918770972173?text=${encodeURIComponent(
              `Hello, I would like to enquire about a trip. Name: ${values.name.trim()}; Pickup: ${values.pickup.trim()}; Destination: ${values.destination.trim()}.`,
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Open WhatsApp
          </a>
        </div>
      ) : null}
      <div className="form-submit-row">
        <button className="button button-navy form-submit" type="submit">
          <MessageCircle size={17} aria-hidden="true" />
          Continue in WhatsApp
          <ArrowRight size={17} aria-hidden="true" />
        </button>
        <p><span>*</span> Required fields · Enquiry only, not a confirmed booking.</p>
      </div>
    </form>
  );
}
