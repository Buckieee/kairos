export const trackEvent = (eventName, eventParams = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
};

export const trackButtonClick = (buttonName, location = 'unknown') => {
    trackEvent('button_click', {
        button_name: buttonName,
        location: location,
    });
};

export const trackFormSubmit = (formName) => {
    trackEvent('form_submit', {
        form_name: formName,
    });
};

export const trackSectionTime = (sectionId, durationSeconds) => {
    trackEvent('section_view_duration', {
        section_id: sectionId,
        duration_seconds: durationSeconds,
    });
};
