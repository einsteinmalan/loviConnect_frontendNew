
export default function getPosition() {
    return new Promise((resolve: (pos: any) => void, reject: (err?: any) => void) => {
    if (!navigator.geolocation)
      throw 'Geolocation not supported.';
    else
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })
  };