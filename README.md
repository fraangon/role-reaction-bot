# Role Reaction Bot

Dev run with `yarn start`

### .env template
```
DISCORD_BOT_TOKEN = YOUR_DISCORD_BOT_TOKEN
```

### Configs in src/constants.js file
Example: 
```
export const RULES = [
    {
        emoji: '❌',
        count: 2,
        role: 'Boludo'
    },
    {
        emoji: 'Oveja',
        count: 1,
        role: 'Capo de la vida'
    }
];

export const ASSIGN_MESSAGE = 'Felicitaciones {{username}}, ahora sos {{role}}.';
```
