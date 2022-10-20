import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
type Props = {
  contactme: PageInfo;
};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const ContactMe = ({ contactme }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${formData.email}?subject=${formData.subject}?body=${formData.message}?name=${formData.name}`;
  };
  return (
    <div className="h-screen relative flex flex-col tcenter md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl indent-[20px]">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-28">
        <h4 className="text-lg sm:text-2xl md:text-4xl font-semibold text-center tracking-wide ">
          I have got just what you need.{" "}
          <span className="mt-1 block decoration-[#f7ab0a]/50 underline">
            Lets Talk.
          </span>
        </h4>

        <div className="space-y-5 md:space-y-10">
          {/* <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-xl sm:text-2xl">{contactme?.phoneNumber}</p>
          </div> */}
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-xl sm:text-2xl">{contactme?.email}</p>
          </div>
          {/* <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-xl sm:text-2xl">{contactme?.address}r</p>
          </div> */}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <input
              className="contactInput"
              {...register("name")}
              placeholder="Name"
              type="text"
            />
            <input
              className="contactInput"
              {...register("email")}
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            className="contactInput"
            {...register("subject")}
            placeholder="Subject"
            type="text"
          />
          <textarea
            className="contactInput"
            {...register("message")}
            placeholder="Message"
          />
          <button
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg "
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactMe;
