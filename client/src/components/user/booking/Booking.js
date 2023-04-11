import { AiOutlineCloseCircle } from 'react-icons/ai'
const Booking = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-20">
      <div className="md:w-[600px] w-[90%] md:mx-auto flex flex-col">
        <button
          className="text-white text-xl place-self-end my-5"
          onClick={() => onClose()}
        >
            <AiOutlineCloseCircle size={40}/>
        </button>
        <div className="bg-white p-4 rounded-xl ">
          <h1 className="text-4xl text-center font-semibold ">BOOKING</h1>
          <div className="mt-8 flex flex-col items-center">
            <div className="mt-4 flex flex-col w-3/4">
            <label className="text-lg font-medium">Name</label>
              <input
                type="text"
                className="border-2 border-gray-200 rounded-xl placeholder-gray-500 p-4 mt-1 bg-transparent"
                placeholder='Name'
              />
            </div>

            <div className="mt-4 flex flex-col w-3/4">
              <label className="text-lg font-medium">Mobile No</label>
              <input
                type="tel"
                className="border-2 border-gray-200 rounded-xl placeholder-gray-500 p-4 mt-1 bg-transparent"
                placeholder='Mobile Number'
              />
            </div>

            <div className="mt-4 flex flex-col w-3/4">
              <label className="text-lg font-medium">Email</label>
              <input
                type="email"
                className="border-2 border-gray-200 rounded-xl placeholder-gray-500 p-4 mt-1 bg-transparent"
                placeholder='Email'
              />
            </div>

            <div className="mt-4 flex flex-col w-3/4">
              <label className="text-lg font-medium">Number of Participants</label>
              <input
                type="number"
                className="border-2 border-gray-200 rounded-xl placeholder-gray-500 p-4 mt-1 bg-transparent"
                placeholder=''
              />
            </div>

            <div className="mt-4 flex justify-center">
              <button className="mt-5 mb-3 bg-yellow-400 px-20 py-2 rounded-xl grid font-bold text-lg">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
