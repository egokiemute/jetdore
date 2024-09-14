async function handleFormSubmit(e) { e.preventDefault(); const t = new FormData(e.target); try { const e = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(Object.fromEntries(t)) }), o = document.getElementById("success-message"), n = document.getElementById("error-message"); 200 === e.status ? (o.textContent = "Thank you for your message. We will reply to you shortly!", o.classList.remove("d-none"), n.classList.add("d-none"), document.getElementById("service-form").reset()) : (console.log(e), n.textContent = "Something went wrong! Please try again", n.classList.remove("d-none"), o.classList.add("d-none")) } catch (e) { console.log(e); const t = document.getElementById("error-message"); t.textContent = "An error occurred while submitting the form.", t.classList.remove("d-none") } }