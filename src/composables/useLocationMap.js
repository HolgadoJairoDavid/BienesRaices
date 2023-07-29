import { ref } from "vue";

export default function useLocationMap() {
  const zoom = ref(15);
  const center = ref([25.767424, -80.192053]);

  const pin = (event) => {
    const marker = event.target.getLatLng();
    center.value = [marker.lat, marker.lng];
  };
  return {
    zoom,
    center,
    pin,
  };
}
