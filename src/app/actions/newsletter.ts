"use server";

import dbConnect from "@/lib/mongodb";
import Newsletter from "@/models/Newsletter";

export async function subscribeToNewsletter(formData: FormData) {
  try {
    await dbConnect();
    
    const email = formData.get("email");
    
    if (!email) {
      return { success: false, error: "Email is required" };
    }

    // Check if already subscribed
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return { success: true, message: "Already subscribed!" };
    }

    await Newsletter.create({ email });
    
    return { success: true };
  } catch (error: any) {
    console.error("Newsletter subscription error:", error);
    // Handle duplicate key error (though we check before, race conditions happen)
    if (error.code === 11000) {
      return { success: true, message: "Already subscribed!" };
    }
    return { success: false, error: error.message };
  }
}
