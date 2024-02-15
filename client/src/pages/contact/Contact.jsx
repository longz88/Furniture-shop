import BannerPage from "../../components/BannerPage";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import FormInput from "../../components/FormInput";
import bannerFooter from "../../assets/banner/bannerFooter.jpg";

const Contact = () => {
  return (
    <div className="">
      <BannerPage title="Contact" />

      <div className="mx-auto max-w-screen-lg">
        <div className="my-24 text-center">
          <p className="mb-3 text-4xl font-semibold">Get In Touch With Us</p>
          <p className="mx-auto w-[640px] font-normal text-[--gray6]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col gap-11 p-14">
            <div className="flex items-start gap-8">
              <FaLocationDot size={22} className="mt-1" />
              <div className="">
                <p className="text-2xl font-medium">Address</p>
                <p className="mt-1 w-[210px] font-normal">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <FaPhone size={22} className="mt-1.5" />
              <div className="">
                <p className="text-2xl font-medium">Phone</p>
                <p className="mt-1 font-normal">Mobile: +(84) 546-6789</p>
                <p className="mt-1 font-normal">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <MdOutlineAccessTimeFilled size={22} className="mt-1" />
              <div className="">
                <p className="text-2xl font-medium">Working Time</p>
                <p className="mt-1 font-normal">Monday-Friday: 9:00 - 22:00</p>
                <p className="mt-1 font-normal">
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-9 px-14 pt-14 ">
            <FormInput name="Your name" title="name" placeholder="Abc" />
            <FormInput
              name="Email address"
              title="email"
              placeholder="Abc@def.com"
            />
            <FormInput
              name="Subject"
              title="subject"
              placeholder="This is an optional"
            />
            <FormInput
              name="Message"
              title="mess"
              placeholder="Hi! i’d like to ask about"
              type="textarea"
            />

            <button className="mr-auto mt-3 rounded-lg bg-[var(--primary-color)] px-24 py-3 font-normal text-white">
              Submit
            </button>
          </div>
        </div>
      </div>

      <img
        className="mt-24 h-[250px] w-full object-cover"
        src={bannerFooter}
        alt=""
      />
    </div>
  );
};

export default Contact;
