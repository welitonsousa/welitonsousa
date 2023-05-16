import { NextApiHandler } from 'next'
import admin from 'firebase-admin';
import formidable, { File } from 'formidable';
import { Firebase } from '../../lib/firebase';

const _saveFile: Function = async (file: File): Promise<string> => {
  await Firebase.instance.init()
  const bucket = admin.storage().bucket(process.env.BUCKET_NAME);

  const format = file.originalFilename?.split('.').reverse()[0]
  const name = `${file.newFilename}.${format}`

  const response = await bucket.upload(file.filepath, { destination: name, public: true, private: false, });
  const picture = response[0].publicUrl();
  return picture;
};

const handler: NextApiHandler = async (req, res) => {

  if (req.method === 'POST') {
    
    const form = new formidable.IncomingForm();
    form.parse(req, async function (_, fields, files) {
      try {
        console.log('fields', fields)
        if (fields.key != process.env.POST_KEY) return res.status(401).end()
        const image = await _saveFile(files.image)
        if (image) return res.json({  message: "Imagem salva com sucesso", url: image })
        else {
          return res.status(500).json({ message: "Não foi possível salvar esta imagem" })
        }
      }
      catch (e) {
        console.log('erro', e)
        return res.status(500).json({ message: "Não foi possível salvar esta imagem" })
      }
    });
  } else {
    return res.status(404).end()
  }
}


export const config = {
  api: { bodyParser: false },
};
export default handler
