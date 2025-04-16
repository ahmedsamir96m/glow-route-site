
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <AnimatedSection delay={1}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection delay={2} className="space-y-4">
            <p className="text-lg text-muted-foreground">
              I'm a passionate designer and developer focused on creating elegant, 
              user-friendly digital experiences.
            </p>
            <p className="text-muted-foreground">
              With expertise in both design and development, I bring a unique perspective to 
              projects that bridges the gap between aesthetics and functionality.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={3}>
            <Card className="bg-secondary/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Skills</h3>
                <div className="grid grid-cols-2 gap-y-2">
                  {["UI/UX Design", "Frontend Development", "React", "Tailwind CSS", "Typography", "Motion Design"].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
