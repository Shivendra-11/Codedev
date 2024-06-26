import { FC, useEffect } from 'react';
import { X } from 'lucide-react';

interface PopupProps {
  onClose: () => void;
}

const Popup: FC<PopupProps> = ({ onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.popup')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <main className="flex flex-col items-center space-y-8">
          <form className="w-full max-w-md popup">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <button onClick={onClose} className=' text-white ml-52'> <X /> </button>
                <label htmlFor="name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              <h1  className='text-gray-200' >  Project Name</h1>
                </label>
                <input id="name" type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                <h1 className='text-gray-200' >  Email</h1>
                </label>
                <input id="email" type="email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label htmlFor="message" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                 <h1 className='text-gray-200' > Project Description</h1>
                </label>
                <textarea id="message" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label htmlFor="projectImage" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  <h1 className='text-gray-200'>Relevant Image related to project  </h1>
                </label>
                <input id="projectImage" type="file" accept="image/*" onChange={handleFileChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </div>

           
          </form>
        </main>
      </div>
    </div>
  );
};

export default Popup;
