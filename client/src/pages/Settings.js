import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [settings, setSettings] = useState({
    theme: 'light',
    autoSave: true,
    aiApiKey: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="settings-container">
      <h2>Application Settings</h2>
      <div className="settings-form">
        <div className="form-group">
          <label>Theme:</label>
          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="autoSave"
              checked={settings.autoSave}
              onChange={handleChange}
            />
            Auto-Save Changes
          </label>
        </div>

        <div className="form-group">
          <label>AI API Key:</label>
          <input
            type="password"
            name="aiApiKey"
            value={settings.aiApiKey}
            onChange={handleChange}
            placeholder="Enter your API key"
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
