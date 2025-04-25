// src/components/ui/tabs.js
import React from "react";

export const Tabs = ({ children }) => (
  <div className="tabs">
    {children}
  </div>
);

export const TabsList = ({ children }) => (
  <div className="tabs-list">{children}</div>
);

export const TabsTrigger = ({ children, value }) => (
  <button className="tabs-trigger">{children}</button>
);

export const TabsContent = ({ children, value }) => (
  <div className="tabs-content">{children}</div>
);
