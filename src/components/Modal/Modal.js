import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Modal.module.css";

export default function Modal(props) {
  const { modalIsOpen, closeModal, modalTitle, noFooter } = props;
  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0.4,
      },
    },
  };
  return (
    <AnimatePresence>
      {modalIsOpen && (
        <motion.div
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={overlayVariants}
          className={classes.modalOverlay}
        >
          <motion.div
            className={classes.modal}
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5 }}
          >
            <div className={classes.modalHeader}>
              <h5 className={classes.modalTitle}>{modalTitle}</h5>
            </div>
            <div className={classes.modalContent}>{props.children}</div>
            {!noFooter && (
              <div className={classes.modalFooter}>
                <button className={classes.modalButton} onClick={closeModal}>
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
