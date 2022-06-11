const getResumeText = state=>state.resume.values.text;
const getRaitingStars = state=> state.resume.values['simple-controlled'];

const resumeSelectors={
    getResumeText,
    getRaitingStars
}
export default resumeSelectors;