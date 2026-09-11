# UniBuddy — GitHub Pages upload

This folder contains the complete static UniBuddy website. It does not include the OpenAI Sites hosting configuration.

## Upload to GitHub

1. Open your GitHub repository.
2. Choose **Add file → Upload files**.
3. Upload the files from this folder. Keep `index.html` in the repository root, not inside another folder.
4. Select **Commit changes**.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select the `main` branch and `/ (root)`, then select **Save**.

GitHub will provide a URL similar to:

`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

For the `rss-coder/studentsbiz` repository, the expected address is:

`https://rss-coder.github.io/studentsbiz/`

## Use your own domain

To remove both `chatgpt.site` and `github.io`, purchase or use a domain you own. In **Settings → Pages → Custom domain**, enter the domain and follow GitHub's DNS instructions.

## Admin page

After deployment, open:

`https://YOUR-WEBSITE-ADDRESS/admin.html`

The prototype stores submissions and approvals in the current browser's local storage. It does not include a shared online database or login system.
