const dummyEmails = [
    { 
        sender: "welcome@website.com", 
        subject: "Welcome!", 
        body: "We're excited to have you join us!", 
        timestamp: new Date() 
    },
    { 
        sender: "team@projectmanager.com", 
        subject: "Project Update", 
        body: "Please find the latest project update attached.", 
        timestamp: new Date() 
    },
    { sender: "reminder@events.com", subject: "Meeting Reminder", body: "Don't forget the team meeting at 3 PM tomorrow.", timestamp: new Date() },
    { sender: "support@shopnow.com", subject: "Order Confirmation", body: "Thank you for your purchase! Your order #12345 has been confirmed.", timestamp: new Date() },
    { sender: "newsletter@dailynews.com", subject: "Daily Digest", body: "Here are today's top stories: 1. Stock market news. 2. Weather updates. 3. Tech trends.", timestamp: new Date() },
    { sender: "offers@shopnow.com", subject: "Exclusive Offer!", body: "Save 50% on your next purchase with code SAVE50!", timestamp: new Date() },
    { sender: "hr@company.com", subject: "Job Opening", body: "We have a new job opening in our team. Check out the details and apply soon.", timestamp: new Date() },
    { sender: "alerts@security.com", subject: "Security Alert", body: "A login attempt was detected from a new device. Was this you?", timestamp: new Date() },
    { sender: "friend@example.com", subject: "Hey!", body: "Long time no see! Let’s catch up soon. Let me know when you’re free.", timestamp: new Date() },
    { sender: "updates@software.com", subject: "New Version Available", body: "Version 2.0 of our app is now available with exciting new features. Update today!", timestamp: new Date() },
    { sender: "news@magazine.com", subject: "Monthly Magazine", body: "Check out this month's magazine. We’ve covered the best travel destinations for 2025.", timestamp: new Date() },
    {
      sender: "info@university.edu",
      subject: "Upcoming Webinar",
      body: "Join us for an exclusive webinar on advancements in artificial intelligence. Date: Jan 25, Time: 5 PM.",
      timestamp: new Date(),
    },
    {
        sender: "sales@company.com",
        subject: "New Product Launch",
        body: "We're excited to announce the launch of our latest product, 'X-Treme Performance��'. Buy now and save 50%!",
        timestamp: new Date(),
    },
    {
        sender: "marketing@advertising.com",
        subject: "Social Media Campaign Report",
        body: "Here's the report for our latest social media campaign. Check out the results and make data-driven decisions.",
        timestamp: new Date(),
    },
    {
      sender: "promotions@travelagency.com",
      subject: "Vacation Deals!",
      body: "Plan your dream vacation! Avail 40% discount on all international packages. Book before Jan 31!",
      timestamp: new Date(),
    },
    {
      sender: "alerts@bank.com",
      subject: "Account Statement",
      body: "Your account statement for December is now available. Please log in to your account to view it.",
      timestamp: new Date(),
    },
    {
      sender: "courses@edulearn.com",
      subject: "New Course Available",
      body: "Check out our latest course: 'Mastering React.js'. Enroll now to kickstart your journey.",
      timestamp: new Date(),
    },
    {
      sender: "service@carcare.com",
      subject: "Service Reminder",
      body: "It’s time for your car’s scheduled maintenance. Book your appointment today.",
      timestamp: new Date(),
    },
    {
      sender: "feedback@website.com",
      subject: "We Value Your Feedback",
      body: "Let us know how we’re doing by completing this short survey. Your feedback helps us improve.",
      timestamp: new Date(),
    },
    {
      sender: "team@projectmanager.com",
      subject: "Project Completion",
      body: "Hi Team,\n\nCongratulations on successfully completing the project ahead of the deadline! Let’s celebrate this achievement.\n\nCheers,\nManagement",
      timestamp: new Date(),
    },
    {
      sender: "newsletter@dailynews.com",
      subject: "Breaking News",
      body:
        "Breaking: Major advancements in renewable energy technology were announced today. Experts believe this could revolutionize the energy sector. Stay tuned for detailed coverage in our upcoming newsletter.",
      timestamp: new Date(),
    },
  ];
  

module.exports = { dummyEmails };
