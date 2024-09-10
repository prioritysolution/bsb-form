import React from "react";
import { MdDone } from "react-icons/md";

const Content = ({ info }) => {
  return (
    <div className="w-[210mm] h-[297mm] bg-white p-4 shadow-[10px_10px_40px_-15px_rgba(0,0,0,0.3)] flex flex-col justify-between gap-1 relative">
      <div className="absolute w-full h-full opacity-10 top-0 left-0 flex items-center justify-center">
        <img
          src={require("../images/image2.jpeg")}
          alt=""
          className="w-[400px] h-[400px] grayscale"
        />
      </div>
      {/* The content structure here remains the same as in your App component */}
      <div className="w-full h-full border border-black space-y-1 py-2">
        <div className="w-full flex items-center justify-between mb-2 px-2">
          <div className="w-[60px] h-[60px]">
            <img
              src={require("../images/image1.jpeg")}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" text-center flex flex-col items-start ">
            <h2 className="text-2xl">
              বাংলা শস্য বীমা <span className="font-roboto">(BSB)</span>
            </h2>
            <p className="text-lg">খরিফ ২০২৪ মরশুম - ধান</p>
          </div>
          <div className="w-[60px] h-[60px]">
            <img
              src={require("../images/image2.jpeg")}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-between gap-5 items-stretch px-2">
          <div>
            <h4 className="text-sm font-medium">
              বাজাজ অ্যালিয়ান্স জেনারেল ইনস্যুরেন্স কোম্পানি লিমিটেড
            </h4>
            <p className="text-xs">
              প্রধান কার্যালয় :বাজাজ অ্যালিয়ান্স হাউস, এয়ারপোর্ট রোড,
              ইয়ারাবাদা, পুনা-৪১১০০৬
              <br />
              কলকাতা কাৰ্য্যালয় :বাজাজ অ্যালিয়ান্স জেনারেল ইনস্যুরেন্স
              কোম্পানি লিমিটেড, ১৬৪/১, মানিকতলা মেইন রোড, মানি স্কোয়ার, ৬ষ্ঠতল,
              ক্যানাল সার্কেল রোড, প্রিমিসেস নং ৪১, কলকাতা, পঃবঃ
              <br />
              ইমেল: bagichelp@bajajallianz.co.in ওয়েবসাইট: www.bajajallianz.com
              <br />
              নিঃশুল্ক সহায়তা সেবা নম্বরঃ ১৮০০ ২০৯ ০১৪৪ (সেলস্)
              <br />
              নিঃশুল্ক সহায়তা সেবা নম্বরঃ ১৮০০ ২০৯ ৫৮৫৮ (সার্ভিস)
              <br />
              নিঃশুল্ক সহায়তা সেবা নম্বরঃ ১৮০০ ২০৯ ৫৯৫৯ (কৃষি)
            </p>
          </div>
          <div className=" w-[450px] flex flex-col items-center text-center justify-center h-auto">
            <p className="font-medium mb-3">মধ্যস্থতাকারীর বিবরণ</p>
            <div className="border-b-2 border-dotted border-black w-full my-3" />
            <div className="border-b-2 border-dotted border-black w-full my-3" />
          </div>
        </div>

        <div className="w-full px-2">
          <p className="text-wrap text-sm mt-2">
            <span className="relative">
              কৃষকের নাম
              ..........................................................
              <span className="absolute left-20">{info.Name_of_Farmer}</span>
            </span>{" "}
            <span className="relative">
              পিতা / মাতা / স্বামী / অভিভাবকের নাম
              .....................................................
              <span className="absolute left-60">{info.Father_Name}</span>
            </span>{" "}
            <span className="relative">
              বয়স .........................................
              <span className="absolute left-10">{info.AGE}</span>
            </span>{" "}
            <span className="relative">
              লিঙ্গঃ পুং / স্ত্রী / অন্যান্য{" "}
              <span
                className={`absolute ${
                  info.GENDER === "M"
                    ? "left-8"
                    : info.GENDER === "F"
                    ? "left-[60px]"
                    : "left-24"
                }`}
              >
                <MdDone className="text-2xl font-bold" />
              </span>
            </span>{" "}
            <span className="relative">
              ভোটারকার্ড (EPIC) নং (আবশ্যিক)
              ...................................................
              <span className="absolute left-52">{info.EPIC_No}</span>
            </span>{" "}
            <span className="relative">
              জাতিঃ সাঃ / তপঃ জাঃ / তপঃ উঃ / ওবিসি
              <span
                className={`absolute ${
                  info.CASTE === "GENERAL"
                    ? "left-9"
                    : info.CASTE === "SC"
                    ? "left-20"
                    : info.CASTE === "ST"
                    ? "left-36"
                    : info.CASTE === "OBC"
                    ? "left-[200px]"
                    : "hidden"
                }`}
              >
                <MdDone className="text-2xl font-bold" />
              </span>
            </span>{" "}
            <span className="relative">
              মোবাইল নং ....................................
              <span className="absolute left-20">{info.MOBILE}</span>
            </span>{" "}
            <span className="relative">
              আধার নং (আবশ্যিক) .............................................
              <span className="absolute left-36">{info.AADHAR_No}</span>
            </span>{" "}
            <span className="relative">
              বসবাসের ঠিকানা: মৌজা / গ্রামের নাম
              .........................................................
              <span className="absolute left-56">{info.Mouza}</span>
            </span>{" "}
            <span className="relative">
              গ্রামপঞ্চায়েতঃ
              ..........................................................
              <span className="absolute left-24">{info.GP}</span>
            </span>{" "}
            <span className="relative">
              ব্লক : ..................................
              <span className="absolute left-10">{info.Block}</span>
            </span>{" "}
            <span className="relative">
              জেলা .......................................
              <span className="absolute left-12">{info.District}</span>
            </span>{" "}
            <span className="relative">
              কেসিসি আছেঃ হ্যাঁ / না
              <span className={`absolute right-5`}>
                <MdDone className="text-2xl font-bold" />
              </span>
            </span>{" "}
            <span className="relative">
              কৃষক বন্ধু আই ডি .....................................
              <span className="absolute right-24"></span>
            </span>
          </p>
        </div>

        <div className="w-full p-2">
          <h2 className="text-sm font-medium mb-1">
            কৃষকের ব্যাঙ্কের বিবরণ (আধার সংযুক্তিকৃত ব্যাঙ্ক অ্যাকাউন্ট):
          </h2>

          <table className="table-auto border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th
                  className="border border-gray-400 text-xs font-medium p-1"
                  rowSpan={2}
                >
                  অধিসূচিত ফসলের নাম
                </th>
                <th
                  className="border border-gray-400 text-xs font-medium p-1"
                  colSpan={2}
                >
                  অধিসূচিত এলাকা
                </th>
                <th
                  className="border border-gray-400 text-xs font-medium p-1"
                  rowSpan={2}
                >
                  মৌজার নাম ও জে এল নং
                </th>
                <th
                  className="border border-gray-400 text-xs font-medium p-1"
                  rowSpan={2}
                >
                  খতিয়ান নং
                </th>
                <th
                  className="border border-gray-400 text-xs font-medium p-1"
                  rowSpan={2}
                >
                  দাগ নং
                </th>
                <th
                  className="border border-gray-400 text-xs font-medium p-1"
                  rowSpan={2}
                >
                  বীমার জন্যে প্রস্তাবিত এলাকা (একর)
                </th>
                <th
                  className="border border-gray-400 text-xs font-medium p-1"
                  rowSpan={2}
                >
                  নিজস্ব জমি / ভাগচাষী / ভাড়া নেওয়া চাষি
                </th>
                <th
                  className="border border-gray-400 text-xs font-medium p-1"
                  rowSpan={2}
                >
                  ফসল রোপণের / সম্ভাব্য রোপণের তারিখ
                </th>
              </tr>
              <tr>
                <th className="border border-gray-400 text-xs font-medium p-1">
                  ব্লক
                </th>
                <th className="border border-gray-400 text-xs font-medium p-1">
                  গ্রাম পঞ্চায়েত
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border border-gray-400 text-xs p-2">
                  {info.Crop}
                </td>
                <td className="border border-gray-400 text-xs p-2">
                  {info.Block}
                </td>
                <td className="border border-gray-400 text-xs p-2">
                  {info.GP}
                </td>
                <td className="border border-gray-400 text-xs p-2">
                  {info.Mouza} - {info.JL_No}
                </td>
                <td className="border border-gray-400 text-xs p-2">
                  {info.Khatian_No}
                </td>
                <td className="border border-gray-400 text-xs p-2">
                  {info.Plot_Number}
                </td>
                <td className="border border-gray-400 text-xs p-2">
                  {info.Area_Insured_in_Acre &&
                    Number(info.Area_Insured_in_Acre).toFixed(2)}
                </td>
                <td className="border border-gray-400 text-xs p-2">
                  {info.NATURE_OF_FARMER}
                </td>
                <td className="border border-gray-400 text-xs p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full text-center px-2">
          <h2 className="text-sm font-medium mb-1">
            কৃষকের ব্যাঙ্কের বিবরণ (আধার সংযুক্তিকৃত ব্যাঙ্ক অ্যাকাউন্ট)
          </h2>

          <table className="table-auto border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 text-xs font-medium p-1">
                  কৃষকের নাম
                  <br />
                  (ব্যাঙ্কের পাশবই অনুযায়ী)
                </th>
                <th className="border border-gray-400 text-xs font-medium p-1">
                  ব্যাঙ্কের নাম
                </th>
                <th className="border border-gray-400 text-xs font-medium p-1">
                  ব্রাঞ্চের নাম
                </th>
                <th className="border border-gray-400 text-xs font-medium p-1">
                  অ্যাকাউন্ট নং
                </th>
                <th className="border border-gray-400 text-xs font-medium p-1">
                  IFSC
                </th>
                <th className="border border-gray-400 text-xs font-medium p-1">
                  অ্যাকাউন্টের ধরন
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 text-xs p-2">
                  {info.Account_Holder_Name}
                </td>
                <td className="border border-gray-400 text-xs p-2">
                  {info.Bank_Name}
                </td>
                <td className="border border-gray-400 text-xs p-2">
                  {info.Branch_Name}
                </td>
                <td className="border border-gray-400 text-xs p-2">
                  {info.Bank_Account_Number}
                </td>
                <td className="border border-gray-400 text-xs p-2">
                  {info.IFSC}
                </td>
                <td className="border border-gray-400 text-xs p-2">Savings</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full flex flex-col gap-1 p-2">
          <div>
            <h4 className="font-medium">
              কৃষকদের দাখিল যোগ্য নথি (বাধ্যতামূলক) :
            </h4>
            <div className="py-1 px-3 text-xs flex flex-col gap-1">
              <p>১. KYC নথি : ভোটার আইডি কার্ড এবং আধার কার্ড।</p>
              <p>২. পাসবই-এর কপি সমেত ব্যাঙ্ক একাউন্ট নং।</p>
              <p>
                ৩. খতিয়ান / পরচা (সাম্প্রতিকতম) বা পাট্টা বা দলিল-এর নকল
                (নিজস্ব জমির ক্ষেত্রে), ভাগচাষীদের বা নিজের নামে জমি না থাকলে
                জমিতে চাষের অধিকার সংক্রান্ত শংসাপত্র (নির্দিষ্ট ফর্মে গ্রাম
                পঞ্চায়েত প্রধান কর্তৃক প্রদত্ত) দিতে হবে।
              </p>
              <p>
                ৪. সহ কৃষি অধিকর্তা (সংশ্লিষ্ট ব্লক) বা তার প্রতিনিধি অথবা ভূমি
                ও ভূমি সংস্কার এবং উদ্বাস্তু, ত্রাণ ও পূর্ণবাসন দফতরের রাজস্ব
                আধিকারিক বা পরিদর্শক দ্বারা প্রদত্ত ফসল রোপণের শংসাপত্র (রোপণ
                করেছেন বা করবেন)।
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-medium">ঘোষণাঃ</h4>
            <div className="py-1 px-3 text-xs flex flex-col gap-1">
              <p>
                ১. আমি এই যোজনার বিবরণ পড়েছি এবং বুঝেছি/ আমাকে বোঝানো হয়েছে।
              </p>
              <p>
                ২. আমি উপরের বর্ণিত ফসল / ফসলগুলি এবং অধিসূচিত এলাকার জন্যে
                বর্তমান মরশুমে অন্য কোথাও (অন্য ব্যাঙ্ক / এজেন্ট / সমবায় সমিতি)
                কোন ফসল বীমা করিনি।
              </p>
              <p>
                ৩. আমি এই যোজনার বিধি মেনে চলব এবং এই সংক্রান্ত কোন নির্দেশ জারি
                হলে তাও মনে রাখব।
              </p>
              <p>
                ৪. কোন পরিবর্তনের ক্ষেত্রে বীমাকারী সংস্থাকে নির্ধারিত সময়সীমার
                মধ্যে জানাতে হবে।
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-3 p-2">
          <div className="text-center w-full text-sm">
            <div className="border-b-2 border-dotted border-black w-full my-2" />
            <p>সাক্ষীর সহি</p>
          </div>
          <p className="text-nowrap">
            উপরে প্রদত্ত তথ্যাদি আমার সর্বাধিক জ্ঞান ও বিশ্বাসমতে সত্য।
          </p>
          <div className="text-center w-full text-sm">
            <div className="border-b-2 border-dotted border-black w-full my-2" />
            <p>কৃষকের সহি বা টিপছাপ</p>
          </div>
        </div>

        <div className="w-full bg-black h-[1px]" />

        <div className="w-full px-2 font-roboto text-center space-y-1">
          <h4 className="font-medium w-full">AREA SOWN CERTIFICATE</h4>
          <p className="text-sm">
            Certified that, the information furnished above regarding sown area
            (actual / intended) is true as per available records
          </p>
          <div className="border-b-2 border-dotted border-black w-full h-4" />
          <p className="text-sm">
            (Asst DA of the block or his / her representative / Revenue Officer
            / Revenue inspector of L&LR & R.R. & R Deptt.)
            <br />
            (Signature with date and Seal)
          </p>
        </div>
      </div>
      <p className="w-full text-xs text-center px-3">
        বীমা আগ্রহের বিষয়বস্তু। শস্য বীমা সংক্রান্ত যে কোন অভিযোগের জনো নিশুদ্ধ
        সহায়তা নম্বর ১৮০০-২০৯-৫৯৫৯-এর মাধ্যমে যোগাযোগ করুন UIN
        IRDAN113CP000102201617, CIN No. 66010PN2000PLC015329 বীমা আগ্রহের
        বিষয়বস্তু। IRDA Reg. No. 113
      </p>
    </div>
  );
};

export default Content;
