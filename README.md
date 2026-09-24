# Seamless Sales System 2.0

AI proposal engine with four-agent pipeline.

## Architecture

```
Note Intake → Deal Context Manager → Nadia → Victor → Corbin → Emma → Output
```

### Agents

- **Nadia**: Discovery call intelligence extraction
- **Victor**: Value equation framing
- **Corbin**: Proposal synthesis
- **Emma**: StoryBrand rewrite layer

### Folder Structure

```
seamless-sales-system/
├── src/
│   ├── agents/          (Nadia, Victor, Corbin, Emma)
│   ├── core/            (Proposal engine, deal context, pipeline)
│   ├── integrations/    (Note intake, routing, output)
│   ├── api/             (HTTP routes, webhooks)
│   └── utils/           (Config, logging)
├── config/              (Agent configs, pipeline settings)
├── docs/                (Architecture, API docs)
├── tests/               (Unit and integration tests)
└── package.json
```

## Setup

```bash
npm install
npm start
```

## Development

This project is built and managed by Claude as a distributed dev team using Claude Projects.

See `docs/DEVELOPMENT.md` for contribution guidelines.
