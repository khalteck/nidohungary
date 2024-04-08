import { MdOutlineArrowOutward } from "react-icons/md";
import { useAppContext } from "../../contexts/AppContext";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const Form = () => {
  const { sendContactMessage, loading, messageSent, setmessageSent } = useAppContext();
  const [sendError, setSendError] = useState(false);

  const [formData, setFormData] = useState({
    sender_name: "",
    sender_email: "",
    sender_phone: "",
    message: "",
  });

  function handleChange(e) {
    setSendError(false);
    setmessageSent(false)
    const { value, id } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      formData?.sender_name &&
      formData?.sender_email &&
      formData?.sender_phone &&
      formData?.message
    ) {
      await sendContactMessage(formData);
      setFormData({
        sender_name: "",
        sender_email: "",
        sender_phone: "",
        message: "",
      });
    } else {
      setSendError(true);
    }
  }

  return (
    <form className="mt-10 flex flex-col gap-5">
      <div>
        <input
          type="text"
          placeholder="Full name"
          id="sender_name"
          value={formData?.sender_name}
          onChange={handleChange}
          className="w-full py-3 border-b border-[#082f49] outline-none bg-neutral-50/50"
        />
      </div>
      <div className="flex gap-5">
        <input
          type="email"
          placeholder="Email"
          id="sender_email"
          value={formData?.sender_email}
          onChange={handleChange}
          className="w-full py-3 border-b border-[#082f49] outline-none bg-neutral-50/50"
        />
        <input
          type="number"
          placeholder="Phone number"
          id="sender_phone"
          value={formData?.sender_phone}
          onChange={handleChange}
          className="w-full py-3 border-b border-[#082f49] outline-none bg-neutral-50/50"
        />
      </div>
      <textarea
        className="w-full h-[150px] py-3 border-b border-[#082f49] outline-none bg-neutral-50/50"
        placeholder="Message"
        id="message"
        value={formData?.message}
        onChange={handleChange}
      />
      {messageSent && (
        <div className="px-3 py-2 bg-green-500/50 rounded-md text-sm">
          Message sent successfully!
        </div>
      )}
      {sendError && (
        <div className="px-3 py-2 bg-red-500/50 rounded-md text-sm">
          All foelds are required!
        </div>
      )}
      <button
        disabled={loading}
        onClick={handleSubmit}
        className="w-fit px-10 py-3 mt-5 bg-[#082f49] rounded-md text-white font-medium flex gap-2 items-center"
      >
        {!loading ? (
          <>
            Submit
            <MdOutlineArrowOutward size="20px" color="white" />
          </>
        ) : (
          <>
            Submitting
            <ClipLoader color={"#fff"} size={20} />
          </>
        )}
      </button>
    </form>
  );
};

export default Form;
