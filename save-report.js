export default async function handler(req, res) {
  const body = req.body;
  const { html, filename } = JSON.parse(body);

  return res.status(200).json({
    success: true,
    url: `https://YOUR_PROJECT_NAME.vercel.app/view/${filename}.html`,
    htmlContent: html
  });
}
