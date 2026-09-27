/*
 * Not Found page, 404 fallback
 *
 * All copy comes from content.json so it can be edited in the Mirantic CMS.
 * The icon, layout and the Go Home route stay in code.
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import content from "@/content.json";

const c = content.notFound;

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className="w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-red-500" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-2" data-cms-field="notFound.code">{c.code}</h1>

          <h2 className="text-xl font-semibold text-slate-700 mb-4" data-cms-field="notFound.title">
            {c.title}
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed">
            <span data-cms-field="notFound.messageLines[0]">{c.messageLines[0]}</span>
            <br />
            <span data-cms-field="notFound.messageLines[1]">{c.messageLines[1]}</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              <span data-cms-field="notFound.buttonText">{c.buttonText}</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
