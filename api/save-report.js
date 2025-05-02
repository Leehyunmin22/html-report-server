export default function handler(req, res) {
  if (req.method === 'POST') {
    const { html, filename } = req.body;

    // 간단하게 HTML 문자열 저장 처리 (예: 콘솔 출력만)
    console.log("파일 이름:", filename);
    console.log("HTML 내용:", html);

    res.status(200).json({ message: "Success!" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
