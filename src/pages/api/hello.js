// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import nextConnect from "next-connect";

import { sendtoFacebook, upload } from "../../apiconf";
const router = nextConnect({});

export const config = {
  api: {
    bodyParser: false,
  },
};
router.get((req, res) => {
  res.json({ hostname: req.httpVersion });
});
router.post(upload.single("image"), async (req, res) => {
  try {
    const msg = await sendtoFacebook(
      `http://${req.headers.host}/${req.file.path}`
    );
    fs.unlinkSync(req.file.path);

    res.json({ msg });
  } catch (error) {
    res.json({ error: error.toString() });
  }
});

export default router;
