/**
 * API Routes — Front-end (Note Intake) and Back-end (Proposal Delivery)
 */

const express = require('express');
const ProposalEngine = require('../core/proposal-engine');

const router = express.Router();
const engine = new ProposalEngine();

/**
 * FRONT API: Ingest notes from any source
 * POST /api/notes/ingest
 * 
 * Accepts notes from Fathom, Zoom, Otter, or raw transcript
 * Routes to Note Intake & Attribution → Deal Context Manager
 */
router.post('/api/notes/ingest', async (req, res) => {
  try {
    const { source, content, metadata } = req.body;
    
    // TODO: Normalize content
    // TODO: Route to Note Intake & Attribution
    // TODO: Return status
    
    res.json({
      status: 'success',
      message: 'Notes received and queued for processing',
      noteId: `note_${Date.now()}`,
    });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
});

/**
 * BACK API: Deliver finished proposals to any destination
 * POST /api/proposals/deliver
 * 
 * Accepts finished proposal from Emma Agent
 * Routes to CRM, email, or other destination
 */
router.post('/api/proposals/deliver', async (req, res) => {
  try {
    const { proposal_id, proposal_content, destination, destination_config } = req.body;
    
    // TODO: Fetch proposal from context
    // TODO: Route to correct integration
    // TODO: Deliver
    // TODO: Return status
    
    res.json({
      status: 'success',
      message: 'Proposal delivered',
      proposal_id,
    });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
});

module.exports = router;
