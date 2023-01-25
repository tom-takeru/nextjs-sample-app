const handler = (req: any, res: any) => {
  switch (req.method) {
    case 'GET':
      //...
      break;
    case 'POST':
      const { userName }: { userName: string } = req.body;
      if (userName === 'john') {
        res.status(200).json({
          userName: 'john',
          token: 'token1234',
        });
      } else {
        res.status(401).json({
          message: 'unauthorized',
        });
      }
      break;
    case 'PUT':
      //...
      break;
    case 'DELETE':
      //...
      break;
    default:
      res.status(405).end(); // Method not allowed
      break;
  }
};

export default handler;
