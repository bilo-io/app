import {
  // IDocument,
  // ILocation,
  IControls,
  // ICharacter,
  // IDialogue,
  // IGraph,
} from '@vision/core';


export type ISupportedExportType =
'character' |
'controls' |
'creature' |
'dialogue' |
'document' |
'graph' |
'location' |
'object' |
'project' |
'segment' |
'transport'

export const shapeOfILocation: any = {
  blocks: 'IEditorJSBlock[]?',
  description: 'string?',
  id: 'string?',
  images: 'string[]?',
  lore: 'string?',
  name: 'string',
  plot: 'string?',
};

export const shapeOfICharacter: any = {
  alias: 'string?',
  background: {
    education: 'string?',
    language: 'string?',
    nationality: 'string?',
    occupation: 'string?',
  },
  demographics: {
    age: 'string | number',
    gender: 'ICharacterGender',
    sexuality: 'ICharacterSexuality',
  },
  galleryId: 'string?',
  id: 'string',
  identity: {
    ethnicity: 'string?',
    genderIdentity: 'string?',
    pronouns: 'string?',
    religion: 'string?',
    sexualOrientation: 'string?',
  },
  images: 'string[]?',
  name: {
    firstName: 'string?',
    lastName: 'string?',
    nickName: 'string?',
  },
  projectId: 'string',
  story: 'any | any[]?',
  traits: {
    personality: 'ICharacterPersonality[]',
    skills: 'ICharacterSkills[]',
    specialAbilities: 'ICharacterAbilities[]',
  },
  type: 'IMediaType?',
};

export const shapeOfIControls: IControls = {
  data: {
    BTN_FACE_DOWN: 'string | { name: string, description: string }?',
    BTN_FACE_LEFT: 'string | { name: string, description: string }?',
    BTN_FACE_RIGHT: 'string | { name: string, description: string }?',
    BTN_FACE_UP: 'string | { name: string, description: string }?',
    DPAD_DOWN: 'string | { name: string, description: string }?',
    DPAD_LEFT: 'string | { name: string, description: string }?',
    DPAD_RIGHT: 'string | { name: string, description: string }?',
    DPAD_UP: 'string | { name: string, description: string }?',
    SHOULDER_LEFT: 'string | { name: string, description: string }?',
    SHOULDER_RIGHT: 'string | { name: string, description: string }?',
    STICK_LEFT: 'string | { name: string, description: string }?',
    STICK_LEFT_PRESS: 'string | { name: string, description: string }?',
    STICK_RIGHT: 'string | { name: string, description: string }?',
    STICK_RIGHT_PRESS: 'string | { name: string, description: string }?',
    TRIGGER_LEFT: 'string | { name: string, description: string }?',
    TRIGGER_RIGHT: 'string | { name: string, description: string }?',
  },
  id: 'string?',
  name: 'string',
  projectId: 'projectId',
};

export const shapeOfIDialogue: any = {
  actors: [{
    id: 'string',
    image: 'string | any',
    name: 'string',
    voice: 'string?',
  }],
  data: [{
    action: 'string?',
    actorId: 'string',
    context: 'string?',
    delay: 'number?',
    emotion: 'IDialogueEmotion?',
    gesture: 'IDialogueGesture?',
    intent: 'IDialogueIntent?',
    language: 'string?',
    subtext: 'string?',
    text: 'string',
    tone: 'IDialogueTone?',
  }],
  galleryId: 'string | number?',
  id: 'string',
  name: 'string?',
  projectId: 'string | number',
  type: 'IMediaType',
};

export const shapeOfIGraph: any = {
  data: {
    edges: [{
      id: 'string',
      label: 'string',
      source: 'string',
      target: 'string',
    }],
    nodes: [{
      data: {
        label: 'string',
      },
      height: 'number',
      id: 'string',
      type: 'string',
      width: 'number',
    }],
  },
  id: 'string?',
  name: 'string?',
};

export const shapeOfIDocument: any = {
  blocks: 'IEditorJSBlock[]?',
  collectionId: 'string | number?',
  galleryId: 'string | number?',
  id: 'string | number',
  name: 'string',
  projectId: 'string | number',
  sectionCount: 'number?',
  templateId: 'string | number?',
  userPrompt: 'string?',
};