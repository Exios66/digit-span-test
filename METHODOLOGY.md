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

### 2. Test Configuration

#### Standard Parameters

- Display duration: 2000ms per digit
- Inter-trial interval: 1000ms
- Font size: 2em for clear visibility
- High contrast display (black on white)

#### Customizable Parameters

- Display duration (500ms minimum)
- Inter-trial interval (500ms minimum)
- Test type (Forward/Reverse)
- Testing mode (Pilot/Production)

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
4. Response input phase
5. Automatic validation
6. Inter-trial interval
7. Second trial (if first was successful)

### 4. Sequence Generation

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

### 5. Scoring Methodology

#### Success Criteria

- Both trials in a round must be correct
- Exact match required (no partial credit)
- Order matters (forward/reverse as specified)

#### Termination Conditions

- Incorrect response in either trial
- Completion of all 5 rounds
- Participant voluntary termination

#### Score Calculation

- Final score = highest completed round
- Maximum score = 5 (7 digits)
- Minimum score = 0 (failed first round)

### 6. Data Collection

#### Per Trial Data

1. Round number
2. Trial number
3. Sequence length
4. Presented sequence
5. Expected response
6. Actual response
7. Accuracy (correct/incorrect)
8. Reaction time (ms)
9. Timestamp

#### Metadata

1. Participant ID
2. Test configuration
3. Test type (Forward/Reverse)
4. Display duration
5. Inter-trial interval

### 7. Implementation Details

#### User Interface Components

1. Configuration Panel
   - Input fields
   - Dropdown selections
   - Control buttons

2. Test Display
   - Progress indicator
   - Instruction area
   - Digit display
   - Input area

3. Results Panel
   - Score display
   - Data download
   - Reset option

#### Error Handling

1. Input validation
2. Exception catching
3. Graceful degradation
4. User feedback

#### Accessibility Features

1. ARIA labels
2. Keyboard navigation
3. Screen reader support
4. Responsive design

### 8. Data Export

#### CSV Format

```csv
ParticipantID,Round,Trial,DigitCount,Mode,Sequence,Expected,Answer,Result,ReactionTime,Timestamp
```

#### Data Processing

- Automatic CSV generation
- Local download
- UTF-8 encoding
- Comma-separated values
- Quote-wrapped text fields

### 9. Quality Assurance

#### Pilot Mode Features

1. Debug logging
2. On-screen event tracking
3. Detailed error messages
4. Performance monitoring

#### Production Mode

1. Clean interface
2. Minimal distractions
3. Error suppression
4. Optimized performance

## Methodological Considerations

### Validity Measures

1. Standardized presentation
2. Controlled timing
3. Accurate response recording
4. Consistent scoring

### Limitations

1. Browser dependencies
2. Hardware variations
3. Environmental factors
4. Internet connectivity

### Best Practices

1. Use consistent testing environment
2. Regular system validation
3. Data backup procedures
4. Participant instruction standardization

## Technical Implementation

### Browser Requirements

- Modern JavaScript support
- CSS3 compatibility
- Local storage capability
- Download functionality

### Performance Optimization

1. Minimal DOM manipulation
2. Efficient event handling
3. Memory management
4. Resource preloading

### Security Considerations

1. Data anonymization
2. Local processing
3. No external dependencies
4. Secure data handling

## References

1. Wechsler, D. (2008). Wechsler Adult Intelligence Scale–Fourth Edition (WAIS–IV). San Antonio, TX: Pearson.
2. Miller, G. A. (1956). The magical number seven, plus or minus two: Some limits on our capacity for processing information. Psychological Review, 63(2), 81-97.
3. Conway, A. R. A., Kane, M. J., Bunting, M. F., Hambrick, D. Z., Wilhelm, O., & Engle, R. W. (2005). Working memory span tasks: A methodological review and user's guide. Psychonomic Bulletin & Review, 12(5), 769-786.
