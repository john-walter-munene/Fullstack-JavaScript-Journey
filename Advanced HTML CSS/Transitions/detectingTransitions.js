el.addEventListener("transitionend", updateTransition, true);
el.addEventListener("transitionrun", signalStart, true);
el.addEventListener("transitionstart", signalStart, true);