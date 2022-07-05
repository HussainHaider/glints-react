import * as React from "react";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ExperienceDialog from "../ExperienceDialog/ExperienceDialog";
import PersonalForm from "../PersonalForm/PersonalForm";
import ProfileSkeleton from './skeleton';

import {CompanyLogo} from './styles';
import {ExperienceBlock} from './styles';
import {ExperienceSection} from './styles';
import {ProfilePicture} from './styles';
import {PersonalInfoSection} from './styles';

import * as api from './api';


function CandidateProfile() {
    const [isLoading, setLoading] = React.useState(true);
    const [personalInfoEdit, setPersonalInfoEdit] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [modalData, setModalData] = React.useState({});
    const [candidateData, setCandidateData] = React.useState({
        experience: []
    });

    React.useEffect(()=>{
        api.getCandidate(1).then((response) => {
            let data = {
                ...response.data.data,
            }
            data.experience = data.experience.map((item)=>{
                return {
                    ...item,
                    start_date: item.start_date.split('T')[0],
                    end_date: item.end_date.split('T')[0],
                }
            })
            setCandidateData(data);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, []);

    function setDataInModal(experience) {
        setIsModalOpen(true);
        setModalData({
            id: experience?.id || '',
            jobTitle: experience?.job_title || '',
            company: experience?.company || '',
            jobDescription: experience?.job_description || '',
            startDate: experience?.start_date || '',
            endDate: experience?.end_date || '',
        });
    }

    function updateCandidateExperience(values, type) {
        let newExperience = [...candidateData.experience];
        if(type=='update') {
            let index = newExperience.findIndex((item)=>item.id==values.id);
            newExperience[index] = {
                job_title: values.jobTitle,
                company: values.company,
                job_description: values.jobDescription,
                start_date: values.startDate,
                end_date: values.endDate
            }
        } else {
            newExperience.push({
                id: values.id,
                job_title: values.jobTitle,
                company: values.company,
                job_description: values.jobDescription,
                start_date: values.startDate,
                end_date: values.endDate
            });
        }
        setCandidateData({
            ...candidateData,
            experience: newExperience
        });
    }

    return (<>
    {
        isLoading ? (<ProfileSkeleton />) : (<>
            <PersonalInfoSection>
                <Typography variant="h5" component='strong'>Personal Information</Typography>
                <IconButton aria-label="edit" color="primary" onClick={()=>{setPersonalInfoEdit(!personalInfoEdit)}}>
                    {personalInfoEdit ? null : <EditIcon />}
                </IconButton>
                <div>
                    {
                        personalInfoEdit ? (<PersonalForm
                            closehandler={()=>setPersonalInfoEdit(false)}
                            updateInfo={(data)=>{
                                let newCandidateData = {...candidateData};
                                setCandidateData({
                                    ...newCandidateData,
                                    ...data
                                });
                            }}
                            data={{
                                name: candidateData.name,
                                age: candidateData.age
                            }}
                        />) : (<>
                            <div>
                                <ProfilePicture alt="Hussain Haider" src="/static/images/avatar/1.jpg" />
                            </div>
                            <div>
                                <Typography variant="h6">Name</Typography>
                                <Typography variant="subtitle1">{candidateData.name}</Typography>
                        
                                <Typography variant="h6">Age</Typography>
                                <Typography variant="subtitle1">{candidateData.age}</Typography>
                            </div>
                        </>)
                    }
                </div>
            </PersonalInfoSection>
            <ExperienceSection>
                <div>
                    <Typography variant="h5" component='strong'>Work Experiences</Typography>
                    <IconButton aria-label="edit" color="primary" onClick={()=>{setDataInModal()}}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                {
                    candidateData.experience.map((experience) => {
                        return (<ExperienceBlock key={experience.id}>
                            <div>
                                <Typography variant="h6">{experience.job_title}</Typography>
                                <IconButton aria-label="edit" color="primary" onClick={()=>{setDataInModal(experience)}}>
                                    <EditIcon />
                                </IconButton>
                            </div>
                            <div>
                                <div>
                                    <CompanyLogo alt={experience.company} src="/static/images/avatar/1.jpg" />
                                    <Typography variant="subtitle1">{experience.company}</Typography>
                                </div>
                                <Typography variant="subtitle2">{experience.start_date} - {experience.end_date}</Typography>
                            </div>
                            <Typography variant="body2">
                                {experience.job_description}
                            </Typography>
                        </ExperienceBlock>);
                    })
                }
            </ExperienceSection>
            <ExperienceDialog
                open={isModalOpen}
                closehandler={()=>{setIsModalOpen(false)}}
                data={modalData}
                updateExperience={updateCandidateExperience}
                candidateId={'1'}
            />
        </>)
    }
    </>);
}

export default CandidateProfile;