export const SendDetails = async ({ fname, lname, email, subject, message, college }) => {
    const name = fname + lname;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("subject", subject);
    formData.append("college", college);

    try {
        const response = await fetch("/api/contact-us", {
            method:"POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.json();
    } catch (error) {
        return {
            error: error.message,
            hasError: true
        };
    }
};