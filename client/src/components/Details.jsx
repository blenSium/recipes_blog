import React,{useState} from "react";
import 'flowbite'

export default function Details({ visible, onClose }) {
    if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="relative w-full max-w-md h-full md:h-auto">
          <div className=" bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl text-center font-medium text-gray-900 dark:text-white">
                פרטים להרשמה לסדנה
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-right text-sm font-medium text-gray-900 dark:text-white"
                  >
                    שם מלא
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border text-right border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="שם מלא"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm text-right font-medium text-gray-900 dark:text-white"
                  >
                    טלפון נייד
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="טלפון נייד"
                    className="bg-gray-50 border text-right border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <input type={'submit'}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
