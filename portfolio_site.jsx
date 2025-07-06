import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="max-w-5xl mx-auto grid gap-6">
        <header className="text-center py-10">
          <h1 className="text-5xl font-bold text-gray-800">Hi, I'm Light Lawliet</h1>
          <p className="text-xl text-gray-600 mt-2">Software Developer | Designer | Problem Solver</p>
        </header>

        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold">Project One</h3>
                <p className="text-gray-600">A web application that does something amazing using React and Node.js.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold">Project Two</h3>
                <p className="text-gray-600">An app built with Python and Flask for real-time analytics.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a passionate developer with a love for crafting clean, efficient, and user-friendly applications. When I'm not coding, I enjoy reading mysteries, sketching ideas, or exploring new technologies.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Contact</h2>
          <div className="flex gap-4">
            <Button variant="outline"><Mail className="mr-2 h-4 w-4" /> Email</Button>
            <Button variant="outline"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
            <Button variant="outline"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Button>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} Light Lawliet. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
