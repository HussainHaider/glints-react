import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import {Form} from './styles';

import { useFormik } from 'formik';
import * as yup from 'yup';
import * as api from './api';

import PropTypes from 'prop-types';


const validationSchema = yup.object({
    jobTitle: yup
        .string('Enter your Job Title')
        .required('Job Title is required'),
    company: yup
        .string('Enter your Company')
        .required('Company is required'),
    startDate: yup
        .date()
        .required('Start Date is required'),
    endDate: yup
        .date()
        .required('Start Date is required')
        .min(yup.ref('startDate'),
            "End date can't be before Start date"),
});

function ExperienceDialog(props) {
    const {
        isNew,
        open,
        closehandler,
        data,
        candidateId,
    } = props;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            jobTitle: '',
            company: '',
            jobDescription: '',
            startDate: '',
            endDate: '',
            ...data,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if(!data.id) {
                api.addExperience(candidateId, values).then((response) => {
                    closehandler();
                }).catch((err) => {
                    console.log(err);
                });
            } else {
                api.updateExperience(1, values).then((response) => {
                    closehandler();
                }).catch((err) => {
                    console.log(err);
                });
            }

        },
    });

    return (<Dialog
            open={open}
            onClose={closehandler}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {isNew ? 'Add New':'Edit'} Experience
            </DialogTitle>
            <DialogContent>
                <Form onSubmit={formik.handleSubmit} id="experienceForm">
                    <TextField
                        fullWidth
                        id="jobTitle"
                        name="jobTitle"
                        label="Job Title"
                        value={formik.values.jobTitle}
                        onChange={formik.handleChange}
                        error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
                        helperText={formik.touched.jobTitle && formik.errors.jobTitle}
                    />
                    <TextField
                        fullWidth
                        id="company"
                        name="company"
                        label="Company"
                        value={formik.values.company}
                        onChange={formik.handleChange}
                        error={formik.touched.company && Boolean(formik.errors.company)}
                        helperText={formik.touched.company && formik.errors.company}
                    />
                    <TextField
                        fullWidth
                        id="jobDescription"
                        name="jobDescription"
                        multiline
                        rows={4}
                        label="Job Description"
                        value={formik.values.jobDescription}
                        onChange={formik.handleChange}
                        error={formik.touched.jobDescription && Boolean(formik.errors.jobDescription)}
                        helperText={formik.touched.jobDescription && formik.errors.jobDescription}
                    />
                    <TextField
                        fullWidth
                        id="startDate"
                        name="startDate"
                        label="Start Date"
                        type="date"
                        value={formik.values.startDate}
                        onChange={formik.handleChange}
                        error={formik.touched.startDate && Boolean(formik.errors.startDate)}
                        helperText={formik.touched.startDate && formik.errors.startDate}
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        fullWidth
                        id="endDate"
                        name="endDate"
                        label="End Date"
                        type="date"
                        value={formik.values.endDate}
                        onChange={formik.handleChange}
                        error={formik.touched.endDate && Boolean(formik.errors.endDate)}
                        helperText={formik.touched.endDate && formik.errors.endDate}
                        InputLabelProps={{shrink: true}}
                    />
                </Form>
            </DialogContent>
            <DialogActions>
                <Button onClick={closehandler}>Canel</Button>
                <Button type="submit" form="experienceForm">Save</Button>
            </DialogActions>
        </Dialog>);
}

ExperienceDialog.propTypes = {
    isNew: PropTypes.bool,
    open: PropTypes.bool,
    closehandler: PropTypes.func,
    candidateId: PropTypes.string
};

export default ExperienceDialog;
