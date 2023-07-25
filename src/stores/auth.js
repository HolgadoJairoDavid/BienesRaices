import { defineStore } from "pinia";
import { ref, computed, onMounted } from "vue";
import { useFirebaseAuth } from "vuefire";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useErrorCodesStore } from "./errorCodes";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  // Sector de los estados globales
  const errorCodes = useErrorCodesStore();
  const auth = useFirebaseAuth();
  const authUser = ref(null);
  const errorMessage = ref("");
  const hasError = computed(() => {
    return errorMessage.value;
  });

  const isAuth = computed(() => {
    return authUser.value;
  });

  const router = useRouter();
  // Sector de los datos persistentes

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        authUser.value = user;
      }
    });
  });

  // Sector de las funciones

  const login = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        authUser.value = user;
        router.push({ name: 'admin-propiedades' });
        
        
      })
      .catch((error) => {
        errorMessage.value = errorCodes.errorCodes[error.code];
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        authUser.value = null;
        router.push({ name: "login" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    // Exportamos las variables
    hasError,
    errorMessage,
    isAuth,
    // Exportamos las funciones

    login,
    logOut,
  };
});
