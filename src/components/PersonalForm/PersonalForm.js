import * as React from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import FileBase64 from 'react-file-base64';

import {Form} from '../ExperienceDialog/styles';
import {updateCandidate} from '../CandidateProfile/api';

import { useFormik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Name is required'),
    age: yup
        .string('Enter your age')
        .required('Age is required'),
  });

function PersonalForm(props) {
    const {data, closehandler, updateInfo} = props
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            age: '',
            profilePicture: '',
            ...data,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            updateCandidate(1, values).then((response) => {
                closehandler();
                let data = {...values};
                delete data.profilePicture;
                updateInfo(data);
            }).catch((err) => {
                console.log(err);
            });
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <FileBase64
                multiple={ true }
                onDone={(files)=>{
                    formik.setFieldValue("profilePicture", files[0]['base64'])
                }}
            />
            <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
                fullWidth
                id="age"
                name="age"
                label="Age"
                value={formik.values.age}
                onChange={formik.handleChange}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
            />
            <Button onClick={closehandler}>Canel</Button>
            <Button type="submit">Save</Button>
        </Form>
    );
}

export default PersonalForm;