# Digit Span Test

A standalone, browser-based implementation of the Digit Span Test for cognitive assessment. This application provides both participant testing and administrator modes, with built-in data collection capabilities.

## Features

### General

- Single HTML file implementation - no dependencies or server required
- Responsive design that works on various screen sizes
- Dark mode support with smooth transitions
- Fullscreen mode support
- Comprehensive help/instructions modal
- Pilot and Production testing modes
- Modern UI with animations and visual feedback

### Test Types

- Forward Digit Span: Recall digits in the presented order
- Reverse Digit Span: Recall digits in reverse order

### User Modes

#### Test Taker Mode

- Progressive difficulty (starting with 3 digits, increasing by 1 each round)
- Two trials per round
- Automatic progression/termination based on performance
- Reaction time recording
- Clear visual feedback
- Keyboard support (Enter key submission)

#### Administrator Mode

- Digits remain visible on screen
- Manual response recording
- Failed attempt tracking (up to 2 attempts allowed)
- Detailed data logging
- Multiple CSV export options
- Keyboard support (Enter key submission)

### Data Collection

- Participant ID tracking
- Round and trial tracking
- Sequence and response recording
- Accuracy tracking
- Reaction time measurement
- Failed attempt tracking
- Timestamp recording
- CSV file generation with options to:
  - Save to local system
  - Download directly
  - Discard results

### Debug Features

- Real-time event logging in pilot mode
- Formatted timestamps
- Auto-scrolling log display
- Hover effects on log entries
- Memory-efficient log management
- Error tracking and reporting

## Usage

1. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, or Safari recommended)

2. Configure the test:
   - Enter Participant ID
   - Select Test Mode (Pilot/Production)
   - Choose Test Type (Forward/Reverse)
   - Set Display Duration (ms)
   - Set Inter-Trial Interval (ms)
   - Select User Type (Test Taker/Administrator)
   - Toggle Dark Mode if desired

3. Click "Start Test" to begin

### Test Taker Flow

1. Click "Show Digits" when ready
2. Memorize the displayed sequence
3. Enter the sequence when prompted (use Enter key or click Submit)
4. Repeat for each trial/round until completion or test termination

### Administrator Flow

1. Observe the displayed sequence
2. Record participant's response (use Enter key or click Submit)
3. Mark as failed attempt if necessary
4. Submit response or proceed to next sequence
5. Export or save data at completion

## Data Format

The CSV output includes the following fields:

- ParticipantID
- Round
- Trial
- DigitCount
- Mode (Forward/Reverse)
- Sequence
- Expected
- Answer
- Result (Correct/Incorrect)
- ReactionTime (ms)
- Failed (true/false)
- Timestamp

## Technical Details

### Browser Requirements

- Modern browser with JavaScript enabled
- File System Access API support for repository saving (fallback to download available)
- Fullscreen API support for fullscreen mode
- Local Storage support for theme persistence

### Data Storage

- All data is stored in-memory during the test
- Theme preference stored in localStorage
- No other permanent storage or cookies used
- Data is only saved when explicitly requested via CSV export

### Performance Optimizations

- Limited debug log entries (max 100)
- Efficient DOM updates
- Smooth animations with hardware acceleration
- Debounced event handlers
- Memory leak prevention

## Privacy and Security

- No data is transmitted to any external servers
- All processing occurs locally in the browser
- No personal information is stored beyond the provided Participant ID
- Theme preference is the only persistent data

## Development

The application is contained entirely within `index.html`, making it easy to modify and extend. The code is structured as follows:

### Structure

- HTML: Core structure and UI elements
- CSS: Styling, animations, and responsive design
- JavaScript: Test logic and data handling

### Key Components

- Test configuration and initialization
- Theme management and persistence
- Sequence generation and display
- Response handling and validation
- Data logging and export
- Administrator mode functions
- Error handling and debugging
- Animation and transition management

### Error Handling

- Comprehensive try-catch blocks
- User-friendly error messages
- Detailed error logging in pilot mode
- Graceful degradation
- Recovery mechanisms

## License

[Insert chosen license here]

## Contributing

[Insert contribution guidelines here]
