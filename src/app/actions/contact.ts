"use server";

import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function submitContactForm(formData: FormData) {
  try {
    await dbConnect();
    
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const newContact = await Contact.create(data);
    
    return { success: true, id: newContact._id.toString() };
  } catch (error: any) {
    console.error("Form submission error:", error);
    return { success: false, error: error.message };
  }
}
