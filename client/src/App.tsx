/*
 * ULP Website — App Router
 * All routes match the existing URL structure exactly to preserve Google sitelinks.
 * Design: Warm Savanna Editorial — sand base, burnt orange accent, Playfair Display / Barlow Condensed
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import TheProgram from "./pages/TheProgram";
import OurCurriculum from "./pages/OurCurriculum";
import OurPartners from "./pages/OurPartners";
import Participate from "./pages/Participate";
import Donate from "./pages/Donate";
import Partnership from "./pages/Partnership";
import LeadershipTrip from "./pages/LeadershipTrip";
import NewsStories from "./pages/NewsStories";
import BlogTrueLeader from "./pages/BlogTrueLeader";
import BlogLeadershipTrip from "./pages/BlogLeadershipTrip";
import BlogEnglishClasses from "./pages/BlogEnglishClasses";
import BlogLeadershipTrip2026 from "./pages/BlogLeadershipTrip2026";
import MeetOurTeam from "./pages/MeetOurTeam";
import History from "./pages/History";
import AboutUs from "./pages/AboutUs";
import AnbiRapportage from "./pages/AnbiRapportage";
import ContactUs from "./pages/ContactUs";
import ShortCourses from "./pages/ShortCourses";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      {/* Main pages */}
      <Route path="/" component={Home} />
      <Route path="/short-courses/" component={ShortCourses} />
      <Route path="/short-courses" component={ShortCourses} />
      <Route path="/the-program/" component={TheProgram} />
      <Route path="/the-program" component={TheProgram} />
      <Route path="/our-curriculum/" component={OurCurriculum} />
      <Route path="/our-curriculum" component={OurCurriculum} />
      <Route path="/our-partners/" component={OurPartners} />
      <Route path="/our-partners" component={OurPartners} />

      {/* Get involved */}
      <Route path="/participate/" component={Participate} />
      <Route path="/participate" component={Participate} />
      <Route path="/donate/" component={Donate} />
      <Route path="/donate" component={Donate} />
      <Route path="/partnership/" component={Partnership} />
      <Route path="/partnership" component={Partnership} />

      {/* Leadership Trip — preserving WordPress slug /407-2/ */}
      <Route path="/407-2/" component={LeadershipTrip} />
      <Route path="/407-2" component={LeadershipTrip} />

      {/* News & Stories */}
      <Route path="/news-stories/" component={NewsStories} />
      <Route path="/news-stories" component={NewsStories} />
      <Route path="/uncategorized/475/" component={BlogTrueLeader} />
      <Route path="/uncategorized/475" component={BlogTrueLeader} />
      <Route path="/uncategorized/427/" component={BlogLeadershipTrip} />
      <Route path="/uncategorized/427" component={BlogLeadershipTrip} />
      <Route path="/uncategorized/how-english-classes-transform-our-trainees/" component={BlogEnglishClasses} />
      <Route path="/uncategorized/how-english-classes-transform-our-trainees" component={BlogEnglishClasses} />
      <Route path="/uncategorized/ubuntu-leadership-trip-2026/" component={BlogLeadershipTrip2026} />
      <Route path="/uncategorized/ubuntu-leadership-trip-2026" component={BlogLeadershipTrip2026} />

      {/* About us */}
      <Route path="/meet-our-team/" component={MeetOurTeam} />
      <Route path="/meet-our-team" component={MeetOurTeam} />
      {/* History page — was 404 on live site; now shows a proper page */}
      <Route path="/history/" component={History} />
      <Route path="/history" component={History} />
      <Route path="/about-us/" component={AboutUs} />
      <Route path="/about-us" component={AboutUs} />
      {/* ANBI rapportage — preserving WordPress slug /450-2/ */}
      <Route path="/450-2/" component={AnbiRapportage} />
      <Route path="/450-2" component={AnbiRapportage} />

      {/* Contact */}
      <Route path="/contact-us/" component={ContactUs} />
      <Route path="/contact-us" component={ContactUs} />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
