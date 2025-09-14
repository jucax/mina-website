const fs = require('fs');

// Read the current file
const filePath = 'src/translations.js';
let content = fs.readFileSync(filePath, 'utf8');

// Add registration section translations after features
const registrationTranslations = `    },
    registrationSection: {
      headline: 'Register Now',
      subheadline: 'In Just a Few Clicks',
      desc: 'Join thousands of property owners and agents who are already using Mina to revolutionize their real estate experience. Get started in minutes and discover the power of smart property management.',
      cta: 'Get Started Now',
      videoDesc: 'Watch our registration workflow',
    },
    featureHighlight: {`;

// Replace the featureHighlight section with the new registration section
const fixedContent = content.replace(
  /(\s+\},\s+featureHighlight: \{)/,
  registrationTranslations
);

// Write the updated content back
fs.writeFileSync(filePath, fixedContent);
console.log('✅ Added registration section translations');
