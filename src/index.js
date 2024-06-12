
const fs = require('fs');

module.exports = {
    // display errors in the HTML by writing them to the output file
    name: 'front-end-errors',
    setup(build) {
        build.onEnd(result => {
            let errorOutput = '';
            for (const error of result.errors) {
                errorOutput += `
                    <div style="font-family: sans-serif; padding: 20px; color: #fff; background-color: #f00;">✘ [ERROR] ${error.text}</div>
                    <pre style="font-family: monospace; padding: 20px; color: #000; background-color: #f8f8f8;">${error.location.file}:${error.location.line}:${error.location.column}:\n${error.location.lineText}\n${' '.repeat(error.location.column)}^${error.location.suggestion ? `\n${' '.repeat(error.location.column)}${error.location.suggestion}` : ''}
                    </pre>
                `;
            }
            if (errorOutput) {
                fs.writeFileSync(build.initialOptions.outfile, `document.body.innerHTML = \`${errorOutput}\`; console.error(${JSON.stringify(result.errors)});`);
            }
        });
    }
};
