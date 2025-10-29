const currentUrl = window.location.pathname;

if (currentUrl.includes('/leaderboard')) {
    console.log('Extension disabled on leaderboard page.');
} else {
    const assessmentElement = document.querySelector('.lab-assessment__tab.js-open-lab-assessment-panel');
    const leaderboardElement = document.querySelector('ql-leaderboard-container');
    const assessmentPanel = document.querySelector('.lab-assessment__panel.js-lab-assessment-panel');
    const accountSectionScroll = document.querySelector('.control-panel-section');
    const mainWrapper = document.querySelector('body.games-labs-show .l-main-wrapper');

    let showingLeaderboard = false;

    function updateUI(showingLeaderboard) {
        if (showingLeaderboard) {
            if (leaderboardElement) leaderboardElement.style.display = 'block';
            if (assessmentPanel) assessmentPanel.style.display = 'none';
            if (assessmentElement) assessmentElement.style.display = 'none';
            if (mainWrapper) mainWrapper.style.paddingRight = '64px';
        } else {
            if (leaderboardElement) leaderboardElement.style.display = 'none';
            if (assessmentPanel) assessmentPanel.style.display = 'block';
            if (assessmentElement) assessmentElement.style.display = 'block';
            if (mainWrapper) mainWrapper.style.paddingRight = '0px';
        }
    }
    function createToggleUI() {
        const toggleOnSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="white">
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm400-120q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
        </svg>`;

        const toggleOffSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="white">
            <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
        </svg>`;

        let showingLeaderboard = true;

        const toggleContainer = document.createElement('div');
        Object.assign(toggleContainer.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '1000',
            backgroundColor: '#f2ff00ff',
            padding: '10px',
            borderRadius: '50%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '56px',
            height: '56px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        });

        const iconContainer = document.createElement('div');
        iconContainer.innerHTML = toggleOffSVG;
        iconContainer.title = 'Show Assessment';
        iconContainer.style.pointerEvents = 'none';

        toggleContainer.addEventListener('mouseenter', () => {
            toggleContainer.style.transform = 'scale(1.15)';
            toggleContainer.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
        });

        toggleContainer.addEventListener('mouseleave', () => {
            toggleContainer.style.transform = 'scale(1)';
            toggleContainer.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        });

        toggleContainer.addEventListener('click', () => {
            showingLeaderboard = !showingLeaderboard;
            iconContainer.innerHTML = showingLeaderboard ? toggleOffSVG : toggleOnSVG;
            iconContainer.title = showingLeaderboard ? 'Show Assessment' : 'Show Leaderboard';
            updateUI(showingLeaderboard);
        });

        toggleContainer.appendChild(iconContainer);
        document.body.appendChild(toggleContainer);
    }

    updateUI(showingLeaderboard);

    if (leaderboardElement && assessmentPanel) {
        createToggleUI();
        console.log('Extension enabled Succesfully!');
    }
}
