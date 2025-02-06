import React from 'react';
import { Code, Database, Layout, Layers, Package, Server, Settings, Share2 } from 'lucide-react';

export const ArchitecturePage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">Project Architecture</h1>
        <p className="text-amber-800">A comprehensive overview of the Wizarding Games application structure</p>
      </div>

      <div className="grid gap-8">
        {/* Project Structure */}
        <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-amber-900">Project Structure</h2>
          </div>
          <div className="pl-4 border-l-2 border-amber-100 space-y-4">
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">📁 src/</h3>
              <ul className="space-y-2 text-amber-800">
                <li>Main source directory containing all application code</li>
                <li>Organized by feature and responsibility</li>
                <li>Follows modular architecture principles</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">📁 netlify/functions/</h3>
              <ul className="space-y-2 text-amber-800">
                <li>Serverless functions for backend operations</li>
                <li>API endpoints for game data and scores</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Components */}
        <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Layout className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-amber-900">Core Components</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-amber-900">Game Components</h3>
              <ul className="space-y-2 text-amber-800">
                <li>📱 Trivia Game Engine</li>
                <li>🎨 Pictionary Drawing System</li>
                <li>🏆 Leaderboard Display</li>
                <li>🎮 Game Mode Selection</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-amber-900">UI Components</h3>
              <ul className="space-y-2 text-amber-800">
                <li>🎯 Button System</li>
                <li>📋 Form Controls</li>
                <li>🎨 Canvas Drawing</li>
                <li>📊 Score Display</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Flow */}
        <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Share2 className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-amber-900">Data Flow</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Code className="w-5 h-5 text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Frontend State Management</h3>
                <p className="text-amber-800">React hooks and context for local state management</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Server className="w-5 h-5 text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">API Integration</h3>
                <p className="text-amber-800">Netlify Functions for serverless backend operations</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Database className="w-5 h-5 text-amber-600 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Data Storage</h3>
                <p className="text-amber-800">Supabase for persistent data storage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-amber-900">Technical Stack</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-amber-900 mb-3">Frontend</h3>
              <ul className="space-y-2 text-amber-800">
                <li>⚛️ React</li>
                <li>🎨 TailwindCSS</li>
                <li>📝 TypeScript</li>
                <li>⚡ Vite</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-3">Backend</h3>
              <ul className="space-y-2 text-amber-800">
                <li>λ Netlify Functions</li>
                <li>🔐 Supabase</li>
                <li>🌐 REST API</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-3">Development</h3>
              <ul className="space-y-2 text-amber-800">
                <li>📦 npm</li>
                <li>🔍 ESLint</li>
                <li>🎯 Prettier</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-amber-900">Best Practices</h2>
          </div>
          <div className="grid gap-4">
            <div className="p-4 bg-amber-50/50 rounded-lg">
              <h3 className="font-semibold text-amber-900 mb-2">Code Organization</h3>
              <ul className="list-disc list-inside text-amber-800 space-y-1">
                <li>Feature-based folder structure</li>
                <li>Separation of concerns</li>
                <li>Single responsibility principle</li>
                <li>DRY (Don't Repeat Yourself)</li>
              </ul>
            </div>
            <div className="p-4 bg-amber-50/50 rounded-lg">
              <h3 className="font-semibold text-amber-900 mb-2">Component Design</h3>
              <ul className="list-disc list-inside text-amber-800 space-y-1">
                <li>Reusable UI components</li>
                <li>Consistent styling patterns</li>
                <li>Proper type definitions</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};