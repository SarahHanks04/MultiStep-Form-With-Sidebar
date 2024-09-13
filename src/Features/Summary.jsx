import { useSelector } from "react-redux";

const Summary = () => {
  const { personalInfo, plan, addOns } = useSelector((state) => state.form);

  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold">Summary</h2>

      <h3>Personal Info</h3>
      <p>Name: {personalInfo.name}</p>
      <p>Email: {personalInfo.email}</p>
      <p>Phone: {personalInfo.phone}</p>

      <h3>Plan</h3>
      <p>{plan}</p>

      <h3>Add-Ons</h3>
      <ul>
        {addOns.map((addOn, index) => (
          <li key={index}>{addOn}</li>
        ))}
      </ul>

      <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4">
        Confirm and Submit
      </button>
    </div>
  );
};

export default Summary;
