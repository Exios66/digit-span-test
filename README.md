# Digit Span Test

A web-based implementation of the Digit Span Test, a cognitive assessment tool used to measure working memory capacity and short-term memory performance.

## Overview

The Digit Span Test is a widely used neuropsychological assessment that measures working memory's number storage capacity. Participants are presented with a sequence of digits and must recall them either in forward order (Forward Digit Span) or reverse order (Backward Digit Span).

## Features

- Forward and Backward digit span testing modes
- Configurable display duration and inter-trial intervals
- Pilot and Production testing modes
- Automatic CSV data export
- Fullscreen mode support
- Detailed performance logging
- Responsive design
- Accessible interface with ARIA support

## Technical Requirements

- Modern web browser with JavaScript enabled
- No server-side dependencies required (runs entirely in the browser)
- Minimum screen resolution: 768x600

## Quick Start

1. Open `index.html` in a modern web browser
2. Enter a participant ID
3. Select test configuration:
   - Test Mode (Pilot/Production)
   - Span Type (Forward/Reverse)
   - Display Duration
   - Inter-Trial Interval
4. Click "Start Test" to begin
5. Follow on-screen instructions
6. Download results CSV at test completion

## Test Structure

- 5 rounds total
- 2 trials per round
- Starting with 3 digits in Round 1
- Each round increases sequence length by 1
- Maximum sequence length: 7 digits (Round 5)

## Data Collection

The test records:
- Participant ID
- Round and trial numbers
- Digit sequence length
- Test mode (Forward/Reverse)
- Presented sequence
- Expected answer
- Participant's response
- Accuracy (Correct/Incorrect)
- Reaction time (milliseconds)
- Timestamp

## Scoring

- Participants must correctly complete both trials in a round to advance
- Test ends if participant fails either trial
- Final score is the highest round completed successfully

## Usage Modes

### Pilot Mode
- Displays debug information
- Shows detailed logs on screen
- Useful for testing and demonstration

### Production Mode
- Clean interface
- No debug information
- Suitable for actual assessments

## Customization

Adjustable parameters:
- Digit display duration (milliseconds)
- Inter-trial interval (milliseconds)
- Test type (Forward/Reverse)
- Number of rounds (modifiable in code)

## Accessibility

- ARIA labels for screen readers
- Keyboard navigation support
- High contrast display
- Clear, readable fonts

## Data Export

Results are exported as CSV files containing:
- Complete test configuration
- Trial-by-trial performance
- Timing data
- Error patterns
- Session metadata

## Browser Support

Tested and supported on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

This implementation follows standard neuropsychological assessment protocols for digit span testing, adapted for digital administration. 