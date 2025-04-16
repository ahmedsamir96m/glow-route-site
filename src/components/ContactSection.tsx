
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <AnimatedSection delay={1}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection delay={2} className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Interested in working together? Feel free to reach out to me.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <span>hello@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-muted-foreground" />
                <span>@username</span>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={3}>
            <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input placeholder="Name" />
                  </div>
                  <div className="space-y-2">
                    <Input type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Message" className="min-h-[120px]" />
                </div>
                <Button className="w-full md:w-auto">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
