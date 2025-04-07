"use client";
import IncomeOverview from "@/app/component/dashboard/IncomeOverview";
import IncomeSources from "@/app/component/dashboard/IncomeSources";
import Modal from "@/app/component/dashboard/Modal";
import { useState } from "react";

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="w-[95%] h-[100vh] relative mx-auto flex flex-col gap-8 mt-5">
      {showModal && (
        <div
          className="fixed inset-0 overflow-hidden bg-black bg-opacity-50 z-40"
          onClick={handleModal}
        ></div>
      )}
      <div className="w-full h-screen overflow-hidden">
        {showModal && <Modal onClose={handleModal} type="income" />}
      </div>
      <IncomeOverview openModal={handleModal} type="income" />
      <IncomeSources />
    </div>
  );
};

export default Page;
