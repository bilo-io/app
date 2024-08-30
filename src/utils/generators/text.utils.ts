

// Use a regular expression to extract the JSON code sample
const regex = /```json\n([\s\S]+?)```/g;

export const extractJSON = (responseText: string): unknown[] => {
  const sections: unknown[] = [];
  let match;

  while ((match = regex.exec(responseText)) !== null) {
    if (match && match[1]) {
      const jsonString = match[1];

      try {
        const jsonData = JSON.parse(jsonString);
        sections.push(jsonData);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error parsing JSON:', error);
      }
    }
  }

  return sections;
};

export const sampleString = 'Certainly! Here\'s a response with 3 code blocks, each containing a different number of `IPerson` entries:\n\n**Code Block 1:**\n\n```json\n[\n    {\n        "name": "John Doe",\n        "age": 30,\n        "gender": "male",\n        "emailAddress": "johndoe@example.com",\n        "occupation": "software engineer"\n    },\n    {\n        "name": "Jane Smith",\n        "age": 28,\n        "gender": "female",\n        "emailAddress": "janesmith@example.com",\n        "occupation": "data analyst"\n    }\n]\n```\n\n**Code Block 2:**\n\n```json\n[\n    {\n        "name": "Alex Johnson",\n        "age": 35,\n        "gender": "non-binary",\n        "emailAddress": "alexjohnson@example.com",\n        "occupation": "product manager"\n    },\n    {\n        "name": "Emily Williams",\n        "age": 42,\n        "gender": "female",\n        "emailAddress": "emilywilliams@example.com",\n        "occupation": "teacher"\n    },\n    {\n        "name": "Michael Brown",\n        "age": 45,\n        "gender": "male",\n        "emailAddress": "michaelbrown@example.com",\n        "occupation": "doctor"\n    }\n]\n```\n\n**Code Block 3:**\n\n```json\n[\n    {\n        "name": "Sarah Turner",\n        "age": 38,\n        "gender": "female",\n        "emailAddress": "sarahturner@example.com",\n        "occupation": "marketing manager"\n    }\n]\n```\n\nIn each code block, you\'ll find different examples of `IPerson` entries. Feel free to modify or use these examples as needed! Let me know if there\'s anything else I can assist you with.';

/**
 *
 * In this example, the regular expression /```json\n([\s\S]+?)```/ is used to match the JSON code block enclosed in triple backticks with the json language tag. The captured group ([\s\S]+?) captures the content inside the backticks, including newlines and spaces.
 *
 * If the regular expression finds a match, the captured JSON content is extracted from match[1]. It is then attempted to be parsed using JSON.parse(), and any potential parsing errors are handled.
 *
 * Please note that parsing JSON using regular expressions might not be the most robust approach, especially if the input format changes. If you have control over the format of the input response, consider using a more structured approach, such as sending the JSON code sample in a separate key or enclosing it in a known structure that is easier to extract.
*/