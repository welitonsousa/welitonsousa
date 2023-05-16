import { initializeApp } from "firebase-admin/app";
import admin from "firebase-admin";



class Firebase {
  private static  _instance: Firebase

  private count = 0

  async init() {
    if  (this.count == 0 && !admin.apps.length) {
      const serviceAccount = JSON.parse(process.env.FIREBASE || '');
      await initializeApp({credential: admin.credential.cert(serviceAccount)});
      this.count++
    }
  }

  static get instance() {
    if (this._instance) return this._instance
    this._instance = new Firebase()
    return this._instance
  }

}

export {Firebase}



// const serviceAccount = JSON.parse(process.env.FIREBASE || '');

// export const initFirebase = async  () => {
//   if(!admin.apps.length) {
//     await initializeApp({credential: admin.credential.cert(serviceAccount)});
//     console.log('=======firebase initilized')
//   }
// }
