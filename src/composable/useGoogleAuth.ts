

import { ref } from 'vue';
import { useFirebaseAuth } from 'vuefire';
import { signInWithPopup, GoogleAuthProvider, type Auth, OAuthCredential, type User } from 'firebase/auth';


export async function useGoogleAuth (){
    const user = ref<User>();
    const credential = ref<OAuthCredential>();
    const error = ref<string|null>(null);


    const auth = useFirebaseAuth() as Auth
    const provider = new GoogleAuthProvider();

    const signInGoogle = async () => {
        try {
            const result = await signInWithPopup(auth,provider) ;
            credential.value = GoogleAuthProvider.credentialFromResult(result) as OAuthCredential;
            user.value = result.user;
        }
        catch(error:any){
            error.value = error.message;
            credential.value = GoogleAuthProvider.credentialFromError(error) as OAuthCredential;
        }
    }
    await signInGoogle()

    return {
        user, error, credential
    }
}