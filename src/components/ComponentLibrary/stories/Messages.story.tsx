import React from "react";

import { Box, FileInput, Form, FormField, ComponentLibrary, Heading } from "../../..";

const messageBundle = {
  "form.required": "必填项目",
  "fileInput.browse": "浏览",
};

const customMessages = {
  messages: {
    form: {
      required: "necesario",
    },
    fileInput: {
      browse: "navegar",
    },
  },
};

export const Messages = () => (
  <>
    <ComponentLibrary messages={customMessages}>
      <Heading level={2}> Custom messages </Heading>
      <Box width="medium">
        <Form validate="blur">
          <FormField name="name" label="Name" aria-label="form field" required />
          <FileInput aria-label="file input" />
        </Form>
      </Box>
    </ComponentLibrary>
    <ComponentLibrary
      messages={{
        format: (options) => messageBundle[options.id],
      }}
    >
      <Heading level={2}> Message function</Heading>
      <Box width="medium">
        <Form validate="blur">
          <FormField name="name" label="Name" aria-label="form field" required />
          <FileInput aria-label="file input" />
        </Form>
      </Box>
    </ComponentLibrary>
  </>
);

export default {
  title: "Utilities/ComponentLibrary/Messages",
};
