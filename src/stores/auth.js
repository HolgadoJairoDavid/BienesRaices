import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useFirebaseAuth } from "vuefire";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useErrorCodesStore } from "./errorCodes";

export const useAuthStore = defineStore("auth", () => {
  // Sector de los estados globales
  const errorCodes = useErrorCodesStore();
  const auth = useFirebaseAuth();
  const errorMessage = ref("");
  const hasError = computed(() => {
    return errorMessage.value;
  });
  // Sector de los datos persistentes

  // Sector de las funciones

  const login = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        errorMessage.value = errorCodes.errorCodes[error.code];
      });
  };

  return {
    // Exportamos las variables
    hasError,
    errorMessage,
    // Exportamos las funciones

    login,
  };
});
