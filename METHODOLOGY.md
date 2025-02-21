# Digit Span Test: Methodology and Implementation

## Scientific Background

The Digit Span Test is a classic measure of working memory capacity, originally part of the Wechsler Adult Intelligence Scale (WAIS). It assesses both:

- Forward span: immediate verbal recall
- Backward span: working memory manipulation

## Test Administration Protocol

### 1. Test Preparation

- Ensure quiet, distraction-free environment
- Recommend fullscreen mode
- Verify audio/visual requirements
- Input participant ID for data tracking
- Select appropriate user mode (Test Taker/Administrator)
- Configure dark/light mode for optimal visibility

### 2. Test Configuration

#### Standard Parameters

- Display duration: 2000ms per digit
- Inter-trial interval: 1000ms
- Font size: 2.5em for clear visibility
- High contrast display with dark mode support
- Smooth animations and transitions

#### Customizable Parameters

- Display duration (500ms minimum)
- Inter-trial interval (500ms minimum)
- Test type (Forward/Reverse)
- Testing mode (Pilot/Production)
- User interface theme (Light/Dark)
- User type (Test Taker/Administrator)

### 3. Test Structure

#### Rounds and Progression

1. **Round 1**: 3 digits
2. **Round 2**: 4 digits
3. **Round 3**: 5 digits
4. **Round 4**: 6 digits
5. **Round 5**: 7 digits

#### Trial Structure

Each round contains:

1. Instructions display
2. "Show Digits" button (participant-initiated)
3. Digit sequence presentation
4. Response input phase (keyboard or mouse)
5. Automatic validation
6. Inter-trial interval
7. Second trial (if first was successful)

### 4. Administration Modes

#### Test Taker Mode

1. Self-paced progression
2. Automatic sequence hiding
3. Reaction time measurement
4. Immediate feedback
5. Single attempt per trial

#### Administrator Mode

1. Continuous sequence display
2. Manual response recording
3. Failed attempt tracking
4. Two attempts allowed
5. Manual progression control

### 5. Sequence Generation

#### Algorithm

```javascript
function generateDigits(count) {
    let digits = "";
    for (let i = 0; i < count; i++) {
        digits += Math.floor(Math.random() * 10).toString();
    }
    return digits;
}
```

#### Properties

- Truly random digits (0-9)
- No repeating patterns enforced
- Equal probability for each digit
- New sequence for each trial
- Consistent display formatting

### 6. Response Handling

#### Test Taker Mode

1. Automatic sequence hiding
2. Reaction time recording
3. Enter key support
4. Immediate validation
5. Automatic progression

#### Administrator Mode

1. Manual response entry
2. Failed attempt marking
3. Enter key support
4. Multiple attempt tracking
5. Manual progression

### 7. Data Collection

#### Per Trial Data

1. Round number
2. Trial number
3. Sequence length
4. Presented sequence
5. Expected response
6. Actual response
7. Accuracy (correct/incorrect)
8. Reaction time (ms)
9. Failed attempt status
10. Timestamp
11. User mode

#### Metadata

1. Participant ID
2. Test configuration
3. Test type (Forward/Reverse)
4. Display duration
5. Inter-trial interval
6. User mode
7. Theme preference

### 8. User Interface Components

#### Common Elements

1. Configuration Panel
   - Input validation
   - Mode selection
   - Theme toggle
   - Help access

2. Test Display
   - Progress indicator
   - Instruction area
   - Digit display
   - Input area
   - Keyboard support

3. Results Panel
   - Score display
   - Data export options
   - Reset functionality

#### Mode-Specific Elements

1. Test Taker Mode
   - Hidden sequence display
   - Reaction time tracking
   - Automatic progression

2. Administrator Mode
   - Visible sequence display
   - Failed attempt checkbox
   - Manual progression
   - Extended data options

### 9. Visual Design

#### Theme Support

1. Light Mode
   - High contrast
   - Neutral background
   - Clear typography
   - Subtle shadows

2. Dark Mode
   - Reduced eye strain
   - Dark background
   - Adjusted contrast
   - Enhanced shadows

#### Animations

1. Interface Transitions
   - Smooth mode switching
   - Element fade-in/out
   - Button interactions
   - Progress updates

2. Feedback Effects
   - Input validation
   - Error states
   - Success indicators
   - Loading states

### 10. Debug Features

#### Pilot Mode

1. Real-time Logging
   - Timestamped entries
   - Formatted output
   - Auto-scrolling
   - Entry limiting

2. Error Tracking
   - Detailed messages
   - Stack traces
   - State information
   - Recovery options

### 11. Data Export

#### CSV Format

```csv
ParticipantID,Round,Trial,DigitCount,Mode,Sequence,Expected,Answer,Result,ReactionTime,Failed,Timestamp
```

#### Export Options

1. Local Download
   - Automatic naming
   - Date stamping
   - Mode-specific paths
   - UTF-8 encoding

2. Repository Save
   - File picker API
   - Error handling
   - Success confirmation
   - Automatic reset

### 12. Implementation Considerations

#### Browser Support

1. Modern Features
   - File System Access API
   - Local Storage
   - CSS Variables
   - Smooth Scrolling

2. Fallbacks
   - Download fallback
   - Theme persistence
   - Animation support
   - Input handling

#### Performance

1. Memory Management
   - Log entry limiting
   - DOM optimization
   - Event delegation
   - Resource cleanup

2. Animation Performance
   - Hardware acceleration
   - Transition batching
   - Paint optimization
   - Layout triggers

### 13. Security Measures

1. Data Protection
   - Local processing
   - No external calls
   - Minimal storage
   - Safe file handling

2. Input Validation
   - Sanitized input
   - Type checking
   - Length limits
   - Error boundaries

## References

1. Wechsler, D. (2008). Wechsler Adult Intelligence Scale–Fourth Edition (WAIS–IV). San Antonio, TX: Pearson.
2. Miller, G. A. (1956). The magical number seven, plus or minus two: Some limits on our capacity for processing information. Psychological Review, 63(2), 81-97.
3. Conway, A. R. A., Kane, M. J., Bunting, M. F., Hambrick, D. Z., Wilhelm, O., & Engle, R. W. (2005). Working memory span tasks: A methodological review and user's guide. Psychonomic Bulletin & Review, 12(5), 769-786.
