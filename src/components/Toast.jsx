import { FiAlertCircle } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Toast({ error, success }) {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => setIsVisible(false), 5000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            {isVisible && error && (<div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" className="toast fade show text-bg-danger" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3000"
                    data-bs-autohide="true">
                    <div className="toast-header">
                        <FiAlertCircle className="fs-5 me-2 text-danger" />
                        <strong className="me-auto">Error</strong>
                        <small>now</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
                    </div>
                    <div className="toast-body">
                        {error}
                    </div>
                </div>
            </div>)
            }
            {isVisible && success && (<div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" className="toast fade show text-bg-success" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="3000" data-bs-autohide="true">
                    <div className="toast-header">
                        <FaCheckCircle className="fs-5 me-2 text-success" />
                        <strong className="me-auto">Success</strong>
                        <small>now</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
                    </div>
                    <div className="toast-body">
                        {success}
                    </div>
                </div>
            </div>)}
        </>
    )
}

