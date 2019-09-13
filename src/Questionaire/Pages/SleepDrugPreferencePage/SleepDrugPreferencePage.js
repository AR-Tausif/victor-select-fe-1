/* eslint-disable import/order */
import React from "react";
import { Field } from "react-final-form";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  StandardPage,
  DetailedRadioGroup,
  RadioSubmit
} from "../../../_components";
import { getDrugList } from "../../../_constants/sleepSelections";
import { SleepDrugPreferenceDisplay } from "./SleepDrugPreferenceDisplay";

const useStyles = makeStyles(theme => ({
  moreText: {
    marginBottom: theme.spacing(2)
  },
  highlite: {
    fontWeight: 500,
    color: theme.palette.primary.main
  }
}));

const validateSleepDrugPreference = values => {
  const errors = { subscription: {} };
  const s = values.subscription;

  if (!values.subscription.drugId) {
    errors.subscription.drugId = "Please make a selection.";
  }

  return errors;
};

const questionText = "Select Your Product Preference Below";

const SleepDrugPreferencePage = props => {
  const { handleSubmit } = props;

  const classes = useStyles();
  const name = "subscription.drugId";

  const options = getDrugList();

  return (
    <StandardPage questionText={questionText} alignTitles="left" {...props}>
      <Typography variant="body2" gutterBottom>
        Paragraph One of great marketing text.
      </Typography>
      <Typography variant="body2" className={classes.moreText}>
        The pricing shown is for the recommended starting dose for an average,
        healthy person. We offer discounts for ordering in quantity.
      </Typography>
      {options && (
        <Field
          component={DetailedRadioGroup}
          options={options}
          displayComponent={SleepDrugPreferenceDisplay}
          name={name}
          type="div"
        />
      )}
      <RadioSubmit name={name} handleSubmit={handleSubmit} />
    </StandardPage>
  );
};

export { SleepDrugPreferencePage, validateSleepDrugPreference };
