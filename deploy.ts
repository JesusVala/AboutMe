// deploy.ts
import { exec, OutputMode } from "https://deno.land/x/exec@0.0.5/mod.ts";

async function deploy() {
  const branchName = "cloudflare-pages";
  const buildDir = "client/dist"; // Change this if your build directory is different

  try {
    // Step 1: Build the project
    console.log("Building the project...");
    await exec("deno task build", { output: OutputMode.Capture });

    // Step 2: Create a new orphan branch (no commit history)
    console.log(`Creating new branch: ${branchName}`);
    await exec(`git checkout --orphan ${branchName}`);

    // Step 3: Remove all files except the build directory
    console.log("Cleaning up files...");
    await exec("git rm -rf .");
    await exec(`mv ${buildDir}/* .`); // Move build files to the root
    await exec(`rm -rf ${buildDir}`); // Remove the build directory

    // Step 4: Add and commit the build files
    console.log("Committing build files...");
    await exec("git add .");
    await exec('git commit -m "Deploy to gh-pages"');

    // Step 5: Push the new branch to the remote repository
    console.log(`Pushing ${branchName} to remote...`);
    await exec(`git push origin ${branchName} --force`);

    // Step 6: Switch back to the master branch
    console.log("Switching back to the master branch...");
    await exec("git checkout master");

    console.log(`Deployed to ${branchName} successfully!`);
  } catch (error) {
    console.error("Error:", error);
  }
}

deploy();
