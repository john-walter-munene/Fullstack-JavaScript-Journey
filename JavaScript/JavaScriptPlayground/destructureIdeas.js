const resumeSchema = {
  header: {
    name: '',
    generalInformation: {
      mobileOne: '',
      mobileTwo: '',
      email: '',
      telegram: '',
      github: '',
      linkedIn: '',
    },
  },
  careerProfile: '',
  education: {
    school: '',
    schoolStartDate: '',
    schoolFinishDate: '',
    fieldOfStudy: '',
  },
  workExperience: {
    role: '',
    workStartDate: '',
    workFinishDate: '',
    workOverview: '',
    focus: [],
  },
};

function schemerFlattener (resumeSchema) {

    const flattenedResumeData = {
        name: resumeSchema.header.name,
        mobileOne: resumeSchema.header.generalInformation.mobileOne,
        mobileTwo: resumeSchema.header.generalInformation.mobileTwo,
        email: resumeSchema.header.generalInformation.email,
        telegram: resumeSchema.header.generalInformation.telegram,
        github: resumeSchema.header.generalInformation.github,
        linkedIn: resumeSchema.header.generalInformation.linkedIn,
        careerProfile: resumeSchema.careerProfile,
        school: resumeSchema.education.school,
        schoolStartDate: resumeSchema.education.schoolStartDate,
        schoolFinishDate: resumeSchema.education.schoolFinishDate,
        fieldOfStudy: resumeSchema.education.fieldOfStudy,
        role: resumeSchema.workExperience.role,
        workStartDate: resumeSchema.workExperience.workStartDate,
        workFinishDate: resumeSchema.workExperience.workFinishDate,
        workOverview: resumeSchema.workExperience.workOverview,
        focus: resumeSchema.workExperience.focus,
    }

    return flattenedResumeData;
 
}

function schemaNormalizer (flattenedResumeData) {
    return {
        header: {
            name: flattenedResumeData.name,
            generalInformation: {
            mobileOne: flattenedResumeData.mobileOne,
            mobileTwo: flattenedResumeData.mobileTwo,
            email: flattenedResumeData.email,
            telegram: flattenedResumeData.telegram,
            github: flattenedResumeData.github,
            linkedIn: flattenedResumeData.linkedIn,
            },
        },
        careerProfile: flattenedResumeData.careerProfile,
        education: {
            school: flattenedResumeData.school,
            schoolStartDate: flattenedResumeData.schoolStartDate,
            schoolFinishDate: flattenedResumeData.schoolFinishDate,
            fieldOfStudy: flattenedResumeData.fieldOfStudy,
        },
        workExperience: {
            role: flattenedResumeData.role,
            workStartDate: flattenedResumeData.workStartDate,
            workFinishDate: flattenedResumeData.workFinishDate,
            workOverview: flattenedResumeData.workOverview,
            focus: [...flattenedResumeData.focus],
        },
    };
}

console.log(schemerFlattener(resumeSchema));
console.log('');
console.log(schemaNormalizer(schemerFlattener(resumeSchema)));