import * as React from 'react';

export function FormComponent() {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSc6TcZviCuDGUOS0Nm4geU5rDJnDxlghpY4VMyPbFmZRU3-mg/viewform?embedded=true"
                width="640"
                height="1002"
                style={{
                    border: "none",
                    maxWidth: "100%",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                }}
            >
                Loading…
            </iframe>
        </div>
    );
}
