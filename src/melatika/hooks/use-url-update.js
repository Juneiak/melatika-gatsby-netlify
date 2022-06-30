import React from "react";

export default function useUrlUpdate() {
  const changeUrl = (url) => {
    if (typeof window !== `undefined` && typeof url !== `undefined`) {
      window.history.pushState({}, '', url);
    }
  }
  return changeUrl
}