import firebase from "firebase/compat";
import DocumentReference = firebase.firestore.DocumentReference;
import Timestamp = firebase.firestore.Timestamp;
import GeoPoint = firebase.firestore.GeoPoint;

export function isTimestamp(x: unknown): x is Timestamp {
  return typeof x === "object" && x !== null && "toDate" in x;
}

export function isGeoPoint(x: unknown): x is GeoPoint {
  return (
    typeof x === "object" && x !== null && x.constructor.name === "GeoPoint"
  );
}

export function isDocumentReference(x: unknown): x is DocumentReference {
  return (
    typeof x === "object" &&
    x !== null &&
    x.constructor.name === "DocumentReference"
  );
}

export function isObject(x: unknown): x is Record<string, unknown> {
  return typeof x === "object";
}
