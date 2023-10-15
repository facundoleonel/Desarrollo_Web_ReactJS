import { useState } from "react"

/**
 * Este Hook.
 *
 * @param {boolean} init - Valor inicial.
 *
 * @return {modal} Valor actual.
 * @return {setModal} Cambia el valor.
 * @return {toggle} Invierte el valor.
 */
export const useModal = (init = false)=> {
  const [modal, setModal] = useState( init );
  const toggle = () => setModal(!modal);

  return [modal, setModal, toggle]
}