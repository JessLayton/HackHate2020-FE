import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MonthPicker from "./MonthPicker";
import Checkboxes from "./Checkboxes";
import BigTextBox from "./BigTextBox";
import NumberFieldsGroup from "./NumberFieldsGroup";
import NumberField from "./NumberField";

import ethnicities from "../../resources/ethnicities";
import referralsAndEnquiries from "../../resources/referralsAndEnquiries";
import supportTypes from "../../resources/supportTypes";
import gendersAndSexualities from "../../resources/gendersAndSexualities";
import AutocompleteField from "./AutocompleteField";
import caseAttributes from "../../resources/caseAttributes";

const Form = () => {
  return (
    <form>
      <fieldset>
        <p>1. Time Period</p>
        <MonthPicker />
        <p>2. Name of DDPO</p>
        <AutocompleteField label="DDPO" />
        <p>3. Boroughs Covered (Tick all that apply)</p>
        <Checkboxes />
        <p>
          4. Details of referrals / enquiries during this quarter - Please
          provide a number
        </p>
        <NumberFieldsGroup inputs={referralsAndEnquiries} />
      </fieldset>
      <fieldset>
        <p>
          5. For DDPOs who are not collecting detailed data, please provide a
          short paragraph (up to 300 words) highlighting key issues, challenges
          / positive outcomes.
        </p>
        <BigTextBox label="Key issues/outcomes (300 words max)" />
      </fieldset>
      <fieldset>
        <p>6. Type of support provided - Please provide a number</p>
        <NumberFieldsGroup inputs={supportTypes} />
        <p>
          7. Cases not reported to Police - Please state main reasons why, with
          number of cases
        </p>
        <NumberField label="" />
        <TextField label="" variant="filled" />
      </fieldset>
      <fieldset>
        <p>8. Age of persons being supported - Please provide a number</p>
        <NumberField label="Under 17" />
        <NumberField label="18 - 65" />
        <NumberField label="Over 65" />
        <p>9. Ethnicity of persons being supported</p>
        <NumberFieldsGroup inputs={ethnicities} />
        <p>10. Gender / Sexual orientation of persons supported, by %</p>
        <NumberFieldsGroup inputs={gendersAndSexualities} />
        <p>
          11. Of the cases being dealt with, how many were related to the below
          - Please provide a number
        </p>
        <NumberFieldsGroup inputs={caseAttributes} />
      </fieldset>
      <fieldset>
        <p>
          12. Brief case study highlighting emotional impact of Disability Hate
          Crime and/or challenges / positives dealing with Police / CPS
        </p>
        <BigTextBox label="Case Study (300 words max)" />
        <p>
          13. Brief case study highlighting achieving positive outcome without a
          report to police
        </p>
        <BigTextBox label="Case Study (300 words max)" />
      </fieldset>
      <Button variant="contained" color="primary" size="large">
        Submit
      </Button>
    </form>
  );
};

export default Form;
