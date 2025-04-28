import { useState } from "react";
import { X } from "lucide-react";

export function TeamDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
      >
        Learn about the team
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)}>
          <div 
            className="fixed bottom-0 left-0 right-0 bg-background p-6 rounded-t-lg max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Our Team</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-accent rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
              <TeamCard 
                name="Person 1"
                role="Role 1"
                description="Description for Person 1 goes here. This could include their expertise, experience, and contributions to the team."
              />
              <TeamCard 
                name="Person 2"
                role="Role 2"
                description="Description for Person 2 goes here. This could include their expertise, experience, and contributions to the team."
              />
              <TeamCard 
                name="Person 3"
                role="Role 3"
                description="Description for Person 3 goes here. This could include their expertise, experience, and contributions to the team."
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const TeamCard = ({ name, role, description }: { name: string, role: string, description: string }) => {
  return (
    <div className="border rounded-lg p-4 hover:bg-accent/30 transition-colors">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <span className="text-2xl font-bold">{name.charAt(0)}</span>
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-muted-foreground mb-2">{role}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
} 