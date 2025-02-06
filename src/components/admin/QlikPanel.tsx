import React from 'react';
import { BookOpen, MessageSquare, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';

interface QlikPanelProps {
  type: 'knowledge-base' | 'answers-api';
}

export const QlikPanel: React.FC<QlikPanelProps> = ({ type }) => {
  const isKnowledgeBase = type === 'knowledge-base';
  
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        {isKnowledgeBase ? (
          <BookOpen className="w-6 h-6 text-amber-600" />
        ) : (
          <MessageSquare className="w-6 h-6 text-amber-600" />
        )}
        <h2 className="text-xl font-bold text-amber-900">
          {isKnowledgeBase ? 'Qlik Knowledge Base' : 'Qlik Answers API'}
        </h2>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-amber-50/50 rounded-lg">
          <h3 className="font-semibold text-amber-900 mb-2">
            {isKnowledgeBase ? 'Recent Articles' : 'API Status'}
          </h3>
          {isKnowledgeBase ? (
            <ul className="space-y-2">
              <li className="flex items-center justify-between text-amber-800">
                <span>Getting Started with Wizarding Games</span>
                <ExternalLink className="w-4 h-4" />
              </li>
              <li className="flex items-center justify-between text-amber-800">
                <span>Troubleshooting Common Issues</span>
                <ExternalLink className="w-4 h-4" />
              </li>
              <li className="flex items-center justify-between text-amber-800">
                <span>Best Practices for Game Masters</span>
                <ExternalLink className="w-4 h-4" />
              </li>
            </ul>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-amber-800">API Version</span>
                <span className="font-medium text-amber-900">v2.1.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-amber-800">Status</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Operational
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-amber-800">Response Time</span>
                <span className="font-medium text-amber-900">243ms</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <Button variant="secondary" className="flex items-center gap-2">
            {isKnowledgeBase ? 'View All Articles' : 'View API Docs'}
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};