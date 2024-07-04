import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
} from '@mui/material';

const ReferralForm = ({ open, onClose, onSubmit }) => {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmitForm = (data) => {
        onSubmit(data);
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Refer a Friend</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmitForm)} noValidate>
                    {/* Referrer Name */}
                    <Controller
                        name="referrerName"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Referrer Name is required' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Your Name"
                                fullWidth
                                margin="dense"
                                error={!!errors.referrerName}
                                helperText={errors.referrerName?.message}
                            />
                        )}
                    />

                    {/* Referrer Email */}
                    <Controller
                        name="referrerEmail"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Your Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Enter a valid email address',
                            },
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Your Email"
                                fullWidth
                                margin="dense"
                                error={!!errors.referrerEmail}
                                helperText={errors.referrerEmail?.message}
                            />
                        )}
                    />

                    {/* Referee Name */}
                    <Controller
                        name="refereeName"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Friend\'s Name is required' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Friend's Name"
                                fullWidth
                                margin="dense"
                                error={!!errors.refereeName}
                                helperText={errors.refereeName?.message}
                            />
                        )}
                    />

                    {/* Referee Email */}
                    <Controller
                        name="refereeEmail"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Friend\'s Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Enter a valid email address',
                            },
                        }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Friend's Email"
                                fullWidth
                                margin="dense"
                                error={!!errors.refereeEmail}
                                helperText={errors.refereeEmail?.message}
                            />
                        )}
                    />

                    {/* Course Name */}
                    <Controller
                        name="course"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Course Name is required' }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Course Name"
                                fullWidth
                                margin="dense"
                                error={!!errors.course}
                                helperText={errors.course?.message}
                            />
                        )}
                    />

                    <DialogActions>
                        <Button onClick={onClose} color="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ReferralForm;
