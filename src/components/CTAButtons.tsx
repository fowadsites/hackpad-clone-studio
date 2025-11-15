import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const CTAButtons = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [sponsorOpen, setSponsorOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
        <DialogTrigger asChild>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold pixel-text shadow-lg"
          >
            Register
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold pixel-text">Registration</DialogTitle>
            <DialogDescription className="text-lg pt-4">
              Registration opens soon! Stay tuned for updates.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Button 
        size="lg" 
        variant="outline"
        className="border-2 border-primary text-primary hover:bg-primary/10 font-bold pixel-text"
        asChild
      >
        <a href="https://discord.gg/xA2Rn8Fy5T" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          Discord
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>

      <Dialog open={sponsorOpen} onOpenChange={setSponsorOpen}>
        <DialogTrigger asChild>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary/10 font-bold pixel-text"
          >
            Sponsor
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold pixel-text">Become a Sponsor</DialogTitle>
            <DialogDescription className="text-base pt-4 space-y-4">
              <p>
                Interested in sponsoring Build-a-thon? We'd love to hear from you!
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                asChild
              >
                <a href="mailto:hi@buildathon.dev" className="flex items-center justify-center gap-2">
                  Contact Us
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <div className="text-sm text-muted-foreground border-t pt-4 mt-4">
                <p className="font-semibold mb-2">Important:</p>
                <p>
                  Only transfer funds to the organization's bank account or through card, 
                  which must be titled "Build-a-thon Hackathon c/o The Hack Foundation". 
                  To verify the account, write an email to hi@buildathon.dev.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CTAButtons;
