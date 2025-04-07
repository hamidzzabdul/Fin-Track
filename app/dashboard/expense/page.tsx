"use client";
import ExpenseOverview from "@/app/component/dashboard/ExpenseOverview";
import ExpenseSource from "@/app/component/dashboard/ExpenseSource";
import Modal from "@/app/component/dashboard/Modal";
import { useState } from "react";

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="w-[95%] mx-auto flex flex-col gap-8 mt-4 relative">
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleModal}
        ></div>
      )}
      <div>{showModal && <Modal onClose={handleModal} type="expense" />}</div>
      <ExpenseOverview openModal={handleModal} type="expense" />
      <ExpenseSource />
    </div>
  );
};

export default Page;
