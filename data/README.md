# Data Storage Directory

This directory contains the data collected from the Digit Span Test sessions.

## Directory Structure

- `pilot/`: Contains data from pilot testing sessions
  - Used for testing and validation
  - Data stored here should not be used for final analysis
  - Useful for debugging and system validation

- `experimental/`: Contains data from actual experimental sessions
  - Contains production data for analysis
  - Should be backed up regularly
  - Used for final research analysis

## File Naming Convention

Files are automatically named in the following format:

```text
[participantID]_digit_span_test_log.csv
```

## Data Format

Each CSV file contains:

- Test configuration
- Trial-by-trial performance
- Timing data
- Response accuracy
- Participant metadata

## Data Management

- Pilot data is automatically stored in the `pilot/` directory when running in pilot mode
- Experimental data is automatically stored in the `experimental/` directory when running in production mode
- Both directories are git-ignored to prevent accidental commits of participant data
- Regular backups of the `experimental/` directory are recommended

## Privacy Considerations

- Data files contain participant IDs but no personally identifiable information
- It's recommended to keep a separate, secure mapping of participant IDs to participant information
- Regular data cleanup of pilot data is recommended
- Follow your institution's data retention policies
