import nextConnect from "next-connect";
import { sendtoFacebook } from "../../apiconf";

const router = nextConnect({});

router.post(async (req, res) => {
  try {
    const { url } = req.body;
    const msg = await sendtoFacebook();

    res.json({ msg });
  } catch (error) {
    res.json({ error: error.toString() });
  }
});

export default router;
