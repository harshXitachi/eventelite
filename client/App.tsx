import React from 'react';
import { Route, Switch } from 'wouter';
import { ServiceCards } from './components/ServiceCards';

function Home() {
  return (
    <div className="container mx-auto px-4">
      <header className="py-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-purple-900">EventElite</h1>
        <p className="text-xl text-gray-600">Premium Event Management Solutions</p>
      </header>
      
      <ServiceCards />
      
      <footer className="mt-16 pb-8 text-center text-gray-600">
        <p>© 2025 EventElite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
} 