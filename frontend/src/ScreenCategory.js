export const getScreenCategory = () => {
  const aspectRatio = window.innerWidth / window.innerHeight;

  if (aspectRatio >= 16/9) {
    return 'desktop';
  } else if (aspectRatio >= 1) {
    return 'medium';
  } else {
    return 'mobile';
  }
};
