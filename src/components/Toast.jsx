import { FiAlertCircle } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from '../store/actions/toastActions';

export default function Toast() {
    const dispatch = useDispatch();
    const { showToast, message, toastType } = useSelector((state) => state.toast);

    // Automatically hide toast after 5 seconds
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                dispatch(hideToast());
            }, 5000); // 5000ms = 5 seconds

            // Cleanup the timeout when the component unmounts or when toast disappears
            return () => clearTimeout(timer);
        }
    }, [showToast, dispatch]);

    if (!showToast) return null;

    return (
        <>

            {showToast && toastType == 'error' && (<div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" className="toast fade show text-bg-danger" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3000"
                    data-bs-autohide="true">
                    <div className="toast-header">
                        <FiAlertCircle className="fs-5 me-2 text-danger" />
                        <strong className="me-auto">Error</strong>
                        <small>now</small>
                        <button type="button" className="btn-close" onClick={() => dispatch(hideToast())} />
                    </div>
                    <div className="toast-body">
                        {message}
                    </div>
                </div>
            </div>)}

            {showToast && toastType == 'success' && (<div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" className="toast fade show text-bg-success" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3000" data-bs-autohide="true">
                    <div className="toast-header">
                        <FaCheckCircle className="fs-5 me-2 text-success" />
                        <strong className="me-auto">Success</strong>
                        <small>now</small>
                        <button type="button" className="btn-close" onClick={() => dispatch(hideToast())} />
                    </div>
                    <div className="toast-body">
                        {message}
                    </div>
                </div>
            </div>)}
        </>
    )
}

