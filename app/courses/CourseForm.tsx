import React, { useState } from "react";

interface CourseFormProps {
  courseName: string;
  coursePrice: string;
}

const CourseForm: React.FC<CourseFormProps> = ({ courseName, coursePrice }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      setError("All fields are required.");
      return;
    }

    const phoneRegex = /^[789]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    setError(null);
    setLoading(true);

    const formData = {
      access_key: "5203fa70-07f3-4c97-9ede-b414c14b7e68",
      name,
      email,
      phone,
      courseName,
      coursePrice,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your enrollment was successful!");
        setName("");
        setEmail("");
        setPhone("");
      } else {
        const result = await response.json();
        setError(result.message || "Submission failed. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="enroll" className="relative bg-white lg:mt-10 text-black border-2 border-gray-200 p-6 w-full rounded-2xl">
      <h1 className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 border-2 border-gray-200 text-gray-800 font-medium bg-white text-center p-2 rounded-md">
        Premium Course
      </h1>
      <h3 className="text-2xl font-semibold mb-6 text-center pt-6">
        Get this Course @ {coursePrice}
      </h3>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Course Name</label>
          <input
            type="text"
            value={courseName}
            className="w-full px-4 py-2 border rounded-md bg-gray-200 cursor-not-allowed"
            disabled
          />
        </div>
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email ID</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <button
          type="submit"
          className="w-full bg-gray-800 text-white font-normal text-md py-2 rounded-md"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Enroll Now"}
        </button>
      </form>
    </div>
  );
};

export default CourseForm;