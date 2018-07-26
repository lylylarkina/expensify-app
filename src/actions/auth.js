import { 
    firebase, 
    googleAuthProvider, 
    facebookAuthProvider, 
    twitterAuthProvider,
    githubAuthProvider 
} from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogin = (authType) => {
    const provider = getAuthProvider(authType);
       
    return () => {
        return firebase.auth().signInWithPopup(provider);
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

const getAuthProvider = (authType) => {
    switch (authType) {
        case 'google':
            return googleAuthProvider;
        case 'facebook':
            return facebookAuthProvider;
        case 'twitter':
            return twitterAuthProvider;
        case 'github':
            return githubAuthProvider;
    };
}
export const startLoginFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
};