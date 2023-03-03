const { execSync } = require("child_process");

const tagName = `reports-dev-${new Date().toISOString().replace(/[:.]/g, "_")}`;

const command = `git tag ${tagName} && git push origin ${tagName}`;

console.log(command);

execSync(command, { stdio: [0, 1, 2] });
