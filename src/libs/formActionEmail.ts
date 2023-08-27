"use server"
import sendEmail from "@/libs/sendEmail"

type Form = {
  companyName: string,
  fullName: string,
  email: string,
  message: string
}
 const formActionEmail = async(data:Form)=>{

    try{
      console.log("data", data);
      
    const {companyName, fullName, email, message}: Form = data
    if(!companyName || !fullName || !email || !message) throw { error: "Моля попълнете всички полета."}

    // if(!checkbox) throw {error: "Няма съгласие за GDPR. Няма съобщение."}

    const emailMessage= `
      <h3>Съобщение от ${fullName}, с и-мейл ${email} - ${companyName}</h3>
      <p>${message}</p>
      `;
      // Sending email
      await sendEmail(
        process.env.EMAIL_SEND,
        process.env.EMAIL_SEND,
        `${companyName} - Ново съобщение от - ${fullName} ${email}`,
        emailMessage
      );
    return {message: "Message send succesfuly!"}
    }catch(e){
        console.log("formActionEmail Error:", e);
        return e
    }

}

export default formActionEmail