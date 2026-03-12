import fs from 'fs';

const coverageFile = './coverage/coverage-summary.json';

if (fs.existsSync(coverageFile)) {
    const summary = JSON.parse(fs.readFileSync(coverageFile, 'utf8'));
    const total = summary.total;
    console.log('--- Coverage Summary ---');
    console.log(`Lines: ${total.lines.pct}%`);
    console.log(`Statements: ${total.statements.pct}%`);
    console.log(`Functions: ${total.functions.pct}%`);
    console.log(`Branches: ${total.branches.pct}%`);
    
    if (total.lines.pct < 80) {
        console.error('ERROR: Coverage is below 80%');
        process.exit(1);
    }
} else {
    console.log('Coverage file not found. Run tests with coverage first.');
}
