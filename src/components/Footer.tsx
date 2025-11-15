const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t-4 border-primary py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xl md:text-2xl font-bold text-foreground mb-4 pixel-text">
          Made by students for students.
        </p>
        <p className="text-base md:text-lg text-muted-foreground mb-4">
          Build-a-thon Hackathon is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), 
          a 501(c)(3) nonprofit (EIN: 81-2908499).
        </p>
        <p className="text-sm md:text-base text-muted-foreground italic">
          <strong>Sponsor Verification:</strong> Only transfer funds to the organization's bank account 
          or through card, which must be titled "Build-a-thon Hackathon c/o The Hack Foundation". 
          To verify the account, write an email to{" "}
          <a 
            href="mailto:hi@buildathon.dev" 
            className="text-primary hover:underline font-semibold"
          >
            hi@buildathon.dev
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
