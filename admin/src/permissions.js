const pluginPermissions = {
    // This permission regards the main component (App) and is used to tell
    // If the plugin link should be displayed in the menu
    // And also if the plugin is accessible. This use case is found when a user types the url of the
    // plugin directly in the browser
    'menu-link': [{ action: 'plugin::qbwa.menu-link', subject: null }],
    settings: [{ action: 'plugin::qbwa.settings.read', subject: null }],
  };
  
  export default pluginPermissions;
  