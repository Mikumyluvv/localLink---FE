/* eslint-disable react/prop-types */
import React, {useState, useEffect} from "react";
import { XSquare } from 'lucide-react';

export default function Modal({ id, children, handleAccept, showModal, closeModal }) {

   const [isOpen, setIsOpen] = useState(showModal);


   useEffect(() => {
      setIsOpen(showModal);
   }, [showModal]);

   const handleClose = () => {
      setIsOpen(false);
      closeModal();
   };
  return (
    <React.Fragment>
      <dialog id={id} className="modal">
 
        <div className="modal-box w-11/12 max-w-3xl space-y-5">
          <div method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose}>
              {/* ✕ */}
              <XSquare className='w-8 h-8' />
            </button>
          </div>
          <h3 className="font-bold text-lg">Tambah Data Penduduk</h3>
 
            {children}
            <button onClick={handleAccept} className="btn" type="submit">
              Simpan
            </button>
 
        </div>
 
      </dialog>
    </React.Fragment>
  );
}




